window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "javascript",
  order: 2,
  name: "JavaScript",
  color: "#f0b400",
  tagline: "The language of the web, running in every browser and on servers too.",
  level: "Beginner-friendly",
  usedFor: "websites, web apps, servers",
  ext: ".js",
  comment: "//",
  kw: ["let", "const", "var", "function", "return", "if", "else", "for", "while", "of", "in", "try", "catch", "finally", "throw", "new", "true", "false", "null", "undefined", "async", "await", "typeof"],
  types: ["console", "Error", "JSON", "Object", "Math", "Array", "fetch", "setTimeout"],
  topics: [
    {
      id: "setup",
      title: "Setup & run",
      text: "In a browser, press F12 and open the Console to try code right away. To run files on your computer, install Node.js and use the node command.",
      shell: true,
      code: "node --version\nnode hello.js\nnpm init -y            # start a project\nnpm install lodash     # add a package"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "console.log prints to the browser console or to the terminal in Node.",
      code: "console.log(\"Hello, World!\");"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Use const by default and let when the value must change. Types are decided at run time.",
      code: "let count = 0;\ncount = count + 1;\nconst name = \"Ada\";            // cannot be reassigned\nconst user = { name: \"Ada\", age: 36 };\nconst ready = true;\nlet nothing = null;\nlet notSet;                    // undefined\n\nconsole.log(typeof count);     // \"number\""
    },
    {
      id: "control",
      title: "Control flow",
      text: "The syntax is close to C: braces for blocks, and for or while for loops. for...of walks through the items of an array.",
      code: "const score = 72;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"Keep going\");\n}\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\nfor (const fruit of [\"apple\", \"pear\"]) {\n  console.log(fruit);\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Functions are values, so you can store them in variables and pass them to other functions. Arrow functions are the short form.",
      code: "function greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\n\nconst square = (x) => x * x;    // arrow function\nconsole.log(greet(\"Ada\"), square(5));\n\nsetTimeout(() => console.log(\"later\"), 1000);"
    },
    {
      id: "collections",
      title: "Collections",
      text: "Arrays hold ordered lists and objects hold named values. map, filter and reduce transform arrays without loops.",
      code: "const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map((n) => n * 2);\nconst evens = nums.filter((n) => n % 2 === 0);\nconst total = nums.reduce((sum, n) => sum + n, 0);\n\nconst person = { name: \"Ada\", skills: [\"math\", \"code\"] };\nperson.age = 36;\nconsole.log(Object.keys(person));   // [\"name\", \"skills\", \"age\"]"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Use try and catch to handle errors, and throw new Error to raise one.",
      code: "try {\n  JSON.parse(\"{ not valid json\");\n} catch (error) {\n  console.log(\"Could not parse:\", error.message);\n} finally {\n  console.log(\"done\");\n}\n\nfunction mustBePositive(n) {\n  if (n <= 0) throw new Error(\"n must be positive\");\n  return n;\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Always prefer === over ==, because == converts types in surprising ways. Waiting for slow things such as network requests is done with async and await.",
      code: "console.log(0 == \"0\");     // true  (loose equality converts types)\nconsole.log(0 === \"0\");    // false (strict equality, prefer this)\n\nasync function load() {\n  const response = await fetch(\"https://example.com/data.json\");\n  return await response.json();\n}"
    }
  ]
});
