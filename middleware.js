// middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",          // Landing page
  "/about",
  "/features",
  "/community",
  "/sign-in",
  "/sign-up",
]);

export default clerkMiddleware(async (auth, req) => {
  // Require auth for all non-public routes
  if (!isPublicRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return Response.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
