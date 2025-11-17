import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
// Definición de rutas protegidas
const isProtectedRoute = createRouteMatcher([
    '/retos(.*)', // Ruta protegida [10]
    // También se pueden usar expresiones regulares [10]
]);

// Dentro de clerkMiddleware, se pasa un callback
export const onRequest = clerkMiddleware((auth, context) => {
    const isProtected = isProtectedRoute(context.request);
    const {userId, redirectToSignIn} = auth();

    if (isProtected && !auth().userId) {
        return redirectToSignIn(); // Redirige al inicio de sesión [11]
    }

});

  // Implementación alternativa mostrada en la API:
/*
export const onRequest = defineMiddleware(async (context, next) => {
    // Ejemplo de cómo interceptar y revisar headers [12]
    const languageHeader = context.request.headers.get('accept-language'); 
    
    // Ejemplo de cómo guardar información en locals [13]:
    context.locals.title = "Spanish App";
 
    const response = await next();
    return response;
});
*/