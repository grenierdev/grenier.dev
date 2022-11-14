import type { Frontmatter } from "../types";
import type { MarkdownInstance } from "astro";
import { basename, extname, relative } from "path";

export function getArticles() {
	const articles = import.meta.glob<MarkdownInstance<Frontmatter>>("../pages/articles/**/*.{md,mdx}", { eager: true });
	return Object.values(articles);
}

export const getSorted = (articles: ReturnType<typeof getArticles>) => [...articles].sort((a, b) => new Date(a.frontmatter.publishDate).getTime() - new Date(b.frontmatter.publishDate).getTime())

export const getPublished = (articles: ReturnType<typeof getArticles>) => articles.filter(({ frontmatter }) => !(frontmatter.draft ?? true));