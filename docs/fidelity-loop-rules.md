# 保真循环规则

本文档是 d3-Sankey 保真循环、runtime raster 例外、图标 crop/vector
子循环和本地化固定布局检查的 SSOT。其他项目文档如果与本文档冲突，以本文档为准。

质量判定以像素 Diff 为主要量化证据，但最终验收不是无条件追求最低 Diff。
必须先把差异按语义分类：结构错误、文本/关联错误、可优化视觉差异、可接受残留、
无语义跳过项。无语义或与公司损益表无关的内容不得为了降低 Diff 被复刻进候选图。

保真循环的最终目标是把人工指出的问题逐步转化为可重复执行的检查规则，让后续数据集
处理后不再依赖用户逐块指出明显问题。用户每次提出修正意见，都必须视为流程缺口信号：
先修当前问题，再把可泛化经验沉淀到本文档；如果只是当前数据集特例，则写入该轮 Task
信息和最终记录。

## 执行入口

创建或实质修改数据集后，运行确定性的 d3 验证脚本：

```sh
pnpm verify:d3 -- <dataset-key>
```

如果缺少本地依赖，先安装固定版本工具：

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
```

在 Codex desktop 或受限 sandbox 环境中，`pnpm verify:d3` 需要一开始就使用提权
shell 权限运行。脚本会绑定本地 `127.0.0.1` 临时服务器；在 sandbox 内先试可能因
`listen EPERM: operation not permitted 127.0.0.1` 失败。

`pnpm verify:d3 -- <dataset-key>` 会：

- 启动本地静态服务器。
- 在最小 d3 harness 中执行 `SankeyEngine.render('#chart', data)`。
- 截取 `#chart > svg`。
- 运行输出纯净性、runtime raster、SVG 尺寸、字体和 label-node 横向 overlap 哨兵。
- 计算全图 Diff 指标。
- 自动输出 DOM 派生区域 Diff 指标。
- 写入 `compare/<dataset-key>-metrics.json`。
- 将候选图、Diff 图和 metrics JSON 归档到
  `output/compare/<dataset-key>/<round>-<improvement>-<focus>/`。
- 将共享参考图复制到 `output/compare/<dataset-key>/<dataset-key>-reference.png`。
- 默认清理 `compare/`。

人工保真轮次必须传入本轮主检查方向：

```sh
pnpm verify:d3 -- <dataset-key> --focus "<主检查方向>"
```

归档目录名使用 `{轮次}-{提升了多少}-{主检查方向}`。轮次默认按当前 dataset 的已有
archive 目录数量自动递增并补零，也可以用 `--round <n>` 覆盖。`提升了多少` 默认按
当前全图 `similarity` 减去上一轮同语言 archive 的 `similarity` 计算，例如
`sim+0.000123`；没有上一轮可比 archive 时使用 `baseline`。主检查方向会被转换为适合
文件夹名的短 slug。

普通自动哨兵可以不保留 scratch 文件。人工保真轮次如果需要同时看原图、候选图和
Diff 图，应使用：

```sh
pnpm verify:d3 -- <dataset-key> --focus "<主检查方向>" --keep
```

保留 `compare/` 后，结束前必须运行：

```sh
sh scripts/clean-compare.sh
```

最终记录应引用 `output/compare/...` 归档产物；`compare/` 只是临时 scratch。

## 自动硬门槛

以下检查是每轮都可以运行的自动哨兵，不算人工主检查方向。失败时先修这些问题，再继续
任何局部保真判断。

1. 候选图必须是 `SankeyEngine.render()` 产生的 d3/SVG 输出。
2. SVG 尺寸必须等于 `meta.referenceImage.width` 和 `meta.referenceImage.height`。
3. 本地 Montserrat 字体必须加载成功；不能用 fallback font 计分。
4. `#chart` 中不得出现 `<img>`、`canvas`、`foreignObject`、`picture`、`video`、
   `iframe`、`object` 或 `embed`。
5. `#chart` 参与截图的元素不得使用 CSS `background-image` 作为像素补丁。
6. 默认情况下，`#chart > svg image` 数量必须为 `0`。
7. 只有显式 runtime raster 模式允许 SVG `<image>`，且必须满足本文档的白名单规则。
8. 左右相邻 label 与 node 的横向 overlap 是 hard fail。
9. `node --check`、`pnpm verify:ssot`、`pnpm verify:i18n -- --strict <dataset-key>` 等
   数据一致性检查必须按 AGENTS.md 的验证清单执行。

## Runtime Raster 例外

默认禁止在 d3 输出中使用任何源图像素、源图裁剪、前景覆盖层、锁定背景或位图补丁。

唯一例外是显式图片嵌入模式。只有同时满足以下条件时，d3 输出中才允许 SVG
`<image>`：

- 源区域是有语义的公司、业务线、产品线或 segment icon cluster。
- crop 已通过 spec-driven 提取和验证，并记录在
  `data/assets/icon-references/<company>/crop-report.json` 与 `model-validation.md`。
- runtime 文件由 crop spec 的 `runtimeOutputDir` 生成或同步，且位于
  `data/assets/raster-annotations/<company>/`。
- dataset 通过 `data.rasterAnnotations` 引用该 runtime 文件。
- dataset 显式设置 `render.allowRasterAnnotations = true`。
- `pnpm verify:d3` 报告 `rasterAllowed: true`。
- SVG image 数量等于 `data.rasterAnnotations` 数量。
- 每个 image href 都在 `data/assets/raster-annotations/` 下，文件存在，且不得指向
  `input/processed/`、`data/assets/icon-references/`、外部 URL 或 data URI。

`data/assets/icon-references/<company>/crops/` 下的 crop 是 reference/conversion asset，
不是 runtime asset。即使 crop 已通过验证，也不得被 dataset 直接作为 `<img>`、SVG
`<image>`、canvas bitmap、CSS background 或前景 overlay 引用。需要图片嵌入时，使用
`runtimeOutputDir` 生成单独 runtime copy。

来源发布方水印、创作者/账号品牌、网站 URL、社交徽标、"how they make money" 标识、
署名条和其他 attribution 内容不属于 runtime raster 例外。

## 保真循环流程

每个人工保真轮次只设一个主检查方向。自动哨兵可每轮运行，但人工深查、局部 crop
对照、bbox 审计和解释性记录必须集中在当前主方向上。

推荐主检查方向：

- 输出纯净性、尺寸、裁剪、画布边界。
- 节点几何、列位置、节点高度和基础流带宽度。
- 多入口/多出口连接线顺序和 socket。
- 终端短横柱、辅助流端点、自定义 curve 控制点。
- label-node 外框、文本交叠、文本位置。
- 注释容器内部对齐、KPI/stat card、徽章和脚注。
- 本地化固定布局文本、缩写、标点和边界。
- 颜色、透明度、图标细节和字体抗锯齿残留。

每轮步骤：

1. 清理上一轮 scratch，或确认本轮使用新的 archive。
2. 运行自动哨兵。
3. 确定本轮主检查方向，更新 Task 信息、冻结清单、重开项和 backlog。
4. 渲染候选图，获取原图、候选图、Diff 图和 metrics JSON。
5. 读取全图指标和与本轮方向相关的分区域指标。
6. 对本轮方向的高 Diff 区域分类：必须死磕、需要优化、可接受残留、无语义跳过。
7. 只针对当前方向修改数据、布局、矢量资产或渲染器，并按同一口径复查。
8. 本轮结束前，基于复查后的最终判断，在原图上用红框标注当前主方向的问题或下一轮
   必须关注的区域；若没有开放问题，在 Task 信息中明确记录无开放红框。
9. 如果方向通过，记录证据并冻结；如果失败，下一轮继续同一方向，直到通过或明确降级。
10. 更新 Task 信息，列出已经主查、已冻结、重开、backlog、红框 region 和下一轮主方向。
11. 进入细微调参阶段时，可以围绕当前方向并行尝试多个候选值，统一用同一套指标取舍。

如果观察到非主方向的新问题，只记录到 backlog。例外是自动硬门槛失败、画布裁剪、
明显文本越界，或会阻塞当前方向判断的结构性错误。

## 人工反馈沉淀

用户指出的错位、遗漏、误判或“看起来不对”的区域，不能只作为一次性修补项处理。
每次收到人工修正建议后，必须完成以下闭环：

1. 把用户文字、截图红框或 Diff 标注转成稳定 region，并归入一个主检查方向。
2. 判断这是通用流程缺口、某类图表的高风险盲点，还是当前数据集特例。
3. 对通用流程缺口或可复用盲点，更新本文档中的对应检查规则、优先级、记录模板或禁止
   做法，措辞要能指导下一次独立处理。
4. 对当前数据集特例，在该轮 Task 信息中记录原因、区域、修复方式和是否需要重开冻结项。
5. 修复后复查用户标注区域，记录修复前后的局部指标和视觉结论。

只有在经验已沉淀到本文档或已明确记录为数据集特例后，才能在最终响应中声称该人工反馈
已处理完毕。不要把用户反馈仅写成聊天总结或临时 TODO。

## 红框参考图和 Task 信息

每轮人工保真循环结束前，必须基于本轮主检查方向生成一张“红框参考图”。该图以原始
reference image 为底图，只用红色外框标注本轮发现的问题区域、下一轮必须关注的区域，
或用户明确指出且尚未冻结的区域。

红框参考图要求：

- 使用原图作为底图，不使用候选图、Diff 图或截图拼贴作为底图。
- 红框必须圈住完整语义区域，例如完整 label、完整节点接口、完整注释容器或完整图标
  cluster；不要只圈单个高 Diff 像素块。
- 红框可以带短编号，但不要遮挡要检查的文字、节点边缘或连接线接口。
- 每个红框编号必须在 Task 信息中对应一个 region 名称、bbox、主检查方向、问题分类和
  下一步动作。
- 可接受残留和无语义跳过项通常不加红框；如果为了避免下一轮误追这些区域而标注，必须
  在 Task 信息中明确写为 `accepted` 或 `skip`。
- 红框图应和本轮 archive 放在一起，推荐路径为
  `output/compare/<dataset-key>/<round>-<improvement>-<focus>/<dataset-key>-attention-reference.png`。
- 下一轮开始时，必须同时参考上一轮红框图、metrics JSON、候选图和 Diff 图。

每轮都要维护 Task 信息。Task 信息可以在轮次记录中维护，但必须足够稳定，能让下一轮
无需重新询问用户就知道主检查方向和关注区域。

Task 信息至少包含：

- dataset key、轮次号、archive 路径、红框参考图路径。
- 当前主检查方向。
- 已作为主方向检查并冻结的方向。
- 已重开的方向和重开原因。
- Backlog 中尚未主查的方向。
- 本轮红框 region 清单：编号、bbox、问题分类、对应指标、下一步动作。
- 用户反馈沉淀：已更新的规则、数据集特例或仍需处理的经验项。
- 下一轮主检查方向和进入条件。

## 冻结和重开

一个方向只有在本轮记录包含候选图、参考图、Diff 图、相关局部指标和明确结论后，才可
冻结。若该方向仍有未处理红框 region，或 Task 信息中没有记录对应结论，不得冻结。

冻结后不再重复人工深查同一组 crop、bbox 表或目视说明，除非出现以下情况：

- 相关节点、链接、标签、注释、语言覆盖、图标资产或渲染器逻辑被改动。
- 自动验证出现纯净性失败、尺寸变化、横向 label-node overlap、文本越界、路径端点异常。
- 用户标注区域局部指标显著回退。
- 用户再次指出同一方向问题。

被重开的方向必须重新成为某一轮主检查方向；不要在其他方向轮次里顺手修、顺手验。

## Diff 指标

全图循环按完整参考图计算。图标 vector 子循环按 icon viewport 或 crop/aligned reference
的完整画布计算。

每轮至少记录：

- `mae`：RGB 平均绝对误差。
- `similarity`：`1 - mae / 255`。
- `maxChannelDiff`：单通道最大差异。
- `samePixelRatio`：完全相同像素比例。
- `changedPixelRatio`：有变化像素比例。
- `diffBoundingBox`：差异像素的外接矩形。

`pnpm verify:d3` 会自动为渲染 DOM 派生区域输出 Diff，例如边界、节点、链接、标签、
annotation、runtime raster 等。区域报告位于 metrics JSON 的 `regions` 数组中。

如果用户提供 Diff 图、截图红框或文字指出具体错位区域，必须把每个标注区域转成稳定
region，并在对应主检查方向记录修复前后的 `mae`、`similarity`、`changedPixelRatio`。
自动区域不能覆盖该标注时，可以用同一口径手工计算并在记录中说明。修复后的下一轮红框
参考图必须删除已冻结区域，或把该区域明确标为已解决，避免后续继续围绕已关闭问题调参。

识别 label 区域时，优先保证语义完整度。同一节点的名称、数值、备注、margin、Y/Y
文本和紧邻图标应先作为同一个 label 意图归组，再根据排版需要拆成 blocks 或 lines。
不要为了局部像素或空白把完整 label 语义拆成互不相关的优化区域。

## 无语义跳过项

以下内容不进入候选渲染、调参目标、图标资产或 runtime raster 例外：

- 来源发布方水印。
- 创作者/账号品牌。
- 网站 URL。
- 社交徽标或社交账号。
- "how they make money" 出品方标识。
- 署名条、attribution block。
- 与公司损益表语义无关的装饰残片。
- 没有独立业务图标的 `Others` 类 segment。

这些区域可以在记录中标为跳过项。它们会贡献全图 Diff，但不得为了降低 Diff 被补画。

## 允许的改动范围

整图 d3 循环只能通过 d3-compatible 改动改善输出：

- `data.layout.nodes`
- `data.layout.labels`
- `data.render` 尺寸、颜色、透明度和排版
- link 顺序、`sourceOrder`、`targetOrder`、显式 `y0`/`y1`、固定 socket 或 `curve`
- vector logo 或 vector icon
- 已批准的 runtime raster annotations
- 渲染器对 SVG 几何、路径或文本控制的通用支持

不得通过 Reference mode、直接 `<img>`、整张源图、未批准 crop、临时 overlay、CSS
background、canvas 或锁定背景降低 Diff。

本地化 overlay 只能改变显示文字和语言特定文本排版。不得改变 values、links、
node geometry、financial totals、source image 或验证语义。

## 连接线和终端接口

当主检查方向是连接线接口、节点/流带结构、终端短横柱、辅助流接口、用户标注接口，或
相关冻结项被重开时，必须检查所有有多条 `sourceLinks` 或 `targetLinks` 的节点。
检查口径以渲染后的 SVG path 和 node bbox 为准，不以源码 link 数组位置、node `order`
或上一轮视觉印象为准。

硬性规则：

1. 多入口节点按实际进入节点边缘的垂直位置，从上到下列出 `source -> target` 顺序，
   对照参考图。
2. 多出口节点按实际离开节点边缘的垂直位置，从上到下列出 `source -> target` 顺序，
   对照参考图。
3. `sourceOrder` 只控制源节点出口堆叠，`targetOrder` 只控制目标节点入口堆叠。
4. 同一目标节点同时接收主经营利润、other income/expense、tax benefit、interest、
   investment gains 等辅助流时，必须单独核对目标端上下层级。
5. 同一源节点同时分出净利润、税费、费用项或其他扣减时，必须单独核对源端上下层级。
6. 对有显式 `curve`、`y0`、`y1`、固定 socket 或自定义 link width 的高风险连接，记录
   path 起点、终点、stroke width、source bbox、target bbox。
7. 连接线中心线应落在对应节点外框内，stroke 宽度不应明显越出节点可接收范围，除非
   参考图明确如此。
8. 自定义曲线控制点通常应保持水平推进：`source.x1 <= c1x <= c2x <= target.x0`。
   如果参考图要求反向弯出或折返，必须记录原因。

修复优先级：

- 入口顺序错误，先改 `targetOrder`。
- 出口顺序错误，先改 `sourceOrder`。
- 顺序正确但端点错位，再改 `y0`/`y1`、节点几何或曲线控制点。
- 终端列整体偏移时，先修整列 `layout.nodes`，再校验 link 端点和 label。
- 细辅助流宽度与短横柱高度不匹配时，先按参考局部 bbox 调整 link `width` 和节点高度。

不要通过改颜色、透明度、节点覆盖或标签位置掩盖接口错位。

## Label-node 和文本布局

当主检查方向是 label-node、文本交叠、文本位置、本地化布局，或相关冻结项被重开时，
必须用浏览器 `getBBox()` 或等价渲染结果检查文本外框。源码中的 `top`、`x`、`lineGap`
和字体大小只是排版输入，不能替代真实外框。

上下排列指 label 位于相关柱子上方或下方，二者形成同一竖向视觉组。该组的水平中心线
应一致。左右排列指 label 位于柱子左侧或右侧，二者形成同一横向视觉组。该组的垂直
中心线应一致。

默认间距目标：

- 上方 label 外框下边界到 node 上边界：`5px ± 1px`。
- 下方 label 外框上边界到 node 下边界：`5px ± 1px`。
- 同一竖向组相邻 label block 外框间距：`5px ± 1px`。
- 左右 label 与 node 不得横向交叠，目标边界间距至少 `5px`。

如果参考图明确使用不同间距，或为避免文本越界/交叠必须偏离，可以破例；破例必须记录
原因。距离达到 20px 量级或更远时，必须有参考图依据或明确避让理由。

高风险盲点：同一节点可能同时有侧置 name label 和与柱子同轴的 value/note label，
尤其是高度很小的 source、cost 或辅助节点。如果同轴 label 与柱子在水平方向有交集或
中心线接近，即使二者已经垂直相交，也必须归入上下排列的 label-node 组合，记录负
`edgeGap`，并视为文本交叠/位置错误继续修复；不能因为 `label.bottom <= node.top` 不
成立就漏掉。

短辅助节点也必须做同样检查，包括 `interest`、other income、tax benefit、
investment gains 等连接到终端利润节点的短横柱或小矩形。若参考图把这类节点画在 label
正上方或正下方，节点位置必须以自身 label 外框为主要参照，不能被主流带或终端节点牵引
到斜上方、远上方或旁边。

## 注释容器

`annotationsSvg` 中的 KPI/stat card、黑色胶囊、图例框、徽章、脚注卡片和图标加文字
组合不属于 `layout.labels`，但仍是图表语义的一部分。

当主检查方向是注释容器、KPI/stat card、徽章、脚注、本地化注释文本，或相关冻结项被
重开时，必须：

1. 识别容器外框，例如 `<rect>`、胶囊背景、badge 背景或等价 path。
2. 取容器内部所有语义文字和图标的 union 外框。
3. 如果参考图意图是居中，检查内部 union 外框中心是否与容器中心一致，或保持参考图
   中同样的轻微偏移。
4. 如果参考图意图是左对齐、右对齐或顶部对齐，检查对应边距和组内行距。
5. 内容不能贴边，尤其是底边、右边和圆角区域。
6. 非默认语言替换注释文字后，重新检查 union 外框是否仍在容器内且不越界。

优先让 helper 以容器中心、内容组高度、行高和边距推导 baseline。若保留手写 baseline，
必须记录容器 bbox、内部 union bbox、中心差和四边边距。

## 本地化布局

英文保真循环通过，只说明默认语言输出稳定，不能证明中文或其他语言的固定布局文本也
稳定。

每次新增或实质修改 `i18n.<language>` 覆盖时，必须安排本地化布局主检查轮次：

```sh
pnpm verify:d3 -- <dataset-key> --language zh --keep
```

本地化渲染的 Diff 仍以英文参考图为基准，只用于辅助定位；是否通过重点看输出纯净性、
bbox 审计、混排/标点/缩写是否正确、文本是否越界或重叠。

检查范围：

- `layout.labels.*.blocks[].lines[].text`
- `annotationsSvg`
- KPI/stat card
- title 和 period stamp
- `.sankey-label[data-node]`
- 图标旁标签和底部期间标记

高风险字符串必须显式确认：`R&D`、`SG&A`、`G&A`、`D&A`、带 `&` 的组合标签、带金额
后缀的标签，以及中英混排品牌/产品名。不允许出现无意半翻译、英文残留、错误中文逗号、
或缩写被拆成 `R，D`、`SG，A`。

处理顺序：

1. 先补 dataset-level `i18n.<language>.layout.labels` 或 localized `annotationsSvg`。
2. 对越界文本，优先拆行、调整该语言覆盖中的局部 `x`/`top`、减小局部字号或使用
   合适的 `textLength`。
3. 不要为适配翻译改变财务值、links、node geometry、source image 或验证语义。
4. 品牌名、ticker、单位缩写或正式产品英文名可以有意保留，但必须记录。

## 图标 Crop 和 Vector 子循环

Company icon 和 business/segment illustrative icon 可以在整图 d3 循环之前单独跑
crop/vector 子循环。目标是得到可复用 vector 资产，或在显式图片嵌入模式下得到已批准
runtime raster copy；不是把 reference crop 当最终资产。

适用对象：

- 公司标志或公司图标。
- 公司内部业务线、产品线、分部、segment 的说明性图标。
- 后续数据集可能重复出现、值得复用的图标。

步骤：

1. 为当前数据集创建或更新 `input/icon-crop-specs/<dataset-key>.json`。
2. 用 `scripts/extract_icon_crops.py` 提取所有有语义的 company icon 和 business/segment
   icon cluster。除非任务明确缩小范围，不要只提取示例业务簇。
3. crop 输出到 `data/assets/icon-references/<company>/crops/`。
4. validation sheet 输出到 `data/assets/icon-references/<company>/validation-sheets/`。
5. 保留 `crop-report.json`。
6. 用 validation sheet 验证主体完整、居中、无无关文本/线条/水印/相邻图标。
7. 验收结果写入 `model-validation.md`。
8. 如果 crop 不准确，先重新 crop，不要基于错误 crop 继续 vector 化或 runtime 输出。
9. vector 子循环中，候选必须是纯 SVG/vector，不得包含 `<image>`、位图、文本截图或覆盖层。
10. 将候选 vector render 与 crop/aligned reference 按同一尺寸计算 Diff。
11. 调整 geometry、viewBox、path、stroke、fill、transform、尺寸或对齐。
12. 收敛后保存为可复用资产。

Vector 资产落点：

- 通用或可复用 company/business vector 优先放在 `src/icons.js` 的 `SANKEY_BUSINESS_ICONS`
  或相关 icon 集合。
- 数据集一次性 logo 可放在 dataset 内的 `meta.logoSvg` 或局部 helper。
- validation render、vector diff 等证据放在对应 `validation-sheets/` 或记录文件中。
- 后续 materially similar 图标优先复用已有 vector；可调整 viewBox、transform、size、
  placement、stroke 或 fill，不创建近重复资产。

## 误差分类和修复优先级

必须死磕：

- 桑基接口没有对齐。
- 节点入口或出口顺序错误。
- 流带端点没有贴合节点边缘。
- 终端短横柱或整列终端节点漂移。
- 细辅助流 stroke width、`y0`/`y1` 或 socket 超出短横柱 bbox。
- 自定义曲线反向弯出、下坠再上升或进入目标前折返。
- 文本交叠、压到节点/流带、图标与文字重叠。
- 文本属于错误节点，方向错误，或名称/数值/备注顺序错误。
- label-node 外框关系无法解释，或本地化文本越界/裁切。
- 注释容器内部内容偏心、贴边或与参考图意图不符。

需要优化：

- 节点矩形位置、宽度或高度偏移。
- 流带宽度或层级顺序明显不同。
- 标题位置或字号明显偏离。
- 颜色、透明度、背景色偏差较大。
- 图标尺寸或位置影响读图。

可以接受的残留：

- 字体渲染和抗锯齿差异。
- 浏览器、系统或缩放倍率造成的亚像素差异。
- 手绘曲线纹理与 d3 曲线的细小差异。
- 语义正确但外形略不同的 vector 图标。
- 品牌标志细节差异，只要没有重复、裁剪或语义错误。
- 轻微颜色偏差，且不影响层级区分。
- 背景或阴影中的低强度噪声。

选择下一轮主检查方向时，按以下优先级处理未冻结或被重开的方向：

1. 自动硬门槛失败。
2. 尺寸、裁剪、画布边界。
3. 连接线接口、socket、终端短横柱。
4. 节点位置和节点尺寸。
5. 流带宽度、顺序和端点贴合。
6. 文本交叠。
7. 文本位置、居中、对齐和关联对象邻近关系。
8. 文本越界。
9. 标题、图例、期间标记和注释容器。
10. 颜色、透明度、图标和字体抗锯齿残留。

## 每轮记录模板

```text
Task 信息：
- dataset key:
- 轮次号:
- archive:
- 红框参考图:
- 当前主检查方向:
- 已主查并冻结方向:
- 重开方向和原因:
- Backlog 主方向:
- 下一轮主检查方向:

轮次：
本轮主检查方向：
冻结清单：
重开项：
Backlog：

命令：
候选图：
原图：
Diff 图：
Metrics JSON：
Archive：
红框参考图：

自动硬门槛：
- purity:
- SVG size:
- font:
- raster annotations:
- label-node horizontal overlap:
- SSOT/i18n/语法:

全图指标：
- mae:
- similarity:
- maxChannelDiff:
- samePixelRatio:
- changedPixelRatio:
- diffBoundingBox:

本轮主方向分区域指标：
| region | x | y | width | height | mae | similarity | maxChannelDiff | changedPixelRatio | note |
|--------|---|---|-------|--------|-----|------------|----------------|-------------------|------|

红框 region 清单：
| id | region | x | y | width | height | 分类 | 下一步动作 |
|----|--------|---|---|-------|--------|------|------------|

本轮主方向深查：

连接线/终端接口（相关时）：
- 多入口 targetOrder：
- 多出口 sourceOrder：
- 高风险 path 端点、stroke width、source/target bbox：
- 自定义 curve 控制点：
- 用户标注区域修复前后指标：

Label-node/文本（相关时）：
- 上下排列 centerX：
- 默认 5px ± 1px 间距或破例原因：
- 同轴 value/note 是否有负 edgeGap 或 bbox 交叠：
- 左右 side label 是否 overlap：
- 短辅助节点是否贴合自身 label：

注释容器（相关时）：
- 容器 bbox：
- 内部 union bbox：
- 中心差和四边边距：
- 破例原因：

本地化（相关时）：
- 检查语言：
- 固定布局文本覆盖：
- 混排、标点、缩写：
- bbox 越界或重叠：
- 有意保留英文项：

误差分类：
- 必须死磕：
- 需要优化：
- 可以接受的残留：
- 无语义跳过：

用户反馈沉淀：
- 本轮用户反馈：
- 泛化经验：
- 已更新规则：
- 数据集特例：

本轮修复：
并行试值：
本轮新冻结项：
本轮保持冻结且未重复深查的方向：
下一轮计划：
```

## 收敛标准

整个保真循环可以结束，必须同时满足：

1. 自动硬门槛通过。
2. 候选图纯净，没有使用未批准源图像素。
3. 必须死磕的问题域都已作为主检查方向深查并冻结。
4. 冻结清单没有被相关改动或自动回归信号重开。
5. Backlog 为空，或剩余项均记录为可接受残留、无语义跳过或明确不属于当前任务范围。
6. 本轮主方向分区域 Diff 没有新的结构性高误差区域。
7. 全图 Diff 指标相较上一轮没有明显可操作改善空间。
8. 用户标注区域已经逐一复查，并记录修复前后指标。
9. 新增或修改过的非默认语言覆盖已经通过本地化主检查方向。
10. 最新 Task 信息完整，列出所有已主查、已冻结、重开和 backlog 的主检查方向。
11. 每个未冻结或刚修复的用户标注区域，都有对应红框参考图记录或明确关闭说明。
12. 用户反馈中的通用经验已沉淀到本文档，数据集特例已记录在 Task 信息中。
13. 可接受残留和所有破例都记录原因。

收敛时不要求全方向人工重查。全图相似度高不代表可以结束；但已冻结且未被重开的方向
不应在最后一轮重复深查。

图标 vector 子循环收敛还必须满足：

- Crop 已验证准确。
- 候选 icon 是纯 SVG/vector。
- 图标主体结构、关键负形、边界留白和中心位置稳定。
- 资产已保存为可复用 vector，或 runtime raster copy 已按白名单生成。

## 禁止做法

- 用原图或原图裁剪覆盖候选渲染。
- 未验证 crop 准确性就开始 vector 化或 runtime 输出。
- 将 `icon-references` crop 直接作为 d3 runtime asset。
- 为降低 Diff 复制无语义 attribution 内容。
- 用隐藏文本、缩短文本或降低透明度掩盖布局错误。
- 只报告全图相似度，不报告分区域证据。
- 进入下一轮却没有上一轮红框参考图和最新 Task 信息。
- 收到用户修正意见后只修当前像素，不沉淀可复用检查经验。
- 把接口错位、文本不可读或文本越界当成风格差异接受。
- 在没有 Diff 图、metrics JSON 和主方向分区域指标的情况下声称已经收敛。
