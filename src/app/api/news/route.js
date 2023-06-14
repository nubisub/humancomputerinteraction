import { NextResponse } from "next/server";
import { getMDX } from "@/app/lib/getMDX";


export async function GET() {
	const res = await getMDX();
    return NextResponse.json(res);
}