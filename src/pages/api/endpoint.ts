// src/pages/api/check-user.ts
import type { APIContext } from "astro";
import { supabase } from "../../db/supabase";

export async function POST({ request }: APIContext) {
    console.log("POST /api/endpoint llamado");
  const { nombre, spotify_id, contraseña } = await request.json();

  const { data, error } = await supabase
    .from("usuario")
    .insert([{ nombre, spotify_id, contraseña }]);

  return new Response(JSON.stringify({ inserted: true, error }), {
    status: error ? 500 : 200,
  });
}