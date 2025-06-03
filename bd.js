import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL='postgresql://postgres:[YOUR-PASSWORD]@db.nekpeywnfddgehftmquk.supabase.co:5432/postgres'
const sql = postgres(connectionString)

export default sql