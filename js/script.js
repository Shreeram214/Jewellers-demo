/* ==========================================================
   AURELIA JEWELS — Premium Jewellery Showroom (Demo)
   Vanilla JavaScript
   ========================================================== */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  /* ------------------------------------------------------------
     1. CONFIGURATION — replace with the client's real details
     ------------------------------------------------------------ */
  const CONFIG = {
    brand: "AURELIA JEWELS",
    // WhatsApp number in international format WITHOUT "+" or spaces,
    // e.g. "919876543210". Left empty in this demo: WhatsApp will open
    // with the message pre-filled and let the visitor pick a contact.
    whatsappNumber: "",
    // Showroom phone number for "Call Now", e.g. "+919876543210".
    phoneNumber: ""
  };

  const IMG = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w}&q=74&auto=format&fit=crop`;

  /* ------------------------------------------------------------
     2. DEMO PRODUCT DATA (illustrative, not real inventory)
     ------------------------------------------------------------ */
  const PRODUCTS = [
    {
      id: "traditional-gold-necklace", name: "Traditional Gold Necklace", category: "Gold Jewellery", tags: ["gold", "traditional"],
      img: "1758995115682-1452a1a9e35b", alt: "Traditional gold necklace with matching earrings on a display stand",
      short: "A graceful heritage necklace with fine bead work and a matching pair of earrings.",
      desc: "Inspired by classic Maharashtrian and South Indian forms, this necklace pairs a rounded silhouette with delicate bead detailing — elegant for festivals, pujas and family functions.",
      highlights: ["Heritage-inspired silhouette", "Fine bead and filigree detailing", "Pairs with matching earrings", "Suitable for festive and traditional wear"],
      material: "Shown as 22K gold. Final purity, weight and hallmark details are confirmed at the showroom."
    },
    {
      id: "diamond-pendant", name: "Diamond Pendant", category: "Diamond Jewellery", tags: ["diamond"],
      img: "1605100804567-1ffe942b5cd6", alt: "Pear-shaped diamond studded pendant in white metal",
      short: "A pear-shaped pendant framed in sparkling diamonds for understated brilliance.",
      desc: "A modern classic: a pear-shaped centre surrounded by a halo of small diamonds, designed to sit beautifully on a fine chain for everyday luxury or evening wear.",
      highlights: ["Pear-shaped halo design", "Lightweight and versatile", "Ideal for gifting and anniversaries", "Can be paired with a chain of your choice"],
      material: "Shown in 18K white gold with diamonds. Diamond details and grading reports, where applicable, are shared on request."
    },
    {
      id: "gold-bangles", name: "Gold Bangles", category: "Gold Jewellery", tags: ["gold", "traditional", "bridal"],
      img: "1758995116383-f51775896add", alt: "Stack of ornate engraved gold bangles on a dark surface",
      short: "A stack of engraved bangles that layer beautifully for weddings and festivals.",
      desc: "Richly engraved bangles with a warm finish, made to be stacked. Wear a pair for everyday elegance or layer the full set for bridal and festive looks.",
      highlights: ["Hand-finished engraving", "Designed for stacking", "Available in multiple sizes (on enquiry)", "Bridal and festive favourite"],
      material: "Shown as 22K gold. Sizes, weights and hallmark details are confirmed at the showroom."
    },
    {
      id: "bridal-necklace-set", name: "Bridal Necklace Set", category: "Bridal Jewellery", tags: ["bridal", "gold", "traditional"],
      img: "1758995115857-2de1eb6283d0", alt: "Bridal gold necklace and earrings set displayed on white stands",
      short: "A statement bridal set with a rich, layered necklace and matching earrings.",
      desc: "Created for the wedding day, this set balances grandeur with comfort — a broad collar necklace with intricate drops, paired with matching earrings.",
      highlights: ["Statement bridal silhouette", "Matching earrings included in the set", "Comfort-conscious construction", "Can be styled with maang tikka and bangles"],
      material: "Shown as 22K gold. Stone details, weight and hallmark information are confirmed at the showroom."
    },
    {
      id: "diamond-earrings", name: "Diamond Earrings", category: "Diamond Jewellery", tags: ["diamond"],
      img: "1693212793204-bcea856c75fe", alt: "Pair of swirl-design diamond earrings on black cloth",
      short: "Swirling diamond earrings that catch the light from every angle.",
      desc: "A contemporary swirl design set with rows of diamonds — refined enough for the office, striking enough for an evening celebration.",
      highlights: ["Contemporary swirl motif", "Secure post-and-back fitting", "Day-to-evening versatility", "Thoughtful gift for milestones"],
      material: "Shown in white gold with diamonds. Diamond details are shared on request."
    },
    {
      id: "gold-chain", name: "Gold Chain", category: "Gold Jewellery", tags: ["gold"],
      img: "1771734065116-61e16b353ded", alt: "Close-up of a polished gold chain on a black background",
      short: "A polished link chain — the perfect everyday essential.",
      desc: "A timeless link chain with a smooth, polished finish. Wear it alone or with a pendant; designed for comfort and daily wear.",
      highlights: ["Polished link design", "Comfortable for daily wear", "Pairs with pendants", "Multiple lengths available on enquiry"],
      material: "Shown as 22K gold. Length, weight and hallmark details are confirmed at the showroom."
    },
    {
      id: "silver-anklet", name: "Silver Anklet", category: "Silver Jewellery", tags: ["silver"],
      img: "1676303679145-8679f5ceeb16", alt: "Delicate silver chain with turquoise beads and small charms",
      short: "A delicate silver anklet with tiny charms and turquoise accents.",
      desc: "Light, playful and graceful — a fine silver chain with small charms and colourful beads, made for everyday wear and festive outfits alike.",
      highlights: ["Fine, lightweight chain", "Charm and bead accents", "Adjustable length", "Everyday and festive wear"],
      material: "Shown as sterling silver. Final purity and finish are confirmed at the showroom."
    },
    {
      id: "traditional-jhumka-earrings", name: "Traditional Jhumka Earrings", category: "Traditional Jewellery", tags: ["traditional", "gold", "bridal"],
      img: "1714733831162-0a6e849141be", alt: "Pair of traditional jhumka earrings with bell-shaped drops",
      short: "Bell-shaped jhumkas with antique detailing — a festive classic.",
      desc: "Classic jhumkas with a domed bell, fine granulation and soft drops. A timeless choice for weddings, Diwali and traditional celebrations.",
      highlights: ["Classic bell (jhumka) silhouette", "Antique-style detailing", "Light movement when worn", "Complements sarees and lehengas"],
      material: "Shown in gold with an antique finish. Purity and weight are confirmed at the showroom."
    }
  ];

  /* ------------------------------------------------------------
     3. BUYING GUIDE CONTENT (general information)
     ------------------------------------------------------------ */
  const GUIDES = [
    {
      icon: "fa-solid fa-coins", title: "Understanding Gold Purity",
      short: "What 24K, 22K and 18K mean — and which suits your jewellery.",
      body: `<p>Gold purity is measured in karats (K) or as fineness — parts of pure gold per 1,000. Pure gold is soft, so it is alloyed with other metals to make jewellery durable.</p>
        <table><thead><tr><th>Karat</th><th>Fineness</th><th>Gold content</th></tr></thead><tbody>
        <tr><td>24K</td><td>995 / 999</td><td>99.5% – 99.9%</td></tr>
        <tr><td>22K</td><td>916</td><td>91.6%</td></tr>
        <tr><td>18K</td><td>750</td><td>75.0%</td></tr>
        <tr><td>14K</td><td>585</td><td>58.5%</td></tr></tbody></table>
        <ul><li>22K is the most common choice for traditional Indian jewellery.</li><li>18K and 14K are harder and often used for diamond and stone-set designs.</li><li>24K is generally used for coins and bars rather than intricate jewellery.</li></ul>`
    },
    {
      icon: "fa-solid fa-stamp", title: "Gold Hallmarks & BIS Hallmarking",
      short: "How to read a BIS hallmark and verify the HUID.",
      body: `<p>Hallmarking certifies the purity of gold jewellery. In India it is administered by the <strong>Bureau of Indian Standards (BIS)</strong>, and hallmarking of gold jewellery is mandatory in notified districts.</p>
        <h4>A current BIS hallmark has three marks</h4>
        <ul><li><strong>BIS standard mark</strong> — the BIS logo.</li><li><strong>Purity / fineness grade</strong> — for example 22K916, 18K750 or 14K585.</li><li><strong>HUID</strong> — a unique 6-digit alphanumeric Hallmark Unique Identification code for that piece.</li></ul>
        <h4>Verify before you buy</h4>
        <ul><li>Use the official <strong>BIS CARE</strong> app ("Verify HUID") to check a piece's HUID details.</li><li>Ask for the purity and HUID to be mentioned on your bill.</li><li>Older hallmarks (e.g. with a jeweller's mark and year code) belong to the earlier system; jewellery sold today should carry the HUID-based mark.</li></ul>`
    },
    {
      icon: "fa-regular fa-gem", title: "Choosing Diamond Jewellery",
      short: "The 4Cs, certification and what to ask at the counter.",
      body: `<p>A diamond's appearance and value are usually described using the <strong>4Cs</strong>:</p>
        <ul><li><strong>Cut</strong> — how well the diamond is shaped and faceted; the biggest influence on sparkle.</li><li><strong>Colour</strong> — graded from colourless (D) towards light yellow; near-colourless grades look white to most eyes.</li><li><strong>Clarity</strong> — the presence of tiny natural inclusions; many are invisible without magnification.</li><li><strong>Carat</strong> — the weight of the diamond (1 carat = 0.2 grams).</li></ul>
        <h4>Helpful tips</h4>
        <ul><li>For larger stones, ask whether an independent laboratory grading report is available.</li><li>Ask clearly whether diamonds are natural or laboratory-grown — both should be disclosed.</li><li>Check the metal purity of the setting (for example 18K) and the hallmark.</li><li>Choose a setting that suits how often you'll wear the piece.</li></ul>`
    },
    {
      icon: "fa-solid fa-ring", title: "Selecting Jewellery for Weddings",
      short: "Planning bridal and family jewellery without the stress.",
      body: `<ul><li><strong>Start early.</strong> Begin exploring designs 2–4 months before the wedding, especially if you want customisation.</li><li><strong>Plan by ceremony.</strong> Haldi, mehendi, wedding and reception often call for different weights and styles.</li><li><strong>Match your outfits.</strong> Bring photos or fabric swatches of your saree or lehenga to compare tones and necklines.</li><li><strong>Think beyond the day.</strong> Choose some pieces you'll happily wear again — convertible or detachable designs help.</li><li><strong>Prioritise comfort.</strong> Try on heavier sets for a few minutes to check weight and fit.</li><li><strong>Keep paperwork.</strong> Retain bills showing purity, HUID and weight for each piece.</li></ul>`
    },
    {
      icon: "fa-solid fa-hand-sparkles", title: "Jewellery Care Tips",
      short: "Simple habits to keep your jewellery beautiful for years.",
      body: `<ul><li><strong>Last on, first off.</strong> Put jewellery on after perfume, lotion and hairspray, and remove it before bathing, swimming or exercise.</li><li><strong>Store separately.</strong> Keep pieces in soft pouches or lined compartments so they don't scratch each other.</li><li><strong>Clean gently.</strong> Use lukewarm water with a mild soap and a soft brush, then dry with a lint-free cloth. Avoid harsh chemicals.</li><li><strong>Silver care.</strong> Store silver in airtight pouches to slow tarnishing; polish with a silver cloth.</li><li><strong>Stones and pearls.</strong> Wipe pearls with a soft cloth after wearing; avoid soaking stone-set or Kundan pieces.</li><li><strong>Periodic checks.</strong> Have clasps, prongs and settings inspected by a jeweller from time to time.</li></ul>`
    }
  ];

  /* ------------------------------------------------------------
     4. HELPERS
     ------------------------------------------------------------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 4200);
  }

  /* WhatsApp — one reusable builder for every enquiry */
  const WA_MESSAGES = {
    general: `Hello ${CONFIG.brand}, I am interested in your jewellery collection. Please share more details.`,
    bridal: `Hello ${CONFIG.brand}, I would like to book a bridal jewellery consultation. Please share more details.`,
    visit: `Hello ${CONFIG.brand}, I would like to visit your showroom in Sangli. Please share the address and timings.`
  };

  function waUrl(message) {
    const text = encodeURIComponent(message);
    return CONFIG.whatsappNumber
      ? `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`
      : `https://wa.me/?text=${text}`;
  }

  function openWhatsApp(message) {
    if (!CONFIG.whatsappNumber) {
      toast("Demo: showroom WhatsApp number not set — the message opens for you to choose a contact.");
    }
    window.open(waUrl(message), "_blank", "noopener");
  }

  function productMessage(p) {
    return `Hello ${CONFIG.brand}, I am interested in the "${p.name}" (${p.category}) from your website. Please share more details and price.`;
  }

  /* ------------------------------------------------------------
     5. HEADER: sticky state, mobile menu, active link
     ------------------------------------------------------------ */
  const header = $("#header");
  const nav = $("#nav");
  const burger = $("#burger");
  const overlay = $("#navOverlay");
  const toTop = $("#toTop");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("no-scroll", open);
  }
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  overlay.addEventListener("click", () => setMenu(false));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => { if (window.innerWidth > 1024) setMenu(false); });

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Active navigation: each section declares which nav item it belongs to
  const navLinks = $$(".nav-link");
  const sections = $$("[data-section]");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const key = entry.target.dataset.section;
      navLinks.forEach((l) => l.classList.toggle("active", l.dataset.nav === key));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => sectionObserver.observe(s));

  /* ------------------------------------------------------------
     6. SCROLL REVEAL
     ------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  function observeReveal(root = document) { $$(".reveal:not(.in)", root).forEach((el) => revealObserver.observe(el)); }
  observeReveal();

  /* ------------------------------------------------------------
     7. PRODUCTS: render, filter, details modal
     ------------------------------------------------------------ */
  const grid = $("#productGrid");

  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card reveal" data-tags="${p.tags.join(" ")}">
      <div class="pc-img" data-details="${p.id}" role="button" tabindex="0" aria-label="View details of ${p.name}">
        <img src="${IMG(p.img, 600)}" alt="${p.alt}" loading="lazy" width="600" height="600">
        <span class="pc-tag">${p.tags[0]}</span>
        <span class="pc-quick">Quick View</span>
      </div>
      <div class="pc-body">
        <span class="pc-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <span class="pc-price">Price on Request</span>
        <div class="pc-actions">
          <button class="btn btn-details" type="button" data-details="${p.id}">View Details</button>
          <button class="btn btn-wa" type="button" data-wa-product="${p.id}"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Enquire</button>
        </div>
      </div>
    </article>`).join("");
  observeReveal(grid);

  const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

  function applyFilter(filter) {
    $$(".filter-btn").forEach((b) => {
      const on = b.dataset.filter === filter;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", String(on));
    });
    $$(".product-card", grid).forEach((card) => {
      const show = filter === "all" || card.dataset.tags.split(" ").includes(filter);
      card.classList.toggle("hide", !show);
      card.classList.remove("fade-in");
      if (show) {
        card.classList.add("in");
        void card.offsetWidth; // restart animation
        card.classList.add("fade-in");
      }
    });
  }
  $$(".filter-btn").forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));

  // "Explore Collection" buttons jump to the showcase with a filter applied
  $$("[data-filter-go]").forEach((el) => el.addEventListener("click", (e) => {
    e.preventDefault();
    applyFilter(el.dataset.filterGo);
    $("#featured").scrollIntoView({ behavior: "smooth" });
  }));

  /* Modal helpers (shared by product + guide modals) */
  let lastFocus = null;
  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("open"));
    $(".modal-close", modal).focus();
  }
  function closeModal(modal) {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { modal.hidden = true; }, 300);
    if (lastFocus) lastFocus.focus();
  }
  $$(".modal").forEach((modal) => {
    $(".modal-close", modal).addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(modal); }); // outside click
    modal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return; // simple focus trap
      const f = $$("button, a[href], input, select, textarea", modal).filter((x) => !x.disabled && x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    $$(".modal.open").forEach(closeModal);
    if (nav.classList.contains("open")) setMenu(false);
  });

  const productModal = $("#productModal");
  let currentProduct = null;
  function showProduct(id) {
    const p = findProduct(id);
    if (!p) return;
    currentProduct = p;
    $("#pmImg").src = IMG(p.img, 900);
    $("#pmImg").alt = p.alt;
    $("#pmCat").textContent = p.category;
    $("#pmTitle").textContent = p.name;
    $("#pmDesc").textContent = p.desc;
    $("#pmHighlights").innerHTML = p.highlights.map((h) => `<li>${h}</li>`).join("");
    $("#pmMaterial").textContent = p.material;
    openModal(productModal);
  }
  $("#pmWa").addEventListener("click", () => currentProduct && openWhatsApp(productMessage(currentProduct)));

  grid.addEventListener("click", (e) => {
    const d = e.target.closest("[data-details]");
    if (d) return showProduct(d.dataset.details);
    const w = e.target.closest("[data-wa-product]");
    if (w) openWhatsApp(productMessage(findProduct(w.dataset.waProduct)));
  });
  grid.addEventListener("keydown", (e) => {
    const d = e.target.closest(".pc-img[data-details]");
    if (d && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); showProduct(d.dataset.details); }
  });

  /* ------------------------------------------------------------
     8. BUYING GUIDE
     ------------------------------------------------------------ */
  const guideModal = $("#guideModal");
  $("#guideGrid").innerHTML = GUIDES.map((g, i) => `
    <button class="guide-card reveal" type="button" data-guide="${i}" style="--d:${i * 0.05}s">
      <i class="g-ic ${g.icon}" aria-hidden="true"></i>
      <h3>${g.title}</h3>
      <p>${g.short}</p>
      <span class="g-more">Read guide <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></span>
    </button>`).join("");
  observeReveal($("#guideGrid"));
  $("#guideGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-guide]");
    if (!card) return;
    const g = GUIDES[Number(card.dataset.guide)];
    $("#gmIcon").innerHTML = `<i class="${g.icon}" aria-hidden="true"></i>`;
    $("#gmTitle").textContent = g.title;
    $("#gmBody").innerHTML = g.body;
    openModal(guideModal);
  });

  /* ------------------------------------------------------------
     9. TESTIMONIAL CAROUSEL
     ------------------------------------------------------------ */
  const slides = $$(".slide");
  const dotsWrap = $("#carDots");
  let slideIndex = 0;
  let autoPlay;
  dotsWrap.innerHTML = slides.map((_, i) => `<button type="button" role="tab" aria-label="Testimonial ${i + 1}"></button>`).join("");
  const dots = $$("button", dotsWrap);

  function goTo(i) {
    slideIndex = (i + slides.length) % slides.length;
    slides.forEach((s, n) => { s.classList.toggle("active", n === slideIndex); s.setAttribute("aria-hidden", String(n !== slideIndex)); });
    dots.forEach((d, n) => { d.classList.toggle("active", n === slideIndex); d.setAttribute("aria-selected", String(n === slideIndex)); });
  }
  function restartAuto() { clearInterval(autoPlay); autoPlay = setInterval(() => goTo(slideIndex + 1), 6500); }
  $("#prevSlide").addEventListener("click", () => { goTo(slideIndex - 1); restartAuto(); });
  $("#nextSlide").addEventListener("click", () => { goTo(slideIndex + 1); restartAuto(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); restartAuto(); }));
  const carousel = $("#carousel");
  carousel.addEventListener("mouseenter", () => clearInterval(autoPlay));
  carousel.addEventListener("mouseleave", restartAuto);
  // Swipe support
  let touchX = null;
  carousel.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { goTo(slideIndex + (dx < 0 ? 1 : -1)); restartAuto(); }
    touchX = null;
  });
  goTo(0);
  restartAuto();

  /* ------------------------------------------------------------
     10. FAQ ACCORDION
     ------------------------------------------------------------ */
  $$(".acc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const willOpen = !item.classList.contains("open");
      $$(".acc-item.open").forEach((o) => { o.classList.remove("open"); $(".acc-btn", o).setAttribute("aria-expanded", "false"); });
      item.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
    });
  });

  /* ------------------------------------------------------------
     11. FORMS — validation + demo confirmation
     ------------------------------------------------------------ */
  const RULES = {
    name: (v) => (v.trim().length < 2 ? "Please enter your full name." : /^[a-zA-Z .'-]+$/.test(v.trim()) ? "" : "Please use letters only."),
    phone: (v) => (/^[6-9]\d{9}$/.test(v.trim()) ? "" : "Enter a valid 10-digit Indian mobile number."),
    email: (v) => (!v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."),
    required: (v) => (v.trim() ? "" : "This field is required."),
    message: (v) => (v.trim().length >= 10 ? "" : "Please write at least 10 characters.")
  };

  function ruleFor(input) {
    if (input.name === "name") return RULES.name;
    if (input.name === "phone") return RULES.phone;
    if (input.type === "email") return RULES.email;
    if (input.tagName === "TEXTAREA" && input.required) return RULES.message;
    if (input.required) return RULES.required;
    return null;
  }

  function validateField(input) {
    const rule = ruleFor(input);
    const msg = rule ? rule(input.value) : "";
    const field = input.closest(".field");
    field.classList.toggle("invalid", !!msg);
    const err = $(".err", field);
    if (err) err.textContent = msg;
    input.setAttribute("aria-invalid", String(!!msg));
    return !msg;
  }

  validateField.reset = (input) => {
    const field = input.closest(".field");
    field.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
    const err = $(".err", field);
    if (err) err.textContent = "";
  };

  function setupForm(form, buildMessage) {
    const inputs = $$("input, select, textarea", form);
    const success = $(".form-success", form);
    let lastMessage = "";

    inputs.forEach((input) => {
      if (input.name === "phone") input.addEventListener("input", () => { input.value = input.value.replace(/\D/g, "").slice(0, 10); });
      input.addEventListener("blur", () => { if (input.value) validateField(input); });
      input.addEventListener("input", () => { if (input.closest(".field").classList.contains("invalid")) validateField(input); });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = inputs.map(validateField);
      if (results.includes(false)) {
        const first = inputs.find((i) => i.getAttribute("aria-invalid") === "true");
        first.focus();
        toast("Please check the highlighted fields.");
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      lastMessage = buildMessage(data);
      $("[data-name]", success).textContent = data.name.trim().split(" ")[0];
      success.hidden = false;
    });

    $("[data-success-wa]", success).addEventListener("click", () => openWhatsApp(lastMessage));
    $("[data-reset]", success).addEventListener("click", () => {
      form.reset();
      inputs.forEach((i) => validateField.reset(i));
      success.hidden = true;
      inputs[0].focus();
    });
  }

  setupForm($("#customForm"), (d) => [
    `Hello ${CONFIG.brand}, I would like to enquire about custom jewellery.`,
    "",
    `Name: ${d.name}`,
    `Mobile: ${d.phone}`,
    `Jewellery Type: ${d.type}`,
    `Occasion: ${d.occasion}`,
    `Design Preferences: ${d.pref}`,
    d.message ? `Message: ${d.message}` : ""
  ].filter((l, i) => l || i === 1).join("\n"));

  setupForm($("#contactForm"), (d) => [
    `Hello ${CONFIG.brand},`,
    "",
    `Name: ${d.name}`,
    `Mobile: ${d.phone}`,
    d.email ? `Email: ${d.email}` : "",
    `Interest: ${d.interest}`,
    `Message: ${d.message}`
  ].filter((l, i) => l || i === 1).join("\n"));

  // Occasion tiles pre-select the occasion in the custom form
  $$("[data-occasion]").forEach((tile) => tile.addEventListener("click", () => {
    const sel = $("#cOccasion");
    const opt = Array.from(sel.options).find((o) => o.text === tile.dataset.occasion);
    if (opt) sel.value = opt.value;
  }));

  /* ------------------------------------------------------------
     12. GENERIC DEMO ACTIONS (WhatsApp, call, social placeholders)
     ------------------------------------------------------------ */
  $$("[data-wa]").forEach((btn) => btn.addEventListener("click", () => openWhatsApp(WA_MESSAGES[btn.dataset.wa] || WA_MESSAGES.general)));

  $$("[data-call]").forEach((btn) => btn.addEventListener("click", () => {
    if (CONFIG.phoneNumber) window.location.href = `tel:${CONFIG.phoneNumber}`;
    else toast("Demo: add the showroom's phone number in js/script.js to enable Call Now.");
  }));

  $$("[data-social]").forEach((btn) => btn.addEventListener("click", () => {
    toast(`Demo: ${btn.dataset.social} link placeholder — replace with the showroom's official profile.`);
  }));

  $$(".ig").forEach((fig) => fig.addEventListener("click", () => toast("Demo gallery: link these posts to the showroom's official Instagram.")));

  $("#year").textContent = new Date().getFullYear();
})();
