window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "cpp",
  order: 5,
  name: "C++",
  color: "#00599c",
  tagline: "C with classes, templates and a large standard library. Powerful and fast.",
  level: "Advanced",
  usedFor: "games, browsers, finance, high-performance software",
  ext: ".cpp",
  comment: "//",
  kw: ["int", "double", "char", "bool", "void", "auto", "const", "if", "else", "for", "while", "return", "class", "struct", "public", "private", "try", "catch", "throw", "true", "false", "include", "using", "namespace", "new", "delete"],
  types: ["std", "string", "vector", "map", "cout", "cin", "endl", "runtime_error", "exception", "unique_ptr", "make_unique", "main"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "#include <iostream>\n#include <string>\n#include <vector>\n\nint main() {\n    // Hello, World\n    std::cout << \"Hello, World!\\n\";\n\n    // Variables\n    std::string name = \"Ada\";\n    int age = 36;\n    double pi = 3.14159;\n    auto ready = true;               // type worked out for you\n\n    // Loops\n    for (int i = 0; i < 3; i++) {\n        std::cout << i << \"\\n\";\n    }\n\n    int n = 3;\n    while (n > 0) {\n        n--;\n    }\n\n    std::vector<std::string> items = {\"a\", \"b\"};\n    for (const auto& item : items) {   // over a vector\n        std::cout << item << \"\\n\";\n    }\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Like C, C++ is compiled. Install g++ (part of GCC), compile with a modern standard, then run the result.",
      shell: true,
      code: "g++ --version\ng++ -std=c++17 hello.cpp -o hello\n./hello            # Windows: hello.exe"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "std::cout prints text, and << chains pieces together.",
      code: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Types are written out, or you can let the compiler work them out with auto. std::string is a real text type, unlike C.",
      code: "#include <iostream>\n#include <string>\n\nint main() {\n    int age = 36;\n    double pi = 3.14159;\n    bool ready = true;\n    std::string name = \"Ada\";\n    auto total = age * 2;      // compiler picks int\n\n    std::cout << name << \" \" << age << \" \" << total << std::endl;\n    return 0;\n}"
    },
    {
      id: "control",
      title: "Control flow",
      text: "The same if, for and while as C. A range-based for loop walks through every item of a container.",
      code: "int score = 72;\nif (score >= 90) {\n    std::cout << \"A\\n\";\n} else if (score >= 70) {\n    std::cout << \"B\\n\";\n} else {\n    std::cout << \"Keep going\\n\";\n}\n\nfor (int i = 0; i < 3; i++) {\n    std::cout << i << \"\\n\";\n}\n\nstd::vector<int> nums = {1, 2, 3};\nfor (int n : nums) {\n    std::cout << n << \"\\n\";\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Functions look like C, with extras such as default values. Pass by reference (&) to avoid copying large objects.",
      code: "#include <iostream>\n#include <string>\n\nstd::string greet(const std::string& name, std::string punct = \"!\") {\n    return \"Hello, \" + name + punct;\n}\n\nint main() {\n    std::cout << greet(\"Ada\") << std::endl;\n    return 0;\n}"
    },
    {
      id: "collections",
      title: "Collections",
      text: "The standard library gives you vector (growable list) and map (key-value pairs), so you rarely need raw arrays.",
      code: "#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<int> nums = {1, 2, 3};\n    nums.push_back(4);\n\n    std::map<std::string, int> ages;\n    ages[\"Ada\"] = 36;\n    ages[\"Linus\"] = 54;\n\n    for (const auto& pair : ages) {\n        std::cout << pair.first << \" \" << pair.second << \"\\n\";\n    }\n    std::cout << nums.size() << std::endl;   // 4\n    return 0;\n}"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "C++ has exceptions. Throw one when something goes wrong and catch it where you can deal with it.",
      code: "#include <iostream>\n#include <stdexcept>\n\ndouble divide(double a, double b) {\n    if (b == 0) throw std::runtime_error(\"division by zero\");\n    return a / b;\n}\n\nint main() {\n    try {\n        std::cout << divide(4, 0) << std::endl;\n    } catch (const std::exception& e) {\n        std::cout << \"Error: \" << e.what() << std::endl;\n    }\n    return 0;\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Prefer smart pointers over raw new and delete. A unique_ptr frees its memory automatically when it goes out of scope, so you cannot forget.",
      code: "#include <iostream>\n#include <memory>\n\nclass Dog {\npublic:\n    void bark() { std::cout << \"Woof!\" << std::endl; }\n};\n\nint main() {\n    auto dog = std::make_unique<Dog>();   // freed automatically\n    dog->bark();\n    return 0;\n}"
    }
  ]
});
