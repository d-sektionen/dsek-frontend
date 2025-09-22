import { meiliSearchMultiple } from "@/util/meilisearch";
import { Page, Post } from "@/util/strapi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  if (body.query == null) {
    return new NextResponse("", { status: 400, statusText: "Bad Request" });
  }

  const results = await meiliSearchMultiple<Post | Page>(
    ["post", "page"],
    body.query,
  );

  return NextResponse.json(results);
}
