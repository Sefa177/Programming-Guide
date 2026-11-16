window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "php",
  order: 18,
  name: "PHP",
  color: "#777bb4",
  tagline: "A language made for the web: it builds pages on the server and powers WordPress.",
  level: "Beginner-friendly",
  usedFor: "websites, WordPress, web backends, forms",
  ext: ".php",
  comment: "//",
  kw: ["if", "else", "elseif", "for", "foreach", "while", "as", "switch", "case", "break", "continue", "function", "return", "class", "new", "public", "private", "static", "echo", "require", "include", "try", "catch", "finally", "throw", "true", "false", "null", "fn", "match", "use", "namespace"],
  types: ["int", "float", "string", "bool", "array", "void", "print_r", "var_dump", "count", "strlen", "strtoupper", "str_replace", "implode", "explode", "isset", "empty", "date", "json_encode", "htmlspecialchars", "Exception", "PDO"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. Every PHP file starts with the opening tag. Variables always begin with a dollar sign.",
      code: "<?php\n// Hello, World\necho \"Hello, World!\\n\";\n\n// Variables ($ in front of every name)\n$name = \"Ada\";\n$age = 36;\n$ready = true;\n$scores = [80, 95, 70];\n\n// Loops\nfor ($i = 0; $i < 3; $i++) {   // 0, 1, 2\n    echo $i, \"\\n\";\n}\n\nforeach ($scores as $s) {\n    echo $s, \"\\n\";\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install PHP from php.net or with a package manager. On Windows, XAMPP is the easy way: it installs PHP, a web server and a database together. Run a file in the terminal with php, or start the small built-in web server and open the page in your browser.",
      shell: true,
      code: `php --version
php hello.php                  # run a script in the terminal

php -S localhost:8000          # tiny web server; open http://localhost:8000
                               # (it serves the files in the current folder)

sudo apt install php           # Debian/Ubuntu
brew install php               # macOS`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "PHP code lives between the tags that open with a question mark and the word php. echo prints text. Everything outside the tags is sent as normal HTML, so you can mix PHP into a web page.",
      code: `<?php
echo "Hello, World!";

// In a web page, mix it with HTML:
// <h1>Hello, <?php echo "Ada"; ?></h1>`
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Every variable starts with $. You do not declare a type: PHP decides from the value. Join text with a dot, or put variables directly inside double-quoted strings. Single-quoted strings do not insert variables.",
      code: `<?php
$name = "Ada";
$age = 36;
$price = 9.99;
$ready = true;
$nothing = null;

echo "Hi $name, you are $age\\n";      // variables inside double quotes
echo 'Hi ' . $name . "\\n";            // a dot joins text
var_dump($age);                        // int(36)
echo gettype($price);                  // double`
    },
    {
      id: "control",
      title: "Control flow",
      text: "if, elseif and else use curly braces. Use == to compare values and === to compare value and type at the same time (usually the safer choice). The match expression is a modern, tidy switch.",
      code: `<?php
$score = 72;
if ($score >= 90) {
    echo "A";
} elseif ($score >= 70) {
    echo "B";
} else {
    echo "Keep going";
}

$grade = match (true) {
    $score >= 90 => "A",
    $score >= 70 => "B",
    default => "C",
};

for ($i = 0; $i < 3; $i++) echo $i;
$n = 3;
while ($n > 0) { $n--; }

var_dump("5" == 5, "5" === 5);         // true, false`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Define a function with the function keyword. Types for parameters and return values are optional but recommended. Parameters can have default values. A function does not see outside variables unless you pass them in.",
      code: `<?php
function add(int $a, int $b = 1): int {
    return $a + $b;
}

echo add(2, 3);                        // 5
echo add(2);                           // 3

$square = fn($x) => $x * $x;           // short arrow function
echo $square(4);                       // 16

echo strtoupper("hello");              // built-in: HELLO
echo strlen("Ada");                    // 3`
    },
    {
      id: "collections",
      title: "Collections",
      text: "PHP has one collection type that does two jobs: the array. It can be a simple list, or a map of keys and values (an associative array). Lists start counting at 0.",
      code: `<?php
$nums = [10, 20, 30];
$nums[] = 40;                          // add to the end
echo $nums[0], count($nums);           // 10 and 4

$person = ["name" => "Ada", "age" => 36];   // keys and values
$person["city"] = "Adana";
echo $person["name"];

foreach ($person as $key => $value) {
    echo "$key: $value\\n";
}

print_r($nums);                        // show the whole array`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Use try and catch for exceptions. Always check user input before you use it: isset() tells you if something exists. When you print user text into a web page, wrap it in htmlspecialchars() so nobody can inject code.",
      code: `<?php
function divide($a, $b) {
    if ($b === 0) {
        throw new Exception("Cannot divide by zero");
    }
    return $a / $b;
}

try {
    echo divide(10, 0);
} catch (Exception $e) {
    echo "Caught: " . $e->getMessage();
}

$name = $_GET["name"] ?? "guest";      // ?? gives a default when missing
echo "Hello " . htmlspecialchars($name);   // safe to show on a page`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "PHP runs on the server, on every page request. A visitor asks for a page, PHP builds the HTML and sends it. Form data arrives in $_GET and $_POST. For databases use PDO with prepared statements, never put user input straight into a SQL string.",
      code: `<?php
// page.php?name=Ada
$name = $_GET["name"] ?? "guest";

$pdo = new PDO("sqlite:shop.db");
$stmt = $pdo->prepare("SELECT * FROM products WHERE name = ?");
$stmt->execute([$name]);              // the ? is filled in safely
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rows);`
    }
  ]
});
