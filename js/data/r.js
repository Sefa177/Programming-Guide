window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "r",
  order: 13,
  group: "Data & Analysis",
  name: "R",
  color: "#276dc3",
  tagline: "A language built for statistics, data analysis and charts.",
  level: "Beginner-friendly",
  usedFor: "statistics, data analysis, charts, research",
  ext: ".R",
  comment: "#",
  kw: ["if", "else", "for", "while", "repeat", "function", "return", "break", "next", "in", "TRUE", "FALSE", "NULL", "NA", "Inf"],
  types: ["print", "cat", "paste", "paste0", "c", "list", "length", "sum", "mean", "median", "sd", "min", "max", "round", "seq", "rep", "sort", "data.frame", "nrow", "ncol", "head", "summary", "read.csv", "write.csv", "plot", "hist", "barplot", "sapply", "lapply", "tryCatch", "stop", "warning", "class", "is.na", "install.packages", "library", "str", "names", "factor", "table"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "Hello, World, variables and loops on one screen. A quick reminder once you know the basics.",
      code: "# Hello, World\nprint(\"Hello, World!\")\n\n# Variables (<- puts a value in a name)\nname <- \"Ada\"\nage <- 36\nscores <- c(80, 95, 70)       # c() makes a vector\n\nmean(scores)                  # works on all values at once\n\n# Loops\nfor (i in 1:3) {              # 1, 2, 3\n  print(i)\n}\n\nfor (s in scores) print(s)"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install R from r-project.org, then install the free RStudio Desktop from posit.co for a friendly editor with a console, plots and help. Save code in a .R file and run it with Rscript, or type lines straight into the R console. Packages add extra tools.",
      shell: true,
      code: `R --version
Rscript hello.R            # run a script
R                          # interactive console (q() to quit)

sudo apt install r-base    # Debian/Ubuntu
brew install r             # macOS

# Inside R, install a package once, then load it each time:
# install.packages("ggplot2")
# library(ggplot2)`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "print() shows a value. Typing just a value in the console also shows it. Use cat() when you want plain text without quotes.",
      code: `print("Hello, World!")
cat("Hello, World!\\n")`
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "Use <- to store a value (you may also use =). You never declare a type. The main types are numeric, character (text), logical (TRUE/FALSE) and factor (categories). Most values in R are vectors: a list of values of the same type, and even a single number is a vector of length one.",
      code: `age <- 36
name <- "Ada"
ready <- TRUE
pi_value <- 3.14159

class(age)            # "numeric"
class(name)           # "character"

nums <- c(1, 2, 3)    # a vector
nums * 2              # 2 4 6  (works on every item)
paste("Hi", name)     # joins text: "Hi Ada"
NA                    # means a missing value`
    },
    {
      id: "control",
      title: "Control flow",
      text: "if, else and for use curly braces, like in many languages. Because R works on whole vectors, you often do not need a loop: use ifelse() to decide for every item at once.",
      code: `score <- 72
if (score >= 90) {
  print("A")
} else if (score >= 70) {
  print("B")
} else {
  print("Keep going")
}

for (i in 1:3) print(i)          # 1, 2, 3 (both ends included)

n <- 3
while (n > 0) n <- n - 1

scores <- c(50, 80, 95)
ifelse(scores >= 60, "pass", "fail")   # decides for each item`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Create a function with function(). The last value is returned automatically, and you can also write return(). Arguments can have default values, and you can name them when you call.",
      code: `add <- function(a, b = 1) {
  a + b                          # the last line is returned
}

add(2, 3)                        # 5
add(2)                           # 3 (b uses its default)
add(b = 10, a = 1)               # 11 (named arguments)

square <- function(x) x * x
sapply(c(1, 2, 3), square)       # 1 4 9  (apply to every item)`
    },
    {
      id: "collections",
      title: "Collections",
      text: "The main collections are the vector (same type), the list (mixed types) and the data frame, which is a table with named columns and the heart of data analysis in R. Counting starts at 1, not 0.",
      code: `nums <- c(10, 20, 30)
nums[1]                          # 10  (counting starts at 1!)
length(nums)                     # 3

person <- list(name = "Ada", age = 36)
person$name                      # "Ada"

df <- data.frame(
  name = c("Ada", "Linus", "Grace"),
  age = c(36, 54, 85)
)
df[df$age > 40, ]                # rows where age is over 40
mean(df$age)
summary(df)
head(df, 2)                      # first 2 rows`
    },
    {
      id: "errors",
      title: "Error handling",
      text: "When something goes wrong, R stops with an error or shows a warning. Wrap risky code in tryCatch() to handle it yourself. Missing values (NA) are common: check with is.na() and tell functions to skip them with na.rm = TRUE.",
      code: `result <- tryCatch({
  as.numeric("abc") + stop("something went wrong")
}, warning = function(w) {
  "a warning happened"
}, error = function(e) {
  paste("Caught:", conditionMessage(e))
})
print(result)

x <- c(1, NA, 3)
mean(x)                          # NA
mean(x, na.rm = TRUE)            # 2   (skip the missing value)
is.na(x)                         # FALSE TRUE FALSE`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Think in whole columns, not single values. Load a data file, look at it, summarize it and plot it in just a few lines.",
      code: `data <- read.csv("sales.csv")      # load a table from a file
head(data)                         # first rows
str(data)                          # column names and types
summary(data$price)                # min, mean, max...

hist(data$price)                   # a quick chart
plot(data$price, data$quantity)    # two columns against each other`
    }
  ]
});
