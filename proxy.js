// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// ✅ Public routes jaha login required nahi
const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/features",
  "/community",
  "/sign-in",
  "/sign-up",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  // Agar route public nahi hai aur user login nahi hai → redirect to sign-in
  if (!isPublicRoute(req) && !userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Warna page load hone do
  return NextResponse.next();
});

// ✅ Required for Next.js Edge Runtime
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
