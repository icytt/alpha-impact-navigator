import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
  }
});

async function main() {
  try {
    console.log('Starting migration...');
    
    // Read the SQL file
    const sql = fs.readFileSync(path.join(process.cwd(), 'drizzle', '0003_fresh_start.sql'), 'utf8');
    
    // Execute the SQL
    await pool.query(sql);
    
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main(); 