#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dataScriptsFromIndex, datasetScriptForKey } from './script-sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function projectPath(...segments) {
  return path.join(rootDir, ...segments);
}

function relativeProjectPath(...segments) {
  return path.join(...segments).split(path.sep).join('/');
}

function pngFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.png$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function fileHash(relativePath) {
  return createHash('sha256').update(readFileSync(projectPath(relativePath))).digest('hex');
}

function normalizeDatasetKey(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function datasetKeyFromFileName(fileName) {
  const stem = path.basename(fileName, path.extname(fileName));
  const cleaned = stem.replace(/^page[-_\s]*\d+[-_\s]*/i, '').replace(/[-_\s]*income[-_\s]*statement$/i, '');
  return normalizeDatasetKey(cleaned) || normalizeDatasetKey(stem);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function loadRegisteredDatasetScripts() {
  const indexPath = projectPath('index.html');
  if (!existsSync(indexPath)) return new Set();
  return new Set(dataScriptsFromIndex(readFileSync(indexPath, 'utf8')));
}

function loadIncomeStatementSource() {
  const sourcePath = projectPath('data', 'income-statements.js');
  return existsSync(sourcePath) ? readFileSync(sourcePath, 'utf8') : '';
}

function datasetStatus(key, registeredScripts, incomeStatementSource) {
  const processedImage = relativeProjectPath('input', 'processed', `${key}.png`);
  const datasetScript = datasetScriptForKey(key);
  const ssotKeyRe = new RegExp(`\\bkey\\s*:\\s*['"]${escapeRegex(key)}['"]`);
  const ssotImageRe = new RegExp(
    `\\bsourceImage\\s*:\\s*['"]input/processed/${escapeRegex(key)}\\.png['"]`
  );

  return {
    processedImage: existsSync(projectPath(processedImage)),
    datasetScript: existsSync(projectPath(datasetScript)),
    indexRegistration: registeredScripts.has(datasetScript),
    ssotRecord: ssotKeyRe.test(incomeStatementSource) || ssotImageRe.test(incomeStatementSource),
  };
}

function statusText(status) {
  return [
    `processed=${status.processedImage ? 'yes' : 'no'}`,
    `dataset=${status.datasetScript ? 'yes' : 'no'}`,
    `index=${status.indexRegistration ? 'yes' : 'no'}`,
    `ssot=${status.ssotRecord ? 'yes' : 'no'}`,
  ].join(', ');
}

function hasExistingArtifact(status) {
  return status.processedImage || status.datasetScript || status.indexRegistration || status.ssotRecord;
}

function buildProcessedIndex() {
  const byHash = new Map();
  for (const fileName of pngFiles(projectPath('input', 'processed'))) {
    const relativePath = relativeProjectPath('input', 'processed', fileName);
    const hash = fileHash(relativePath);
    const key = datasetKeyFromFileName(fileName);
    const matches = byHash.get(hash) || [];
    matches.push({ key, relativePath });
    byHash.set(hash, matches);
  }
  return byHash;
}

function main() {
  const pendingFiles = pngFiles(projectPath('input', 'pending'));
  if (!pendingFiles.length) {
    console.log('Pending check passed: no PNG files in input/pending/.');
    return;
  }

  const registeredScripts = loadRegisteredDatasetScripts();
  const incomeStatementSource = loadIncomeStatementSource();
  const processedByHash = buildProcessedIndex();
  const blocked = [];
  const fresh = [];

  for (const fileName of pendingFiles) {
    const pendingPath = relativeProjectPath('input', 'pending', fileName);
    const pendingHash = fileHash(pendingPath);
    const exactMatches = processedByHash.get(pendingHash) || [];
    const candidateKey = datasetKeyFromFileName(fileName);
    const candidateStatus = datasetStatus(candidateKey, registeredScripts, incomeStatementSource);

    if (exactMatches.length) {
      blocked.push({
        type: 'already-processed',
        pendingPath,
        matches: exactMatches.map((match) => ({
          ...match,
          status: datasetStatus(match.key, registeredScripts, incomeStatementSource),
        })),
      });
      continue;
    }

    if (hasExistingArtifact(candidateStatus)) {
      blocked.push({
        type: 'key-collision',
        pendingPath,
        key: candidateKey,
        status: candidateStatus,
      });
      continue;
    }

    fresh.push({ pendingPath, key: candidateKey || '<manual-key-required>' });
  }

  if (blocked.length) {
    console.error('Pending check stopped the workflow before processing:');
    for (const item of blocked) {
      if (item.type === 'already-processed') {
        console.error(`- ${item.pendingPath} matches existing processed image(s):`);
        for (const match of item.matches) {
          console.error(`  - ${match.relativePath} (${statusText(match.status)})`);
        }
      } else {
        console.error(
          `- ${item.pendingPath} maps to existing dataset key "${item.key}" with different PNG content (${statusText(
            item.status
          )})`
        );
      }
    }
    console.error('Do not move, overwrite, or update dataset files for these pending image(s).');
    process.exit(1);
  }

  console.log(`Pending check passed: ${fresh.length} new PNG file(s) ready for processing.`);
  for (const item of fresh) console.log(`- ${item.pendingPath} -> candidate key: ${item.key}`);
}

main();
