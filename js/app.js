(function () {
  "use strict";

  var LANGS = (window.LANGS || []).slice().sort(function (a, b) { return a.order - b.order; });

  var TOPIC_ORDER = [
    ["cheat", "Cheat sheet"],
    ["setup", "Setup & run"],
    ["hello", "Hello, World"],
    ["variables", "Variables & types"],
    ["control", "Control flow"],
    ["functions", "Functions"],
    ["collections", "Collections"],
    ["errors", "Error handling"],
    ["tips", "Key idea"]
  ];

  var main = document.getElementById("main");
  var sidebar = document.getElementById("sidebar");
  var search = document.getElementById("search");
  var themeBtn = document.getElementById("themeBtn");
  var menuBtn = document.getElementById("menuBtn");

  /* ---------- helpers ---------- */

  function h(tag, props) {
    var el = document.createElement(tag);
    var kids = Array.prototype.slice.call(arguments, 2);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (k === "class") el.className = v;
        else if (k === "html") el.innerHTML = v;
        else if (k.indexOf("on") === 0) el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v);
      });
    }
    kids.forEach(function add(c) {
      if (c == null) return;
      if (Array.isArray(c)) { c.forEach(add); return; }
      el.append(c);
    });
    return el;
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function getLang(id) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].id === id) return LANGS[i];
    return null;
  }

  function getTopic(lang, id) {
    for (var i = 0; i < lang.topics.length; i++) if (lang.topics[i].id === id) return lang.topics[i];
    return null;
  }

  /* ---------- tiny syntax highlighter ---------- */

  var COMMENTS = {
    "//": /\/\/.*|\/\*[\s\S]*?\*\//,
    "#": /#.*/,
    ";": /;.*/,
    "--": /--.*/
  };
  var STRING_RE = /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/;
  var NUMBER_RE = /\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?\b/;
  var WORD_RE = /[A-Za-z_][A-Za-z0-9_]*/;

  var SHELL = { comment: "#", kw: [], types: [] };

  function highlight(code, lang) {
    var cm = COMMENTS[lang.comment] || COMMENTS["//"];
    var re = new RegExp(
      [cm, STRING_RE, NUMBER_RE, WORD_RE].map(function (r) { return "(" + r.source + ")"; }).join("|"),
      "g"
    );
    var kw = lang.kw || [];
    var types = lang.types || [];
    var out = "";
    var last = 0;
    var m;
    while ((m = re.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      var t = m[0];
      var key = lang.ci ? t.toLowerCase() : t;
      var cls = "";
      if (m[1]) cls = "c";
      else if (m[2]) cls = "s";
      else if (m[3]) cls = "n";
      else if (kw.indexOf(key) !== -1) cls = "k";
      else if (types.indexOf(key) !== -1) cls = "t";
      out += cls ? '<span class="tk-' + cls + '">' + esc(t) + "</span>" : esc(t);
      last = re.lastIndex;
    }
    return out + esc(code.slice(last));
  }

  /* ---------- copy button ---------- */

  function copyText(text, btn) {
    function done() {
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = "Copy"; }, 1500);
    }
    function fallback() {
      var area = document.createElement("textarea");
      area.value = text;
      document.body.append(area);
      area.select();
      try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
      area.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function codeBlock(topic, lang) {
    var shell = !!topic.shell;
    var label = shell ? "Terminal" : lang.name;
    var btn = h("button", { class: "copy-btn", type: "button" }, "Copy");
    btn.addEventListener("click", function () { copyText(topic.code, btn); });
    return h("div", { class: "code" },
      h("div", { class: "code-head" }, h("span", null, label), btn),
      h("pre", null, h("code", { html: highlight(topic.code, shell ? SHELL : lang) }))
    );
  }

  /* ---------- theme ---------- */

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeBtn.innerHTML = theme === "dark" ? "&#9790;" : "&#9788;";
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("polyglot-theme"); } catch (e) { /* ignore */ }
    if (!saved) {
      saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(saved);
  }

  themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("polyglot-theme", next); } catch (e) { /* ignore */ }
  });

  menuBtn.addEventListener("click", function () { sidebar.classList.toggle("open"); });

  /* ---------- language filter ---------- */

  var langFilterRaw = "";

  function matchesLang(lang, q) {
    if (!q) return true;
    var hay = (lang.name + " " + lang.id + " " + lang.ext).toLowerCase();
    if (q.length >= 3) hay += " " + (lang.usedFor || "").toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function applyLangFilter() {
    var q = langFilterRaw.trim().toLowerCase();
    var shown = 0;
    LANGS.forEach(function (lang) {
      var ok = matchesLang(lang, q);
      if (ok) shown++;
      Array.prototype.forEach.call(document.querySelectorAll('[data-lang="' + lang.id + '"]'), function (el) {
        el.hidden = !ok;
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lang-empty"), function (el) {
      el.hidden = shown !== 0;
    });
  }

  function makeFilterBox(extraClass) {
    var box = h("input", {
      class: "filter-box lang-filter-input " + extraClass,
      type: "search",
      placeholder: "Filter languages...",
      "aria-label": "Filter languages",
      autocomplete: "off"
    });
    box.value = langFilterRaw;
    box.addEventListener("input", function () {
      langFilterRaw = box.value;
      Array.prototype.forEach.call(document.querySelectorAll(".lang-filter-input"), function (other) {
        if (other !== box) other.value = langFilterRaw;
      });
      applyLangFilter();
    });
    box.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        box.value = "";
        box.dispatchEvent(new Event("input"));
      } else if (e.key === "Enter") {
        var q = langFilterRaw.trim().toLowerCase();
        var first = LANGS.filter(function (l) { return matchesLang(l, q); })[0];
        if (first) {
          langFilterRaw = "";
          location.hash = "#/" + first.id;
        }
      }
    });
    return box;
  }

  /* ---------- sidebar ---------- */

  function renderSidebar(activeId, compareActive) {
    sidebar.innerHTML = "";
    sidebar.append(makeFilterBox("side-filter"));
    sidebar.append(h("h3", null, "Languages"));
    LANGS.forEach(function (lang) {
      var link = h("a", {
        class: "side-link" + (lang.id === activeId ? " active" : ""),
        href: "#/" + lang.id,
        "data-lang": lang.id,
        style: "--lang:" + lang.color
      }, h("span", { class: "dot" }), lang.name);
      sidebar.append(link);
    });
    sidebar.append(h("p", { class: "side-empty lang-empty", hidden: "" }, "No language matches."));
    sidebar.append(h("h3", null, "Tools"));
    sidebar.append(h("a", {
      class: "side-link" + (compareActive ? " active" : ""),
      href: "#/compare/hello"
    }, h("span", { class: "dot" }), "Compare languages"));
    applyLangFilter();
  }

  /* ---------- views ---------- */

  function renderHome() {
    renderSidebar(null, false);
    main.innerHTML = "";
    main.append(
      h("section", { class: "hero" },
        h("h1", null, "Learn how to use any programming language"),
        h("p", null, "Pick a language and get a one-screen cheat sheet plus the same eight short lessons: how to install and run it, then variables, control flow, functions, collections and error handling. Every example can be copied and run as it is.")
      ),
      makeFilterBox("home-filter"),
      h("div", { class: "cards" }, LANGS.map(function (lang) {
        return h("a", { class: "card", href: "#/" + lang.id, "data-lang": lang.id, style: "--lang:" + lang.color },
          h("h3", null, lang.name),
          h("p", null, lang.tagline),
          h("span", { class: "badge" }, lang.level)
        );
      })),
      h("p", { class: "empty lang-empty", hidden: "" }, "No language matches. Try another name, like py or web.")
    );
    applyLangFilter();
  }

  function renderLang(lang, topicId) {
    renderSidebar(lang.id, false);
    main.innerHTML = "";

    var chips = h("div", { class: "chips" }, lang.topics.map(function (t) {
      return h("a", { class: "chip", href: "#/" + lang.id + "/" + t.id }, t.title);
    }));

    main.append(
      h("div", { class: "lang-head", style: "--lang:" + lang.color },
        h("h1", null, lang.name),
        h("p", null, lang.tagline),
        h("div", { class: "meta" },
          h("span", { class: "badge" }, lang.level),
          h("span", { class: "badge" }, "Used for: " + lang.usedFor),
          h("span", { class: "badge" }, "Files end in " + lang.ext)
        )
      ),
      chips
    );

    lang.topics.forEach(function (t) {
      main.append(
        h("section", { class: "lesson", id: "topic-" + t.id },
          h("h2", null, t.title),
          h("p", null, t.text),
          codeBlock(t, lang)
        )
      );
    });

    if (topicId) {
      var target = document.getElementById("topic-" + topicId);
      if (target) target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  function renderCompare(topicId) {
    renderSidebar(null, true);
    main.innerHTML = "";
    var current = TOPIC_ORDER.filter(function (t) { return t[0] === topicId; })[0] ||
      TOPIC_ORDER.filter(function (t) { return t[0] === "hello"; })[0];

    main.append(
      h("h1", { class: "section-title" }, "Compare languages"),
      h("p", { class: "hint" }, "See the same lesson in every language, one under the other."),
      h("div", { class: "chips" }, TOPIC_ORDER.map(function (t) {
        return h("a", { class: "chip" + (t[0] === current[0] ? " active" : ""), href: "#/compare/" + t[0] }, t[1]);
      }))
    );

    LANGS.forEach(function (lang) {
      var topic = getTopic(lang, current[0]);
      if (!topic) return;
      main.append(
        h("div", { class: "compare-block", style: "--lang:" + lang.color },
          h("h3", null, h("span", { class: "dot" }), h("a", { href: "#/" + lang.id + "/" + topic.id }, lang.name)),
          codeBlock(topic, lang)
        )
      );
    });
    window.scrollTo(0, 0);
  }

  function renderSearch(query) {
    renderSidebar(null, false);
    var q = query.toLowerCase();
    var results = [];
    LANGS.forEach(function (lang) {
      lang.topics.forEach(function (t) {
        var hay = (lang.name + " " + t.title + " " + t.text + " " + t.code).toLowerCase();
        if (hay.indexOf(q) !== -1) results.push({ lang: lang, topic: t });
      });
    });

    main.innerHTML = "";
    main.append(h("h1", { class: "section-title" }, 'Results for "' + query + '"'));
    if (!results.length) {
      main.append(h("p", { class: "empty" }, "No lessons match. Try a shorter word, like loop, list or error."));
      return;
    }
    results.slice(0, 40).forEach(function (r) {
      var snippet = r.topic.text.length > 140 ? r.topic.text.slice(0, 140) + "..." : r.topic.text;
      main.append(
        h("a", { class: "result", href: "#/" + r.lang.id + "/" + r.topic.id },
          h("strong", null, r.lang.name + " - " + r.topic.title),
          h("span", null, snippet)
        )
      );
    });
  }

  /* ---------- routing ---------- */

  function route() {
    sidebar.classList.remove("open");
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

    if (!parts.length) { renderHome(); return; }
    if (parts[0] === "compare") { renderCompare(parts[1]); return; }

    var lang = getLang(parts[0]);
    if (!lang) { renderHome(); return; }
    renderLang(lang, parts[1]);
  }

  window.addEventListener("hashchange", function () {
    search.value = "";
    route();
  });

  search.addEventListener("input", function () {
    var q = search.value.trim();
    if (q.length >= 2) renderSearch(q);
    else route();
  });

  document.addEventListener("keydown", function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
      e.preventDefault();
      search.focus();
    }
    if (e.key === "Escape" && document.activeElement === search) {
      search.value = "";
      search.blur();
      route();
    }
  });

  initTheme();
  route();
})();
