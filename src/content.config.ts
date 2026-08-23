import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    status: z.enum(["draft", "review", "published"]).default("draft"),
    version: z.string().optional(),
    docType: z.enum(["模型说明", "情景研究", "使用指南"]).optional(),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.url()).default([]),
  }),
});

export const collections = { research };
