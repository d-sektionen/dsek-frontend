import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REDIRECTS: Record<string, string> = {
  "/utskott_och_foretagsevent": "/utskott",
};

export function middleware(request: NextRequest) {
  const redirect = REDIRECTS[request.nextUrl.pathname];
  if (redirect != null) {
    return NextResponse.redirect(new URL(redirect, request.nextUrl));
  }
}

export const config = {};
