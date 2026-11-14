window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "lua",
  order: 8,
  name: "Lua",
  color: "#3b6fd4",
  tagline: "A tiny, fast scripting language that is easy to embed in games and apps.",
  level: "Beginner-friendly",
  usedFor: "game scripting, embedded scripts, config files",
  ext: ".lua",
  comment: "--",
  kw: ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"],
  types: ["print", "type", "tostring", "tonumber", "pairs", "ipairs", "pcall", "error", "assert", "select", "require", "setmetatable", "string", "table", "math", "io", "os", "insert", "remove", "concat", "format"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "-- Hello, World\nprint(\"Hello, World!\")\n\n-- Variables (always use local)\nlocal name = \"Ada\"\nlocal age = 36\nlocal pi = 3.14159\nlocal ready = true\n\n-- Loops\nfor i = 1, 3 do          -- 1, 2, 3\n    print(i)\nend\n\nlocal n = 3\nwhile n > 0 do\n    n = n - 1\nend\n\nfor _, item in ipairs({\"a\", \"b\"}) do   -- over a list\n    print(item)\nend"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Lua from lua.org or with your package manager. Save code in a .lua file and run it with the lua command. Running lua with no file opens an interactive prompt.",
      shell: true,
      code: `lua -v
lua hello.lua
lua                        # interactive prompt (Ctrl+D to quit)

sudo apt install lua5.4    # Debian/Ubuntu (run with lua or lua5.4)
brew install lua           # macOS`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "One line is enough. There is no main function and no boilerplate: Lua runs the file from top to bottom.",
      code: `print("Hello, World!")`
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Variables are global unless you write local, so almost always write local. You never declare a type: the value has the type. Use type() to check it, and .. to join strings.",
      code: `local age = 36
local name = "Ada"
local pi = 3.14159
local ready = true
local nothing = nil

print(name, age, pi, ready)
print(type(age))           -- number
print("Hi " .. name)       -- .. joins strings
print(#name)               -- 3  (# gives the length)`
    },
    {
      id: "control",
      title: "Control flow",
      text: "Blocks end with the word end instead of braces. The counting loop includes both ends of its range. Not equal is written ~= and the logic words are and, or, not.",
      code: `local score = 72
if score >= 90 then
    print("A")
elseif score >= 70 then
    print("B")
else
    print("Keep going")
end

for i = 1, 3 do          -- 1, 2, 3 (both ends included)
    print(i)
end

local n = 3
while n > 0 do
    n = n - 1
end

if score ~= 100 and not (score < 0) then   -- ~= means not equal
    print("valid")
end`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Functions are ordinary values, and they can return more than one value. Use local function so the name stays private to your file.",
      code: `local function add(a, b)
    return a + b
end

local function minmax(a, b)      -- can return several values
    if a < b then return a, b end
    return b, a
end

local lo, hi = minmax(5, 2)
print(add(2, 3), lo, hi)         -- 5  2  5

local square = function(x) return x * x end   -- functions are values
print(square(4))                 -- 16`
    },
    {
      id: "collections",
      title: "Collections",
      text: "The table is Lua's only collection. It works as a list or as a key-value map. Lists start counting at 1, not 0. ipairs walks a list in order and pairs walks key-value pairs.",
      code: `local nums = {10, 20, 30}
table.insert(nums, 40)
print(nums[1], #nums)            -- 10  4  (lists start at 1!)

local ages = {Ada = 36, Linus = 54}
ages.Grace = 85
print(ages["Ada"])               -- 36

for i, n in ipairs(nums) do      -- a list, in order
    print(i, n)
end

for who, age in pairs(ages) do   -- key-value pairs (any order)
    print(who, age)
end`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Run risky code inside pcall. It returns false plus the error message instead of crashing your program. Many functions, like tonumber, just return nil when they fail.",
      code: `local ok, err = pcall(function()
    error("something went wrong")
end)

if not ok then
    print("Caught:", err)
end

local n = tonumber("abc")        -- returns nil, no crash
if n == nil then
    print("Not a number")
end`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Tables are the one building block. Lists, records, modules and objects are all tables. Attach a metatable and a table can act like a class.",
      code: `local Dog = {}
Dog.__index = Dog

function Dog.new(name)
    return setmetatable({name = name}, Dog)
end

function Dog:speak()             -- the colon passes the object as self
    print(self.name .. " says woof")
end

local d = Dog.new("Rex")
d:speak()                        -- Rex says woof`
    }
  ]
});
