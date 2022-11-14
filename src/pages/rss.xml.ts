import rss from "@astrojs/rss";
import { getArticles, getPublished, getSorted } from "../contents";

const articles = getPublished(getSorted(getArticles()));

export function get() {
	return rss({
		title: "Michael Grenier",
		description: "",
		site: "https://grenier.dev",
		items: articles
				.map(({ frontmatter, url }) => ({
					link: url!,
					title: frontmatter.title,
					description: frontmatter.description ?? "",
					pubDate: new Date(frontmatter.publishDate),
				}))
	})
}