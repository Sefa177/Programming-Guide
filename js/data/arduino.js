window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "arduino",
  order: 10,
  name: "Arduino",
  color: "#00979d",
  tagline: "C++ for small boards: blink LEDs, read sensors and control motors.",
  level: "Beginner-friendly",
  usedFor: "electronics projects, sensors, robots, home automation",
  ext: ".ino",
  comment: "//",
  kw: ["if", "else", "for", "while", "do", "switch", "case", "break", "continue", "return", "const", "static", "true", "false", "void", "HIGH", "LOW", "INPUT", "OUTPUT", "INPUT_PULLUP", "LED_BUILTIN"],
  types: ["int", "long", "float", "double", "bool", "boolean", "byte", "char", "unsigned", "String", "setup", "loop", "pinMode", "digitalWrite", "digitalRead", "analogRead", "analogWrite", "delay", "millis", "Serial", "begin", "print", "println", "available", "read", "map", "constrain", "random", "tone"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "// Hello, World (shows in the Serial Monitor)\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"Hello, World!\");\n  pinMode(LED_BUILTIN, OUTPUT);   // pin 13 on most boards\n}\n\n// Variables\nint age = 36;\nfloat pi = 3.14159;\nbool ready = true;\nString name = \"Ada\";\n\n// Loops\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);  // LED on\n  delay(500);                       // wait 500 ms\n  digitalWrite(LED_BUILTIN, LOW);   // LED off\n  delay(500);\n\n  for (int i = 0; i < 3; i++) {     // 0, 1, 2\n    Serial.println(i);\n  }\n}"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install the free Arduino IDE from arduino.cc, plug the board in with a USB cable, then pick your board and port in the Tools menu. Press Upload (the arrow button) to send the sketch to the board. Open the Serial Monitor to see what your program prints. You can also work from the terminal with arduino-cli. No board? Try the free online simulator Wokwi.",
      shell: true,
      code: `# Arduino IDE: Tools > Board, Tools > Port, then click Upload

# Optional: the command-line tool
arduino-cli core install arduino:avr
arduino-cli board list                                  # find your port
arduino-cli compile --fqbn arduino:avr:uno MySketch
arduino-cli upload -p COM3 --fqbn arduino:avr:uno MySketch   # Linux: /dev/ttyACM0`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "A program is called a sketch. It always has two functions: setup() runs once when the board starts, and loop() runs again and again forever. The classic first sketch is Blink, which turns the built-in LED on and off.",
      code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // make the pin an output
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // LED on
  delay(1000);                      // wait one second
  digitalWrite(LED_BUILTIN, LOW);   // LED off
  delay(1000);
}`
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "You must declare the type of every variable, just like in C. Memory is tiny on these boards (an Uno has only 2 KB), so pick small types when you can. An int is only 16 bits on an Uno, so use long for bigger numbers. Use const for pin numbers.",
      code: `const int ledPin = 9;          // const: never changes
int count = 0;                 // -32768 to 32767 on an Uno
long big = 100000L;            // bigger whole numbers
float temp = 21.5;             // decimals
bool on = true;
byte level = 255;              // 0 to 255
char letter = 'A';
String name = "Ada";

void setup() {
  Serial.begin(9600);
  Serial.println(count);
  Serial.println("Hi " + name);   // + joins a String
}

void loop() {}`
    },
    {
      id: "control",
      title: "Control flow",
      text: "The syntax is the same as C: if, else, for, while and switch with curly braces. On Arduino the main loop is loop() itself, so you often just use if inside it. Read a button with digitalRead and a sensor with analogRead.",
      code: `const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);   // button pressed = LOW
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(buttonPin) == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }

  int light = analogRead(A0);          // 0 to 1023
  if (light > 600 && light < 900) {
    Serial.println("bright");
  }

  for (int i = 0; i < 3; i++) {        // 0, 1, 2
    Serial.println(i);
  }
}`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Write the return type first, then the name and the parameters. Use void when a function returns nothing. Put your own functions anywhere in the sketch, and call them from setup() or loop(). Arduino also gives you handy built-ins like map() and constrain().",
      code: `int add(int a, int b) {
  return a + b;
}

void blink(int pin, int times) {       // void: returns nothing
  for (int i = 0; i < times; i++) {
    digitalWrite(pin, HIGH);
    delay(200);
    digitalWrite(pin, LOW);
    delay(200);
  }
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  Serial.println(add(2, 3));           // 5
  blink(LED_BUILTIN, 3);

  int raw = 512;                       // built-in helpers
  int percent = map(raw, 0, 1023, 0, 100);   // 0 to 1023 becomes 0 to 100
  Serial.println(constrain(percent, 0, 100));
}

void loop() {}`
    },
    {
      id: "collections",
      title: "Collections",
      text: "The basic collection is the array. Its size is fixed when you create it and counting starts at 0. Arrays are great for lists of pins or readings. There is no built-in list or dictionary, because memory is so small.",
      code: `int pins[] = {3, 5, 6};            // an array of three pins
int readings[5];                   // five slots, filled with 0 at first

void setup() {
  Serial.begin(9600);
  for (int i = 0; i < 3; i++) {
    pinMode(pins[i], OUTPUT);
  }

  readings[0] = 42;                // counting starts at 0
  Serial.println(readings[0]);     // 42

  int size = sizeof(pins) / sizeof(pins[0]);   // number of items: 3
  Serial.println(size);
}

void loop() {}`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Arduino has no exceptions, so nothing crashes with a friendly message. Check return values and sensor ranges yourself, and print messages to the Serial Monitor to see what is happening. Always wait for slow hardware with a check before you use it.",
      code: `void setup() {
  Serial.begin(9600);
  Serial.println("Starting...");       // debug with prints

  int value = analogRead(A0);
  if (value == 0) {
    Serial.println("Warning: sensor reads 0, check the wiring");
  }

  long number = Serial.parseInt();     // returns 0 on timeout
  if (number == 0) {
    Serial.println("No number received");
  }
}

void loop() {}`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Avoid delay() once your project does more than one thing, because the board does nothing else while it waits. Use millis(), which counts the milliseconds since the board started, to check how much time has passed. This lets you blink an LED and read a button at the same time.",
      code: `const int ledPin = 13;
unsigned long lastToggle = 0;
bool ledOn = false;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long now = millis();

  if (now - lastToggle >= 500) {       // every 500 ms, without delay()
    lastToggle = now;
    ledOn = !ledOn;
    digitalWrite(ledPin, ledOn ? HIGH : LOW);
  }

  // other code can run here at full speed
}`
    }
  ]
});
