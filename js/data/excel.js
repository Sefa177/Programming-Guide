window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "excel",
  order: 14,
  group: "Data & Analysis",
  name: "Excel",
  color: "#1d7a46",
  tagline: "Spreadsheet formulas: calculate, sort and summarize data without writing a program.",
  level: "Beginner-friendly",
  usedFor: "budgets, reports, lists, quick data analysis",
  ext: ".xlsx",
  comment: "//",
  kw: ["TRUE", "FALSE"],
  types: ["SUM", "AVERAGE", "MIN", "MAX", "COUNT", "COUNTA", "IF", "IFS", "AND", "OR", "NOT", "ROUND", "VLOOKUP", "XLOOKUP", "INDEX", "MATCH", "SUMIF", "SUMIFS", "COUNTIF", "COUNTIFS", "IFERROR", "LEFT", "RIGHT", "MID", "LEN", "UPPER", "LOWER", "TRIM", "CONCAT", "TEXT", "TODAY", "NOW", "FILTER", "SORT", "UNIQUE", "LET", "LAMBDA"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The most used formulas on one screen. In these examples, a line that starts with // is only a note about the result. It is not part of the formula. Excel has no loops: you write a formula once and drag it down.",
      code: "// Every formula starts with =\n=\"Hello, World!\"\n\n// Cells\n=A1+B1                     // add two cells\n=SUM(A1:A10)               // add a range\n=AVERAGE(B2:B20)\n\n// Decide\n=IF(A1>=60, \"pass\", \"fail\")\n\n// Look up a value in a table\n=XLOOKUP(\"Ada\", A2:A100, B2:B100)"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Open Excel and start with a blank workbook. Click a cell and type: any text that starts with = is a formula. Press Enter to see the result. You can also use the free Excel for the web (office.com) or a similar free tool like Google Sheets or LibreOffice Calc. Save the file as .xlsx.",
      code: `// Click a cell, type a formula, press Enter
=2+3

// F2 edits the selected cell
// Ctrl+S saves the file
// Ctrl+Z undoes the last step`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Click a cell and type this. Text inside a formula goes between double quotes, and the & sign joins pieces of text together.",
      code: `="Hello, World!"

="Hello, " & A1 & "!"      // joins text with what is in cell A1`
    },
    {
      id: "variables",
      title: "Cells & data types",
      text: "A cell is like a variable. Its name is the column letter plus the row number, like B3. Cells hold numbers, text, dates or true/false. Press F4 while typing a cell name to lock it with $ signs, so it stays the same when you copy the formula. Give a cell a name from the Name Box to use it like a real variable.",
      code: `=B3                        // the value in column B, row 3
=B3*1.2                    // use it in a calculation
=$B$1                      // locked: copying the formula keeps B1
=A1:A10                    // a range of cells
=TODAY()                   // today's date

// Name a cell "tax_rate" in the Name Box, then:
=B3*tax_rate`
    },
    {
      id: "control",
      title: "Decisions",
      text: "IF checks a condition and returns one value or another. Join conditions with AND and OR. IFS handles several cases in a row. There are no loops: write the formula in one cell, then drag the small square in its corner down to copy it for every row.",
      code: `=IF(A2>=60, "pass", "fail")

=IF(AND(A2>=18, B2="yes"), "ok", "no")

=IFS(A2>=90, "A", A2>=70, "B", TRUE, "keep going")

=SUMIF(B2:B100, "Ada", C2:C100)    // add C only where B is "Ada"
=COUNTIF(A2:A100, ">50")          // how many cells are over 50`
    },
    {
      id: "functions",
      title: "Functions",
      text: "Excel has hundreds of built-in functions. You write the name, then the inputs between parentheses, separated by commas. Start typing = and a name, and Excel suggests the rest. Functions can be placed inside other functions.",
      code: `=SUM(A1:A10)
=AVERAGE(A1:A10)
=MAX(A1:A10)
=ROUND(3.14159, 2)             // 3.14

=UPPER(A1)                     // capital letters
=LEFT(A1, 3)                   // the first 3 letters
=LEN(A1)                       // how many characters
=TRIM(A1)                      // remove extra spaces

=ROUND(AVERAGE(B2:B20), 1)     // a function inside a function`
    },
    {
      id: "collections",
      title: "Tables & lookups",
      text: "Your data lives in rows and columns. Turn a range into a table with Ctrl+T, so it grows automatically and has filter buttons. To pull a value from another table, use XLOOKUP (or VLOOKUP in older versions). Newer Excel also has FILTER, SORT and UNIQUE that return a whole list at once.",
      code: `=XLOOKUP("Ada", A2:A100, C2:C100)       // find Ada in A, give back C
=VLOOKUP("Ada", A2:C100, 3, FALSE)       // older way, 3 = third column

=SORT(A2:B100)                           // sorted list
=UNIQUE(A2:A100)                         // remove duplicates
=FILTER(A2:C100, C2:C100>50)             // only the rows where C is over 50`
    },
    {
      id: "errors",
      title: "Errors",
      text: "A formula that cannot work shows an error code instead of a result. #DIV/0! means dividing by zero, #N/A means a lookup found nothing, #NAME? means a mistyped function name and #REF! means a deleted cell. Wrap a formula in IFERROR to show your own message instead.",
      code: `=10/0                                   // shows #DIV/0!
=IFERROR(10/A1, "not possible")         // your own message
=IFERROR(XLOOKUP("Zed", A2:A100, B2:B100), "not found")

// Formulas > Show Formulas displays all formulas in the sheet`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Write the formula once, then copy it. Excel adjusts the cell names for each row, so one formula can handle thousands of rows. For summaries, a PivotTable (Insert > PivotTable) groups and totals your data in seconds, with no formulas at all.",
      code: `// In D2 write:
=B2*C2

// Drag the corner of D2 down: D3 becomes =B3*C3, D4 becomes =B4*C4...

// A grand total at the bottom
=SUM(D2:D100)`
    }
  ]
});
