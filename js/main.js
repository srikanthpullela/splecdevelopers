/* ============================================================
   Splec Developers — Interactions & Animations (v2)
   ============================================================ */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Brand dev-at-work hover popup ---------- */
  const devPopup = document.querySelector(".brand-dev-popup");
  const brandEl  = document.querySelector(".brand");
  if (devPopup && brandEl && !reduceMotion) {
    brandEl.addEventListener("mouseenter", () => {
      // cursor ring "becomes" the popup — hide it
      const ring = document.querySelector(".cursor-ring");
      if (ring) ring.classList.add("brand-focused");
      devPopup.classList.remove("run");
      void devPopup.offsetWidth; // force reflow so animation restarts
      devPopup.classList.add("run");
    });
    brandEl.addEventListener("mouseleave", () => {
      devPopup.classList.remove("run");
      const ring = document.querySelector(".cursor-ring");
      if (ring) ring.classList.remove("brand-focused");
    });
  }

  /* ---------- Mobile menu (bound first so it never breaks) ---------- */
  const toggle = document.getElementById("menuToggle");
  const linksWrap = document.getElementById("navLinks");
  function closeMenu() { toggle.classList.remove("open"); linksWrap.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = toggle.classList.toggle("open");
    linksWrap.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  linksWrap.addEventListener("click", (e) => { if (e.target.classList.contains("nav-link")) closeMenu(); });
  document.addEventListener("click", (e) => {
    if (linksWrap.classList.contains("open") && !linksWrap.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  /* ---------- Download counter helpers ---------- */
  // Cache: slug -> fetched count (avoids refetching on filter switch)
  const _dlCache = {};

  function fmtCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k+";
    return n + "+";
  }

  function dlCounterHTML(p) {
    if (!p.downloadSeed) return "";
    const id = `dlcount-${p.slug}`;
    // Show seed immediately; GitHub live count loads async
    return `<span class="dl-counter" id="${id}" title="Total downloads">⬇ ${fmtCount(p.downloadSeed)}</span>`;
  }

  async function loadGithubCount(p) {
    if (!p.githubRepo || !p.slug) return;
    if (_dlCache[p.slug] !== undefined) return; // already loaded
    try {
      const res = await fetch(`https://api.github.com/repos/${p.githubRepo}/releases`, { cache: "no-store" });
      if (!res.ok) return;
      const releases = await res.json();
      const total = releases.reduce((sum, r) =>
        sum + r.assets.reduce((s, a) => s + (a.download_count || 0), 0), 0);
      _dlCache[p.slug] = total;
      const el = document.getElementById(`dlcount-${p.slug}`);
      if (el) el.textContent = `⬇ ${fmtCount((p.downloadSeed || 0) + total)}`;
    } catch (_) { /* silent fail */ }
  }

  /* ---------- Render products ---------- */
  let revealObserver = null;
  const grid = document.getElementById("productGrid");
  const arrowSVG =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  const appleSVG =
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>';
  const windowsSVG =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449 9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>';
  const clockSVG =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>';

  function osIcon(os) {
    if (os === "windows") return windowsSVG;
    if (os === "mac") return appleSVG;
    return clockSVG;
  }

  function ctaMarkup(p) {
    if (Array.isArray(p.downloads) && p.downloads.length) {
      const btns = p.downloads
        .map((d) =>
          d.url
            ? `<a class="card-dl" href="${d.url}" ${d.external ? 'target="_blank" rel="noopener"' : `download="${d.file || ''}"`}>${osIcon(d.os)}${d.label}</a>`
            : `<span class="card-dl disabled">${osIcon(d.os)}${d.label}</span>`
        )
        .join("");
      const learnMore = p.slug ? `<a class="card-link" href="${p.page || `/products/?p=${p.slug}`}" style="margin-bottom:8px">Learn more ${arrowSVG}</a>` : "";
      return learnMore + `<div class="card-downloads">${btns}</div>`;
    }
    if (p.comingSoon) {
      const learnMore = p.slug ? `<a class="card-link" href="${p.page || `/products/?p=${p.slug}`}">Learn more ${arrowSVG}</a>` : "";
      return learnMore || `<a class="card-link" href="${p.link || "#"}" target="_blank" rel="noopener">Preview ${arrowSVG}</a>`;
    }
    const learnMore = p.slug ? `<a class="card-link" href="${p.page || `/products/?p=${p.slug}`}">Learn more ${arrowSVG}</a>` : "";
    const external = p.link && p.link !== "#"
      ? `<a class="card-link secondary" href="${p.link}" target="_blank" rel="noopener" style="opacity:.65;font-size:13px;margin-left:4px">${p.category === "extension" ? "Chrome Store ↗" : p.category === "ios" ? "App Store ↗" : "Visit ↗"}</a>`
      : "";
    return learnMore + external;
  }

  function productUrl(p) {
    return p.page || `/products/?p=${p.slug}`;
  }

  function renderProducts(list) {
    grid.innerHTML = "";
    list.forEach((p, i) => {
      const card = document.createElement("article");
      card.className = "product-card reveal";
      card.dataset.category = p.category;
      card.style.transitionDelay = `${Math.min(i * 55, 330)}ms`;
      card.innerHTML = `
        <div class="card-thumb">
          <img src="${p.image || ""}" alt="${p.name} preview" loading="lazy" />
          ${p.comingSoon ? '<span class="card-badge">Coming soon</span>' : ""}
          ${dlCounterHTML(p)}
        </div>
        <div class="card-body">
          <span class="card-cat">${CATEGORY_LABELS[p.category] || "Product"}</span>
          <h3 class="card-title">${p.name}</h3>
          <p class="card-tagline">${p.tagline || ""}</p>
          <p class="card-desc">${p.description || ""}</p>
          <div class="card-tags">${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          ${ctaMarkup(p)}
        </div>`;
      grid.appendChild(card);
      // Load live GitHub download count async (non-blocking)
      if (p.githubRepo) loadGithubCount(p);
      if (p.slug) {
        card.style.cursor = "pointer";
        card.addEventListener("click", (e) => {
          if (!e.target.closest("a")) {
            window.location.href = productUrl(p);
          }
        });
      }
    });
    observeReveals();
    bindCardTilt();
  }

  /* ---------- Filters ---------- */
  const filterWrap = document.getElementById("filters");
  filterWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    renderProducts(f === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === f));
  });
  renderProducts(PRODUCTS);

  /* ---------- 3D tilt + spotlight (cards) ---------- */
  function spotlight(el) {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }
  function bindCardTilt() {
    document.querySelectorAll(".product-card").forEach((card) => {
      spotlight(card);
      if (reduceMotion) return;
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const rx = (((e.clientY - r.top) / r.height) - 0.5) * -10;
        const ry = (((e.clientX - r.left) / r.width) - 0.5) * 12;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }
  /* ---------- Spotlight + subtle tilt for value & capability cards ---------- */
  function bindHoverTilt(selector, max) {
    document.querySelectorAll(selector).forEach((el) => {
      spotlight(el);
      if (reduceMotion) return;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const rx = (((e.clientY - r.top) / r.height) - 0.5) * -max;
        const ry = (((e.clientX - r.left) / r.width) - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }
  bindHoverTilt(".cap-card", 7);
  bindHoverTilt(".value-card", 6);

  if (!reduceMotion) {
    document.querySelectorAll("[data-tilt]").forEach((wrap) => {
      const inner = wrap.querySelector(".tilt-inner");
      wrap.addEventListener("mousemove", (e) => {
        const r = wrap.getBoundingClientRect();
        const rx = (((e.clientY - r.top) / r.height) - 0.5) * -14;
        const ry = (((e.clientX - r.left) / r.width) - 0.5) * 14;
        inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      wrap.addEventListener("mouseleave", () => (inner.style.transform = ""));
    });
  }

  /* ---------- Scroll reveal ---------- */
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
        }),
        { threshold: 0.12 }
      );
    }
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
  }
  observeReveals();

  /* ---------- Counters ---------- */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count;
      let n = 0; const step = Math.max(1, Math.floor(target / 40));
      (function tick() {
        n += step;
        if (n >= target) el.textContent = target;
        else { el.textContent = n; requestAnimationFrame(tick); }
      })();
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-num").forEach((c) => counterObs.observe(c));

  /* ---------- Navbar + progress + active link + scroll parallax ---------- */
  const scrollHint = document.querySelector(".scroll-hint");
  const navbar = document.getElementById("navbar");
  const progress = document.querySelector(".scroll-progress");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionIds = ["home", "about", "capabilities", "products", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id));
  const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));

  let ticking = false;
  function update() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 30);
    if (scrollHint) scrollHint.classList.toggle("hidden", y > 60);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(y / h) * 100}%`;

    let current = "home";
    sections.forEach((s) => { if (s && y >= s.offsetTop - 220) current = s.id; });
    navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));

    if (!reduceMotion) {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translateY(${offset.toFixed(1)}px)`;
      });
    }
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* ---------- Cursor + magnetic + hero blob parallax ---------- */
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let cursorReady = false;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (!cursorReady) {
        // snap the ring to the pointer on first move / re-entry to avoid jumps
        rx = mx; ry = my;
        cursorReady = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    });
    document.addEventListener("mouseleave", () => {
      cursorReady = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    });
    (function loop() {
      // ease toward target; snap when extremely close to kill micro-jitter
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      if (Math.abs(mx - rx) < 0.1) rx = mx;
      if (Math.abs(my - ry) < 0.1) ry = my;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();
    const targets = "a, button, .product-card, .filter-btn, .value-card, .cap-card";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(targets)) ring.classList.add("hovering"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(targets)) ring.classList.remove("hovering"); });

    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });

    const blobs = document.querySelectorAll(".blob");
    window.addEventListener("mousemove", (e) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      blobs.forEach((b, i) => {
        const d = (i + 1) * 14;
        b.style.marginLeft = `${dx * d}px`;
        b.style.marginTop = `${dy * d}px`;
      });
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
