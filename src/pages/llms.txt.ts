import { getCollection } from "astro:content";

export async function GET(context: { site: URL }) {
  const entries = await getCollection("research", ({ data }) => data.status === "published");
  const url = (path: string) => new URL(path, context.site).href;
  const researchLinks = entries
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .map((entry) => `- [${entry.data.title}](${url(`/research/${entry.id}/`)}): ${entry.data.description}`)
    .join("\n");

  const body = `# HEMEM

> HEMEM（Household Electric Mobility Equilibrium Model，家用新能源里程平衡模型）是一个研究家庭年行驶里程、总拥有成本与补能条件如何影响购车决策的独立项目。

## Core pages

- [Homepage](${url("/")}): 项目定义、模型结构、研究计划、方法与适用边界。
- [RSS](${url("/rss.xml")}): 已发布研究内容的更新订阅。
- [Sitemap](${url("/sitemap-index.xml")}): 可抓取页面索引。

## Published research

${researchLinks || "当前没有已发布的研究文章。"}

## Current status

- 网站框架已建立。
- 模型公式、参数来源和研究文章仍在准备与核验。
- 首页模型图仅表达结构，不提供车型结论或个人财务建议。

## Citation guidance

引用本站内容时，请保留页面标题、公开 URL、发布日期或更新时间，并注明适用条件。只有标记为已发布的页面可以作为正式研究内容引用。
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
