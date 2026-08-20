# HEMEM

HEMEM（Household Electric Mobility Equilibrium Model，家用新能源里程平衡模型）研究站。

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
