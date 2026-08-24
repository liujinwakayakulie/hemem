import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 临时域名兜底；正式域名（hemem.cn）备案完成后在 EdgeOne 控制台设置 SITE_URL 环境变量覆盖，或改此行
const site = process.env.SITE_URL ?? "https://hemem-ked3wfdn.edgeone.cool";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
