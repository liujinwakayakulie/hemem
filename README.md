# HEMEM

HEMEM（Household Electric Mobility Equilibrium Model，家用新能源里程平衡模型）研究站。

## 项目进度（2026-08-26）

- 基建完成：robots.txt、动态 llms.txt、sitemap、RSS、JSON-LD、Content Collections 字段校验
- **内容 8 篇全部 `published`**（参数已核验，模型 v0.2.2，北京 2026-08 口径）：
  - 模型说明：[HEMEM 完整说明](src/content/research/hemem-model.md)（Report JSON-LD，白皮书底稿，含差值账口径声明）
  - 情景研究：[城际长途，才是低里程家庭买不买电车的分水岭](src/content/research/intercity-threshold.md)（旗舰篇 v0.3.2）
  - 情景研究：真实续航（两道门）、节假日高速充电（潮汐经济学）、家充三笔账、保险差额（82% 油费交保费）
  - 使用指南：充电时间价值货币化
- **决策自检工具上线**：`/self-check/`，6 组选择题 → 两分钟出「可以买 / 压线 / 账面不成立」三档结论（纯客户端计算，结论口径与文章一致）
- 参数核验闭环：`paper/待核验来源/参数核验结果-2026-08-24.md` 存档，全文数字逐项括注来源
- 写作规范：`../写作风格指南.md`（独立汽车编辑人设、T0–T6 技法、数字来源三种括注格式、长度标准）
- 内容方向：**双场景结构（日常圈 / 城际圈）**，核心命题「省不省看日常圈，敢不敢、值不值看城际圈」；插混篇已砍（不聚焦）
- 部署：EdgeOne 临时域名已通构建，待公开访问域名 + hemem.cn 备案

## 内容工作流

- 文章放入 `src/content/research/`，frontmatter 由 `src/content.config.ts` 统一校验
- `status`：`draft`（默认，不渲染、不进 sitemap/llms.txt/首页）→ `review` → `published`（正式发布）
- `docType`：`模型说明`（输出 Report JSON-LD）/ `情景研究` / `使用指南`
- `version`：白皮书版本号，只以小版本迭代参数，修订记录写在文内「版本与引用」一节
- `sources`：可解析的文献 URL（DOI）；中文文献在正文来源清单中列卷期

## 技术栈

- Astro 静态站点生成：构建产物是完整 HTML，爬虫无需执行 JavaScript
- TypeScript：约束组件和内容数据
- Markdown Content Collections：文章与页面内容结构化管理
- JSON-LD、Sitemap、RSS、robots.txt、llms.txt：为搜索引擎和 AI 抓取提供明确入口
- 纯 CSS 视觉层：当前首页没有客户端 JavaScript

## 本地开发

```bash
npm install
npm run dev
```

默认访问地址为 `http://localhost:4321`。

## 构建

正式构建前配置站点域名，否则 canonical、Sitemap 和 RSS 会使用本地地址：

```bash
SITE_URL=https://你的域名 npm run build
npm run preview
```

## 内容目录

后续研究文章放入 `src/content/research/`，并在 `src/content.config.ts` 中统一校验标题、摘要、日期、标签、引用和更新状态等字段。

```text
src/
├── content/            # Markdown 研究内容
├── layouts/            # 页面元信息和 JSON-LD
├── pages/              # 文件路由
└── styles/             # 全站样式
```

部署时还应在 CDN 或服务器端开启 HTTPS、压缩、长期静态缓存，并将 `SITE_URL` 设置为最终公开域名。

## 下一步（按优先级）

1. **公开可访问**：EdgeOne 预览域名 401（需签名），换公开默认域名（edgeone.app）或等 hemem.cn 备案通过后绑定并设 `SITE_URL`
2. **补齐核心页面**：关于页（独立研究者声明）、FAQ 汇总页（各文 `<details>` 问题的全站索引）
3. **白皮书 PDF**：从模型页 v0.2.2 导出，建立固定引用入口（Day31-40 双轨：网页版 + PDF）
4. **问卷上线**：Credamo 配置（选项随机只显示其一、显示条件、配额）→ 60–100 人试测 → 正式 400 份（200/组），数据回流模型 v0.3（焦虑折价 α、平日排队分布）
5. **多平台同源铺设**（Stage 3）：知乎 / 小红书 / CSDN 改写分发，指向本站 canonical
6. **GEO 效果监测**（Stage 4，上线后）：固定 prompt 集，跟踪主流 AI 引用情况
