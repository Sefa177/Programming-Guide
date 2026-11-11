window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "c",
  order: 4,
  name: "C",
  color: "#5c6bc0",
  tagline: "Small, fast and close to the hardware. The base of many other languages.",
  level: "Intermediate",
  usedFor: "operating systems, embedded devices, drivers",
  ext: ".c",
  comment: "//",
  kw: ["int", "char", "double", "float", "void", "long", "unsigned", "if", "else", "for", "while", "switch", "case", "break", "default", "return", "struct", "const", "include", "sizeof", "typedef", "NULL"],
  types: ["FILE", "size_t", "printf", "malloc", "free", "fopen", "fclose", "perror", "strcpy", "main"],
  topics: [
    {
      id: "setup",
      title: "Setup & run",
      text: "C code must be compiled first. Install gcc (Linux: your package manager, macOS: Xcode tools, Windows: MinGW or WSL), compile, then run the result.",
      shell: true,
      code: "gcc --version\ngcc hello.c -o hello\n./hello            # Windows: hello.exe"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "#include pulls in the standard input/output library. Execution starts at main, and returning 0 means success.",
      code: "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Every variable needs a type, written before its name. printf uses placeholders such as %d for integers and %f for decimals.",
      code: "#include <stdio.h>\n\nint main(void) {\n    int age = 36;\n    double pi = 3.14159;\n    char letter = 'A';\n    const int max = 100;\n\n    printf(\"%d %.2f %c %d\\n\", age, pi, letter, max);\n    printf(\"int uses %zu bytes\\n\", sizeof(int));\n    return 0;\n}"
    },
    {
      id: "control",
      title: "Control flow",
      text: "if, for, while and switch work like in most languages. These lines go inside main.",
      code: "int score = 72;\nif (score >= 90) {\n    printf(\"A\\n\");\n} else if (score >= 70) {\n    printf(\"B\\n\");\n} else {\n    printf(\"Keep going\\n\");\n}\n\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d\\n\", i);\n}\n\nswitch (score / 10) {\n    case 10:\n    case 9: printf(\"A\\n\"); break;\n    default: printf(\"Other\\n\");\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "State the return type and parameter types. A function must be declared before it is used, so a prototype at the top lets main call functions defined below it.",
      code: "#include <stdio.h>\n\nint add(int a, int b);          // prototype\n\nint main(void) {\n    printf(\"%d\\n\", add(2, 3));\n    return 0;\n}\n\nint add(int a, int b) {\n    return a + b;\n}"
    },
    {
      id: "collections",
      title: "Collections",
      text: "Arrays have a fixed size. A struct groups several values under one name. Text is an array of char.",
      code: "#include <stdio.h>\n#include <string.h>\n\nstruct Person {\n    char name[20];\n    int age;\n};\n\nint main(void) {\n    int nums[3] = {10, 20, 30};\n    struct Person p;\n    strcpy(p.name, \"Ada\");\n    p.age = 36;\n\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d\\n\", nums[i]);\n    }\n    printf(\"%s is %d\\n\", p.name, p.age);\n    return 0;\n}"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "C has no exceptions. Functions report failure through return values, so you must check them yourself.",
      code: "#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen(\"data.txt\", \"r\");\n    if (f == NULL) {\n        perror(\"fopen\");     // prints why it failed\n        return 1;\n    }\n    fclose(f);\n    return 0;\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Pointers hold memory addresses. Memory you request with malloc is yours to give back with free, otherwise the program leaks it.",
      code: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int value = 7;\n    int *ptr = &value;          // ptr holds the address of value\n    printf(\"%d\\n\", *ptr);       // *ptr reads the value: 7\n\n    int *list = malloc(3 * sizeof(int));   // ask for memory\n    if (list == NULL) return 1;\n    list[0] = 1;\n    free(list);                 // give it back\n    return 0;\n}"
    }
  ]
});
