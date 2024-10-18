// * Next
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const isAuthenticated = true
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth")

  if (isAuthPage) {
    if (isAuthenticated)
      return NextResponse.redirect(new URL("/dashboard", request.url))

    return null
  }

  if (!isAuthenticated) {
    let from = request.nextUrl.pathname

    if (request.nextUrl.search) from += request.nextUrl.search

    return NextResponse.redirect(
      new URL(`/auth/signin?from=${encodeURIComponent(from)}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/groups",
    "/users/:path*",
    "/profile/:path*",
    "/project/:path*",
    "/customers/:path*",
    "/status/:path*",
    "/packages/:path*",
    "/bonus/:path*",
    "/projects/:path*",
    "/reports/:path*",
    "/schedules/:path*",
    "/jobs/:path*",
    "/apps/:path*",
    "/apps/:path*",
    "/faqs/:path*",
    "/posts/:path",
    "/services/:path*",
    "/dev",
    "/events",
  ],
}