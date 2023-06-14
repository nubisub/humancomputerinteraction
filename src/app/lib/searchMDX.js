import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";


export const searchMDX = async (name) => {
	try {
		const markdownWithMeta = fs.readFileSync(
			path.join(process.cwd(), "src", "data", "news", name + ".mdx")
		);
		const { data: frontMatter, content } = matter(markdownWithMeta);
		return {
			posts: {
				slug: name,
				frontMatter,
				content,
			},
		};
	} catch (error) {
        return {
            posts: null
        }
    }
};
