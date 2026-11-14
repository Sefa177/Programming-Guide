# PolyGlot Guide
<img width="999" height="999" alt="demo" src="https://github.com/user-attachments/assets/6a9bedfd-d924-4607-aeec-966aeb2196b7" />


A free, no-install guide that shows how to set up and use popular programming languages.

**Languages:** Python, JavaScript, Rust, C, C++, Java, Go, Lua and Assembly (x86-64, NASM).

Every language has a one-screen cheat sheet (Hello, World + variables + loops) and the same eight short lessons, so you can learn one language or compare them side by side:

- Cheat sheet
1. Setup & run
2. Hello, World
3. Variables & types
4. Control flow
5. Functions
6. Collections
7. Error handling
8. Key idea

## Features

- Runs entirely in the browser. No build step, no server, no account.
- Search across all lessons (press `/` to focus the search box).
- Language filter box (sidebar and home page) that narrows the language list as you type. Press Enter to open the first match.
- **Compare** view: see the same topic in every language at once.
- One-click copy buttons on every code block.
- Light and dark theme.
- Works on phones.

## Run it

Open `index.html` in any modern browser. That's it.

To host it for free, enable **GitHub Pages** in the repository settings (Settings, Pages, deploy from the `main` branch, root folder).

## Project structure

```
index.html          page shell
css/style.css       all styling
js/app.js           routing, search, compare view, theme
js/data/*.js        one file per language (the lessons live here)
```

## Add a language

1. Copy any file in `js/data/` (for example `go.js`) to a new file such as `js/data/kotlin.js`.
2. Change the `id`, `name`, `color`, `ext`, `comment`, keyword lists the `cheat` sheet and the eight `topics`.
3. Add a `<script src="js/data/kotlin.js"></script>` line to `index.html`, before `js/app.js`.

The `order` field decides where the language appears in the sidebar.

## Contributing

Found a mistake, or want another language or topic? Open an issue or a pull request. Please keep examples short and make sure they run.
