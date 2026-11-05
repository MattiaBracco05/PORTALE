/* ===========================================================
   PORTALE — Mattia Bracco
   Logica del sito: dati, lingue, filtri, animazioni, palette
   =========================================================== */
(function () {
  "use strict";

  /* -----------------------------------------------------------
     0. LINGUA
        I testi stanno in UI (interfaccia) e dentro i dati dei siti
        come oggetti { it: "...", en: "..." }.
     ----------------------------------------------------------- */
  var LANGS = ["it", "en"];
  var lang = "it";

  var UI = {
    it: {
      "skip": "Salta ai collegamenti",
      "nav.home": "Home",
      "nav.pillars": "In evidenza",
      "nav.links": "Collegamenti",
      "nav.stack": "Tecnologie",
      "nav.contact": "Contatti",
      "header.search": "Cerca",
      "header.searchAria": "Apri la ricerca rapida",
      "header.menu": "Apri il menu",
      "header.lang": "Lingua",
      "header.it": "Italiano",
      "header.en": "Inglese",
      "theme.toLight": "Passa al tema chiaro",
      "theme.toDark": "Passa al tema scuro",

      "hero.eyebrow": "22 progetti online, tutti raggiungibili da qui",
      "hero.lines": "Un indirizzo|*per tutto|quello che ho fatto.",
      "hero.lead": "Sono Mattia Bracco. Negli anni ho costruito siti, web app, giochi e raccolte di appunti, sparsi tra GitHub Pages, Firebase e domini miei. Questo portale li tiene insieme: cerca, filtra e apri quello che ti serve.",
      "hero.cta1": "Scopri i progetti di punta",
      "hero.cta2": "Ricerca rapida",
      "hero.scroll": "Scorri",
      "stats.projects": "Progetti",
      "stats.categories": "Categorie",
      "stats.tech": "Tecnologie",
      "stats.flagship": "Progetti di punta",

      "pillars.tag": "I pilastri",
      "pillars.title": "Due progetti su cui punto davvero",
      "pillars.lead": "Tutto il resto è una tappa del percorso. Questi due sono quelli che curo di più: resta fermo e scorri, cambiano loro.",
      "pillars.dots": "Scegli il progetto in evidenza",
      "pillars.goto": "Vai a",
      "pillars.open": "Apri",

      "links.tag": "Tutti i collegamenti",
      "links.title": "L'archivio completo",
      "links.lead": "Filtra per categoria, cerca per nome o tecnologia, scegli griglia o elenco.<span class=\"only-wide\"> Premi <kbd>/</kbd> per saltare alla ricerca, <kbd>Ctrl</kbd>+<kbd>K</kbd> per aprire qualsiasi sito in due tasti.</span>",
      "tool.searchPlaceholder": "Cerca un sito, una tecnologia…",
      "tool.searchAria": "Cerca tra i siti",
      "tool.clear": "Svuota la ricerca",
      "tool.sortAria": "Ordina i risultati",
      "tool.sortReco": "Consigliati",
      "tool.sortName": "Nome A → Z",
      "tool.sortCat": "Per categoria",
      "tool.viewAria": "Tipo di visualizzazione",
      "tool.viewGrid": "Vista a griglia",
      "tool.viewList": "Vista a elenco",
      "tool.catAria": "Filtra per categoria",
      "tool.all": "Tutti",
      "res.site": "sito",
      "res.sites": "siti",
      "res.found": "trovati",
      "res.reset": "Azzera i filtri",
      "empty.title": "Nessun sito corrisponde",
      "empty.text": "Prova con un'altra parola o azzera i filtri.",
      "card.open": "Apri",
      "badge.star": "In evidenza",

      "stack.tag": "Con cosa li costruisco",
      "stack.title": "Gli strumenti che uso",
      "stack.lead": "Dal primo sito di appunti in HTML alle web app con Firebase e ai giochi in Phaser 3.",
      "stack.aria": "Tecnologie utilizzate",

      "contact.title": "Contattami",
      "contact.email": "Email",
      "contact.emailDesc": "Scrivimi, oppure copia l'indirizzo con un clic.",
      "contact.emailAria": "Copia l'indirizzo email negli appunti",
      "contact.githubText": "Il codice di quasi tutto quello che vedi qui.",
      "contact.githubAria": "Apri il mio profilo GitHub",
      "contact.igText": "Foto, riprese dall'alto e vita fuori dallo schermo.",
      "contact.igAria": "Apri il mio profilo Instagram",

      "footer.about": "Un unico indirizzo per tutti i siti che ho realizzato. Se cerchi il lavoro più recente, parti da <a href=\"https://mydroneview.it\" target=\"_blank\" rel=\"noopener\">MyDroneView</a>.",
      "footer.nav": "Naviga",
      "footer.highlights": "In evidenza",
      "footer.copy": "Mattia Bracco — Portale",
      "footer.shortcuts": "Scorciatoie: <kbd>/</kbd> cerca · <kbd>T</kbd> tema",
      "toTop": "Torna all'inizio",
      "sheet.title": "Filtri e ricerca",
      "sheet.close": "Chiudi i filtri",
      "sheet.show": "Mostra",
      "fab.filters": "Apri i filtri di ricerca",

      "palette.aria": "Ricerca rapida",
      "palette.placeholder": "Scrivi il nome di un sito o di un'azione…",
      "palette.inputAria": "Cerca un sito o un'azione",
      "palette.results": "Risultati",
      "palette.nav": "naviga",
      "palette.open": "apri",
      "palette.close": "chiudi",
      "palette.empty": "Nessun risultato per",
      "palette.action": "Azione",
      "act.links": "Vai ai collegamenti",
      "act.linksDesc": "Scorri alla griglia dei siti",
      "act.theme": "Cambia tema",
      "act.themeDesc": "Alterna chiaro e scuro",
      "act.copy": "Copia la mia email",
      "act.github": "Profilo GitHub",
      "act.lang": "Switch to English",
      "act.langDesc": "Passa alla versione inglese",

      "toast.light": "Tema chiaro attivo",
      "toast.dark": "Tema scuro attivo",
      "toast.copied": "Email copiata negli appunti",
      "toast.copyFail": "Copia non riuscita:",
      "toast.lang": "Lingua: Italiano"
    },

    en: {
      "skip": "Skip to the links",
      "nav.home": "Home",
      "nav.pillars": "Highlights",
      "nav.links": "Projects",
      "nav.stack": "Tech",
      "nav.contact": "Contact",
      "header.search": "Search",
      "header.searchAria": "Open quick search",
      "header.menu": "Open menu",
      "header.lang": "Language",
      "header.it": "Italian",
      "header.en": "English",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",

      "hero.eyebrow": "22 projects online, all reachable from here",
      "hero.lines": "One address|*for everything|I have built.",
      "hero.lead": "I'm Mattia Bracco. Over the years I have built websites, web apps, games and sets of study notes, scattered across GitHub Pages, Firebase and my own domains. This portal keeps them together: search, filter and open whatever you need.",
      "hero.cta1": "See the flagship projects",
      "hero.cta2": "Quick search",
      "hero.scroll": "Scroll",
      "stats.projects": "Projects",
      "stats.categories": "Categories",
      "stats.tech": "Technologies",
      "stats.flagship": "Flagship projects",

      "pillars.tag": "The pillars",
      "pillars.title": "Two projects I really bet on",
      "pillars.lead": "Everything else is a step along the way. These two are the ones I look after most: stay put and scroll — they do the moving.",
      "pillars.dots": "Pick a highlighted project",
      "pillars.goto": "Go to",
      "pillars.open": "Open",

      "links.tag": "All the links",
      "links.title": "The full archive",
      "links.lead": "Filter by category, search by name or technology, pick grid or list.<span class=\"only-wide\"> Press <kbd>/</kbd> to jump to the search box, <kbd>Ctrl</kbd>+<kbd>K</kbd> to open any site in two keystrokes.</span>",
      "tool.searchPlaceholder": "Search a site, a technology…",
      "tool.searchAria": "Search the sites",
      "tool.clear": "Clear the search",
      "tool.sortAria": "Sort the results",
      "tool.sortReco": "Recommended",
      "tool.sortName": "Name A → Z",
      "tool.sortCat": "By category",
      "tool.viewAria": "View mode",
      "tool.viewGrid": "Grid view",
      "tool.viewList": "List view",
      "tool.catAria": "Filter by category",
      "tool.all": "All",
      "res.site": "site",
      "res.sites": "sites",
      "res.found": "found",
      "res.reset": "Reset the filters",
      "empty.title": "No site matches",
      "empty.text": "Try another word or reset the filters.",
      "card.open": "Open",
      "badge.star": "Highlighted",

      "stack.tag": "What I build them with",
      "stack.title": "The tools I use",
      "stack.lead": "From my first HTML notes site to Firebase web apps and Phaser 3 games.",
      "stack.aria": "Technologies used",

      "contact.title": "Contact me",
      "contact.email": "Email",
      "contact.emailDesc": "Write to me, or copy the address with one click.",
      "contact.emailAria": "Copy the email address to the clipboard",
      "contact.githubText": "The code behind almost everything you see here.",
      "contact.githubAria": "Open my GitHub profile",
      "contact.igText": "Photos, shots from above and life away from the screen.",
      "contact.igAria": "Open my Instagram profile",

      "footer.about": "One address for every site I have built. If you are after the most recent work, start from <a href=\"https://mydroneview.it\" target=\"_blank\" rel=\"noopener\">MyDroneView</a>.",
      "footer.nav": "Navigate",
      "footer.highlights": "Highlights",
      "footer.copy": "Mattia Bracco — Portal",
      "footer.shortcuts": "Shortcuts: <kbd>/</kbd> search · <kbd>T</kbd> theme",
      "toTop": "Back to top",
      "sheet.title": "Filters and search",
      "sheet.close": "Close the filters",
      "sheet.show": "Show",
      "fab.filters": "Open the search filters",

      "palette.aria": "Quick search",
      "palette.placeholder": "Type the name of a site or an action…",
      "palette.inputAria": "Search a site or an action",
      "palette.results": "Results",
      "palette.nav": "navigate",
      "palette.open": "open",
      "palette.close": "close",
      "palette.empty": "No results for",
      "palette.action": "Action",
      "act.links": "Go to the projects",
      "act.linksDesc": "Scroll to the grid of sites",
      "act.theme": "Switch theme",
      "act.themeDesc": "Toggle light and dark",
      "act.copy": "Copy my email",
      "act.github": "GitHub profile",
      "act.lang": "Passa all'italiano",
      "act.langDesc": "Switch to the Italian version",

      "toast.light": "Light theme on",
      "toast.dark": "Dark theme on",
      "toast.copied": "Email copied to the clipboard",
      "toast.copyFail": "Copy failed:",
      "toast.lang": "Language: English"
    }
  };

  function t(key) {
    var d = UI[lang] || UI.it;
    return d[key] != null ? d[key] : (UI.it[key] != null ? UI.it[key] : key);
  }

  /* Risolve un valore che può essere una stringa o un oggetto { it, en } */
  function tr(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      return v[lang] != null ? v[lang] : v.it;
    }
    return v;
  }

  /* Glossario dei tag: tradotto solo quello che non è un nome proprio */
  var TAG_EN = {
    "Personale": "Personal",
    "Fotografia": "Photography",
    "Galleria": "Gallery",
    "Campi estivi": "Summer camps",
    "Guida": "Guide",
    "Primo sito": "First site",
    "Inglese": "English",
    "Ricerca": "Research",
    "PCTO": "Work placement",
    "Maturità": "Final exam",
    "Classe": "Class",
    "Sicurezza": "Safety",
    "Prenotazioni": "Bookings",
    "API REST": "REST API"
  };
  function trTags(tags) {
    return lang === "en" ? tags.map(function (x) { return TAG_EN[x] || x; }) : tags;
  }

  /* -----------------------------------------------------------
     1. DATI — per aggiungere un sito basta una voce qui sotto.
        cat:  personali | appunti | ricerche | giochi | scuola
        star: true  -> compare anche nella vetrina "I pilastri"
        I testi con { it, en } seguono la lingua scelta.
     ----------------------------------------------------------- */
  var CATEGORIES = [
    { key: "star",      label: { it: "In evidenza", en: "Highlights" }, tone: "--cat-flagship" },
    { key: "personali", label: { it: "Personali", en: "Personal" },     tone: "--cat-personali" },
    { key: "appunti",   label: { it: "Appunti", en: "Notes" },          tone: "--cat-appunti" },
    { key: "ricerche",  label: { it: "Ricerche", en: "Research" },      tone: "--cat-ricerche" },
    { key: "giochi",    label: { it: "Giochi", en: "Games" },           tone: "--cat-giochi" },
    { key: "scuola",    label: { it: "Scuola", en: "School" },          tone: "--cat-scuola" }
  ];

  /* Quadricottero disegnato a mano: Bootstrap Icons non ha un'icona drone.
     Le eliche sono in un <g> a parte per poterle far girare via CSS. */
  function droneSVG(cls) {
    var rotors = [[5, 5], [19, 5], [5, 19], [19, 19]]
      .map(function (r) {
        return '<circle cx="' + r[0] + '" cy="' + r[1] + '" r="2.7"/>' +
               '<g class="drone-blade" style="--ox:' + r[0] + 'px; --oy:' + r[1] + 'px">' +
                 '<path d="M' + (r[0] - 2.1) + " " + r[1] + 'h4.2"/>' +
                 '<path d="M' + r[0] + " " + (r[1] - 2.1) + 'v4.2"/>' +
               "</g>";
      })
      .join("");
    return '<svg class="' + cls + ' drone" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
             'stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
             // braccia dal corpo verso i quattro rotori
             '<path d="M9.8 9.8 6.9 6.9M14.2 9.8 17.1 6.9M9.8 14.2 6.9 17.1M14.2 14.2 17.1 17.1"/>' +
             // scocca centrale
             '<rect x="8.5" y="8.5" width="7" height="7" rx="2.4"/>' +
             // obiettivo sul gimbal
             '<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>' +
             rotors +
           "</svg>";
  }

  /* Segno grafico di un sito: SVG su misura se previsto, altrimenti icona del font */
  function markOf(s, iconName, cls) {
    return s.svg === "drone"
      ? droneSVG(cls || "")
      : '<i class="bi ' + iconName + (cls ? " " + cls : "") + '"></i>';
  }

  var SITES = [
    {
      name: "MyDroneView",
      url: "https://mydroneview.it",
      desc: {
        it: "Fotografia aerea e video con drone: missioni, gallerie e un panorama sferico a 360° navigabile.",
        en: "Aerial photography and drone video: missions, galleries and a navigable 360° spherical panorama."
      },
      cat: "personali",
      icon: "bi-airplane-engines", // riserva: il segno reale e' l'SVG del drone
      svg: "drone",
      tags: ["Drone", "4K", "360°"],
      star: true,
      role: { it: "Progetto di punta", en: "Flagship project" },
      long: {
        it: "Il mio progetto dedicato alle riprese dall'alto. Ogni lavoro è raccontato come una missione di volo, con video, foto aeree e la mappa dei punti di ripresa — dalle coste di Zante e Palma di Maiorca ai raduni in Piemonte. Dentro c'è anche un panorama sferico a 360° da esplorare.",
        en: "My project devoted to shooting from above. Every job is told as a flight mission, with video, aerial photos and a map of the shooting points — from the coasts of Zakynthos and Palma de Mallorca to gatherings in Piedmont. Inside there is also a 360° spherical panorama to explore."
      },
      glyph: "bi-airplane-engines"
    },
    {
      name: "MattheWeb",
      url: "https://mattiabracco05.github.io/MattheWeb",
      desc: {
        it: "Il mio sito personale: chi sono, cosa faccio e dove trovarmi.",
        en: "My personal site: who I am, what I do and where to find me."
      },
      cat: "personali",
      icon: "bi-person-circle",
      tags: ["Personale", "GitHub Pages"],
      star: true,
      role: { it: "Casa base", en: "Home base" },
      long: {
        it: "Il punto di partenza di tutto: il sito personale dove racconto chi sono, il percorso tecnico e i lavori a cui tengo di più. È il biglietto da visita a cui rimandano tutti gli altri progetti.",
        en: "The starting point of everything: the personal site where I tell who I am, my technical path and the work I care about most. It is the business card all the other projects point back to."
      },
      glyph: "bi-person-circle"
    },
    {
      name: "Fanta Animatori",
      url: "https://mattiabracco05.github.io/FANTA-ANIMATORI-GAME/",
      desc: {
        it: "Il gioco del Fanta Animatori per i campi estivi di Sant'Anna di Bellino.",
        en: "The Fanta Animatori game for the summer camps in Sant'Anna di Bellino."
      },
      cat: "personali",
      icon: "bi-trophy",
      tags: ["Fantasy game", "Campi estivi"]
    },
    {
      name: "Appunti TPSIT",
      url: "https://mattiabracco05.github.io/APPUNTI-TPSIT/",
      desc: {
        it: "Guida completa con tutti i miei appunti di TPSIT.",
        en: "A complete guide with all my TPSIT class notes."
      },
      cat: "appunti",
      icon: "bi-journal-code",
      tags: ["TPSIT", "Guida"]
    },
    {
      name: "Appunti NodeJS",
      url: "https://appunti-65795.firebaseapp.com/index",
      desc: {
        it: "Guida pratica a Node.js, dai moduli al server.",
        en: "A practical guide to Node.js, from modules to the server."
      },
      cat: "appunti",
      icon: "bi-filetype-js",
      tags: ["Node.js", "Firebase"]
    },
    {
      name: "Appunti Codifiche",
      url: "https://mattiabracco05.github.io/CODIFICHE/",
      desc: {
        it: "Il primo sito che ho realizzato: appunti sulle codifiche audio e video.",
        en: "The first site I ever built: notes on audio and video encoding."
      },
      cat: "appunti",
      icon: "bi-file-earmark-play",
      tags: ["Audio/Video", "Primo sito"]
    },
    {
      name: "English Car",
      url: "https://mattiabracco05.github.io/ENGLISH-CAR/",
      desc: {
        it: "Ricerca sull'automobile realizzata come progetto di inglese.",
        en: "Research on the automobile, made as an English class project."
      },
      cat: "ricerche",
      icon: "bi-car-front",
      tags: ["Inglese", "Ricerca"]
    },
    {
      name: "Formula 1",
      url: "https://mattiabracco05.github.io/F1/",
      desc: {
        it: "Ricerca di TPSIT per imparare a costruire un sito con Bootstrap.",
        en: "A TPSIT research project to learn how to build a site with Bootstrap."
      },
      cat: "ricerche",
      icon: "bi-speedometer",
      tags: ["Bootstrap", "TPSIT"]
    },
    {
      name: "API Spotify",
      url: "https://spotify-search-artists.web.app/",
      desc: {
        it: "Ricerca di artisti su Spotify, nata per capire il funzionamento delle API.",
        en: "Artist search on Spotify, built to understand how APIs work."
      },
      cat: "ricerche",
      icon: "bi-spotify",
      tags: ["API REST", "Firebase"]
    },
    {
      name: "Convention",
      url: "http://convention.infinityfreeapp.com/",
      desc: {
        it: "Progetto d'esame realizzato con PHP e MySQL.",
        en: "Exam project built with PHP and MySQL."
      },
      cat: "ricerche",
      icon: "bi-database-check",
      tags: ["PHP", "MySQL"]
    },
    {
      name: "Capolavoro 2024",
      url: "https://mattiabracco05.github.io/CAPOLAVORO/",
      desc: {
        it: "Capolavoro sul PCTO per l'esame di maturità a.s. 2023/2024.",
        en: "Capstone project on my work placement for the 2023/2024 final exam."
      },
      cat: "ricerche",
      icon: "bi-award",
      tags: ["PCTO", "Maturità"]
    },
    {
      name: "Zombie Star",
      url: "https://mattiabracco05.github.io/ZOMBIE-STAR/",
      desc: {
        it: "Gioco arcade realizzato con la libreria Phaser 3.",
        en: "Arcade game built with the Phaser 3 library."
      },
      cat: "giochi",
      icon: "bi-controller",
      tags: ["Phaser 3", "Arcade"]
    },
    {
      name: "Zombie World",
      url: "https://mattiabracco05.github.io/ZOMBIE-WORLD/",
      desc: {
        it: "Il seguito di Zombie Star, sempre con Phaser 3.",
        en: "The sequel to Zombie Star, again with Phaser 3."
      },
      cat: "giochi",
      icon: "bi-controller",
      tags: ["Phaser 3", "Arcade"]
    },
    {
      name: "Super Hero",
      url: "https://mattiabracco05.github.io/SUPER-HERO/",
      desc: {
        it: "Platform con protagonista un supereroe, scritto in Phaser 3.",
        en: "A platformer starring a superhero, written in Phaser 3."
      },
      cat: "giochi",
      icon: "bi-lightning-charge",
      tags: ["Phaser 3", "Platform"]
    },
    {
      name: "Campo Minato",
      url: "https://mattiabracco05.github.io/CW-CAMPO-MINATO",
      desc: {
        it: "Il classico campo minato, creato durante la Boolean Coding Week.",
        en: "The classic minesweeper, made during Boolean Coding Week."
      },
      cat: "giochi",
      icon: "bi-grid-3x3",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Ducker",
      url: "https://mattiabracco05.github.io/CW-DUCKER",
      desc: {
        it: "Mini gioco nato durante la Boolean Coding Week.",
        en: "A mini game born during Boolean Coding Week."
      },
      cat: "giochi",
      icon: "bi-joystick",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Stacker",
      url: "https://mattiabracco05.github.io/CW-STACKER",
      desc: {
        it: "Gioco a torre basato sul tempismo, dalla Boolean Coding Week.",
        en: "A timing-based tower game, from Boolean Coding Week."
      },
      cat: "giochi",
      icon: "bi-layers",
      tags: ["Coding Week", "JavaScript"]
    },
    {
      name: "Progetti di classe",
      url: "https://progetti-itis-rivoira-4c.web.app/",
      desc: {
        it: "Home page che raccoglie i progetti svolti con la classe.",
        en: "The home page collecting the projects done with my class."
      },
      cat: "scuola",
      icon: "bi-people",
      tags: ["Classe", "Firebase"]
    },
    {
      name: "Widget Tkinter",
      url: "https://progetti-itis-rivoira-4c.web.app/Progetti/Tkinter",
      desc: {
        it: "Relazioni sui widget della libreria Tkinter per Python 3.",
        en: "Reports on the widgets of the Tkinter library for Python 3."
      },
      cat: "scuola",
      icon: "bi-filetype-py",
      tags: ["Python", "Tkinter"]
    },
    {
      name: "Ricerche Apice",
      url: "https://progetti-itis-rivoira-4c.web.app/Progetti/Apice",
      desc: {
        it: "Le ricerche realizzate per il progetto Apice.",
        en: "The research produced for the Apice project."
      },
      cat: "scuola",
      icon: "bi-mortarboard",
      tags: ["Apice", "Ricerca"]
    },
    {
      name: "FollowMe",
      url: "https://follow-me-itis-rivoira.web.app/",
      desc: {
        it: "Evacuazione di emergenza e navigazione interna del nuovo edificio dell'ITIS G. Rivoira.",
        en: "Emergency evacuation and indoor navigation for the new ITIS G. Rivoira building."
      },
      cat: "scuola",
      icon: "bi-signpost-split",
      tags: ["Sicurezza", "Firebase"]
    },
    {
      name: "Obelix",
      url: "http://37.60.34.42:8080/",
      desc: {
        it: "Prenotazione del pranzo per l'IIS Denina-Pellico-Rivoira.",
        en: "Lunch booking for IIS Denina-Pellico-Rivoira."
      },
      cat: "scuola",
      icon: "bi-basket",
      tags: ["Web app", "Prenotazioni"]
    }
  ];

  /* Nomi propri: uguali in tutte le lingue */
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
  function isLight() { return document.documentElement.getAttribute("data-theme") === "light"; }

  function syncThemeLabel() {
    var btn = $(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", isLight() ? t("theme.toDark") : t("theme.toLight"));
  }

  (function theme() {
    var btn = $(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = isLight() ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("portale-theme", next); } catch (e) { /* storage non disponibile */ }
      syncThemeLabel();
      toast(next === "light" ? t("toast.light") : t("toast.dark"), "bi-palette");
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
  function heroLines(animate) {
    var h1 = $("[data-lines]");
    if (!h1) return;
    h1.innerHTML = t("hero.lines")
      .split("|")
      .map(function (txt, i) {
        var inner = txt.indexOf("*") === 0
          ? '<em class="gradient-text" style="font-style:normal">' + txt.slice(1) + "</em>"
          : txt;
        var delay = animate ? 120 + i * 110 : 0;
        return '<span class="line"><span style="--d:' + delay + '">' + inner + "</span></span>";
      })
      .join("");
  }

  /* -----------------------------------------------------------
     6. Vetrina "pilastri" pinnata allo scroll
     ----------------------------------------------------------- */
  var pillarState = { track: null, rail: null, items: [], dots: [], count: 0 };
  var isPhone = window.matchMedia("(max-width: 820px)");

  function buildPillars() {
    var stage = $("#pillarsStage");
    if (!stage) return;

    var stars = SITES.filter(function (s) { return s.star; });
    var tones = ["--cat-appunti", "--cat-flagship"];

    var panels = stars
      .map(function (s, i) {
        return (
          '<article class="pillar" style="--tone: var(' + tones[i % tones.length] + '); --tone-2: var(--accent-2)">' +
            '<div class="pillar__body">' +
              '<span class="pillar__index">0' + (i + 1) + " / 0" + stars.length + "</span>" +
              "<h3>" + s.name + "</h3>" +
              '<span class="pillar__role">' + tr(s.role) + "</span>" +
              '<p class="pillar__text">' + tr(s.long) + "</p>" +
              '<div class="pillar__meta">' +
                trTags(s.tags).map(function (x) { return '<span class="tag">' + x + "</span>"; }).join("") +
              "</div>" +
              '<div class="pillar__cta">' +
                '<a class="btn btn--primary" href="' + s.url + '" target="_blank" rel="noopener">' +
                  t("pillars.open") + " " + s.name + ' <i class="bi bi-arrow-up-right"></i>' +
                "</a>" +
              "</div>" +
            "</div>" +
            '<div class="pillar__visual" aria-hidden="true">' +
              '<span class="pillar__ring"></span><span class="pillar__ring"></span>' +
              markOf(s, s.glyph, "pillar__glyph") +
            "</div>" +
          "</article>"
        );
      })
      .join("");

    var dots = '<div class="pillars__dots" id="pillarsDots" role="group" aria-label="' + t("pillars.dots") + '">' +
      stars.map(function (s, i) {
        return '<button type="button" data-go="' + i + '" aria-current="' + (i === 0) + '">' +
               '<span class="sr-only">' + t("pillars.goto") + " " + s.name + "</span></button>";
      }).join("") +
      "</div>";

    // il binario tiene i pannelli: "display:contents" su schermo largo (restano
    // sovrapposti e pilotati dallo scroll), carosello scorrevole sul telefono
    stage.innerHTML = '<div class="pillars__rail" id="pillarsRail">' + panels + "</div>" + dots;

    pillarState.track = $("#pillarsTrack");
    pillarState.rail = $("#pillarsRail", stage);
    pillarState.items = $$(".pillar", stage);
    pillarState.dots = $$("#pillarsDots button", stage);
    pillarState.count = stars.length;

    if (pillarState.rail) {
      pillarState.rail.addEventListener("scroll", syncRailDots, { passive: true });
    }
    updatePillars();
    if (isPhone.matches) syncRailDots();
  }

  /* sul telefono il pannello attivo è quello più vicino al centro del binario */
  function syncRailDots() {
    var st = pillarState;
    if (!st.rail || !st.dots.length || !isPhone.matches) return;
    var mid = st.rail.scrollLeft + st.rail.clientWidth / 2;
    var best = 0, bestD = Infinity;
    st.items.forEach(function (el, i) {
      var d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
      if (d < bestD) { bestD = d; best = i; }
    });
    st.dots.forEach(function (b, i) { b.setAttribute("aria-current", String(i === best)); });
  }

  /* un solo listener sullo stage, che sopravvive ai cambi di lingua */
  (function pillarDots() {
    var stage = $("#pillarsStage");
    if (!stage) return;
    stage.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-go]");
      if (!btn) return;
      var i = +btn.getAttribute("data-go");

      // telefono: scorre il carosello in orizzontale
      if (isPhone.matches && pillarState.items[i]) {
        pillarState.items[i].scrollIntoView({
          behavior: reduceMotion.matches ? "auto" : "smooth",
          inline: "center",
          block: "nearest"
        });
        return;
      }

      // schermo largo: porta la pagina al punto di scorrimento giusto
      if (!pillarState.track) return;
      var top = pillarState.track.getBoundingClientRect().top + window.scrollY;
      var span = pillarState.track.offsetHeight - window.innerHeight;
      var target = top + span * (0.3 + (0.4 * i) / Math.max(1, pillarState.count - 1));
      window.scrollTo({ top: target, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });
  })();

  function updatePillars() {
    var st = pillarState;
    if (!st.track || !st.items.length) return;
    if (isPhone.matches || reduceMotion.matches) return;

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
    var tags = trTags(s.tags);
    var desc = tr(s.desc);
    return (
      '<article class="card reveal" style="--tone: var(' + c.tone + '); --i:' + (i % 9) + '"' +
        ' data-cat="' + s.cat + '"' +
        ' data-star="' + (s.star ? "1" : "0") + '"' +
        ' data-name="' + norm(s.name) + '"' +
        ' data-hay="' + norm(s.name + " " + desc + " " + tags.join(" ") + " " + tr(c.label)) + '">' +
        '<div class="card__top">' +
          '<span class="card__icon">' + markOf(s, s.icon) + "</span>" +
          '<span class="card__badge' + (s.star ? " card__badge--star" : "") + '">' +
            (s.star ? '<i class="bi bi-stars"></i> ' + t("badge.star") : tr(c.label)) +
          "</span>" +
        "</div>" +
        '<div class="card__body">' +
          "<h3>" + s.name + "</h3>" +
          '<p class="card__desc">' + desc + "</p>" +
        "</div>" +
        '<div class="card__foot">' +
          '<div class="tags">' + tags.map(function (x) { return '<span class="tag">' + x + "</span>"; }).join("") + "</div>" +
          '<span class="card__go"><i class="bi bi-arrow-right"></i></span>' +
        "</div>" +
        '<a class="card__link" href="' + s.url + '" target="_blank" rel="noopener">' +
          "<span>" + t("card.open") + " " + s.name + "</span>" +
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

    var word = shown === 1 ? t("res.site") : t("res.sites");
    $$("[data-result-count]").forEach(function (el) { el.textContent = String(shown); });
    $$("[data-result-label]").forEach(function (el) { el.textContent = word; });

    var empty = $("#empty");
    if (empty) empty.classList.toggle("is-on", shown === 0);

    var clean = state.cat === "all" && !state.q;
    $$("[data-reset]").forEach(function (el) { el.hidden = clean; });
    // pallino sul pulsante flottante quando un filtro è attivo
    var fab = $("#fabFilters");
    if (fab) fab.classList.toggle("has-dot", !clean);

    $$("[data-chip]").forEach(function (chip) {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("data-chip") === state.cat));
    });
  }

  /* chip categorie con contatori reali */
  function buildChips() {
    var box = $("#chips");
    if (!box) return;
    var counts = {};
    SITES.forEach(function (s) { counts[s.cat] = (counts[s.cat] || 0) + 1; });
    var starCount = SITES.filter(function (s) { return s.star; }).length;

    var html = '<button class="chip" type="button" data-chip="all" aria-pressed="true">' +
               '<span class="chip__swatch"></span>' + t("tool.all") +
               '<span class="chip__count">' + SITES.length + "</span></button>";

    html += CATEGORIES.map(function (c) {
      var n = c.key === "star" ? starCount : counts[c.key] || 0;
      if (!n) return "";
      return '<button class="chip" type="button" data-chip="' + c.key + '" aria-pressed="false" style="--tone: var(' + c.tone + ')">' +
             '<span class="chip__swatch"></span>' + tr(c.label) +
             '<span class="chip__count">' + n + "</span></button>";
    }).join("");

    box.innerHTML = html;
    box.setAttribute("aria-label", t("tool.catAria"));
  }

  (function chipClicks() {
    var box = $("#chips");
    if (!box) return;
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
    var timer;
    input.addEventListener("input", function () {
      wrap.classList.toggle("has-value", input.value.length > 0);
      clearTimeout(timer);
      timer = setTimeout(function () {
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

  /* azzera filtri (nella riga dei risultati e dentro la scheda) */
  $$("[data-reset]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.cat = "all";
      state.q = "";
      var input = $("#search");
      if (input) { input.value = ""; $("#searchWrap").classList.remove("has-value"); }
      applyFilters();
    });
  });

  /* -----------------------------------------------------------
     7b. Scheda filtri sul telefono
         La barra strumenti non viene duplicata: viene spostata dentro
         la scheda sotto gli 820px e rimessa al suo posto sopra.
     ----------------------------------------------------------- */
  var sheet = (function () {
    var box = $("#sheet");
    var body = $("#sheetBody");
    var slot = $("#toolbarSlot");
    var toolbar = $("#toolbar");
    if (!box || !body || !slot || !toolbar) return {};
    var lastFocus = null;

    function placeToolbar() {
      if (isPhone.matches) {
        if (toolbar.parentElement !== body) body.appendChild(toolbar);
        return;
      }
      // il segnaposto e' solo un marcatore: la barra torna subito dopo di lui,
      // figlia diretta della sezione, altrimenti position:sticky non funziona
      if (slot.nextElementSibling !== toolbar) slot.insertAdjacentElement("afterend", toolbar);
      close();
    }

    function open() {
      if (!isPhone.matches) return;
      lastFocus = document.activeElement;
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("sheet-open");
    }

    function close() {
      if (!box.classList.contains("is-open")) return;
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("sheet-open");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.closest("[data-sheet-close]")) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    if (isPhone.addEventListener) isPhone.addEventListener("change", placeToolbar);
    else if (isPhone.addListener) isPhone.addListener(placeToolbar);

    placeToolbar();
    return { open: open, close: close, place: placeToolbar, holdsToolbar: function () { return isPhone.matches; } };
  })();

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
    var row = TECH.map(function (x) {
      return '<span class="tech" style="--tone: var(' + x.tone + ')"><i class="bi ' + x.icon + '"></i>' + x.label + "</span>";
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
    if (!overlay) return {};
    var input = $("#paletteInput");
    var list = $("#paletteList");
    var idx = 0;
    var items = [];
    var lastFocus = null;

    function actions() {
      return [
        { name: t("act.links"), desc: t("act.linksDesc"), icon: "bi-grid", tone: "--accent-3", run: function () { jump("#collegamenti"); } },
        { name: t("act.theme"), desc: t("act.themeDesc"), icon: "bi-circle-half", tone: "--accent-2", run: function () { $(".theme-toggle").click(); } },
        { name: t("act.copy"), desc: "mattia.bracco05@gmail.com", icon: "bi-envelope-paper", tone: "--cat-giochi", run: copyEmail },
        { name: t("act.lang"), desc: t("act.langDesc"), icon: "bi-translate", tone: "--cat-personali", run: function () { setLang(lang === "it" ? "en" : "it"); } },
        { name: t("act.github"), desc: "github.com/MattiaBracco05", icon: "bi-github", tone: "--cat-scuola", run: function () { window.open("https://github.com/MattiaBracco05", "_blank", "noopener"); } }
      ];
    }

    function pool() {
      return SITES.map(function (s) {
        var c = catOf(s.cat);
        var desc = tr(s.desc);
        return {
          name: s.name,
          desc: desc,
          mark: markOf(s, s.icon),
          cat: s.star ? t("badge.star") : tr(c.label),
          tone: c.tone,
          hay: norm(s.name + " " + desc + " " + trTags(s.tags).join(" ")),
          run: function () { window.open(s.url, "_blank", "noopener"); }
        };
      }).concat(
        actions().map(function (a) {
          a.hay = norm(a.name + " " + a.desc);
          a.mark = '<i class="bi ' + a.icon + '"></i>';
          a.cat = t("palette.action");
          return a;
        })
      );
    }

    function render() {
      var q = norm(input.value.trim());
      var all = pool();
      items = q ? all.filter(function (it) {
        return q.split(/\s+/).every(function (term) { return it.hay.indexOf(term) !== -1; });
      }) : all;

      if (!items.length) {
        list.innerHTML = '<p class="palette__empty">' + t("palette.empty") + " “" + input.value + "”</p>";
        return;
      }
      idx = 0;
      list.innerHTML = items
        .map(function (it, i) {
          return '<button class="palette__item" type="button" role="option" data-i="' + i + '"' +
                 ' aria-selected="' + (i === 0) + '" style="--tone: var(' + it.tone + ')">' +
                 '<span class="palette__mark">' + it.mark + "</span>" +
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

    return {
      open: open,
      close: close,
      isOpen: function () { return overlay.classList.contains("is-open"); },
      refresh: function () { if (overlay.classList.contains("is-open")) render(); }
    };
  })();

  /* -----------------------------------------------------------
     11. Scorciatoie da tastiera
     ----------------------------------------------------------- */
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (palette.isOpen && palette.isOpen()) palette.close();
      else if (palette.open) palette.open();
      return;
    }
    if (typing) return;
    if (e.key === "/") {
      e.preventDefault();
      var s = $("#search");
      if (!s) return;
      // sul telefono la barra strumenti vive dentro la scheda: va aperta prima
      if (sheet.holdsToolbar && sheet.holdsToolbar()) {
        sheet.open();
        setTimeout(function () { s.focus(); }, 320);
        return;
      }
      s.scrollIntoView({ block: "center", behavior: reduceMotion.matches ? "auto" : "smooth" });
      setTimeout(function () { s.focus(); }, 320);
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
    var done = function () { toast(t("toast.copied"), "bi-clipboard-check"); };
    var fail = function () { toast(t("toast.copyFail") + " " + mail, "bi-exclamation-circle"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mail).then(done, fail);
    } else {
      var ta = document.createElement("textarea");
      ta.value = mail;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { fail(); }
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
    closeNav();
    el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
  }

  function closeNav() {
    var burger = $("#burger");
    document.body.classList.remove("nav-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "false");
      burger.innerHTML = '<i class="bi bi-list"></i>';
    }
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
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });
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
      document.documentElement.style.setProperty(
        "--hero-fade", clamp(1 - y / (window.innerHeight * 0.75), 0, 1).toFixed(3));

      if (header) header.classList.toggle("is-stuck", y > 20);
      if (toTop) toTop.classList.toggle("is-on", y > 700);
      // i pulsanti flottanti salgono per far posto al "torna su"
      document.body.classList.toggle("show-totop", y > 700);

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
     17. Applicazione della lingua
     ----------------------------------------------------------- */
  function applyStaticText() {
    $$("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    $$("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v;
    });
    // formato: data-i18n-attr="placeholder:tool.searchPlaceholder, title:header.lang"
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length !== 2) return;
        el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  function setLang(next, silent) {
    if (LANGS.indexOf(next) === -1) next = "it";
    lang = next;
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("portale-lang", lang); } catch (e) { /* storage non disponibile */ }

    applyStaticText();
    syncThemeLabel();
    heroLines(true);
    buildPillars();
    buildChips();
    renderGrid();
    if (palette.refresh) palette.refresh();

    $$("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    onScroll();
    if (!silent) toast(t("toast.lang"), "bi-translate");
  }

  (function langSwitch() {
    var box = $("#langSwitch");
    if (!box) return;
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang]");
      if (!b) return;
      var next = b.getAttribute("data-lang");
      if (next !== lang) setLang(next);
    });
  })();

  /* -----------------------------------------------------------
     18. Avvio
     ----------------------------------------------------------- */
  var startLang = "it";
  try {
    var savedLang = localStorage.getItem("portale-lang");
    if (LANGS.indexOf(savedLang) !== -1) {
      startLang = savedLang;
    } else if (navigator.language && navigator.language.slice(0, 2).toLowerCase() !== "it") {
      startLang = "en";
    }
  } catch (e) { /* storage non disponibile */ }

  setLang(startLang, true);

  /* pulsanti flottanti: collegati qui perché la palette nasce più sopra */
  (function floatingButtons() {
    var fs = $("#fabSearch");
    var ff = $("#fabFilters");
    if (fs && palette.open) fs.addEventListener("click", palette.open);
    if (ff && sheet.open) ff.addEventListener("click", sheet.open);
  })();

  $$(".reveal").forEach(function (el) { revealObserver.observe(el); });
  $$("[data-count]").forEach(function (el) { revealObserver.observe(el); });

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
