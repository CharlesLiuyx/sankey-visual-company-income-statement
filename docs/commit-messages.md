# Commit 提交信息规范

本项目采用轻量版 Conventional Commits。提交信息要让审阅者快速判断：

- 这次改动属于哪一类；
- 影响了哪个项目区域；
- 是否会改变数据、渲染结果或验证流程；
- 需要运行哪些检查。

## 格式

```text
<type>(<scope>): <summary>

<body>

<footer>
```

只有第一行是必填项。`body` 和 `footer` 在改动复杂、存在破坏性变化、
或需要解释验证结果时再写。

示例：

```text
data(nvidia-q1-fy27): tune operating expense label placement
```

## 第一行规则

- 使用英文，祈使句或短动词短语，例如 `add`、`fix`、`tune`、`register`。
- 全部小写开头，结尾不加句号。
- 建议不超过 72 个字符；必要时把细节放到正文。
- 一次提交只描述一个清晰目的。不要把无关的数据、渲染器、文档改动塞进同一个提交。

## type

| type | 适用场景 |
|---|---|
| `data` | 新增、更新或调参 `data/datasets/*.js` 数据集，或移动 `input/pending/` 到 `input/processed/` |
| `render` | 修改 `src/sankey-engine.js`、图形几何、颜色、字体、导出、交互等渲染行为 |
| `feat` | 新增用户可见能力，例如新的模式、导航、导出选项 |
| `fix` | 修复错误行为、计算错误、注册遗漏、UI 失效 |
| `verify` | 修改 `scripts/verify-d3.mjs`、验证指标、纯度检查、比较流程 |
| `docs` | 修改 `README.md`、`docs/*.md`、说明文字 |
| `schema` | 修改 `data/schema.md` 或数据集字段约定 |
| `refactor` | 不改变行为的代码重组 |
| `test` | 新增或调整检查、测试夹具、验证用例 |
| `chore` | 依赖、锁文件、格式化、仓库维护 |

## scope

`scope` 应该指出主要影响区域。推荐使用以下写法：

- 数据集 key：`nvidia-q1-fy27`、`salesforce-q1-fy27`
- 文件或模块：`engine`、`icons`、`verify-d3`、`schema`、`readme`
- 工作流区域：`input`、`export`、`reference-mode`、`d3-mode`

如果一次提交确实跨多个紧密相关区域，优先选择用户最关心的结果作为
`scope`，并在正文说明其余影响。

## 正文

当第一行不足以解释原因或风险时，写正文。正文应说明：

- 为什么需要这次改动；
- 关键实现或取舍；
- 是否影响 d3-sankey 输出、Reference 模式、导出结果或数据口径；
- 运行过哪些验证命令，以及关键指标。

示例：

```text
data(nvidia-q4-fy26): tune gross profit flow alignment

Adjusts the explicit node layout to reduce overlap around gross profit while
keeping all source values unchanged.

Verification:
- node --check data/datasets/nvidia-q4-fy26.js
- pnpm verify:d3 -- nvidia-q4-fy26
- RGB MAE: 12.84, MAE similarity: 0.9496, imageCount: 0
```

## footer

需要时使用 footer 记录关联事项：

```text
Refs: #123
Fixes: #123
BREAKING CHANGE: dataset meta.referenceImage must include width and height
```

只有当现有数据集、API、验证命令或使用方式不兼容时，才写
`BREAKING CHANGE`。

## 项目专用示例

```text
data(salesforce-q1-fy27): add processed reference dataset
render(engine): support fixed label anchors
verify(verify-d3): fail when candidate svg contains unapproved raster images
docs(readme): document d3 fidelity workflow
schema(layout): clarify low-level node overrides
chore(deps): pin playwright 1.61.0
```

## 拆分提交建议

- 新数据集提交：把 `input/processed/<dataset-key>.png`、`data/datasets/<dataset-key>.js`
  和 `index.html` 注册放在同一个 `data(<dataset-key>)` 提交中。
- 渲染器支持提交：如果为了某个数据集新增通用渲染能力，单独用
  `render(engine)` 提交，再用 `data(<dataset-key>)` 提交应用调参。
- 验证脚本提交：任何改变 d3 评分、纯度断言或截图流程的改动，用
  `verify(verify-d3)` 单独提交。
- 文档提交：不改变行为的说明更新，用 `docs(...)` 或 `schema(...)`。

## 提交前检查

按改动类型选择检查，不需要每次都全部运行：

| 改动 | 建议检查 |
|---|---|
| 数据集 | `node --check data/datasets/<dataset-key>.js` 和 `pnpm verify:d3 -- <dataset-key>` |
| 渲染器 | `node --check src/sankey-engine.js`，并至少验证一个受影响数据集 |
| 验证脚本 | `node --check scripts/verify-d3.mjs`，并用一个已有数据集跑 `pnpm verify:d3` |
| 文档 | 检查链接、命令和文件路径是否仍然准确 |

提交信息里的验证结果应与实际运行命令一致。不要把 Reference 模式、
源图 `<img>` 或源图裁剪覆盖层的结果写成 d3-sankey 验证结果。
