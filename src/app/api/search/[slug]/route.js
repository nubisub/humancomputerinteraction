import { NextResponse } from "next/server";
import { getMDX } from "@/app/lib/getMDX";

export async function GET(request, { params }) {
	const { slug } = params;
	const res = await getMDX();
	// sort by date
	res.posts.sort((a, b) => {
		return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
	});
	res.posts = res.posts.map((post) => {
		return {
			title: post.frontMatter.title,
			slug: post.slug,
			date: post.frontMatter.date,
			summary: post.frontMatter.summary,
		};
	});
	const filteredPosts = res.posts.filter((post) => {
		return post.title.toLowerCase().includes(slug.toLowerCase()) || post.summary.toLowerCase().includes(slug.toLowerCase());
	});

	return NextResponse.json(filteredPosts);
}
