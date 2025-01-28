import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/settings(.*)",
]);

export default clerkMiddleware((auth, req) => {
    if (!isProtectedRoute(req)) return;
});

export const config = {
    matcher: ["/((?!_next|.*\\.(?:html?|css|js|json|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)"],
};
