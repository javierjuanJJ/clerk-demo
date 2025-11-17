import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
// Definición de rutas protegidas
const isProtectedRoute = createRouteMatcher([
    '/retos', // Ruta protegida [10]
    // También se pueden usar expresiones regulares [10]
  ]);
  
  export const onRequest = clerkMiddleware({
    // Opciones de configuración
    // ...
    // Lógica de protección:
    // (Esta lógica se basa en el comportamiento descrito, aunque la implementación en el código puede ser más concisa dentro de ClerkMiddleware) [11]
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