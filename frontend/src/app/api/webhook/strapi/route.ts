import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-origin") !== "strapi") {
    return new NextResponse("", { status: 400, statusText: "Bad Request" });
  }

  revalidateTag("strapi");
  return new NextResponse("OK");
}
