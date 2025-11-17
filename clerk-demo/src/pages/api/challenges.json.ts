import type { APIRoute } from 'astro';

import { getUserChallenges, addUserChallenge } from '../../lib/db';

export const GET: APIRoute = async ({ locals }) => {
    const { currentUser } = await locals; // Acceso al usuario actual [17]
    
    if (!currentUser) {
      return new Response(null, { status: 401 }); // No autorizado [17]
    }
    const userId = currentUser.id; // Uso del ID del usuario [17]
    
    // Lógica de la API...
  };