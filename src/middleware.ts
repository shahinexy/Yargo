/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token: any = cookieStore.get("token");
  const currentPath = request.nextUrl.pathname;

  console.log(token);

  // Allow access to the login page without authentication
  if (currentPath === "/login") {
    return NextResponse.next();
  }

  // Redirect to login if token is not present
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

// "Matching Paths"
export const config = {
  matcher: ["/((?!login|api|_next/static|_next/image|favicon.ico).*)"],
};
