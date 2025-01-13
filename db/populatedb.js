/*const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  content VARCHAR(255),
  added DATE
);

INSERT INTO messages (name,content,added) 
VALUES
  ('Bryan','this is my message 1',CURRENT_DATE ),
  ('Odin','this is my message 2',CURRENT_DATE ),
  ('Damon','this is my message 3',CURRENT_DATE );
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
*/

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  content VARCHAR(255),
  added DATE
);

INSERT INTO messages (name,content,added) 
VALUES
  ('Bryan','this is my message 1',CURRENT_DATE ),
  ('Odin','this is my message 2',CURRENT_DATE ),
  ('Damon','this is my message 3',CURRENT_DATE );
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
