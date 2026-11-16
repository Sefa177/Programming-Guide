window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "react",
  order: 19,
  group: "Frameworks & Engines",
  name: "React",
  color: "#149eca",
  tagline: "Build web pages out of small reusable pieces called components.",
  level: "Intermediate",
  usedFor: "web apps, dashboards, interactive websites",
  ext: ".jsx",
  comment: "//",
  kw: ["const", "let", "function", "return", "if", "else", "import", "export", "default", "from", "true", "false", "null", "new", "async", "await"],
  types: ["useState", "useEffect", "useRef", "useMemo", "React", "console", "log", "map", "filter", "fetch", "JSON", "Math", "props", "children", "key", "onClick", "onChange", "className", "value", "div", "button", "input", "ul", "li", "h1", "p"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The core ideas on one screen. A component is a function that returns what should appear on the page. You need to know JavaScript first.",
      code: "import { useState } from \"react\";\n\n// A component: a function that starts with a capital letter\nfunction Counter({ label }) {            // props come in as an object\n  const [count, setCount] = useState(0); // state: a value that can change\n\n  return (\n    <div>\n      <h1>{label}: {count}</h1>            {/* {} puts JavaScript in the page */}\n      <button onClick={() => setCount(count + 1)}>Add</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter label=\"Clicks\" />;\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Node.js from nodejs.org. Then create a project with Vite, a fast and simple tool. The dev server shows your page in the browser and refreshes it every time you save a file. The code you edit is in the src folder, starting with src/App.jsx.",
      shell: true,
      code: `node --version
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev                # open the address it prints (http://localhost:5173)

npm run build              # make the final files for a website (dist folder)`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Edit src/App.jsx. A component is a function that returns JSX, which looks like HTML but lives inside JavaScript. A component can return only one parent element, so wrap things in a div or in empty tags.",
      code: `export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>My first React page.</p>
    </div>
  );
}`
    },
    {
      id: "jsx",
      title: "JSX & components",
      text: "Inside JSX, curly braces run JavaScript. Use className instead of class. Component names start with a capital letter, and you use them like your own HTML tags. Values passed into a component are called props.",
      code: `function Greeting({ name, big }) {         // props
  const style = { fontSize: big ? 32 : 16 };
  return <p className="hello" style={style}>Hello, {name}!</p>;
}

export default function App() {
  const user = "Ada";
  return (
    <div>
      <Greeting name={user} big={true} />
      <Greeting name="Linus" big={false} />
      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}`
    },
    {
      id: "state",
      title: "State & events",
      text: "State is a value that React remembers, and that updates the page when it changes. Create it with useState: you get the current value and a function to change it. Never change the value directly, always use that function. Events like onClick and onChange call your functions.",
      code: `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name || "stranger"}</p>
    </div>
  );
}`
    },
    {
      id: "lists",
      title: "Lists & conditions",
      text: "Show a list with map(), and give every item a unique key so React can track it. Show something only when a condition is true with the && sign or with a ternary (a ? b : c).",
      code: `const todos = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Build an app", done: false },
];

export default function App() {
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          {t.text} {t.done ? "(done)" : "(todo)"}
        </li>
      ))}
      {todos.length === 0 && <li>Nothing to do</li>}
    </ul>
  );
}`
    },
    {
      id: "effects",
      title: "Effects & data",
      text: "useEffect runs code after the page is shown. It is the place to load data from a server. The list at the end tells React when to run it again: an empty list means only once, when the component first appears.",
      code: `import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);                                  // [] = run once

  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "The screen is a function of your data: you change the state, and React updates the page for you. Split the page into small components, and keep each one simple. Hooks like useState and useEffect must be used at the top of a component, never inside an if or a loop.",
      code: `// state in, page out
function Cart({ items }) {
  const total = items.reduce((sum, i) => sum + i.price, 0);
  return <p>Total: {total.toFixed(2)}</p>;
}

// small pieces, put together
export default function App() {
  return (
    <main>
      <Cart items={[{ price: 1.5 }, { price: 2.25 }]} />
    </main>
  );
}`
    }
  ]
});
