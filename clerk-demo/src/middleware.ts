import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/retos(.*)"])

export default authMiddleware({
  // Matcher que excluye estáticos y rutas internas de Next.js [28]
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  async afterAuth(auth, req, evt) {
    if (isProtectedRoot(req.url)) { // Si es una ruta que necesita protección
      auth().protect({
        // Ejemplo de verificación de permisos específicos [32]:
        has: (permission) => permission.org.billing.create, 
        // O verificación de rol [33]:
        role: "admin" 
      });
    }
  }
});
export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth()

  if (isProtectedRoute(context.request) && !userId) {
    return redirectToSignIn()
  }
});