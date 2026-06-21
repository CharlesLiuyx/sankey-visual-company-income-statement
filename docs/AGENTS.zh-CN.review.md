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
6. 如果源图中有公司 icon 或公司内部 business/segment icon，需要先运行 spec-driven icon 提取流程：
   - 创建或更新 `input/icon-crop-specs/<dataset-key>.json`。
   - 使用 `scripts/extract_icon_crops.py` 将通过验证的 reference crop 写入 `data/assets/icon-references/<company>/crops/`。
   - 将 validation sheet 写入 `data/assets/icon-references/<company>/validation-sheets/`。
   - 在公司资产目录中保留 `crop-report.json` 和 `model-validation.md`。
   - 除非用户明确缩小范围，否则要提取源图中所有有语义的 company 和 business/segment icon cluster，不要只提取一个示例业务簇。
   - 排除发布方水印、创作者/账号品牌、网站 URL、社交徽标、"how they make money" 标识、署名块，以及没有独立业务 icon 的 `Others` 等 segment。
7. 在为新公司编写第一个数据集之前，先收集公司元数据（描述、板块、行业、总部、网站、股票代码/交易所，如有，以及来源 URL），并添加到 `data/company-metadata.js`。
8. 将 `meta.referenceImage` 设置为已处理 PNG，并记录准确的源图片尺寸。
9. 处理完成后，保持 `input/pending/` 为空，只保留 `.gitkeep`。

## 数据集编写

优先沿用项目中已有模式：

- 对普通公司输入，使用 `window.SankeyEngine.fromIncomeStatement(...)`。
- 当像素或布局保真度重要时，使用显式的低层级 `nodes`、`links`、`layout.nodes` 和 `layout.labels`。
- 保留源图片中的数值和备注。
- 成本保持为正数；渲染器会将 `type: 'cost'` 格式化为带括号的数值。
- 在依赖项之后注册新数据集；如果复用了其他数据集，也要在被复用数据集之后注册。
- 保持 `data/income-statements.js` 作为每个已注册真实数据集的纯财务报表 SSOT。它只应包含可比较的已披露总计、科目、备注、货币、单位、期间和源图片。不要把 Sankey 的 `nodes`、`links`、`layout`、`render`、SVG、颜色或像素几何信息放进 SSOT。
- 保持 `data/company-metadata.js` 作为公司档案 SSOT。它驱动 Table 视图的公司列表，并应在新公司第一个数据集注册之前更新。

对于公司和业务图标：

- 将公司图标以及公司内部业务/segment 示意图标视为可复用的 vector 资产。
- 第一次添加图标时，先通过 `scripts/extract_icon_crops.py` 和数据集专用 JSON spec 裁切所有相关源图区域，作为 original-icon reference asset。只有在确认主体完整、居中、没有无关内容之后，才能将它对齐到图表，转换为 SVG/vector 几何，并保存转换后的资产以便后续复用。
- 视觉/模型 crop 校验使用每张自动生成的 validation sheet。sheet 同时包含原始源图、crop 框和裁切结果。验收结论记录在 `data/assets/icon-references/<company>/model-validation.md`。
- SVG 转换本身也要跑保真度循环，将转换后的 SVG 渲染与裁切/对齐后的参考进行比较，直到匹配稳定到足够可接受。
- 后续数据集中，只要源图标在实质上相似，就复用已有 SVG/vector 图标。优先调整现有 SVG 的 viewBox、transform、尺寸、位置或样式，而不是创建近似重复资产。
- 当通用语义图标能匹配源图意图时，使用 `src/icons.js` 中的 Lucide/vector 图标。
- 不要把源图片裁切、raster 图标资产、文本裁切、前景像素或覆盖层放进 d3 模式。裁切只允许作为转换参考，绝不是 runtime 渲染资产。

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
```

`data/assets/icon-references/` 中的 crop 不是 runtime 资产，只用于 SVG/vector 转换和未来复用判断。

## d3-Sankey 保真度循环

保真度循环会将参考 PNG 与 **d3-sankey SVG 输出** 进行比较。源 PNG 只是标准答案，绝不能成为候选渲染的一部分。

创建数据集或对数据集做实质性修改后，自动运行此循环：

1. 如果缺少 `node_modules/`，安装固定版本的本地工具：

   ```sh
   pnpm install --frozen-lockfile
   pnpm exec playwright install chromium
   ```

2. 运行确定性的 d3 验证脚本：

   ```sh
   pnpm verify:d3 -- <dataset-key>
   ```

   该脚本会在临时端口启动自己的本地静态服务器，在最小 d3 harness 中通过 `SankeyEngine.render('#chart', data)` 渲染数据集，截取 `#chart > svg`，检查纯净性，计算指标，关闭浏览器和服务器，并清理 `compare/`。

   在 Codex desktop 或受限 sandbox 环境中，一开始就使用提权 shell 权限运行 `pnpm verify:d3`。脚本必须绑定本地 `127.0.0.1` 服务器；先在 sandbox 内尝试可能因 `listen EPERM: operation not permitted 127.0.0.1` 失败，浪费一次验证循环。

3. 评分前先确认输出纯净：
   - 候选结果必须是 d3/SVG 渲染。
   - `#chart > svg image` 数量必须为 `0`。
   - 候选结果中不能出现源图片 `<img>`。
   - 不能使用 raster 裁剪、前景覆盖层、锁定背景，或从源图片提取的 logo/图标资产来遮盖差异。

4. 将候选截图与 `input/processed/<dataset-key>.png` 比较。脚本会报告：
   - RGB MAE
   - MAE similarity：`1 - mae / 255`
   - 最大通道差异
   - 相同像素比例

5. 只能通过 d3 兼容的改动来改进：
   - `data.layout.nodes`
   - `data.layout.labels`
   - `data.render` 的尺寸、颜色、透明度和排版
   - link 顺序或 target 顺序
   - vector logo 或 vector 图标
   - 渲染器对 SVG 几何或文本控制的支持

6. 迭代到改进进入平台期，或输出在视觉上足够接近。不要通过切换成参考 raster 或源图片覆盖层来宣称达到 99%+ 的 d3 结果。

只有在需要检查 `compare/` 中候选 PNG 时，才使用 `pnpm verify:d3 -- <dataset-key> --keep`；结束前用 `sh scripts/clean-compare.sh` 清理。

## 硬性规则

- viewer 只发布 d3-sankey 模式。参考 PNG 只作为验证标准；不要在 app runtime 或 standalone HTML artifact 中重新引入 Reference mode。
- 当请求可分享的最终 HTML artifact 时，使用 `pnpm build:standalone` 生成 standalone 文件。该 artifact 必须自包含：运行时不应需要同级 CSS、JS、字体、vendor、data 或参考 PNG 文件。
- 直接使用源 PNG 的 `<img>` 不是渲染。
- d3-sankey 模式中不允许使用从源图片提取的 raster 覆盖层。
- 如果候选结果包含源像素，则 d3 循环结果无效。
- `compare/` 只是 scratch 目录。结束前不要在那里保留循环截图或 diff。
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
- 如果提取了 icon 资产：
  - `python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json` 通过。
  - `data/assets/icon-references/<company>/crop-report.json` 中每个 crop 都是 `passes: true`。
  - 已使用同时包含原图和裁切结果的 validation sheet 做视觉/模型检查。
  - `data/assets/icon-references/<company>/model-validation.md` 记录了模型/视觉验收结果。
  - 源图中所有有语义的 company 和 business/segment icon cluster 都已提取，或明确记录了跳过原因。
- 如果需要 standalone HTML artifact，`pnpm build:standalone` 和 `pnpm verify:standalone` 通过。
- 如果改动了渲染器代码，`node --check src/sankey-engine.js` 通过。
- `pnpm verify:d3 -- <dataset-key>` 通过。
- 已检查 d3 输出纯净性（`#chart > svg` 内 `imageCount: 0`）。
- 循环指标是用 d3 截图与源 PNG 计算得出。
- `compare/` 已清理。

## 汇报

最终回复中包含：

- 修改过的文件。
- pending input 是否已清空。
- 纯数据 SSOT 是否已更新。
- 提取了哪些 icon 资产，以及是否覆盖了全部相关业务簇。
- 最终 d3 循环指标。
- 任何已知的剩余保真度限制。
- 任何无法运行的命令。
