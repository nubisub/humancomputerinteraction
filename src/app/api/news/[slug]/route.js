import { NextResponse } from "next/server";
import { searchMDX } from "@/app/lib/searchMDX";

export async function GET(request, { params }) {
	const slug = params.slug;
	const { posts } = await searchMDX(slug);
	if (posts === null) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}
	return NextResponse.json(posts ?? null);
}
