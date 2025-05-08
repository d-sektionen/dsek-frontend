import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REDIRECTS: Record<string, string> = {
  "/utskott_och_foretagsevent": "/utskott",
};

export function middleware(request: NextRequest) {
  let redirect = REDIRECTS[request.nextUrl.pathname];
  if (redirect != null) {
    if (redirect[0] == "/") {
      redirect = process.env.BASE_URL + redirect;
    }
    return NextResponse.redirect(redirect);
  }
}

export const config = {};
