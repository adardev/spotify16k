// src/pages/api/check-user.ts
import type { APIContext } from "astro";
import { supabase } from "../../db/supabase";

export async function POST({ request }: APIContext) {
  const { nombre, spotify_id } = await request.json();

  const { data: existingUser } = await supabase
    .from("usuario")
    .select("*")
    .eq("spotify_id", spotify_id)
    .single();

  if (!existingUser) {
    const { data, error } = await supabase
      .from("usuario")
      .insert([{ nombre, spotify_id }]);

    return new Response(JSON.stringify({ inserted: true, error }), {
      status: error ? 500 : 200,
    });
  }

  return new Response(JSON.stringify({ inserted: false, user: existingUser }), {
    status: 200,
  });
}