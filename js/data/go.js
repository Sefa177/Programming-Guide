window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "go",
  order: 7,
  name: "Go",
  color: "#00a7c4",
  tagline: "Simple, fast to compile, and built for servers and concurrent programs.",
  level: "Beginner-friendly",
  usedFor: "web services, cloud tools, command-line programs",
  ext: ".go",
  comment: "//",
  kw: ["package", "import", "func", "var", "const", "if", "else", "for", "range", "return", "switch", "case", "default", "struct", "go", "defer", "chan", "map", "true", "false", "nil", "type"],
  types: ["int", "float64", "string", "bool", "error", "fmt", "errors", "strconv", "main", "Println", "Printf"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    // Hello, World\n    fmt.Println(\"Hello, World!\")\n\n    // Variables\n    var age int = 36\n    name := \"Ada\"           // short form, type inferred\n    pi := 3.14159\n    ready := true\n    fmt.Println(name, age, pi, ready)\n\n    // Loops (for is the only loop keyword)\n    for i := 0; i < 3; i++ {\n        fmt.Println(i)\n    }\n\n    n := 3\n    for n > 0 {             // acts like while\n        n--\n    }\n\n    for _, item := range []string{\"a\", \"b\"} {   // over a slice\n        fmt.Println(item)\n    }\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Go from go.dev. go run compiles and runs in one step, and go build produces a single executable file.",
      shell: true,
      code: "go version\ngo run hello.go\ngo build hello.go        # creates an executable\ngo mod init myapp        # start a module for a bigger project"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Every file starts with a package name. A program is the package main with a main function.",
      code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Declare with var, or use := inside a function to declare and infer the type in one go. Unused variables are a compile error.",
      code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var age int = 36\n    name := \"Ada\"          // short form, type inferred\n    pi := 3.14159\n    ready := true\n\n    fmt.Println(name, age, pi, ready)\n}"
    },
    {
      id: "control",
      title: "Control flow",
      text: "Go has just one loop keyword, for, which covers every case. if needs no parentheses but always needs braces. These lines go inside main.",
      code: "score := 72\nif score >= 90 {\n    fmt.Println(\"A\")\n} else if score >= 70 {\n    fmt.Println(\"B\")\n} else {\n    fmt.Println(\"Keep going\")\n}\n\nfor i := 0; i < 3; i++ {\n    fmt.Println(i)\n}\n\nn := 3\nfor n > 0 {             // acts like while\n    n--\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Types come after the names. A function can return more than one value, which is how Go reports errors.",
      code: "package main\n\nimport \"fmt\"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc divide(a, b float64) (float64, bool) {\n    if b == 0 {\n        return 0, false\n    }\n    return a / b, true\n}\n\nfunc main() {\n    fmt.Println(add(2, 3))\n    result, ok := divide(4, 2)\n    fmt.Println(result, ok)\n}"
    },
    {
      id: "collections",
      title: "Collections",
      text: "Slices are growable lists and maps store key-value pairs. range walks through either one.",
      code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    nums := []int{1, 2, 3}\n    nums = append(nums, 4)\n\n    ages := map[string]int{\"Ada\": 36, \"Linus\": 54}\n    ages[\"Grace\"] = 85\n\n    for i, n := range nums {\n        fmt.Println(i, n)\n    }\n    fmt.Println(len(ages))   // 3\n}"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "There are no exceptions. Functions return an error as the last value, and you check it right away.",
      code: "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    n, err := strconv.Atoi(\"abc\")\n    if err != nil {\n        fmt.Println(\"Not a number:\", err)\n        return\n    }\n    fmt.Println(n)\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Goroutines make running work at the same time easy: put go in front of a function call. Channels let goroutines send values to each other.",
      code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    results := make(chan string)\n\n    go func() {            // runs at the same time\n        results <- \"hello from a goroutine\"\n    }()\n\n    fmt.Println(<-results) // waits for the message\n}"
    }
  ]
});
