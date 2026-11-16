window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "postgresql",
  order: 12,
  group: "Data & Analysis",
  name: "PostgreSQL",
  color: "#336791",
  tagline: "A powerful free database server that you talk to with SQL.",
  level: "Intermediate",
  usedFor: "web apps, backends, analytics, anything that needs a reliable database",
  ext: ".sql",
  comment: "--",
  ci: true,
  kw: ["select", "from", "where", "and", "or", "not", "insert", "into", "values", "update", "set", "delete", "create", "table", "database", "user", "role", "drop", "alter", "order", "by", "group", "limit", "join", "on", "as", "null", "default", "primary", "key", "references", "unique", "returning", "with", "grant", "all", "on", "to", "begin", "commit", "rollback", "extension", "if", "exists", "index", "using"],
  types: ["serial", "bigserial", "integer", "bigint", "text", "varchar", "boolean", "numeric", "date", "timestamp", "timestamptz", "uuid", "jsonb", "json", "now", "count", "sum", "avg"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The most used commands on one screen. PostgreSQL uses normal SQL plus a few extras and a handy command-line tool called psql.",
      code: "-- Hello, World\nSELECT 'Hello, World!';\n\n-- Database, table and rows\nCREATE DATABASE shop;\nCREATE TABLE people (id SERIAL PRIMARY KEY, name TEXT NOT NULL, age INTEGER);\nINSERT INTO people (name, age) VALUES ('Ada', 36) RETURNING id;\n\n-- Read and change\nSELECT * FROM people WHERE age > 30;\nUPDATE people SET age = 37 WHERE name = 'Ada';"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install PostgreSQL from postgresql.org, or with your package manager. The installer asks you to choose a password for the main user, called postgres. Then connect with the psql tool. Inside psql, commands that start with a backslash (like \\l) are shortcuts, and SQL statements end with a semicolon.",
      shell: true,
      code: `psql --version
psql -U postgres                 # connect as the postgres user
psql -U postgres -d shop         # connect to the database called shop
psql -U postgres -f setup.sql    # run a script file

sudo apt install postgresql      # Debian/Ubuntu
brew install postgresql          # macOS
winget install PostgreSQL.PostgreSQL   # Windows

# Inside psql:
# \\l   list databases      \\c shop   switch database
# \\dt  list tables         \\q        quit`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Once you are inside psql, a SELECT with no table prints a value. Next, create your first database and connect to it.",
      code: `SELECT 'Hello, World!';

CREATE DATABASE shop;
-- then switch to it with:  \\c shop`
    },
    {
      id: "variables",
      title: "Data types",
      text: "Every column has a type. SERIAL gives you an id that counts up by itself. Use TEXT for words, INTEGER or NUMERIC for numbers, BOOLEAN for true and false, and TIMESTAMPTZ for dates with time. PostgreSQL also stores JSON and unique ids (UUID) very well.",
      code: `CREATE TABLE products (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL UNIQUE,
  price      NUMERIC(10, 2) NOT NULL DEFAULT 0,
  in_stock   BOOLEAN DEFAULT TRUE,
  tags       JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO products (name, price, tags)
VALUES ('Pen', 1.50, '["office", "writing"]');`
    },
    {
      id: "control",
      title: "Filtering & decisions",
      text: "WHERE, AND, OR, IN, BETWEEN and CASE work like in any SQL. PostgreSQL adds ILIKE for searches that ignore capitals, and it can search inside JSON with the @> operator.",
      code: `SELECT name, price
FROM products
WHERE price BETWEEN 1 AND 10
  AND name ILIKE 'p%'            -- ignores upper/lower case
ORDER BY price DESC
LIMIT 10;

SELECT name FROM products WHERE tags @> '["office"]';   -- inside JSON

SELECT name,
  CASE WHEN in_stock THEN 'available' ELSE 'sold out' END AS status
FROM products;`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Besides the usual COUNT, SUM and AVG, PostgreSQL has many functions for text, dates and more. You can also write your own with CREATE FUNCTION.",
      code: `SELECT COUNT(*), AVG(price) FROM products;

SELECT upper(name), length(name), now(), age(created_at) FROM products;

CREATE FUNCTION add_tax(price NUMERIC) RETURNS NUMERIC AS $$
  SELECT price * 1.2;
$$ LANGUAGE SQL;

SELECT name, add_tax(price) FROM products;`
    },
    {
      id: "collections",
      title: "Tables & joins",
      text: "Link tables with a FOREIGN KEY (REFERENCES) so a row can only point to something that exists. JOIN brings the data back together in a query. A WITH query (also called a CTE) lets you name an intermediate result.",
      code: `CREATE TABLE orders (
  id         SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products (id),
  quantity   INTEGER NOT NULL
);

SELECT p.name, SUM(o.quantity) AS sold
FROM orders AS o
JOIN products AS p ON p.id = o.product_id
GROUP BY p.name
ORDER BY sold DESC;

WITH big AS (SELECT * FROM orders WHERE quantity > 10)
SELECT COUNT(*) FROM big;`
    },
    {
      id: "errors",
      title: "Errors & safety",
      text: "PostgreSQL stops with a clear error, for example when a UNIQUE value already exists. Inside a transaction, one error cancels the whole thing until you ROLLBACK. Always test UPDATE and DELETE with a SELECT first, and take a backup with pg_dump before big changes.",
      code: `BEGIN;
UPDATE products SET price = price * 2 WHERE in_stock;
SELECT name, price FROM products;     -- look before you commit
COMMIT;                               -- or ROLLBACK; to undo

-- A duplicate name gives:  ERROR: duplicate key value violates unique constraint
-- Fix: INSERT ... ON CONFLICT (name) DO NOTHING;`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Never put your apps in charge of the postgres admin account. Create a separate user for each app and give it only the rights it needs. Add indexes for the columns you search often, and use EXPLAIN to see why a query is slow.",
      code: `CREATE USER shop_app WITH PASSWORD 'choose-a-strong-one';
GRANT SELECT, INSERT, UPDATE ON products TO shop_app;

CREATE INDEX idx_products_name ON products (name);

EXPLAIN ANALYZE SELECT * FROM products WHERE name = 'Pen';`
    }
  ]
});
