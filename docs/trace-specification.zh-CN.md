# Trace 顶层 Specification

版本：0.1

本文定义 Trace 的最顶层产品与数据模型。当前仓库是该模型的第一阶段实现：围绕 Company / Product 的 Metric，先把 Income Statement 结构化，并用 Sankey 与 Table 视图表达。

## 1. 产品定位

Trace 是一个面向公司、产品与指标的认知系统。它把外部证据（图片、PDF、网页、人工录入等）转成结构化实体、关系和指标，再通过不同 View 可视化。

核心循环：

```text
输入文件/来源 -> 处理插件 -> 实体候选与指标观测 -> 推理合并 -> 可信指标 -> View -> 人工反馈 -> 规则与资产沉淀
```

Trace 不只是生成一张图，而是持续积累对 Company、Product、Metric 及其关系的认知。

## 2. 核心实体

### Organization

Organization 是 Trace 中表示经济或社会主体的基础实体。公司、机构、团队、个人品牌都可以是 Organization。

一个人在 Trace 中也以 Organization 形式存在。例如某个著名个人，可以建模为他的“一人同名公司”。

### Company

Company 是一种 Organization。它可以拥有或运营 Product，也可以直接挂载 Metric。

当前仓库中 Company 的第一阶段实现是 `data/company-metadata.js`，用于保存公司名称、行业、总部、财年、网站、来源等公司级信息。

### Service

Service 是对外提供价值的服务、账号、渠道、业务线、平台或产品化能力的基础类型。

### Product

Product 是一种 Service。它的范围应足够宽：

- 软件产品、平台、订阅服务、硬件产品；
- 业务线、品牌、门店网络；
- YouTube Channel、X 账号、Newsletter、播客等内容型资产。

Product 可以归属于某个 Company，但这个关系必须允许随时间改变。

### Metric

Metric 是 Trace 最重要的关注点。一个有效 Metric 必须完整描述：

- 主体：挂载到某个 Company 或 Product；
- 时间：必填。固有属性使用特殊时间标记 `permanent`；
- 条件：必填。没有额外筛选时也要显式记录为默认条件；
- 口径：必填。说明指标定义、统计方法、会计口径或计算公式；
- 数值：必填。包含具体值和单位；
- 来源：至少来自一个可追溯 Source，或来自可追溯观测的推理结果；
- 置信度：说明当前系统对该值的可信程度。

当前项目关注的 Metric 家族是 Income Statement。收入、成本、毛利、运营利润、税、净利润等都是该家族下的结构化指标。

### Source

Source 是证据单元，可以是图片、PDF、网页、公告、API、人工录入记录或其他文件。Source 不等于最终事实，它只提供观测。

同一主体、同一时间、同一条件、同一口径下可以有多个来源给出不同数值。Trace 必须保留这些来源，并通过推理得到更可信的最终数值。

### View

View 是一组 Metric 的表达方式，不是事实来源。

当前仓库实现了：

- Sankey：用于表达 Income Statement 的流向、成本与利润结构；
- Table：用于表达公司资料和利润表结构化数据。

未来 View 可以包括时间序列、排行榜、对比表、网络图、地图等。

## 3. 关系模型

### Company 与 Product

Product 可以属于 Company，但该关系必须带时间语义：

```text
Company --owns/operates--> Product
  validFrom
  validTo
  source
  confidence
```

当归属变化时，不应覆盖旧关系，而应新增或结束一段带时间范围的关系。

### Company/Product 与 Metric

Company 和 Product 都可以挂载 Metric：

```text
Company/Product --hasMetric--> Metric
```

Metric 的身份由主体、时间、条件、口径和单位共同决定。多个来源对同一 Metric 的观测不能互相覆盖，必须作为独立观测进入推理。

### Source 与 Metric

Source 先产生 Metric Observation，再由系统推理得到 Resolved Metric：

```text
Source -> MetricObservation -> ResolvedMetric
```

- MetricObservation：某个来源声称的指标值；
- ResolvedMetric：系统基于多个观测、来源质量和推理规则得到的当前最佳值。

## 4. Metric 数据契约

一个顶层 Metric 至少应满足下列契约：

```text
Metric {
  id
  subjectType: company | product
  subjectId
  metricFamily
  metricName
  time
  conditions
  definition
  value
  unit
  sources
  confidence
  lineage
}
```

其中：

- `time`：必须存在。可表示时间点、期间或 `permanent`；
- `conditions`：必须存在。用于表达地区、分部、渠道、客户类型、是否合并口径、GAAP/Non-GAAP 等条件；
- `definition`：必须存在。用于区分同名但口径不同的指标；
- `lineage`：记录该 Metric 如何从 Observation 或其他 Metric 推导而来。

## 5. 功能范围

Trace 顶层功能包括：

- 增删改查 Company、Product、Metric、Source 和它们之间的关系；
- 支持 Company/Product 关系的历史版本；
- 支持同口径同时间点多来源指标的保留、对比、推理与置信度更新；
- 从 `input/` 接收图片、PDF 等文件；
- 选择不同处理插件，把输入转成实体、关系、指标观测和可复用资产；
- 通过 View 将可信 Metric 可视化；
- 通过人工反馈不断改进提取、推理、资产复用和渲染规则。

## 6. 输入与处理插件

输入文件进入 `input/` 后，不直接成为结构化事实。处理插件负责输出候选结果：

```text
InputFile {
  source metadata
  extracted organizations
  extracted products
  extracted metric observations
  extracted relationships
  extracted reusable assets
  extraction confidence
}
```

插件可以专注不同任务，例如：

- 图片中的 Income Statement 提取；
- PDF 财报提取；
- 公司或产品 Logo/Icon 提取；
- 网页或 API 指标抓取；
- 多来源冲突检测与推理。

插件输出必须可追溯到 Source，且不能绕过 Metric 的时间、条件、口径、数值、单位要求。

## 7. 当前仓库映射

| Trace 概念 | 当前实现 |
| --- | --- |
| Company | `data/company-metadata.js` |
| Product | `data/products.js` 是一等实体 SSOT 占位；当前暂无 Product 记录，已有产品/业务线多以收入项、图标资产间接出现 |
| Metric / Income Statement | `data/income-statements.js` 是纯财务 SSOT |
| Metric View Adapter | `data/datasets/<dataset-key>.js` 保存 Sankey 节点、链接与布局 |
| Trace Domain Catalog | `src/trace-domain.js` 将现有 SSOT 和 View Adapter 规整成 UI 可消费的目录模型 |
| View / Sankey | `src/sankey-engine.js` |
| View / Table | `src/app.js` |
| Source Image | `input/processed/<dataset-key>.png` 与 `meta.referenceImage` |
| Pending Input | `input/pending/` |
| 处理插件雏形 | `scripts/check-pending-processed.mjs`、`scripts/extract_icon_crops.py`、验证脚本 |
| 可复用资产 | `data/assets/` |

当前阶段的边界：

- `data/income-statements.js` 只保存财务事实，不保存 Sankey 布局；
- `data/products.js` 当前只建立 Product 和 Company/Product 关系的稳定位置，不改变现有视图；
- `data/datasets/` 是 View Adapter，不是财务事实源；
- `src/trace-domain.js` 承担领域归一化和目录构建，`src/app.js` 保持为 UI 控制层；
- `input/processed/` 的图片是验证参考，不是运行时事实；
- i18n 覆盖只改变显示文本和文本布局，不改变 Metric 语义、数值或关系。

## 8. Income Statement 当前规格

Income Statement 是当前优先支持的 Metric 家族。

每条利润表记录应至少表达：

- Company；
- 数据期间和期间结束点；
- 币种、单位、小数精度；
- Revenue 及收入构成；
- Cost of Revenue；
- Gross Profit；
- Operating Expenses 及费用构成；
- Operating Profit；
- Other Income / Other Expenses；
- Tax；
- Net Profit；
- 来源图片或来源 URL；
- 备注和取整容差。

Sankey 视图可以为了复刻参考图而维护节点位置、标签、颜色和布局，但这些字段不能进入纯财务 SSOT。

## 9. 推理与置信度原则

当多个来源给出同一 Metric 的值时，Trace 应保留全部 Observation，并生成一个 Resolved Metric。

推理至少考虑：

- 来源是否一手；
- 来源时间是否接近指标发布时间；
- 口径是否完整且一致；
- 单位、币种和期间是否明确；
- 与其他结构化项是否能对账；
- 是否存在人工确认或修正记录。

Resolved Metric 必须记录来源列表、推理方法和置信度，避免把推理结果误认为原始来源。

## 10. 不变量

- 没有时间、条件、口径、数值和单位的 Metric 无效；
- 固有属性也必须使用 `permanent` 时间标记；
- Product 归属关系必须可追溯、可变更、可保留历史；
- View 不产生事实，只读取 Metric 和关系；
- Source Observation 不被覆盖，冲突通过推理解决；
- 英文可作为默认语义数据，其他语言只做显示层覆盖；
- 稳定 ID 使用小写 kebab-case。

## 11. 后续演进方向

- 将 Product 提升为一等实体，并补齐 Product CRUD；
- 把多来源 Observation 与 Resolved Metric 从当前 SSOT 中显式拆出；
- 为 Source、处理插件、推理规则建立统一注册机制；
- 支持更多 Metric 家族，例如用户数、订阅数、GMV、播放量、留存、价格、组织属性；
- 支持更多 View，例如时间序列、排行榜、公司-产品网络图、产品组合图。
