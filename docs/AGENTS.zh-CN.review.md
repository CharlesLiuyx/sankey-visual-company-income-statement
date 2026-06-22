# AGENTS.md 中文审阅稿

本文件是根目录 `AGENTS.md` 的中文审阅稿，用于迭代讨论。实际生效的 agent 指令仍以英文版 `AGENTS.md` 为准。

## 目标

本项目将损益表参考图片转换为可复用的 Sankey 数据集和可复用的 icon/vector 资产。当 `input/pending/` 中出现新的源 PNG 时，需要将它们处理成稳定的数据集，在需要时提取并验证 icon reference 资产，并自动运行 d3-sankey 保真度循环。

## 输入工作流

1. 检查 `input/pending/`，忽略 `.gitkeep`。
2. 在移动图片或更新数据之前，先检查每个待处理 PNG 是否已经处理过：
   - 运行 `pnpm check:pending`，或手动按内容和候选 dataset key 对比
     `input/processed/`。
   - 如果发现 `input/processed/` 中已有完全相同的图片，或候选 key 已经存在，
     则把它视为停止条件。不要对这张待处理图片执行移动、覆盖、创建、更新、
     裁切、矢量化或验证等后续步骤，只报告重复或冲突。
   - 如果最终稳定 dataset key 和脚本候选 key 不同，继续前还要用最终 key
     检查 `input/processed/`、`data/datasets/`、`data/income-statements.js`
     和 `index.html`。
3. 为每个新的待处理 PNG 选择稳定的数据集 key：
   - 使用小写 kebab-case。
   - 包含公司和期间，例如 `nvidia-q4-fy26`。
4. 将持久源图片移动到：
   - `input/processed/<dataset-key>.png`
5. 创建或更新：
   - `data/datasets/<dataset-key>.js`
   - `data/income-statements.js`
   - 如果是新公司，更新 `data/company-metadata.js`
   - 在 `index.html` 中注册数据集脚本
   - 为 `window.SANKEY_I18N.languageCodes` 中列出的每个非默认语言更新
     dataset、SSOT 和公司 metadata 的 i18n overlay
6. 如果源图中有公司 icon 或公司内部 business/segment icon，需要先运行 spec-driven icon 提取流程，然后再矢量化或渲染它们：
   - 创建或更新 `input/icon-crop-specs/<dataset-key>.json`。
   - 使用 `scripts/extract_icon_crops.py` 将通过验证的 reference crop 写入
     `data/assets/icon-references/<company>/crops/`。
   - crop 脚本默认会移除纯色 crop 背景像素并写出透明 PNG。只有当某个 crop
     需要不同容差、移除所有匹配像素或输出不透明图片时，才调整 spec 中的
     `backgroundRemoval`。
   - 将 validation sheet 写入
     `data/assets/icon-references/<company>/validation-sheets/`。
   - 在公司资产目录中保留 `crop-report.json` 和 `model-validation.md`。
   - 除非用户明确缩小范围，否则要提取源图中所有有语义的 company 和
     business/segment icon cluster，不要只提取一个示例业务簇。
   - 排除发布方水印、创作者/账号品牌、网站 URL、社交徽标、
     "how they make money" 标识、署名块，以及没有独立业务 icon 的 `Others`
     等 segment。
   矢量化前验证每个 crop：
   - icon 的主体结构完整包含在 crop 内。
   - 主体结构在 crop 中视觉居中。
   - 没有包含无关文字、图表标记、连接线片段、水印或相邻 icon 的部分。
   反复重新裁切，直到这些检查通过。`data/assets/icon-references/<company>/crops/`
   下的文件只是 reference/conversion 资产，不得直接在 d3 runtime 输出中引用。
   当明确使用图片嵌入模式时，在 crop spec 中设置 `runtimeOutputDir`，让已验收的
   crop 以压缩 runtime 副本写入 `data/assets/raster-annotations/<company>/`。
7. 在为新公司编写第一个数据集之前，先收集公司元数据（描述、板块、行业、成立日期、总部、财年截止日、网站、股票代码/交易所、可公开核验时的市值及其日期/来源，以及来源 URL），并添加到 `data/company-metadata.js`。
   同时为每个非默认支持语言添加本地化公司档案字段，至少包含 display name
   （当不同于默认名称时）、板块、行业、总部、财年截止日和描述。
8. 将 `meta.referenceImage` 设置为已处理 PNG，并记录准确的源图片尺寸。
9. 处理完成后，保持 `input/pending/` 为空，只保留 `.gitkeep`。

## 数据集编写

优先沿用项目中已有模式：

- 对普通公司输入，使用 `window.SankeyEngine.fromIncomeStatement(...)`。
- 当像素或布局保真度重要时，使用显式的低层级 `nodes`、`links`、`layout.nodes` 和 `layout.labels`。
- 一开始识别源图 label 区域时，要保持每个语义 label 单元完整。不要因为名称、数值、备注、margin 或同比文本在视觉上分开，就把同一节点的相关内容识别成互不相关的区域；先按同一个 node/label 意图归组，再为了排版拆成 `layout.labels.*.blocks` 或换行。
- 保留源图片中的数值和备注。
- 不要复现发布方水印、创作者/账号品牌、网站 URL、社交徽标、
  "how they make money" 标识，或其他与公司损益表语义无关的署名块。把它们视为
  fidelity loop 中有意跳过的残差，而不是渲染目标。
- 成本保持为正数；渲染器会将 `type: 'cost'` 格式化为带括号的数值。
- 在依赖项之后注册新数据集；如果复用了其他数据集，也要在被复用数据集之后注册。
- 保持 `data/income-statements.js` 作为每个已注册真实数据集的纯财务报表 SSOT。它只应包含可比较的已披露总计、科目、备注、货币、单位、期间和源图片。不要把 Sankey 的 `nodes`、`links`、`layout`、`render`、SVG、颜色或像素几何信息放进 SSOT。
- 保持 `data/company-metadata.js` 作为公司档案 SSOT。它驱动 Table 视图的公司列表，并应在新公司第一个数据集注册之前更新。
- 保持 English 作为 canonical/default 数据语言。对于 Sankey 和 Table i18n，添加 `i18n.<language>` overlay，而不是创建平行的数据集文件。这些 overlay 可以包含本地化 display string 和语言特定的文字布局调整，但不得改变 values、links、node geometry、financial totals、source images 或 verification semantics。
- 当编写或实质性修改数据集时，为每个非默认支持语言本地化所有用户可见的数据集文本：`name`、`meta.title`、`meta.period`、`meta.periodNote`、node labels、notes，以及任何不是 `$value` 的显式 `layout.labels.*.blocks[].lines[].text`。对应的财务 SSOT labels/notes 和新的公司 metadata 也要在同一工作流中本地化。
- 不要依赖全局 i18n phrase dictionary 来处理固定位置的图表文字。如果某个数据集使用显式 `layout.labels`、`annotationsSvg`、KPI cards 或其他 SVG 文本片段，需要为每一行会随翻译变化的可见文字添加 dataset-specific `i18n.<language>.layout.labels` 或本地化 annotation overrides。只翻译 `nodes[].label` 对固定布局文字来说不够。
- 将缩写、ampersand、标点密集 label，以及带金额后缀的 label 视为高风险 i18n 文本。例如 `R&D`、`SG&A`、`G&A`、`D&A`、`Online Marketing & Others` 和 `Sales & marketing ($3.1B)`。保留已认可的缩写或提供显式本地化行；不要让通用标点清理把它们拆成错误文本。
- 对非默认语言布局调校时，检查渲染后的 SVG 文本边界，而不仅是源码坐标。尤其是右侧 `anchor: 'start'` label、左侧 `anchor: 'end'` label、标题、KPI cards 和 annotations，在本地化后必须仍位于 `meta.referenceImage.width` 与 `meta.referenceImage.height` 内。优先使用换行、本地 x/y 调整或本地字号调整，而不是改变 values、links、node geometry 或财务语义。

对于公司和业务图标：

- 将公司图标以及公司内部业务/segment 示意图标视为可复用资产。图标可以干净矢量化时优先使用 vector；当源图包含品牌专属 bitmap 细节，或用户要求图片嵌入模式时，允许对已验证的公司/业务 icon cluster 使用图片嵌入模式。
- 第一次添加图标时，先通过 `scripts/extract_icon_crops.py` 和数据集专用 JSON spec 裁切所有相关源图区域，作为 original-icon reference asset。脚本应在裁切后移除纯色 crop 背景并输出透明 PNG。只有在确认主体完整、居中、没有无关周边内容之后，才能使用每个 crop。随后将它转换为可复用的 SVG/vector 几何，或在图片嵌入模式下通过 `runtimeOutputDir` 写出单独的 runtime 副本。
- 视觉/模型 crop 校验使用每张自动生成的 validation sheet。sheet 同时包含原始源图、高亮 crop 框和裁切结果。验收结论记录在 `data/assets/icon-references/<company>/model-validation.md`。
- 矢量化 icon 时，加载 `docs/fidelity-loop-rules.md` 并遵循其中的 SVG/vector icon 子循环。
- 后续数据集中，只要源图标在实质上相似，就复用已有 SVG/vector 图标。优先调整现有 SVG 的 viewBox、transform、尺寸、位置或样式，而不是创建近似重复资产。
- 当通用语义图标能匹配源图意图时，使用 `src/icons.js` 中的 Lucide/vector 图标。
- 图片嵌入模式下，加载 `docs/fidelity-loop-rules.md` 获取 runtime raster 例外规则，并加载 `data/assets/README.md` 获取资产布局说明。

## Data 与资产布局

保持注册数据集 adapter 位于 `data/datasets/<dataset-key>.js`。viewer、standalone builder、SSOT verifier 和项目文档都依赖这个稳定路径。

可复用 data-adjacent 资产放在 `data/assets/`：

```text
data/assets/
  icon-references/
    <company>/
      crops/              # 已验证 icon reference crop
      validation-sheets/  # 原图 + crop 框审阅 sheet
      crop-report.json    # 脚本输出和验证指标
      model-validation.md # 模型/视觉验收记录
  raster-annotations/
    <company>/            # 压缩后的 runtime raster annotations
```

`data/assets/icon-references/` 中的 crop 不是 runtime 资产，只用于 SVG/vector 转换和未来复用判断。
Runtime raster annotation 规则由 `docs/fidelity-loop-rules.md` 定义。

## d3-Sankey 保真度循环

运行或汇报任何 d3-Sankey 保真度循环之前，先加载并遵循
`docs/fidelity-loop-rules.md`。该文件是 d3 输出纯净性、允许改动范围、
图片/raster 例外、指标、迭代、本地化布局检查、`compare/` 临时产物处理，
以及 icon SVG/vector 子循环的 SSOT。

如果 `AGENTS.md`、`README.md` 或其他项目说明与
`docs/fidelity-loop-rules.md` 在保真度循环行为上不一致，以
`docs/fidelity-loop-rules.md` 为准。

## 硬性规则

- 当请求可分享的最终 HTML artifact 时，使用 `pnpm build:standalone` 生成 standalone 文件。该 artifact 必须自包含：运行时不应需要同级 CSS、JS、字体、vendor、data 或参考 PNG 文件。
- 分配稳定数据集 key 后，不要重命名已处理图片。

## Commit Message 约定

遵循 `docs/commit-messages.md` 中的项目约定。使用轻量 Conventional Commits 形态：

```text
<type>(<scope>): <summary>
```

使用英文、小写 summary，末尾不加句号。第一行聚焦一个目的；有用时在正文中写验证细节。

首选项目 type：

- `data`：用于数据集文件、已处理输入图片和 `index.html` 数据集注册。
- `render`：用于 `src/sankey-engine.js` 和可见 SVG/渲染行为。
- `verify`：用于 `scripts/verify-d3.mjs` 和 d3 保真度检查。
- `schema`：用于数据集格式约定。
- `docs`、`feat`、`fix`、`refactor`、`test` 或 `chore`：用于普通改动。

优先使用数据集 key（如 `nvidia-q1-fy27`）、模块（如 `engine`、`icons`、`verify-d3`）或工作流区域（如 `input`、`export`、`d3-mode`）作为 scope。对于新数据集工作，将已处理 PNG、`data/datasets/<dataset-key>.js` 和 `index.html` 注册放在同一个 `data(<dataset-key>)` commit 中。如果某个数据集需要可复用的渲染器支持，先拆成单独的 `render(engine)` commit，再提交数据集调校 commit。

## 验证清单

最终回复前，确认：

- `input/pending/` 只包含 `.gitkeep`。
- 新的已处理图片存在于 `input/processed/<dataset-key>.png`。
- 数据集脚本已在 `index.html` 中注册。
- `node --check data/datasets/<dataset-key>.js` 通过。
- `node --check data/income-statements.js` 通过。
- `node --check data/company-metadata.js` 通过。
- `pnpm verify:ssot` 通过。
- 对新增或实质性修改的数据集，在添加语言 overlay 后，`pnpm verify:i18n -- --strict <dataset-key>` 通过。
- 对新增或实质性修改的数据集，逐个非默认语言检查渲染后的本地化 SVG 文本，确认没有混用语言残留、缩写/标点输出损坏、重叠或超出画布边界。对边缘敏感 label 使用浏览器 `getBBox()` 或等价的 rendered-SVG 检查；仅有 `verify:i18n --strict` 并不能证明固定布局文字在视觉上有效。
- 如果提取了 icon 资产：
  - `python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json` 通过。
  - `data/assets/icon-references/<company>/crop-report.json` 中每个 crop 都是 `passes: true`。
  - 已使用同时包含原图和裁切结果的 validation sheet 做视觉/模型检查。
  - `data/assets/icon-references/<company>/model-validation.md` 记录了模型/视觉验收结果。
  - 源图中所有有语义的 company 和 business/segment icon cluster 都已提取，或明确记录了跳过原因。
  - 如果使用图片嵌入模式，通过 `docs/fidelity-loop-rules.md` 要求的 runtime raster 检查。
- 如果需要 standalone HTML artifact，`pnpm build:standalone` 和 `pnpm verify:standalone` 通过。
- 如果改动了渲染器代码，`node --check src/sankey-engine.js` 通过。
- 如果需要 d3 保真度循环，已加载 `docs/fidelity-loop-rules.md`，并完成其中要求的验证、纯净性、指标、本地化布局和 `compare/` 清理检查。

## 汇报

最终回复中包含：

- 修改过的文件。
- pending input 是否已清空。
- 纯数据 SSOT 是否已更新。
- 提取了哪些 icon 资产，以及是否覆盖了全部相关业务簇。
- 对数据集或渲染器改动，汇报 `docs/fidelity-loop-rules.md` 要求的最终 d3 循环结果。
- 任何无法运行的命令。
