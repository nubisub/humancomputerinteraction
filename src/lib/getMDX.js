import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getMDX = async (slug) => {
	const files = fs.readdirSync(
		path.join(process.cwd(), "src", "data", "news")
	);
	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join(process.cwd(), "src", "data", "news", filename)
		);
		const { data: frontMatter } = matter(markdownWithMeta);
		return {
			slug: filename.replace(".mdx", ""),
			frontMatter,
		};

	});
	return {
		posts,
	};
};