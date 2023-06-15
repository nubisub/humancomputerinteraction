import { NextResponse } from "next/server";

import data from "../../data/regions.json";

export async function GET() {
	let provinsi = [];
	data.map((item) => {
		provinsi.push(item.provinsi);
	});
	provinsi = [...new Set(provinsi)];
	return NextResponse.json(provinsi);
}
