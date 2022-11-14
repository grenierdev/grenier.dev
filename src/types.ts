

export interface Frontmatter {
	title: string;
	publishDate: string;
	ogImage?: string;
	description?: string;
	featured?: boolean;
	draft?: boolean;
	tags?: string[];
}