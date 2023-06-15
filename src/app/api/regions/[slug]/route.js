import { NextResponse } from "next/server";
import data from "../../../data/regions.json";


export async function GET(request, { params }) {    
	const slug = params.slug;
    const posts = data.filter((post) => post.provinsi === slug);
	return NextResponse.json(posts ?? null);
}
