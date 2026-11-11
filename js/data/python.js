window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "python",
  order: 1,
  name: "Python",
  color: "#3776ab",
  tagline: "Readable, beginner-friendly and used almost everywhere.",
  level: "Beginner-friendly",
  usedFor: "scripts, data, AI, web backends",
  ext: ".py",
  comment: "#",
  kw: ["def", "return", "if", "elif", "else", "for", "while", "in", "try", "except", "finally", "raise", "as", "import", "from", "class", "lambda", "True", "False", "None", "and", "or", "not", "with", "pass", "break", "continue", "is"],
  types: ["print", "range", "int", "str", "float", "list", "dict", "set", "tuple", "len", "type", "ValueError", "RuntimeError"],
  topics: [
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Python from python.org, then save code in a .py file and run it with the python command. Typing python alone opens an interactive prompt where you can test single lines.",
      shell: true,
      code: "python --version\npython hello.py\npython                  # opens the interactive prompt\npython -m venv .venv    # optional: isolated environment for packages\npip install requests"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "One line is a complete program. There is no main function and no semicolon.",
      code: "print(\"Hello, World!\")"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "You do not declare types. A variable takes the type of whatever you put in it, and you can check it with type().",
      code: "name = \"Ada\"\nage = 36\npi = 3.14159\nis_ready = True\nnothing = None\n\nprint(type(age))      # <class 'int'>"
    },
    {
      id: "control",
      title: "Control flow",
      text: "Python uses indentation instead of braces. The block under a colon must be indented the same amount.",
      code: "score = 72\nif score >= 90:\n    print(\"A\")\nelif score >= 70:\n    print(\"B\")\nelse:\n    print(\"Keep going\")\n\nfor i in range(3):      # 0, 1, 2\n    print(i)\n\nn = 3\nwhile n > 0:\n    n -= 1"
    },
    {
      id: "functions",
      title: "Functions",
      text: "Define functions with def. Parameters can have default values, and lambda makes a tiny one-line function.",
      code: "def greet(name, punctuation=\"!\"):\n    return \"Hello, \" + name + punctuation\n\nprint(greet(\"Ada\"))\nprint(greet(\"Ada\", \"?\"))\n\nsquare = lambda x: x * x\nprint(square(5))        # 25"
    },
    {
      id: "collections",
      title: "Collections",
      text: "Lists, tuples, dictionaries and sets are built in. List comprehensions build a new list in one line.",
      code: "fruits = [\"apple\", \"banana\", \"cherry\"]   # list\nfruits.append(\"date\")\npoint = (3, 4)                           # tuple (cannot change)\nages = {\"Ada\": 36, \"Linus\": 54}         # dict\nages[\"Grace\"] = 85\nunique = {1, 2, 2, 3}                    # set -> {1, 2, 3}\n\nsquares = [n * n for n in range(5)]     # [0, 1, 4, 9, 16]\nfor name, age in ages.items():\n    print(name, age)"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Wrap risky code in try and catch the problem with except. Use raise to signal an error yourself.",
      code: "try:\n    number = int(\"abc\")\nexcept ValueError as error:\n    print(\"Not a number:\", error)\nelse:\n    print(\"Parsed:\", number)\nfinally:\n    print(\"Always runs\")\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError(\"b must not be zero\")\n    return a / b"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "f-strings put values straight into text. Also avoid a mutable default argument such as items=[]: it is shared between calls, so use None instead.",
      code: "name = \"Ada\"\nprint(f\"Hello, {name}!\")          # f-string\n\ndef add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
    }
  ]
});
