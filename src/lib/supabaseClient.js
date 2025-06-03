// src/lib/supabaseClient.js
import postgres from 'postgres'

// ❗Este código solo debe usarse en el servidor (como en endpoints)
const connectionString = 'postgresql://postgres:Spotify16k1234@db.nekpeywnfddgehftmquk.supabase.co:5432/postgres'

const sql = postgres(connectionString)

export default sql
