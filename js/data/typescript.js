window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "typescript",
  order: 17,
  name: "TypeScript",
  color: "#3178c6",
  tagline: "JavaScript with types: your editor catches mistakes before the code even runs.",
  level: "Intermediate",
  usedFor: "web apps, Node.js backends, large projects, React apps",
  ext: ".ts",
  comment: "//",
  kw: ["const", "let", "var", "function", "return", "if", "else", "for", "while", "of", "in", "switch", "case", "break", "continue", "class", "interface", "type", "enum", "extends", "implements", "new", "this", "import", "export", "from", "async", "await", "try", "catch", "finally", "throw", "true", "false", "null", "undefined", "readonly", "as", "typeof"],
  types: ["string", "number", "boolean", "any", "unknown", "void", "never", "Array", "Promise", "Record", "Partial", "console", "log", "Error", "Math", "JSON", "push", "map", "filter", "length"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. It is JavaScript plus type notes after a colon.",
      code: "// Hello, World\nconsole.log(\"Hello, World!\");\n\n// Variables with types\nconst name: string = \"Ada\";\nlet age: number = 36;\nconst ready: boolean = true;\nconst scores: number[] = [80, 95, 70];\n\n// Loops\nfor (let i = 0; i < 3; i++) {   // 0, 1, 2\n  console.log(i);\n}\n\nfor (const s of scores) {\n  console.log(s);\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Node.js from nodejs.org first. Then add TypeScript to your project. Browsers cannot run .ts files, so the tsc tool turns them into .js files. For quick tests, tsx runs a .ts file directly. You can also try code online at typescriptlang.org/play.",
      shell: true,
      code: `node --version
npm init -y
npm install --save-dev typescript tsx

npx tsc --init             # create tsconfig.json
npx tsc                    # compile all .ts files to .js
node hello.js              # run the compiled file

npx tsx hello.ts           # or run the .ts file directly`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "The same as JavaScript. Save it as hello.ts and run it with tsx, or compile it with tsc.",
      code: `console.log("Hello, World!");`
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Write the type after a colon. Most of the time TypeScript can guess the type from the value, so you do not need to write it. If you try to put the wrong kind of value in, the editor shows an error right away. Use a union (|) when a value can be one of several types.",
      code: `const name: string = "Ada";
let age: number = 36;
const ready: boolean = true;
const city = "Adana";            // type is guessed: string

let id: string | number = 7;     // either one is allowed
id = "A-7";

age = "old";                     // ERROR: a string is not a number

let anything: unknown = 5;       // safe "any value" type
const total = (age as number) + 1;`
    },
    {
      id: "control",
      title: "Control flow",
      text: "if, switch and loops are the same as in JavaScript. A nice extra: TypeScript understands your checks. After typeof id === 'string', it knows id is a string inside that block. This is called narrowing.",
      code: `const score = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("Keep going");
}

function show(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());   // here id is a string
  } else {
    console.log(id.toFixed(2));      // here id is a number
  }
}

for (let i = 0; i < 3; i++) console.log(i);`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Write a type for each parameter and for the value that is returned. A question mark makes a parameter optional. Arrow functions work like in JavaScript.",
      code: `function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, title?: string): string {   // title is optional
  return "Hello " + (title ? title + " " : "") + name;
}

const square = (x: number): number => x * x;

console.log(add(2, 3), greet("Ada"), square(4));`
    },
    {
      id: "collections",
      title: "Collections & shapes",
      text: "Arrays hold many values of one type. For objects, describe their shape with an interface or a type. TypeScript then checks that every object has the right properties.",
      code: `const nums: number[] = [10, 20, 30];
nums.push(40);

interface User {
  name: string;
  age: number;
  email?: string;            // optional property
}

const ada: User = { name: "Ada", age: 36 };
const people: User[] = [ada, { name: "Linus", age: 54 }];

const ages: Record<string, number> = { Ada: 36, Linus: 54 };

const names = people.map((p) => p.name);   // string[]`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Use try and catch like in JavaScript. The caught value has the type unknown, so check it before you use it. The best protection is the compiler itself: many mistakes are caught before the program runs.",
      code: `function parse(text: string): number {
  const n = Number(text);
  if (Number.isNaN(n)) {
    throw new Error("Not a number: " + text);
  }
  return n;
}

try {
  parse("abc");
} catch (err) {
  if (err instanceof Error) {
    console.log("Caught:", err.message);
  }
}`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Types are a safety net that disappears when the code is compiled to JavaScript. Describe your data once with an interface, and the editor then helps you with auto-complete and warns you about typos.",
      code: `interface Product {
  id: number;
  name: string;
  price: number;
}

function total(items: Product[]): number {
  return items.reduce((sum, p) => sum + p.price, 0);
}

total([{ id: 1, name: "Pen", price: 1.5 }]);
total([{ id: 1, name: "Pen" }]);   // ERROR: price is missing`
    }
  ]
});
