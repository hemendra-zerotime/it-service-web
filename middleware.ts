// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   const adminToken = request.cookies.get("__SecureAdmin")?.value;
  const isLoggedIn = !!adminToken;
  if (request.nextUrl.pathname.startsWith("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"], // Apply to all /admin routes
};
