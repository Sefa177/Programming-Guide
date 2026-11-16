window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "sql",
  order: 11,
  group: "Data & Analysis",
  name: "SQL",
  color: "#e38c00",
  tagline: "The language for asking questions of a database: find, count, sort and combine data.",
  level: "Beginner-friendly",
  usedFor: "databases, reports, data analysis, backends",
  ext: ".sql",
  comment: "--",
  ci: true,
  kw: ["select", "from", "where", "and", "or", "not", "insert", "into", "values", "update", "set", "delete", "create", "table", "drop", "alter", "order", "by", "group", "having", "limit", "join", "inner", "left", "right", "on", "as", "distinct", "null", "is", "in", "like", "between", "case", "when", "then", "else", "end", "primary", "key", "default", "desc", "asc", "union", "begin", "commit", "rollback", "exists"],
  types: ["integer", "int", "text", "real", "numeric", "varchar", "date", "boolean", "count", "sum", "avg", "min", "max", "round", "upper", "lower", "length", "coalesce", "now"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. SQL has no loops: one query works on every row at once.",
      code: "-- Hello, World\nSELECT 'Hello, World!';\n\n-- Make a table and add rows\nCREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);\nINSERT INTO people (name, age) VALUES ('Ada', 36), ('Linus', 54);\n\n-- Read rows\nSELECT name, age FROM people WHERE age > 40 ORDER BY name;\n\n-- Count and average\nSELECT COUNT(*), AVG(age) FROM people;"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "The easiest start is SQLite: one small program, no server, and the database is a single file. Install it, then open or create a database file with sqlite3. Type a query ending with a semicolon. You can also try SQL in the browser at sqliteonline.com.",
      shell: true,
      code: `sqlite3 --version
sqlite3 mydata.db          # opens (or creates) the file
sqlite3 mydata.db < setup.sql    # run a script file

sudo apt install sqlite3   # Debian/Ubuntu
brew install sqlite        # macOS
winget install SQLite.SQLite   # Windows

.tables                    # inside sqlite3: list tables
.quit`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "A SELECT with no table just shows a value. End every statement with a semicolon. SQL words are not case-sensitive, but writing them in capitals makes queries easier to read.",
      code: `SELECT 'Hello, World!';

SELECT 2 + 3 AS total;`
    },
    {
      id: "variables",
      title: "Data types",
      text: "SQL does not have variables like other languages. Instead, you store data in tables, and every column has a type. Common types are INTEGER (whole numbers), REAL (decimals), TEXT (words) and DATE. A column can also be empty, which is called NULL.",
      code: `CREATE TABLE products (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  price REAL,
  added DATE DEFAULT CURRENT_DATE
);

INSERT INTO products (name, price) VALUES ('Pen', 1.5);
INSERT INTO products (name) VALUES ('Mystery');   -- price is NULL

SELECT name, price FROM products WHERE price IS NULL;`
    },
    {
      id: "control",
      title: "Filtering & decisions",
      text: "WHERE keeps only the rows you want. Combine tests with AND and OR. Use LIKE for patterns, IN for a list and BETWEEN for a range. For if/else inside a query, use CASE WHEN.",
      code: `SELECT name, age
FROM people
WHERE age >= 18 AND name LIKE 'A%'     -- names starting with A
ORDER BY age DESC
LIMIT 5;                               -- only the first five

SELECT name,
  CASE
    WHEN age < 18 THEN 'minor'
    WHEN age < 65 THEN 'adult'
    ELSE 'senior'
  END AS group_name
FROM people;`
    },
    {
      id: "functions",
      title: "Functions",
      text: "SQL has built-in functions. Some work on one value, like UPPER or ROUND. Others summarize many rows into one, like COUNT, SUM and AVG. Use GROUP BY to get one summary per group.",
      code: `SELECT UPPER(name), ROUND(price, 1) FROM products;

SELECT COUNT(*) AS how_many,
       SUM(price) AS total,
       AVG(price) AS average,
       MAX(price) AS most
FROM products;

SELECT category, COUNT(*) AS how_many   -- one row per category
FROM products
GROUP BY category
HAVING COUNT(*) > 1;                   -- filter the groups`
    },
    {
      id: "collections",
      title: "Tables & joins",
      text: "A table is a collection of rows, and related data lives in separate tables. JOIN connects them through a shared column, usually an id. INNER JOIN keeps only rows that match on both sides. LEFT JOIN also keeps unmatched rows from the left table.",
      code: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  person_id INTEGER,
  item TEXT
);

SELECT people.name, orders.item
FROM people
INNER JOIN orders ON orders.person_id = people.id;

SELECT people.name, COUNT(orders.id) AS orders_count
FROM people
LEFT JOIN orders ON orders.person_id = people.id   -- includes people with 0 orders
GROUP BY people.name;`
    },
    {
      id: "errors",
      title: "Errors & safety",
      text: "A wrong query returns an error message instead of changing anything. Be careful with UPDATE and DELETE: without WHERE they change every row. Wrap risky changes in a transaction so you can undo them with ROLLBACK.",
      code: `BEGIN;                                 -- start a transaction

UPDATE products SET price = 0;         -- oops, no WHERE: every row changed!

SELECT * FROM products;                -- check the damage
ROLLBACK;                              -- undo everything
-- COMMIT;                             -- or keep it

-- Safer: always filter, and look first
SELECT * FROM products WHERE id = 3;
UPDATE products SET price = 2.0 WHERE id = 3;`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "You describe what you want, not how to get it. The database decides how to find it fast. An index makes searches on a column much quicker, which matters once a table has many rows. Names from the same query are easier to read with short aliases.",
      code: `CREATE INDEX idx_people_name ON people (name);

SELECT p.name, o.item                  -- p and o are short aliases
FROM people AS p
JOIN orders AS o ON o.person_id = p.id
WHERE p.name = 'Ada';`
    }
  ]
});
