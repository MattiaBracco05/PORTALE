/* ===========================================================
   PORTALE — Mattia Bracco
   Logica del sito: dati, filtri, animazioni, palette comandi
   =========================================================== */
(function () {
  "use strict";

  /* -----------------------------------------------------------
     1. DATI — per aggiungere un sito basta una voce qui sotto.
        cat:  top | personali | appunti | ricerche | giochi | scuola
        star: true  -> compare anche nella vetrina "I pilastri"
     ----------------------------------------------------------- */
  var CATEGORIES = [
    { key: "star",      label: "In evidenza",  tone: "--cat-flagship", icon: "bi-stars" },
    { key: "personali", label: "Personali",    tone: "--cat-personali", icon: "bi-person-badge" },
    { key: "appunti",   label: "Appunti",      tone: "--cat-appunti",   icon: "bi-journal-text" },
    { key: "ricerche",  label: "Ricerche",     tone: "--cat-ricerche",  icon: "bi-search" },
    { key: "giochi",    label: "Giochi",       tone: "--cat-giochi",    icon: "bi-controller" },
    { key: "scuola",    label: "Scuola",       tone: "--cat-scuola",    icon: "bi-mortarboard" }
  ];

  var SITES = [
    {
      name: "MyDroneView",
      url: "https://mydroneview.it",
      desc: "Fotografia aerea e video con drone: missioni, gallerie e un panorama sferico a 360° navigabile.",
      cat: "personali",
      icon: "bi-airplane-engines",
      tags: ["Drone", "4K", "360°"],
      star: true,
      role: "Progetto di punta",
      long: "Il mio progetto dedicato alle riprese dall'alto. Ogni lavoro è raccontato come una missione di volo, con video, foto aeree e la mappa dei punti di ripresa — dalle coste di Zante e Palma di Maiorca ai raduni in Piemonte. Dentro c'è anche un panorama sferico a 360° da esplorare.",
      claim: "Prospettive elevate.",
      glyph: "bi-airplane-engines"
    },
    {
      name: "MattheWeb",
      url: "https://mattiabracco05.github.io/MattheWeb",
      desc: "Il mio sito personale: chi sono, cosa faccio e dove trovarmi.",
      cat: "personali",
      icon: "bi-house-heart",
      tags: ["Personale", "GitHub Pages"],
      star: true,
      role: "Casa base",
      long: "Il punto di partenza di tutto: il sito personale dove racconto chi sono, il percorso tecnico e i lavori a cui tengo di più. È il biglietto da visita a cui rimandano tutti gli altri progetti.",
      claim: "Il mio biglietto da visita.",
      glyph: "bi-house-heart"
    },
    {
      name: "PHOTOFOLIO",
      url: "https://mattiabracco05.github.io/PHOTOFOLIO/",
      desc: "Galleria fotografica personale, scatto dopo scatto.",
      cat: "personali",
      icon: "bi-camera",
      tags: ["Fotografia", "Galleria"]
    },
    {
      name: "Fanta Animatori",
      url: "https://mattiabracco05.github.io/FANTA-ANIMATORI-GAME/",
      desc: "Il gioco del Fanta Animatori per i campi estivi di Sant'Anna di Bellino.",
      cat: "personali",
      icon: "bi-trophy",
      tags: ["Fantasy game", "Campi estivi"]
    },
    {
      name: "Appunti TPSIT",
      url: "https://mattiabracco05.github.io/APPUNTI-TPSIT/",
      desc: "Guida completa con tutti i miei appunti di TPSIT.",
      cat: "appunti",
      icon: "bi-journal-code",
      tags: ["TPSIT", "Guida"]
    },
    {
      name: "Appunti NodeJS",
      url: "https://appunti-65795.firebaseapp.com/index",
      desc: "Guida pratica a Node.js, dai moduli al server.",
      cat: "appunti",
      icon: "bi-filetype-js",
      tags: ["Node.js", "Firebase"]
    },
    {
      name: "Appunti Codifiche",
      url: "https://mattiabracco05.github.io/CODIFICHE/",
      desc: "Il primo sito che ho realizzato: appunti sulle codifiche audio e video.",
      cat: "appunti",
      icon: "bi-file-earmark-play",
      tags: ["Audio/Video", "Primo sito"]
    },
    {
      name: "English Car",
      url: "https://mattiabracco05.github.io/ENGLISH-CAR/",
      desc: "Ricerca sull'automobile realizzata come progetto di inglese.",
      cat: "ricerche",
      icon: "bi-car-front",
      tags: ["Inglese", "Ricerca"]
    },
    {
      name: "Formula 1",
      url: "https://mattiabracco05.github.io/F1/",
      desc: "Ricerca di TPSIT per imparare a costruire un sito con Bootstrap.",
      cat: "ricerche",
      icon: "bi-speedometer",
      tags: ["Bootstrap", "TPSIT"]
    },
    {
      name: "API Spotify",
      url: "https://spotify-search-artists.web.app/",
      desc: "Ricerca di artisti su Spotify, nata per capire il funzionamento delle API.",
      cat: "ricerche",
      icon: "bi-spotify",
      tags: ["API REST", "Firebase"]
    },
    {
      name: "Convention",
      url: "http://convention.infinityfreeapp.com/",
      desc: "Progetto d'esame realizzato con PHP e MySQL.",
      cat: "ricerche",
      icon: "bi-database-check",
      tags: ["PHP", "MySQL"]
    },
    {
      name: "Capolavoro 2024",
      url: "https://mattiabracco05.github.io/CAPOLAVORO/",
      desc: "Capolavoro sul PCTO per l'esame di maturità a.s. 2023/2024.",
      cat: "ricerche",
      icon: "bi-award",
      tags: ["PCTO", "Maturità"]
    },
    {
      name: "Zombie Star",
      url: "https://mattiabracco05.github.io/ZOMBIE-STAR/",
      desc: "Gioco arcade realizzato con la libreria Phaser 3.",
      cat: "giochi",
      icon: "bi-controller",
      tags: ["Phaser 3", "Arcade"]
    },
    {
      name: "Zombie World",
      url: "https://mattiabracco05.github.io/ZOMBIE-WORLD/",
      desc: "Il seguito di Zombie Star, sempre con Phaser 3.",
      cat: "giochi",
      icon: "bi-controller",
      tags: ["Phaser 3", "Arcade"]
    },
    {
      name: "Super Hero",
      url: "https://mattiabracco05.github.io/SUPER-HERO/",
      desc: "Platform con protagonista un supereroe, scritto in Phaser 3.",
      cat: "giochi",
      icon: "bi-lightning-charge",
      tags: ["Phaser 3", "Platform"]
    },
    {
      name: "Campo Minato",
      url: "https://mattiabracco05.github.io/CW-CAMPO-MINATO",
      desc: "Il classico campo minato, creato durante la Boolean Coding Week.",
      cat: "giochi",
      icon: "bi-grid-3x3",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Ducker",
      url: "https://mattiabracco05.github.io/CW-DUCKER",
      desc: "Mini gioco nato durante la Boolean Coding Week.",
      cat: "giochi",
      icon: "bi-joystick",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Stacker",
      url: "https://mattiabracco05.github.io/CW-STACKER",
      desc: "Gioco a torre con tempismo, dalla Boolean Coding Week.",
      cat: "giochi",
      icon: "bi-layers",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Progetti di classe",
      url: "https://progetti-itis-rivoira-4c.web.app/",
      desc: "Home page che raccoglie i progetti svolti con la classe.",
      cat: "scuola",
      icon: "bi-people",
      tags: ["Classe", "Firebase"]
    },
    {
      name: "Widget Tkinter",
      url: "https://progetti-itis-rivoira-4c.web.app/Progetti/Tkinter",
      desc: "Relazioni sui widget della libreria Tkinter per Python 3.",
      cat: "scuola",
      icon: "bi-filetype-py",
      tags: ["Python", "Tkinter"]
    },
    {
      name: "Ricerche Apice",
      url: "https://progetti-itis-rivoira-4c.web.app/Progetti/Apice",
      desc: "Le ricerche realizzate per il progetto Apice.",
      cat: "scuola",
      icon: "bi-mortarboard",
      tags: ["Apice", "Ricerca"]
    },
    {
      name: "FollowMe",
      url: "https://follow-me-itis-rivoira.web.app/",
      desc: "Evacuazione di emergenza e navigazione interna del nuovo edificio dell'ITIS G. Rivoira.",
      cat: "scuola",
      icon: "bi-signpost-split",
      tags: ["Sicurezza", "Firebase"]
    },
    {
      name: "Obelix",
      url: "http://37.60.34.42:8080/",
      desc: "Prenotazione del pranzo per l'IIS Denina-Pellico-Rivoira.",
      cat: "scuola",
      icon: "bi-basket",
      tags: ["Web app", "Prenotazioni"]
    }
  ];

  var TECH = [
    { label: "HTML5", icon: "bi-filetype-html", tone: "--cat-personali" },
    { label: "CSS3", icon: "bi-filetype-css", tone: "--cat-appunti" },
    { label: "JavaScript", icon: "bi-filetype-js", tone: "--cat-scuola" },
    { label: "Bootstrap", icon: "bi-bootstrap", tone: "--cat-ricerche" },
    { label: "Phaser 3", icon: "bi-controller", tone: "--cat-giochi" },
    { label: "React", icon: "bi-hexagon", tone: "--cat-appunti" },
    { label: "React Native", icon: "bi-phone", tone: "--cat-appunti" },
    { label: "Node.js", icon: "bi-hdd-network", tone: "--cat-giochi" },
    { label: "Firebase", icon: "bi-fire", tone: "--cat-personali" },
    { label: "PHP", icon: "bi-filetype-php", tone: "--cat-ricerche" },
    { label: "MySQL", icon: "bi-database", tone: "--cat-appunti" },
    { label: "Python", icon: "bi-filetype-py", tone: "--cat-scuola" },
    { label: "Git & GitHub", icon: "bi-github", tone: "--cat-flagship" }
  ];

  /* -----------------------------------------------------------
     2. Scorciatoie e utilità
     ----------------------------------------------------------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  function norm(s) {
    return String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function catOf(key) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].key === key) return CATEGORIES[i];
    }
    return CATEGORIES[1];
  }

  /* -----------------------------------------------------------
     3. Tema chiaro / scuro
     ----------------------------------------------------------- */
  (function theme() {
    var btn = $(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("portale-theme", next); } catch (e) { /* storage non disponibile */ }
      btn.setAttribute("aria-label", next === "light" ? "Passa al tema scuro" : "Passa al tema chiaro");
      toast(next === "light" ? "Tema chiaro attivo" : "Tema scuro attivo", "bi-palette");
    });
  })();

  /* -----------------------------------------------------------
     4. Toast
     ----------------------------------------------------------- */
  var toastTimer;
  function toast(msg, icon) {
    var el = $("#toast");
    if (!el) return;
    el.innerHTML = '<i class="bi ' + (icon || "bi-check-circle") + '"></i><span></span>';
    $("span", el).textContent = msg;
    el.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("is-on"); }, 2600);
  }

  /* -----------------------------------------------------------
     5. Hero: titolo a righe animate
     ----------------------------------------------------------- */
  (function heroLines() {
    var h1 = $("[data-lines]");
    if (!h1) return;
    var parts = h1.getAttribute("data-lines").split("|");
    h1.innerHTML = parts
      .map(function (txt, i) {
        var inner = txt.indexOf("*") === 0
          ? '<em class="gradient-text" style="font-style:normal">' + txt.slice(1) + "</em>"
          : txt;
        return '<span class="line"><span style="--d:' + (120 + i * 110) + '">' + inner + "</span></span>";
      })
      .join("");
  })();

  /* -----------------------------------------------------------
     6. Vetrina "pilastri" pinnata allo scroll
     ----------------------------------------------------------- */
  var pillarState = { track: null, items: [], dots: [], count: 0 };

  (function buildPillars() {
    var stage = $("#pillarsStage");
    var dotsBox = $("#pillarsDots");
    if (!stage) return;

    var stars = SITES.filter(function (s) { return s.star; });
    var tones = ["--cat-appunti", "--cat-flagship"];

    stage.insertAdjacentHTML("afterbegin", stars
      .map(function (s, i) {
        return (
          '<article class="pillar" style="--tone: var(' + tones[i % tones.length] + '); --tone-2: var(--accent-2)">' +
            '<div class="pillar__body">' +
              '<span class="pillar__index">0' + (i + 1) + " / 0" + stars.length + "</span>" +
              "<h3>" + s.name + "</h3>" +
              '<span class="pillar__role">' + s.role + "</span>" +
              '<p class="pillar__text">' + s.long + "</p>" +
              '<div class="pillar__meta">' +
                s.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
              "</div>" +
              '<div class="pillar__cta">' +
                '<a class="btn btn--primary" href="' + s.url + '" target="_blank" rel="noopener">' +
                  "Apri " + s.name + ' <i class="bi bi-arrow-up-right"></i>' +
                "</a>" +
              "</div>" +
            "</div>" +
            '<div class="pillar__visual" aria-hidden="true">' +
              '<span class="pillar__ring"></span><span class="pillar__ring"></span>' +
              '<i class="bi ' + s.glyph + ' pillar__glyph"></i>' +
            "</div>" +
          "</article>"
        );
      })
      .join(""));

    if (dotsBox) {
      dotsBox.innerHTML = stars
        .map(function (s, i) {
          return '<button type="button" data-go="' + i + '" aria-current="' + (i === 0) + '">' +
                 '<span class="sr-only">Vai a ' + s.name + "</span></button>";
        })
        .join("");
    }

    pillarState.track = $("#pillarsTrack");
    pillarState.items = $$(".pillar", stage);
    pillarState.dots = dotsBox ? $$("button", dotsBox) : [];
    pillarState.count = stars.length;

    if (dotsBox) {
      dotsBox.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-go]");
        if (!btn || !pillarState.track) return;
        var i = +btn.getAttribute("data-go");
        var rect = pillarState.track.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var span = pillarState.track.offsetHeight - window.innerHeight;
        var target = top + span * (0.3 + (0.4 * i) / Math.max(1, pillarState.count - 1));
        window.scrollTo({ top: target, behavior: reduceMotion.matches ? "auto" : "smooth" });
      });
    }
  })();

  function updatePillars() {
    var st = pillarState;
    if (!st.track || !st.items.length) return;
    if (window.innerWidth <= 820 || reduceMotion.matches) return;

    var rect = st.track.getBoundingClientRect();
    var span = st.track.offsetHeight - window.innerHeight;
    var p = clamp(-rect.top / (span || 1), 0, 1);
    // tiene fermo il primo pannello per il 30% iniziale e l'ultimo per il 30% finale
    var q = clamp((p - 0.3) / 0.4, 0, 1);
    var seg = q * (st.count - 1);
    var active = Math.round(seg);

    st.items.forEach(function (el, i) {
      var d = seg - i;
      var ad = Math.abs(d);
      el.style.setProperty("--o", clamp(1 - ad * 1.45, 0, 1).toFixed(3));
      el.style.setProperty("--ty", (d * -70).toFixed(1));
      el.style.setProperty("--s", (1 - ad * 0.07).toFixed(3));
      el.style.setProperty("--tilt", (d * 9).toFixed(2));
      el.classList.toggle("is-live", i === active);
    });

    st.dots.forEach(function (b, i) { b.setAttribute("aria-current", String(i === active)); });
  }

  /* -----------------------------------------------------------
     7. Griglia dei collegamenti
     ----------------------------------------------------------- */
  var grid = $("#grid");
  var state = { q: "", cat: "all", sort: "reco", view: "grid" };

  function cardHTML(s, i) {
    var c = catOf(s.cat);
    return (
      '<article class="card reveal" style="--tone: var(' + c.tone + '); --i:' + (i % 9) + '"' +
        ' data-cat="' + s.cat + '"' +
        ' data-star="' + (s.star ? "1" : "0") + '"' +
        ' data-name="' + norm(s.name) + '"' +
        ' data-hay="' + norm(s.name + " " + s.desc + " " + s.tags.join(" ") + " " + c.label) + '">' +
        '<div class="card__top">' +
          '<span class="card__icon"><i class="bi ' + s.icon + '"></i></span>' +
          '<span class="card__badge' + (s.star ? " card__badge--star" : "") + '">' +
            (s.star ? '<i class="bi bi-stars"></i> In evidenza' : c.label) +
          "</span>" +
        "</div>" +
        '<div class="card__body">' +
          "<h3>" + s.name + "</h3>" +
          '<p class="card__desc">' + s.desc + "</p>" +
        "</div>" +
        '<div class="card__foot">' +
          '<div class="tags">' + s.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>" +
          '<span class="card__go"><i class="bi bi-arrow-right"></i></span>' +
        "</div>" +
        '<a class="card__link" href="' + s.url + '" target="_blank" rel="noopener">' +
          "<span>Apri " + s.name + "</span>" +
        "</a>" +
      "</article>"
    );
  }

  function sortedSites() {
    var list = SITES.slice();
    if (state.sort === "name") {
      list.sort(function (a, b) { return norm(a.name) < norm(b.name) ? -1 : 1; });
    } else if (state.sort === "cat") {
      var order = CATEGORIES.map(function (c) { return c.key; });
      list.sort(function (a, b) {
        var d = order.indexOf(a.cat) - order.indexOf(b.cat);
        return d !== 0 ? d : (norm(a.name) < norm(b.name) ? -1 : 1);
      });
    } else {
      list.sort(function (a, b) { return (b.star ? 1 : 0) - (a.star ? 1 : 0); });
    }
    return list;
  }

  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = sortedSites().map(cardHTML).join("");
    $$(".card", grid).forEach(function (c) { revealObserver.observe(c); });
    applyFilters(true);
  }

  function matches(card) {
    if (state.cat === "star" && card.getAttribute("data-star") !== "1") return false;
    if (state.cat !== "all" && state.cat !== "star" && card.getAttribute("data-cat") !== state.cat) return false;
    if (!state.q) return true;
    return state.q.split(/\s+/).every(function (term) {
      return card.getAttribute("data-hay").indexOf(term) !== -1;
    });
  }

  function applyFilters(skipFlip) {
    if (!grid) return;
    var cards = $$(".card", grid);
    var before = null;

    if (!skipFlip && !reduceMotion.matches) {
      before = new Map();
      cards.forEach(function (c) {
        if (!c.classList.contains("is-hidden")) before.set(c, c.getBoundingClientRect());
      });
    }

    var shown = 0;
    cards.forEach(function (c) {
      var ok = matches(c);
      c.classList.toggle("is-hidden", !ok);
      if (ok) shown++;
    });

    // FLIP: le card scivolano nella nuova posizione invece di saltare
    if (before) {
      $$(".card", grid).forEach(function (c) {
        if (c.classList.contains("is-hidden")) return;
        var now = c.getBoundingClientRect();
        var old = before.get(c);
        if (old) {
          var dx = old.left - now.left;
          var dy = old.top - now.top;
          if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
            c.animate(
              [{ translate: dx + "px " + dy + "px" }, { translate: "0px 0px" }],
              { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" }
            );
          }
        } else {
          c.animate(
            [{ opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1 }],
            { duration: 380, easing: "cubic-bezier(.22,1,.36,1)" }
          );
        }
      });
    }

    var count = $("#resultCount");
    if (count) count.textContent = String(shown);
    var label = $("#resultLabel");
    if (label) label.textContent = shown === 1 ? "sito" : "siti";
    var empty = $("#empty");
    if (empty) empty.classList.toggle("is-on", shown === 0);
    var reset = $("#resetFilters");
    if (reset) reset.hidden = state.cat === "all" && !state.q;

    $$("[data-chip]").forEach(function (chip) {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("data-chip") === state.cat));
    });
  }

  /* chip categorie con contatori reali */
  (function buildChips() {
    var box = $("#chips");
    if (!box) return;
    var counts = {};
    SITES.forEach(function (s) { counts[s.cat] = (counts[s.cat] || 0) + 1; });
    var starCount = SITES.filter(function (s) { return s.star; }).length;

    var html = '<button class="chip" type="button" data-chip="all" aria-pressed="true">' +
               '<span class="chip__swatch"></span>Tutti' +
               '<span class="chip__count">' + SITES.length + "</span></button>";

    html += CATEGORIES.map(function (c) {
      var n = c.key === "star" ? starCount : counts[c.key] || 0;
      if (!n) return "";
      return '<button class="chip" type="button" data-chip="' + c.key + '" aria-pressed="false" style="--tone: var(' + c.tone + ')">' +
             '<span class="chip__swatch"></span>' + c.label +
             '<span class="chip__count">' + n + "</span></button>";
    }).join("");

    box.innerHTML = html;

    box.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-chip]");
      if (!chip) return;
      state.cat = chip.getAttribute("data-chip");
      applyFilters();
    });
  })();

  /* ricerca */
  (function searchBox() {
    var wrap = $("#searchWrap");
    var input = $("#search");
    if (!input) return;
    var t;
    input.addEventListener("input", function () {
      wrap.classList.toggle("has-value", input.value.length > 0);
      clearTimeout(t);
      t = setTimeout(function () {
        state.q = norm(input.value.trim());
        applyFilters();
      }, 110);
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.value = ""; input.dispatchEvent(new Event("input")); input.blur(); }
    });
    var clear = $("#searchClear");
    if (clear) {
      clear.addEventListener("click", function () {
        input.value = "";
        input.dispatchEvent(new Event("input"));
        input.focus();
      });
    }
  })();

  /* ordinamento */
  var sortSel = $("#sort");
  if (sortSel) {
    sortSel.addEventListener("change", function () {
      state.sort = sortSel.value;
      renderGrid();
    });
  }

  /* vista griglia / elenco */
  (function viewSwitch() {
    var box = $("#viewSwitch");
    if (!box || !grid) return;
    try {
      var saved = localStorage.getItem("portale-view");
      if (saved === "list" || saved === "grid") state.view = saved;
    } catch (e) { /* ignorato */ }
    var sync = function () {
      grid.setAttribute("data-view", state.view);
      $$("button", box).forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-view") === state.view));
      });
    };
    sync();
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-view]");
      if (!b) return;
      state.view = b.getAttribute("data-view");
      try { localStorage.setItem("portale-view", state.view); } catch (err) { /* ignorato */ }
      sync();
    });
  })();

  /* azzera filtri */
  var resetBtn = $("#resetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      state.cat = "all";
      state.q = "";
      var input = $("#search");
      if (input) { input.value = ""; $("#searchWrap").classList.remove("has-value"); }
      applyFilters();
    });
  }

  /* -----------------------------------------------------------
     8. Tilt 3D + riflettore sulle card
     ----------------------------------------------------------- */
  (function cardInteractions() {
    if (!grid || reduceMotion.matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    grid.addEventListener("pointermove", function (e) {
      var card = e.target.closest(".card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      card.style.setProperty("--ry", ((x - 0.5) * 7).toFixed(2) + "deg");
      card.style.setProperty("--rx", ((0.5 - y) * 7).toFixed(2) + "deg");
    });

    grid.addEventListener("pointerleave", function () {
      $$(".card", grid).forEach(function (c) {
        c.style.setProperty("--rx", "0deg");
        c.style.setProperty("--ry", "0deg");
      });
    });

    grid.addEventListener("pointerout", function (e) {
      var card = e.target.closest(".card");
      if (!card || (e.relatedTarget && card.contains(e.relatedTarget))) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  })();

  /* -----------------------------------------------------------
     9. Marquee tecnologie
     ----------------------------------------------------------- */
  (function marquee() {
    var box = $("#techMarquee");
    if (!box) return;
    var row = TECH.map(function (t) {
      return '<span class="tech" style="--tone: var(' + t.tone + ')"><i class="bi ' + t.icon + '"></i>' + t.label + "</span>";
    }).join("");
    box.innerHTML =
      '<div class="marquee__row">' + row + "</div>" +
      '<div class="marquee__row" aria-hidden="true">' + row + "</div>";
  })();

  /* -----------------------------------------------------------
     10. Palette comandi (Ctrl/Cmd + K)
     ----------------------------------------------------------- */
  var palette = (function () {
    var overlay = $("#palette");
    if (!overlay) return { open: function () {} };
    var input = $("#paletteInput");
    var list = $("#paletteList");
    var idx = 0;
    var items = [];
    var lastFocus = null;

    var ACTIONS = [
      { name: "Vai ai collegamenti", desc: "Scorri alla griglia dei siti", icon: "bi-grid", cat: "Azione", tone: "--accent-3", run: function () { jump("#collegamenti"); } },
      { name: "Cambia tema", desc: "Alterna chiaro e scuro", icon: "bi-circle-half", cat: "Azione", tone: "--accent-2", run: function () { $(".theme-toggle").click(); } },
      { name: "Copia la mia email", desc: "mattia.bracco05@gmail.com", icon: "bi-envelope-paper", cat: "Azione", tone: "--cat-giochi", run: copyEmail },
      { name: "Profilo GitHub", desc: "github.com/MattiaBracco05", icon: "bi-github", cat: "Azione", tone: "--cat-scuola", run: function () { window.open("https://github.com/MattiaBracco05", "_blank", "noopener"); } }
    ];

    function pool() {
      return SITES.map(function (s) {
        var c = catOf(s.cat);
        return {
          name: s.name,
          desc: s.desc,
          icon: s.icon,
          cat: s.star ? "In evidenza" : c.label,
          tone: c.tone,
          hay: norm(s.name + " " + s.desc + " " + s.tags.join(" ")),
          run: function () { window.open(s.url, "_blank", "noopener"); }
        };
      }).concat(
        ACTIONS.map(function (a) {
          a.hay = norm(a.name + " " + a.desc);
          return a;
        })
      );
    }

    function render() {
      var q = norm(input.value.trim());
      var all = pool();
      items = q ? all.filter(function (it) {
        return q.split(/\s+/).every(function (t) { return it.hay.indexOf(t) !== -1; });
      }) : all;

      if (!items.length) {
        list.innerHTML = '<p class="palette__empty">Nessun risultato per “' + input.value + "”</p>";
        return;
      }
      idx = 0;
      list.innerHTML = items
        .map(function (it, i) {
          var tone = it.tone.indexOf("--cat") === 0 || it.tone.indexOf("--accent") === 0 ? "var(" + it.tone + ")" : it.tone;
          return '<button class="palette__item" type="button" role="option" data-i="' + i + '"' +
                 ' aria-selected="' + (i === 0) + '" style="--tone: ' + tone + '">' +
                 '<i class="bi ' + it.icon + '"></i>' +
                 "<span><b>" + it.name + "</b><small>" + it.desc + "</small></span>" +
                 '<span class="palette__cat">' + it.cat + "</span></button>";
        })
        .join("");
    }

    function move(step) {
      var btns = $$(".palette__item", list);
      if (!btns.length) return;
      idx = (idx + step + btns.length) % btns.length;
      btns.forEach(function (b, i) { b.setAttribute("aria-selected", String(i === idx)); });
      btns[idx].scrollIntoView({ block: "nearest" });
    }

    function run(i) {
      var it = items[i];
      if (!it) return;
      close();
      it.run();
    }

    function open() {
      lastFocus = document.activeElement;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      input.value = "";
      render();
      setTimeout(function () { input.focus(); }, 60);
    }

    function close() {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    input.addEventListener("input", render);
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") { e.preventDefault(); run(idx); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    list.addEventListener("click", function (e) {
      var b = e.target.closest(".palette__item");
      if (b) run(+b.getAttribute("data-i"));
    });
    list.addEventListener("pointermove", function (e) {
      var b = e.target.closest(".palette__item");
      if (!b) return;
      idx = +b.getAttribute("data-i");
      $$(".palette__item", list).forEach(function (x, i) { x.setAttribute("aria-selected", String(i === idx)); });
    });
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    $$("[data-open-palette]").forEach(function (b) { b.addEventListener("click", open); });

    return { open: open, close: close, isOpen: function () { return overlay.classList.contains("is-open"); } };
  })();

  /* -----------------------------------------------------------
     11. Scorciatoie da tastiera
     ----------------------------------------------------------- */
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      palette.isOpen && palette.isOpen() ? palette.close() : palette.open();
      return;
    }
    if (typing) return;
    if (e.key === "/") {
      e.preventDefault();
      var s = $("#search");
      if (s) {
        s.scrollIntoView({ block: "center", behavior: reduceMotion.matches ? "auto" : "smooth" });
        setTimeout(function () { s.focus(); }, 320);
      }
    }
    if (e.key === "t" || e.key === "T") {
      var tt = $(".theme-toggle");
      if (tt) tt.click();
    }
  });

  /* -----------------------------------------------------------
     12. Email: copia negli appunti
     ----------------------------------------------------------- */
  function copyEmail() {
    var mail = "mattia.bracco05@gmail.com";
    var done = function () { toast("Email copiata negli appunti", "bi-clipboard-check"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mail).then(done, function () { toast("Copia non riuscita: " + mail, "bi-exclamation-circle"); });
    } else {
      var ta = document.createElement("textarea");
      ta.value = mail;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Copia non riuscita: " + mail, "bi-exclamation-circle"); }
      document.body.removeChild(ta);
    }
  }
  $$("[data-copy-email]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); copyEmail(); });
  });

  /* -----------------------------------------------------------
     13. Navigazione mobile + link interni
     ----------------------------------------------------------- */
  function jump(hash) {
    var el = $(hash);
    if (!el) return;
    document.body.classList.remove("nav-open");
    el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
  }

  (function mobileNav() {
    var burger = $("#burger");
    var nav = $("#nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.innerHTML = '<i class="bi ' + (open ? "bi-x-lg" : "bi-list") + '"></i>';
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
        burger.innerHTML = '<i class="bi bi-list"></i>';
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.body.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
        burger.innerHTML = '<i class="bi bi-list"></i>';
      }
    });
  })();

  /* -----------------------------------------------------------
     14. Rivelazioni allo scroll + contatori
     ----------------------------------------------------------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        revealObserver.unobserve(en.target);
        if (en.target.hasAttribute("data-count")) countUp(en.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  function countUp(el) {
    var target = +el.getAttribute("data-count");
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion.matches) { el.textContent = target + suffix; return; }
    var dur = 1400;
    var start = performance.now();
    (function tick(now) {
      var p = clamp((now - start) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* -----------------------------------------------------------
     15. Scroll: progresso, header, hero, sezione attiva
     ----------------------------------------------------------- */
  var header = $("#header");
  var toTop = $("#toTop");
  var navLinks = $$("#nav a[href^='#']");
  var sections = navLinks
    .map(function (a) { return $(a.getAttribute("href")); })
    .filter(Boolean);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? clamp(y / max, 0, 1) : 0;

      document.documentElement.style.setProperty("--progress", p.toFixed(4));
      document.documentElement.style.setProperty("--scroll-y", Math.min(y, 2400) + "px");

      if (header) header.classList.toggle("is-stuck", y > 20);
      if (toTop) toTop.classList.toggle("is-on", y > 700);

      var hero = $(".hero__inner");
      if (hero) {
        var fade = clamp(1 - y / (window.innerHeight * 0.75), 0, 1);
        document.documentElement.style.setProperty("--hero-fade", fade.toFixed(3));
      }

      // sezione attiva nel menu
      var current = null;
      sections.forEach(function (sec) {
        if (sec.getBoundingClientRect().top <= window.innerHeight * 0.35) current = sec.id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
      });

      updatePillars();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* -----------------------------------------------------------
     16. Riflettore del puntatore
     ----------------------------------------------------------- */
  (function pointerGlow() {
    if (reduceMotion.matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    var cx = tx, cy = ty, raf = null;
    document.body.classList.add("has-pointer");

    window.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY;
      document.documentElement.style.setProperty("--px", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });

    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      document.documentElement.style.setProperty("--cx", cx.toFixed(1) + "px");
      document.documentElement.style.setProperty("--cy", cy.toFixed(1) + "px");
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  })();

  /* -----------------------------------------------------------
     17. Avvio
     ----------------------------------------------------------- */
  renderGrid();
  $$(".reveal").forEach(function (el) { revealObserver.observe(el); });
  $$("[data-count]").forEach(function (el) { revealObserver.observe(el); });
  onScroll();

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href^='#']");
    if (!a) return;
    var hash = a.getAttribute("href");
    if (hash === "#" || hash.length < 2) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
      return;
    }
    if ($(hash)) {
      e.preventDefault();
      jump(hash);
      history.replaceState(null, "", hash);
    }
  });

  window.addEventListener("load", function () {
    document.body.classList.add("is-ready");
  });
})();
