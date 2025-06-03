import postgres from 'postgres'

// Usa correctamente la variable de entorno o directamente la URL (recomendado: variable de entorno)
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Spotify16k1234@db.nekpeywnfddgehftmquk.supabase.co:5432/postgres'

const sql = postgres(connectionString)

async function testConnection() {
  try {
    const result = await sql`SELECT 1 + 1 AS result`
    console.log('Conexión exitosa:', result)
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  } finally {
    await sql.end({ timeout: 5 })
  }
}
testConnection()