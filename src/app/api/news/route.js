import { NextResponse } from "next/server";
import { getMDX } from "@/app/lib/getMDX";

export async function GET() {
	const res = await getMDX();
	// sort by date
	res.posts.sort((a, b) => {
		return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
	});

	return NextResponse.json(res);
}
