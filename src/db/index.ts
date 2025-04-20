import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
  },
});

// Test database connection
async function testConnection() {
  try {
    // Using query instead of connect as it's the proper way to test connection
    await pool.query('SELECT 1');
    console.log('Connected to database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

// Initialize connection
testConnection().catch((error) => {
  console.error('Failed to connect to database:', error);
  process.exit(1);
});

export const db = drizzle(pool, { schema });