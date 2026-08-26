# HEMEM 项目约定

家用新能源里程平衡模型的中文研究静态站。Astro 静态输出，部署在 EdgeOne（临时域名兜底 `https://hemem-ked3wfdn.edgeone.cool`，hemem.cn 备案后用 `SITE_URL` 环境变量覆盖，见 `astro.config.mjs`）。

## 架构约束

- 纯 Astro，不引入 React / Vue / Tailwind 等框架；全局样式统一在 `src/styles/global.css`（self-check 与 404 允许页面级 `<style is:global>`）。
- 客户端 JS 只允许出现在 `/self-check` 决策工具；其余页面保持零 JS。
- 颜色、字体、间距一律使用 `global.css` 里的 CSS 变量 token，不新增硬编码色值。
- 主题锁定浅色编辑风（`color-scheme: light`），刻意不做暗色模式，这是纸质研究文档的定位。
- 圆角体系：控件 2px、状态点圆形，不做大圆角卡片。

## 版式与文风

- 签名版式：衬线标题（`--font-serif`）+ mono 编号 eyebrow（`01 / 模型` 等），保留，不要按通用设计规范移除。
- 研究文章正文是站点核心资产；中文破折号（——）等标点是既定文风，不做"去 AI 味"式改写。
- 文案保持"来源可查、边界明确"的研究语气；数字、版本号、日期口径以文章 frontmatter 与参数表为准，改动需同步更新。
- 全站界面文案与代码注释使用中文。

## 内容流程

- 内容集合 schema 在 `src/content.config.ts`；文章 `status: published` 才会进入索引、RSS 和 sitemap。
- 新增研究文章放 `src/content/research/`，frontmatter 需要 title / description / publishedAt / tags / sources，可选 updatedAt、version、docType。

## 质量门槛

- `npm run build`（含 `astro check`）必须通过后才能提交。
- 交互组件必须有 `:focus-visible` 态；动效必须有 `prefers-reduced-motion` 兜底。
- 改版式后用浏览器截图核对桌面与 375px 移动端两个断点。
