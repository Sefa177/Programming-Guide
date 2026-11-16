window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "express",
  order: 21,
  group: "Frameworks & Engines",
  name: "Express",
  color: "#68a063",
  tagline: "A small Node.js framework for building websites and APIs with a few lines of JavaScript.",
  level: "Intermediate",
  usedFor: "web servers, REST APIs, backends for apps",
  ext: ".js",
  comment: "//",
  kw: ["const", "let", "var", "function", "return", "if", "else", "for", "of", "require", "import", "from", "new", "async", "await", "try", "catch", "throw", "true", "false", "null"],
  types: ["express", "app", "get", "post", "put", "delete", "use", "listen", "req", "res", "next", "send", "json", "status", "params", "query", "body", "static", "Router", "console", "log", "Error", "process", "env"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The pieces you need most, on one screen. A route connects a method and an address to a function that sends an answer.",
      code: "const express = require(\"express\");\nconst app = express();\n\napp.use(express.json());                  // read JSON sent by clients\n\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello, World!\");\n});\n\napp.get(\"/users/:id\", (req, res) => {      // :id is a variable part\n  res.json({ id: req.params.id });\n});\n\napp.post(\"/users\", (req, res) => {\n  res.status(201).json(req.body);\n});\n\napp.listen(3000, () => console.log(\"Server on port 3000\"));"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Node.js from nodejs.org. Create a project folder, start it with npm init, and install Express. Put your code in app.js and run it with node. Open http://localhost:3000 in your browser. Press Ctrl+C to stop the server.",
      shell: true,
      code: `node --version
mkdir my-server
cd my-server
npm init -y
npm install express

node app.js                  # start the server
node --watch app.js          # restart automatically when you save`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Create the app, define one route and start listening on a port. Visit the address in a browser, and you will see the text.",
      code: `const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Open http://localhost:3000");
});`
    },
    {
      id: "routes",
      title: "Routes & requests",
      text: "A route has a method (get, post, put, delete) and an address. Parts of the address that start with a colon are variables, found in req.params. Text after the question mark is in req.query. Data sent with a POST is in req.body, once you turn on express.json().",
      code: `app.use(express.json());

app.get("/hello/:name", (req, res) => {
  res.send("Hello, " + req.params.name);          // /hello/Ada
});

app.get("/search", (req, res) => {
  res.send("You searched for " + req.query.q);     // /search?q=cats
});

app.post("/login", (req, res) => {
  const { email } = req.body;                      // sent by the client
  res.json({ ok: true, email });
});`
    },
    {
      id: "api",
      title: "A small JSON API",
      text: "A REST API uses the methods for different actions: GET reads, POST adds, PUT changes and DELETE removes. Use res.json() to send data and res.status() to choose the status code. Here the data is kept in a simple array, a real app would use a database.",
      code: `const todos = [{ id: 1, text: "Learn Express", done: false }];

app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const todo = { id: todos.length + 1, text: req.body.text, done: false };
  todos.push(todo);
  res.status(201).json(todo);                      // 201 = created
});

app.delete("/todos/:id", (req, res) => {
  const i = todos.findIndex((t) => t.id === Number(req.params.id));
  if (i === -1) return res.status(404).json({ error: "Not found" });
  todos.splice(i, 1);
  res.status(204).end();                           // 204 = no content
});`
    },
    {
      id: "middleware",
      title: "Middleware",
      text: "Middleware is a function that runs before your route. It gets req, res and next. Call next() to continue to the next step, or send an answer to stop. Use it for logging, login checks and reading data. express.static serves files, like a website's HTML and images, from a folder.",
      code: `// runs on every request
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();                                  // go on to the route
});

// serve the files in the "public" folder
app.use(express.static("public"));

function requireKey(req, res, next) {
  if (req.headers["x-api-key"] !== "secret") {
    return res.status(401).json({ error: "Not allowed" });
  }
  next();
}

app.get("/private", requireKey, (req, res) => res.send("Welcome"));`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Answer with the right status code: 400 for a bad request, 404 for not found and 500 for a server error. Put an error handler at the very end. It has four parameters, and Express knows that it is for errors. Never send secret details of the error to the client.",
      code: `app.get("/crash", (req, res) => {
  throw new Error("Something broke");
});

// 404 for unknown addresses (put after all routes)
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// the error handler has four parameters
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Server error" });
});`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Everything in Express is a chain: a request enters, passes through middleware and ends in a route that sends the answer. Use express.Router() to split big apps into files, and keep settings like ports and passwords in environment variables, not in the code.",
      code: `// routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json([]));
router.post("/", (req, res) => res.status(201).json(req.body));

module.exports = router;

// app.js
app.use("/users", require("./routes/users"));    // /users and /users/...

const port = process.env.PORT || 3000;
app.listen(port);`
    }
  ]
});
