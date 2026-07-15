const fs = require('fs');
const path = require('path');
const pg = require('./node_modules/pg');

const sqlFile = path.join(__dirname, 'drizzle/0000_good_grim_reaper.sql');
const sql = fs.readFileSync(sqlFile, 'utf8');

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:GodIsGreat%23999@db.lynhidwqejilishwqgkb.supabase.co:5432/postgres';

const pool = new pg.Pool({ connectionString });

async function run() {
  try {
    console.log('Connecting to Supabase...');
    const client = await pool.connect();
    
    console.log('Executing schema migration SQL...');
    // Split statements by --> statement-breakpoint
    const statements = sql
      .split('--> statement-breakpoint')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    for (const stmt of statements) {
      console.log('Running statement:', stmt.split('\n')[0] + ' ...');
      await client.query(stmt);
    }

    client.release();
    console.log('Supabase tables created successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

run();
