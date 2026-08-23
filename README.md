# HEMEM

HEMEM（Household Electric Mobility Equilibrium Model，家用新能源里程平衡模型）研究站。

## 项目进度（2026-08-23）

- 基建完成：robots.txt、动态 llms.txt、sitemap、RSS、JSON-LD、Content Collections 字段校验
- 内容 v0.1 初稿 3 篇（**全部为占位参数，待核验**）：
  - 模型说明：[家用新能源里程平衡模型（HEMEM）完整说明](src/content/research/hemem-model.md)（Report JSON-LD，白皮书底稿）
  - 情景研究：[城际长途，才是低里程家庭买不买电车的分水岭](src/content/research/intercity-threshold.md)（全站标杆文）
  - 使用指南：[充电一小时值多少钱：补能时间价值货币化](src/content/research/charging-time-value.md)
- 首页研究索引动态绑定已发布内容：新文章 `status: published` 后入口自动出现
- 内容方向已定：**双场景结构（日常圈 / 城际圈）**，核心命题「省不省看日常圈，敢不敢、值不值看城际圈」

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

1. **参数核验**：油价 / 电价 / 购置差价 / 保险保养差额逐项替换占位值，补齐来源链接（发布前的硬阻塞）
2. **部署上线**：域名 hemem.cn；国内 AI 爬虫（Kimi/DeepSeek）友好优先考虑国内静态托管（腾讯 EdgeOne / 阿里云 OSS+CDN），配置 `SITE_URL`
3. **补齐核心页面**：关于页（独立研究者声明）、FAQ 汇总页
4. **第 2 阶段支柱文**：8000/10000km 分水岭、有家充 vs 无家充、油电保险保养差额等（Day8-25 计划）
5. **白皮书**：参数核验后从模型页导出 PDF，建立固定引用入口
