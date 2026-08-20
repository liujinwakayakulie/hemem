import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL }) {
  const entries = await getCollection("research", ({ data }) => data.status === "published");

  return rss({
    title: "HEMEM 研究更新",
    description: "家用新能源里程平衡模型的研究文章、数据说明与修订记录。",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/research/${entry.id}/`,
    })),
    customData: "<language>zh-CN</language>",
  });
}
