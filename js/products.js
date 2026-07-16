// =============================================================
//  Splec Developers — Product Catalog
//  Each product: name, category, tagline, description, tags[],
//  link, icon, image, slug (for /products/?p=slug),
//  features[] (shown on dedicated page), storeLabel,
//  downloadSeed (baseline count), githubRepo (owner/repo for live count)
// =============================================================
const PRODUCTS = [
  {
    slug: "blastblastblast",
    name: "BlastBlastBlast",
    category: "extension",
    tagline: "Turn any webpage into a demolition zone",
    description: "Fire a tank cannon, shoot soldiers, and watch every element on the page explode with real physics. Text flies apart letter by letter, images shatter, buttons spin through the air. Includes a tower defense mini-game with a scoreboard. 100% private — no data collected, runs entirely in your browser.",
    tags: ["Game", "Physics", "Fun", "Manifest V3"],
    downloadSeed: 312,
    link: "https://chromewebstore.google.com/detail/blastblastblast/pneepemfpipickddgckiakckipjkimdi",
    storeLabel: "Add to Chrome — It's Free",
    icon: "💥",
    image: "assets/thumb-blastblastblast.svg",
    features: [
      { icon: "💣", title: "Cannon Mode", desc: "Drag from the tank to aim, set the power, and release. The cannonball arcs through the air and lands exactly where you aimed." },
      { icon: "🔫", title: "Gun Mode", desc: "Switch to the pistol, move your crosshair, and rapid-fire tracer bullets across the page with real ballistics." },
      { icon: "🪖", title: "Tower Defense Mini-Game", desc: "Soldiers raid your webpage from the top and sides, stealing buttons, icons, and text. Shoot them before they escape." },
      { icon: "💥", title: "Real Physics Explosions", desc: "Every character of text flies away individually. Images shatter into fragments. Craters, shockwaves, fire particles, and smoke included." },
      { icon: "🏆", title: "Scoreboard", desc: "Kill soldiers, earn points, and beat your best score. Progress is saved to your browser automatically." },
      { icon: "🔒", title: "100% Private", desc: "No data collected, no network calls, no tracking. Runs entirely inside your browser. Page fully restores when you close the cannon." }
    ]
  },
  {
    slug: "clipify",
    name: "Clipify — Clipboard History",
    category: "extension",
    tagline: "Never lose a copied snippet again",
    description: "A beautiful, modern clipboard history manager. Clipify quietly saves everything you copy — links, code, emails, notes — into a searchable, pinnable history. One-click copy back, instant search with live highlighting, smart type detection, and light/dark themes. Everything stays on your device — no accounts, no servers, no tracking.",
    tags: ["Clipboard", "Productivity", "Privacy", "Manifest V3"],
    downloadSeed: 187,
    link: "https://chromewebstore.google.com/detail/clipify-%E2%80%94-clipboard-histo/gnapjgliahifjkfaafndcolnbpafjfgo",
    storeLabel: "Add to Chrome — It's Free",
    icon: "📋",
    image: "assets/thumb-clipify.svg",
    features: [
      { icon: "⚡", title: "Automatic Capture", desc: "Copies are saved as you work — no extra steps. Just copy as normal and Clipify quietly stores it." },
      { icon: "🔍", title: "Instant Search", desc: "Filter your entire clipboard history in real time with live keyword highlighting." },
      { icon: "📌", title: "Pin Favorites", desc: "Pin important snippets to the top so they're always within reach, no matter how much else you copy." },
      { icon: "🧠", title: "Smart Type Detection", desc: "Clipify automatically detects links, emails, code snippets, and plain text — and labels them visually." },
      { icon: "🌗", title: "Light & Dark Themes", desc: "A beautiful modern UI with clean cards, smooth animations, and full light/dark mode support." },
      { icon: "🔒", title: "Private by Design", desc: "Everything stays on your device. No accounts, no servers, no tracking — your clipboard is yours alone." }
    ]
  },
  {
    slug: "apex-debug-studio",
    name: "Apex Debug Studio",
    category: "desktop",
    tagline: "Live Apex debugging with direct org data access",
    description: "A desktop Salesforce developer studio that lets you connect directly to DXR and Customer ARC environments, pull live org data, and debug Apex flows in real time. It combines a Monaco-based editor with breakpoints, variable inspection, SOQL tooling, and execution replay so teams can debug production-like behavior without context switching.",
    tags: ["Salesforce", "Apex", "DXR", "Customer ARC", "Live Data", "Desktop"],
    downloadSeed: 118,
    githubRepo: "srikanthpullela/SplecNote",
    icon: "🧪",
    image: "assets/thumb-apex-debug-studio.png",
    storeLabel: "View Apex Debug Studio",
    link: "https://github.com/srikanthpullela/SplecNote/tree/main",
    downloads: [
      {
        os: "mac",
        label: "Mac (Apple Silicon DMG)",
        url: "https://github.com/srikanthpullela/SplecNote/releases/latest/download/Apex.Debug.Studio-1.0.0-arm64.dmg",
        external: true
      },
      {
        os: "windows",
        label: "Windows (Setup EXE)",
        url: "https://github.com/srikanthpullela/SplecNote/releases/latest/download/Apex.Debug.Studio.Setup.1.0.0.exe",
        external: true
      }
    ],
    features: [
      { icon: "🔌", title: "Direct DXR / Customer ARC Connectivity", desc: "Connect straight to your Salesforce environments using your authenticated tooling session so you can work on real org behavior instead of mock payloads." },
      { icon: "📡", title: "Live Data Debugging", desc: "Pull live records, inspect runtime state, and step through Apex execution with true environment data to reproduce bugs faster and with higher confidence." },
      { icon: "🧭", title: "Chrome DevTools-style Debug Experience", desc: "Use breakpoints, step in/over/out controls, scoped variable panels, and timeline-style execution views inspired by Chrome V8 workflows." },
      { icon: "🧠", title: "Apex-aware Code Intelligence", desc: "Write and review Apex in a modern Monaco editor with syntax highlighting, search, command palette actions, and productivity shortcuts built for daily debugging." },
      { icon: "🗂️", title: "Session Persistence & Auto-save", desc: "Keep all tabs, cursor positions, and unsaved work intact between restarts with automatic persistence, so investigations can continue exactly where they stopped." },
      { icon: "🛡️", title: "Developer-focused Workflow", desc: "Everything is designed around Salesforce troubleshooting: query quickly, inspect org data, run diagnostics, and resolve incidents without bouncing between multiple tools." }
    ],
    screenshots: [
      {
        image: "assets/thumb-apex-debug-studio.png",
        alt: "Apex Debug Studio editor with Salesforce tooling",
        caption: "Main editor and developer workspace for live Apex investigations."
      },
      {
        image: "assets/apex-debug-studio-logo.png",
        alt: "Apex Debug Studio branding preview",
        caption: "Apex Debug Studio product branding and app identity."
      }
    ]
  },
  {
    slug: "salesforce-toolkit",
    name: "Advanced Salesforce Developer Toolkit",
    category: "extension",
    tagline: "A Developer Console alternative for Salesforce",
    description: "SOQL editor, record inspector, Apex debug logs, metadata search, execute anonymous Apex, and a setup navigator — all without leaving your current page. Works in production, sandbox, and scratch orgs.",
    tags: ["Salesforce", "SOQL", "Apex", "Manifest V3"],
    downloadSeed: 2840,
    link: "https://chromewebstore.google.com/detail/advanced-salesforce-devel/dmaijjgogckglbleglkplaihlmjbhgif",
    storeLabel: "Add to Chrome",
    icon: "🔍",
    image: "assets/thumb-salesforce.png",
    features: [
      { icon: "🔍", title: "Global Metadata Search", desc: "VS Code-style command palette (Cmd+Shift+P) to search objects, Apex classes, flows, fields, and more — instantly across your entire org." },
      { icon: "🔎", title: "Record Inspector", desc: "Inspect any record in real time — field values, API names, types, inline editing, side-by-side comparison with diff highlighting, and JSON export." },
      { icon: "📝", title: "SOQL Query Editor", desc: "Full-featured SOQL editor with syntax highlighting, smart auto-complete, query history, saved favorites, and CSV/JSON export. Inline CRUD built in." },
      { icon: "🐛", title: "Debug Log Analyzer", desc: "6 analysis views: Summary, Flame Chart, Call Tree, Database, and Raw — with governor limit tracking and auto-refresh." },
      { icon: "⚡", title: "Execute Anonymous Apex", desc: "Run Apex from any Salesforce page with a full code editor, saved snippets library, and debug log capture per execution." },
      { icon: "🔒", title: "Zero Data Collection", desc: "Only activates on Salesforce domains. Uses your existing session — no separate login, no external servers, no telemetry." }
    ]
  },
  {
    slug: "conga-debugger",
    name: "Conga Debugger",
    category: "extension",
    tagline: "Debug Conga CPQ network traffic in DevTools",
    description: "A Chrome DevTools extension for debugging Conga CPQ systems — real-time monitoring of ApexRemote calls, CongaCloud REST APIs, and WebSocket messages, with a smart rules engine, field history tracking, and JSON diff.",
    tags: ["Conga CPQ", "DevTools", "Salesforce", "Debugging"],
    downloadSeed: 94,
    link: "https://chromewebstore.google.com/detail/conga-debugger/ibppeianghcdobpeblbpmkdlefbplnih",
    storeLabel: "Add to Chrome",
    icon: "🐛",
    image: "assets/thumb-conga.png",
    features: [
      { icon: "📡", title: "Real-time Network Monitoring", desc: "Capture and inspect HTTP requests and WebSocket messages as they happen, with automatic duration tracking between frames." },
      { icon: "⚙️", title: "Configurable URL Patterns", desc: "Add custom URL patterns to filter exactly the API calls you care about. Pre-configured for ApexRemote and CongaCloud endpoints." },
      { icon: "🔔", title: "Smart Rules Engine", desc: "Create custom rules to automatically flag specific API responses, errors, or field values with instant visual alerts." },
      { icon: "📊", title: "Field History Tracking", desc: "Track how specific data fields change across sequential API calls — visualize the lifecycle of pricing and cart operations." },
      { icon: "🔀", title: "JSON Comparison Tool", desc: "Paste or upload two JSON payloads and get a visual diff highlighting additions, deletions, and modifications." },
      { icon: "🔁", title: "Request Re-triggering", desc: "Edit and resend captured API requests to test different payloads without leaving DevTools." }
    ]
  },
  {
    slug: "colorpickr",
    name: "ColorPickr — Color Picker",
    category: "extension",
    tagline: "Native eyedropper with magnifier & every format",
    description: "A fast, modern color picker and eyedropper. Precision magnifier loupe, every format (HEX/RGB/HSL/HSV/CMYK), one-click copy, persistent history, and a saved palette — all in a clean glassmorphism side panel.",
    tags: ["Eyedropper", "Design", "Color", "Side Panel"],
    downloadSeed: 521,
    link: "https://chromewebstore.google.com/detail/colorpickr-%E2%80%94-color-picker/dkcahgkdddhfkpglhfpdhekhnmnnhpph",
    storeLabel: "Add to Chrome — It's Free",
    icon: "🎨",
    image: "assets/thumb-colorpickr.png",
    features: [
      { icon: "🔬", title: "Magnifier Eyedropper", desc: "A zoomed loupe with crosshair sits beside your cursor — never hiding it — so you pick the precise pixel every single time." },
      { icon: "📋", title: "Every Color Format", desc: "HEX, HEX8, RGB, RGBA, HSL, HSLA, HSV, and CMYK — all generated automatically. Tap any value to copy instantly." },
      { icon: "🎛️", title: "Interactive Picker", desc: "Fine-tune any color with a saturation/value field plus hue and alpha sliders for total precision." },
      { icon: "🕓", title: "Persistent History", desc: "Every color you pick is saved automatically with its HEX and RGB codes so you can come back and reuse it anytime." },
      { icon: "⭐", title: "Saved Palette", desc: "Star the colors you love to build your own reusable palette that persists across browsing sessions." },
      { icon: "🔒", title: "Privacy First", desc: "No data collected, transmitted, or sold. Your color history and palette are stored locally and never leave your browser." }
    ]
  },
  {
    slug: "shopy",
    name: "Shopy — Smart Shopping Lists",
    category: "ios",
    tagline: "Beautifully designed shopping lists for iPhone",
    description: "A SwiftUI shopping list app with smart auto-categorization, glass-morphism design, adaptive dark/light mode, progress tracking, and one-tap sharing via WhatsApp, Messages, or Email. Works fully offline.",
    tags: ["iOS", "SwiftUI", "Shopping", "Offline"],
    downloadSeed: 763,
    link: "https://apps.apple.com/us/app/shopy/id6751416624",
    storeLabel: "Download on the App Store",
    icon: "🛒",
    image: "assets/thumb-shopy.png",
    features: [
      { icon: "🧠", title: "Smart Auto-categorization", desc: "Add any item and Shopy automatically places it in the right category — produce, dairy, bakery, and more." },
      { icon: "✨", title: "Glassmorphism Design", desc: "A beautifully crafted SwiftUI interface with glass-effect cards, smooth animations, and pixel-perfect detail." },
      { icon: "🌗", title: "Adaptive Dark & Light Mode", desc: "Looks great in any lighting — automatically follows your iPhone's appearance settings." },
      { icon: "📊", title: "Progress Tracking", desc: "See how many items you've checked off at a glance as you move through the store." },
      { icon: "📤", title: "One-tap Sharing", desc: "Share your shopping list instantly via WhatsApp, Messages, or Email with a single tap." },
      { icon: "📴", title: "Works Fully Offline", desc: "No internet required. All your lists are stored locally on your device — always available." }
    ]
  },
  {
    slug: "tulz",
    name: "Tulz — 120+ Free Online Tools",
    category: "web",
    tagline: "Your all-in-one browser toolbox",
    description: "A web app with 120+ free, privacy-first tools that run entirely in your browser — compress images & video, merge & split PDFs, format SQL, generate QR codes & UUIDs, convert colors, encrypt text, finance calculators, and much more. No signup, no uploads.",
    tags: ["Web App", "Next.js", "120+ Tools", "Privacy-first"],
    downloadSeed: 4210,
    link: "https://www.tulz.org/",
    storeLabel: "Open Tulz",
    icon: "🧰",
    image: "assets/thumb-tulz.png",
    features: [
      { icon: "🖼️", title: "Image & Video Tools", desc: "Compress, resize, convert, and optimize images and video files — all processed locally in your browser." },
      { icon: "📄", title: "PDF Tools", desc: "Merge, split, compress, and convert PDFs without uploading to any server." },
      { icon: "🔐", title: "Text & Crypto Tools", desc: "Encrypt/decrypt text, encode/decode Base64, generate hashes, and format JSON/SQL instantly." },
      { icon: "📐", title: "Converters & Calculators", desc: "Unit converters, color converters, finance calculators, QR code generators, UUID tools, and more." },
      { icon: "🔒", title: "Privacy-First", desc: "Every tool runs entirely in your browser. No file uploads, no accounts, no tracking — your data never leaves your device." },
      { icon: "⚡", title: "120+ Tools, Zero Signup", desc: "Over 120 tools accessible instantly — no registration, no paywall, no ads." }
    ]
  },
  {
    slug: "splec-in",
    name: "splec.in — Personal Site",
    category: "web",
    tagline: "A personal space, in the making",
    description: "My personal corner of the web — bio, story, and the things I'm working on. Currently being crafted and coming together soon.",
    tags: ["Personal", "Portfolio", "Web"],
    downloadSeed: 51,
    link: "https://splec.in/",
    storeLabel: "Visit Site",
    icon: "🌱",
    image: "assets/thumb-splecin.png",
    comingSoon: true,
    features: []
  },
  {
    slug: "splecnote",
    name: "Splec Note",
    category: "desktop",
    tagline: "A fast, friendly editor for notes and code",
    description: "Splec Note is a lightweight, distinctive cross-platform text and code editor — think Notepad++ but for macOS and Windows. Built with Tauri and CodeMirror 6, it has a tabbed multi-document UI, session persistence (never lose work), 20+ language syntax highlighting, Find in Files, split view, macros, a command palette, and a plugin system.",
    tags: ["macOS", "Windows", "Tauri", "CodeMirror", "Notepad++"],
    downloadSeed: 51,
    githubRepo: "srikanthpullela/SplecNote-app",
    icon: "📝",
    image: "assets/thumb-splecnote.svg",
    storeLabel: "Download Splec Note",
    features: [
      { icon: "📑", title: "Tabbed Multi-document UI", desc: "Open as many files as you need in tabs, each with a dirty dot, close button, drag-to-reorder, and Cmd-Tab cycling. Never lose your place." },
      { icon: "💾", title: "Never Lose Work", desc: "Every open buffer — including unsaved scratch notes — is continuously mirrored to disk. Crash? Relaunch and every tab is rebuilt exactly as you left it." },
      { icon: "🎨", title: "20+ Language Syntax Highlighting", desc: "JS, TS, Python, Rust, Go, Markdown, SQL, YAML, Swift, and more — auto-detected by file extension and switchable from the status bar." },
      { icon: "🔍", title: "Find / Replace / Find in Files", desc: "Styled find & replace with regex, case, and whole-word support, plus Find in Files across a full folder with click-to-open results." },
      { icon: "⚙️", title: "Command Palette & Macros", desc: "Cmd+Shift+P to access every command instantly. Record, name, and replay macros with keyboard shortcuts." },
      { icon: "🖥️", title: "macOS & Windows Native", desc: "Built with Tauri — no Chromium bundle, tiny footprint, native menus, file associations, and auto-update wiring on both platforms." }
    ],
    downloads: [
      { os: "mac", label: "Mac (Universal)", url: "https://github.com/srikanthpullela/SplecNote-app/releases/latest/download/SplecNote-mac.dmg", file: "SplecNote.dmg", external: true },
      { os: "windows", label: "Windows", url: "https://github.com/srikanthpullela/SplecNote-app/releases/latest/download/SplecNote-windows-setup.exe", file: "SplecNote-Setup.exe", external: true }
    ]
  },
  {
    slug: "capturo",
    name: "Capturo — Screenshot Beautifier",
    category: "desktop",
    tagline: "Capture, annotate & beautify screenshots",
    description: "A native desktop app that captures screenshots, adds annotations, applies beautiful presentation styling, and copies or saves the result — all while running quietly from your menu bar / system tray.",
    tags: ["macOS", "Windows", "Tauri", "Menu bar"],
    downloadSeed: 73,
    icon: "📸",
    image: "assets/thumb-capturo.png",
    features: [
      { icon: "📸", title: "One-click Capture", desc: "Capture any region of your screen instantly from the menu bar or system tray with a single click or keyboard shortcut." },
      { icon: "✏️", title: "Annotations", desc: "Add arrows, text, shapes, and highlights directly onto your screenshot before saving or sharing." },
      { icon: "✨", title: "Beautiful Styling", desc: "Apply gorgeous presentation backgrounds, padding, shadows, and rounded corners to make screenshots look polished." },
      { icon: "📋", title: "Copy or Save", desc: "Copy the styled screenshot directly to your clipboard or save it as a PNG/JPEG file instantly." },
      { icon: "🖥️", title: "macOS & Windows", desc: "Native app built with Tauri — runs fast, uses minimal memory, and feels at home on both platforms." },
      { icon: "🔇", title: "Lives in Your Tray", desc: "Runs quietly in your menu bar / system tray — always ready, never in your way." }
    ],
    downloads: [
      { os: "mac", label: "Mac (Universal)", url: "downloads/Capturo_1.0.0_universal.dmg", file: "Capturo.dmg" },
      { os: "windows", label: "Windows", url: "downloads/Capturo_1.0.0_x64-setup.exe", file: "Capturo-Setup.exe" }
    ]
  },
  {
    slug: "hush",
    name: "Hush — Meeting Mute",
    category: "desktop",
    tagline: "Auto-silence notifications during meetings",
    description: "Hush automatically switches your Mac or Windows PC into Do Not Disturb the moment a meeting starts, then restores your notifications when it ends — so you're never interrupted while presenting. Lives quietly in your menu bar / system tray. Signed & notarized by Apple — installs without any security warnings.",
    tags: ["macOS", "Windows", "Do Not Disturb", "Tray"],
    downloadSeed: 138,
    githubRepo: "srikanthpullela/hush-app",
    icon: "🔕",
    image: "assets/thumb-hush.png",
    features: [
      { icon: "🔕", title: "Auto Do Not Disturb", desc: "Hush detects when a meeting starts and instantly switches your system into Do Not Disturb — no manual action needed." },
      { icon: "🔔", title: "Auto Restore", desc: "When your meeting ends, Hush automatically restores your notification settings exactly as they were before." },
      { icon: "📅", title: "Calendar Integration", desc: "Connects to your calendar to detect meetings automatically — Google Calendar, Outlook, and system calendars supported." },
      { icon: "🖥️", title: "macOS & Windows", desc: "Native app built with Tauri — runs fast, lightweight, and integrates deeply with the OS notification system." },
      { icon: "🌗", title: "Dark & Light Mode Icon", desc: "The menu bar icon automatically adapts to your system theme — crisp white on dark menu bars, solid black on light ones." },
      { icon: "🔇", title: "Lives in Your Tray", desc: "Runs quietly from your menu bar or system tray — always on guard, never in the way." },
      { icon: "⚙️", title: "Simple Setup", desc: "Install, connect your calendar, and forget it. Hush handles everything automatically from that point on." }
    ],
    downloads: [
      { os: "mac", label: "Mac (Apple Silicon)", url: "https://github.com/srikanthpullela/hush-app/releases/latest/download/Hush-mac-apple-silicon.dmg", file: "Hush-AppleSilicon.dmg", external: true },
      { os: "mac", label: "Mac (Intel)", url: "https://github.com/srikanthpullela/hush-app/releases/latest/download/Hush-mac-intel.dmg", file: "Hush-Intel.dmg", external: true },
      { os: "windows", label: "Windows", url: "https://github.com/srikanthpullela/hush-app/releases/latest/download/Hush-windows-setup.exe", file: "Hush-Setup.exe", external: true }
    ]
  }
];

const CATEGORY_LABELS = {
  android: "Android App",
  ios: "iOS App",
  extension: "Chrome Extension",
  web: "Web App",
  desktop: "Desktop App",
  app: "App"
};
