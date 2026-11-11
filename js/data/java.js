window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "java",
  order: 6,
  name: "Java",
  color: "#e76f00",
  tagline: "Write once, run on any computer with a JVM. Very common in big companies and Android.",
  level: "Intermediate",
  usedFor: "enterprise software, Android, backends",
  ext: ".java",
  comment: "//",
  kw: ["public", "private", "static", "void", "class", "int", "double", "boolean", "char", "if", "else", "for", "while", "return", "new", "try", "catch", "finally", "throw", "throws", "true", "false", "null", "import", "final", "var"],
  types: ["String", "System", "List", "ArrayList", "Map", "HashMap", "Exception", "IllegalArgumentException", "NumberFormatException", "Integer", "main"],
  topics: [
    {
      id: "setup",
      title: "Setup & run",
      text: "Install a JDK (for example Temurin or OpenJDK). The file name must match the public class name. Since Java 11 you can run a single file directly, or compile first with javac.",
      shell: true,
      code: "java --version\njava Hello.java          # compile and run in one step\n\njavac Hello.java         # or: compile to Hello.class\njava Hello               # then run it"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "All code lives inside a class. The program starts at the main method.",
      code: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Java is statically typed: you write the type, or use var and let the compiler infer it. Text is the String class.",
      code: "int age = 36;\ndouble pi = 3.14159;\nboolean ready = true;\nchar letter = 'A';\nString name = \"Ada\";\nvar total = age * 2;      // inferred as int\n\nSystem.out.println(name + \" \" + age + \" \" + total);"
    },
    {
      id: "control",
      title: "Control flow",
      text: "Java uses the same if, for and while as C. The enhanced for loop walks through every item of a collection. These lines go inside main.",
      code: "int score = 72;\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 70) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"Keep going\");\n}\n\nfor (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}\n\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    System.out.println(n);\n}"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Functions are called methods and must belong to a class. static means you can call it without creating an object first.",
      code: "public class Hello {\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(2, 3));\n    }\n}"
    },
    {
      id: "collections",
      title: "Collections",
      text: "ArrayList is a growable list and HashMap stores key-value pairs. Put the element type in angle brackets.",
      code: "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\npublic class Hello {\n    public static void main(String[] args) {\n        List<String> fruits = new ArrayList<>();\n        fruits.add(\"apple\");\n        fruits.add(\"banana\");\n\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put(\"Ada\", 36);\n\n        for (String f : fruits) {\n            System.out.println(f);\n        }\n        System.out.println(ages.get(\"Ada\"));   // 36\n    }\n}"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Use try, catch and finally. Throw your own exception with throw new.",
      code: "public class Hello {\n    static int parse(String s) {\n        if (s == null) {\n            throw new IllegalArgumentException(\"s must not be null\");\n        }\n        return Integer.parseInt(s);\n    }\n\n    public static void main(String[] args) {\n        try {\n            System.out.println(parse(\"abc\"));\n        } catch (NumberFormatException e) {\n            System.out.println(\"Not a number: \" + e.getMessage());\n        } finally {\n            System.out.println(\"done\");\n        }\n    }\n}"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Java is object-oriented: a class describes a kind of thing and each object made with new is one instance of it. Compare strings with .equals(), never ==.",
      code: "class Dog {\n    private String name;\n\n    Dog(String name) {\n        this.name = name;\n    }\n\n    void bark() {\n        System.out.println(name + \" says Woof!\");\n    }\n}\n\n// inside main:\nDog d = new Dog(\"Rex\");\nd.bark();\nSystem.out.println(\"a\".equals(\"a\"));   // true"
    }
  ]
});
