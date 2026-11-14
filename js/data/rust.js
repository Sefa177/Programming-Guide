window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "rust",
  order: 3,
  name: "Rust",
  color: "#ce422b",
  tagline: "Fast like C, but the compiler prevents whole classes of memory bugs.",
  level: "Intermediate",
  usedFor: "systems, tools, web assembly, performance",
  ext: ".rs",
  comment: "//",
  kw: ["fn", "let", "mut", "if", "else", "loop", "while", "for", "in", "match", "use", "struct", "enum", "impl", "pub", "return", "true", "false", "const", "as", "mod"],
  types: ["i32", "u32", "f64", "bool", "str", "usize", "String", "Vec", "HashMap", "Result", "Option", "Ok", "Err", "Some", "None", "main"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "fn main() {\n    // Hello, World\n    println!(\"Hello, World!\");\n\n    // Variables\n    let name = \"Ada\";          // immutable by default\n    let mut age = 36;          // mut allows changes\n    age += 1;\n    let pi: f64 = 3.14159;\n    let ready = true;\n\n    // Loops\n    for i in 0..3 {            // 0, 1, 2\n        println!(\"{}\", i);\n    }\n\n    let mut n = 3;\n    while n > 0 {\n        n -= 1;\n    }\n\n    for item in [\"a\", \"b\"] {   // over an array\n        println!(\"{}\", item);\n    }\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Rust with rustup from rust-lang.org. It includes cargo, the tool that creates projects, builds them and runs them.",
      shell: true,
      code: "rustc --version\ncargo new hello_rust\ncd hello_rust\ncargo run"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Every program starts at fn main. The exclamation mark means println! is a macro, not a normal function.",
      code: "fn main() {\n    println!(\"Hello, World!\");\n}"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Variables are immutable by default. Add mut to allow changes. Rust infers most types, and you can create a new variable with the same name (shadowing).",
      code: "fn main() {\n    let x = 5;              // immutable by default\n    let mut count = 0;      // mut makes it changeable\n    count += 1;\n    let name: &str = \"Ada\";\n    let pi: f64 = 3.14159;\n    let x = x + 1;          // shadowing: a new x\n\n    println!(\"{} {} {} {}\", x, count, name, pi);\n}"
    },
    {
      id: "control",
      title: "Control flow",
      text: "if is an expression, so it can produce a value. match compares a value against patterns and the compiler checks you covered every case.",
      code: "fn main() {\n    let score = 72;\n    if score >= 90 {\n        println!(\"A\");\n    } else if score >= 70 {\n        println!(\"B\");\n    } else {\n        println!(\"Keep going\");\n    }\n\n    for i in 0..3 {\n        println!(\"{}\", i);\n    }\n\n    let label = match score {\n        90..=100 => \"A\",\n        70..=89 => \"B\",\n        _ => \"Keep going\",\n    };\n    println!(\"{}\", label);\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Parameter and return types are written out. The last expression without a semicolon is the return value.",
      code: "fn add(a: i32, b: i32) -> i32 {\n    a + b          // no semicolon: this is the return value\n}\n\nfn main() {\n    println!(\"{}\", add(2, 3));\n}"
    },
    {
      id: "collections",
      title: "Collections",
      text: "Vec is a growable list and HashMap stores key-value pairs. Both live in the standard library.",
      code: "use std::collections::HashMap;\n\nfn main() {\n    let mut nums = vec![1, 2, 3];\n    nums.push(4);\n\n    let mut ages = HashMap::new();\n    ages.insert(\"Ada\", 36);\n    ages.insert(\"Linus\", 54);\n\n    for n in &nums {\n        println!(\"{}\", n);\n    }\n    println!(\"{:?}\", ages.get(\"Ada\"));   // Some(36)\n}"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "There are no exceptions. Functions that can fail return a Result, and the ? operator passes an error up to the caller.",
      code: "fn parse_age(s: &str) -> Result<u32, std::num::ParseIntError> {\n    let age: u32 = s.trim().parse()?;\n    Ok(age)\n}\n\nfn main() {\n    match parse_age(\"42\") {\n        Ok(age) => println!(\"Age: {}\", age),\n        Err(e) => println!(\"Bad input: {}\", e),\n    }\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Ownership is Rust's big idea. Each value has one owner, assigning it elsewhere moves it, and you can lend it out with a reference using &.",
      code: "fn main() {\n    let a = String::from(\"hi\");\n    let b = a;            // ownership moves to b\n    // println!(\"{}\", a);   // error: a was moved\n\n    let c = &b;           // borrow b without taking it\n    println!(\"{} {}\", b, c);\n}"
    }
  ]
});
