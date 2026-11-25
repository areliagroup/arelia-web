/* ARELIA — i18n (ES / EN)
   Usage:
   - Wrap text in <span data-i18n="key.subkey">…</span>
   - Or use data-i18n on the element itself; its textContent is replaced.
   - Toggle via window.setLang('es' | 'en'); persists in localStorage.
*/

window.I18N = {
  es: {
    nav: {
      services: "Servicios",
      markets: "Mercados",
      partners: "Partners",
      contact: "Contacto",
      cta: "Hablemos",
    },
    eyebrow: "Inversión y operación tecnológica para Latinoamérica",
    hero: {
      h1_a: "From technology",
      h1_b: "to intelligence.",
      sub: "Compañía de inversión, operación y construcción de tecnología e inteligencia artificial. Operamos desde Lima para escalar productos, equipos y mercados en Perú y Colombia.",
      cta_primary: "Empezar conversación",
      cta_secondary: "Ver servicios",
    },
    hv: {
      tag1: "OPERACIÓN PAÍS",
      r1l: "Mercado",
      r1r: "Perú · Colombia",
      r2l: "Modelo",
      r2r: "Representación / SaaS",
      r3l: "Estado",
      r3r: "Activo",
      tag2: "PRODUCTO IA",
      r4l: "Práctica",
      r4r: "LLMs · Agentes · Computer Vision",
      r5l: "Estado",
      r5r: "En construcción",
      tag3: "PIPELINE",
      step1: "Discover",
      step2: "Build",
      step3: "Operate",
    },
    intro: {
      label: "2026 · Etapa inicial",
      text: "Iniciamos operaciones este año. Estamos formalizando nuestras primeras alianzas y representaciones tecnológicas en Perú y Colombia. ¿Quieres ser una de ellas?",
      cta: "Proponer alianza",
    },
    alliances: {
      eyebrow: "Alianzas",
      h2: "Empresas con las que operamos.",
      sub: "Alianzas estratégicas con compañías tecnológicas en LATAM. Representamos y operamos sus soluciones en Perú y Colombia.",
    },
    platforms: {
      label: "Plataformas que implementamos y sobre las que construimos",
    },
    pillars: {
      eyebrow: "Lo que hacemos",
      h2: "Dos prácticas, una operación.",
      sub: "Combinamos operación país experta con construcción de producto digital. Las empresas globales nos eligen para crecer en LATAM; los corporativos nos eligen para automatizar y transformar.",
      p1_label: "REPRESENTACIÓN LATAM",
      p1_badge: "Operación país",
      p1_title: "Llevamos tu tecnología a Perú y Colombia.",
      p1_body: "Representamos, distribuimos y operamos productos digitales globales en LATAM. Go-to-market completo, ventas locales, soporte regulado, finanzas y reporting.",
      p1_items: ["Representación comercial y agencia", "Distribución y licenciamiento", "Operación país (sales, support, finance)", "Compliance y regulación local", "Logística e importación tecnológica"],
      p1_cta: "Conoce el modelo",
      p2_label: "PRODUCTO E IA",
      p2_badge: "Build · Run",
      p2_title: "Diseñamos y operamos producto digital con IA.",
      p2_body: "Construcción end-to-end: discovery, diseño, ingeniería e IA aplicada. Plataformas SaaS, automatización con LLMs, agentes y workflows inteligentes para corporativos.",
      p2_items: ["Plataformas SaaS, PaaS, IaaS", "Inteligencia artificial, LLMs y Computer Vision", "Automatización (RPA) e IoT", "Cloud, datos y arquitectura", "Consultoría de transformación digital"],
      p2_cta: "Ver capabilities",
    },
    bento: {
      eyebrow: "Capabilities",
      h2: "Stack completo, desde estrategia hasta operación.",
      sub: "Equipos multidisciplinarios entre Lima y Bogotá, listos para acompañarte en cualquier punto del ciclo.",
      c1_tag: "IA APLICADA",
      c1_h: "LLMs y agentes en producción",
      c1_p: "Modelos generativos, RAG, fine-tuning, agentes y computer vision integrados a tus procesos críticos.",
      c1_label: "Modelos y plataformas",
      c2_tag: "AUTOMATIZACIÓN",
      c2_h: "RPA + workflows inteligentes",
      c2_p: "Reducimos tiempo operativo con automatización y orquestación entre sistemas.",
      c2_label: "RPA y orquestadores",
      c3_tag: "PLATAFORMAS",
      c3_h: "SaaS, web y mobile",
      c3_p: "Producto digital end-to-end, listo para escalar regionalmente.",
      c4_tag: "DATOS",
      c4_h: "Big data, pipelines y BI",
      c4_p: "Ingestión, modelado y activación con dashboards en tiempo real.",
      c5_tag: "CLOUD",
      c5_h: "Arquitectura segura",
      c5_p: "AWS, GCP, Azure: infraestructura escalable, observable y con costos bajo control.",
      c6_tag: "CONSULTORÍA",
      c6_h: "Transformación digital",
      c6_p: "Roadmaps técnicos, auditoría tecnológica y capacitación a equipos.",
    },
    markets: {
      eyebrow: "Mercados",
      h2: "Operamos donde está el crecimiento.",
      sub: "Dos mercados conectados, un equipo binacional. Operación legal en Perú y red comercial activa en Colombia.",
      peru_coord: "12.04°S · 77.04°W",
      peru_name: "Perú",
      peru_meta: "Sede legal y operativa · Lima",
      col_coord: "4.71°N · 74.07°W",
      col_name: "Colombia",
      col_meta: "Red comercial · Bogotá",
    },
    cta: {
      h2: "Listos para llevar tu tecnología más lejos.",
      sub: "Escríbenos: representación, producto, o algo intermedio.",
      btn1: "Empezar conversación",
      btn2: "Ver servicios",
    },
    footer: {
      tag: "Operador tecnológico LATAM. Representamos, operamos y construimos tecnología e IA en Perú y Colombia.",
      h_company: "Compañía",
      h_services: "Servicios",
      h_legal: "Legal",
      l_about: "Quiénes somos",
      l_markets: "Mercados",
      l_partners: "Partners",
      l_careers: "Trabaja con nosotros",
      l_repr: "Representación LATAM",
      l_build: "Construcción de producto",
      l_ai: "IA y automatización",
      l_cloud: "Cloud y datos",
      l_terms: "Términos",
      l_privacy: "Privacidad",
      l_legal: "Aviso legal",
      copy: "© 2026 ARELIA S.A.C. · Constituida en Lima, Perú",
    },
    /* Services page */
    sv: {
      eyebrow: "Servicios",
      h1: "Cómo trabajamos contigo.",
      sub: "Dos prácticas que se complementan: una para empresas que quieren entrar a LATAM, otra para corporativos que quieren transformar su tecnología.",
      block1_tag: "01 · REPRESENTACIÓN LATAM",
      block1_h: "Operación país para empresas tecnológicas globales.",
      block1_p: "Reemplazamos la complejidad de armar oficina propia en Perú o Colombia. Operamos tu marca, tu producto y tu equipo desde el primer día.",
      block1_items: [
        ["Go-to-market", "Estrategia comercial, pricing local, posicionamiento y captura de los primeros clientes."],
        ["Equipo país", "Reclutamos, contratamos y dirigimos el equipo bajo nuestra estructura legal."],
        ["Compliance", "Manejo regulatorio: SUNAT, INDECOPI, datos personales, contratos."],
        ["Distribución", "Canales, partners, importación y logística tecnológica."],
        ["Soporte", "Customer success, soporte técnico y operación 24/7 cuando aplica."],
        ["Reporting", "Dashboards y reporting mensual transparente para tu HQ."],
      ],
      block2_tag: "02 · PRODUCTO E IA",
      block2_h: "Construimos y operamos producto digital con IA.",
      block2_p: "Para corporativos que necesitan transformar procesos críticos: del discovery a la operación de plataformas con IA aplicada.",
      block2_items: [
        ["Discovery", "Auditoría tecnológica, mapeo de procesos y oportunidades de automatización."],
        ["Plataformas", "Producto SaaS, web y mobile end-to-end con stack moderno."],
        ["IA aplicada", "Agentes, RAG, LLMs en producción y modelos de ML específicos al dominio."],
        ["Automatización", "RPA, workflows inteligentes e integraciones API."],
        ["Cloud y datos", "Arquitectura, observabilidad, pipelines y BI."],
        ["Soporte", "Operación, evolución continua y capacitación a tu equipo."],
      ],
      back: "← Volver al inicio",
    },
    /* Contact page */
    ct: {
      eyebrow: "Contacto",
      h1: "Empecemos a hablar.",
      sub: "Cuéntanos qué necesitas. Te respondemos personalmente.",
      f_name: "Nombre",
      f_company: "Empresa",
      f_email: "Email corporativo",
      f_country: "País",
      f_interest: "Estoy interesado en",
      f_msg: "Cuéntanos más",
      f_msg_ph: "Mercado objetivo, producto, equipo, timeline…",
      f_submit: "Enviar mensaje",
      f_sent: "¡Recibido! Te respondemos pronto.",
      i_repr: "Representación LATAM",
      i_build: "Construcción de producto",
      i_ai: "IA y automatización",
      i_other: "Otro",
      side_h: "También por aquí",
      side_email_l: "Email",
      side_email_v: "info@arelia.com.pe",
      side_addr_l: "Ubicación",
      side_addr_v: "Lima · Bogotá",
      side_loc_l: "Ubicación",
      side_loc_v: "Lima · Bogotá",
      side_legal_l: "Razón social",
      side_legal_v: "ARELIA S.A.C.",
      back: "← Volver al inicio",
    },
  },
  en: {
    nav: {
      services: "Services",
      markets: "Markets",
      partners: "Partners",
      contact: "Contact",
      cta: "Let's talk",
    },
    eyebrow: "Technology investment and operations across Latin America",
    hero: {
      h1_a: "From technology",
      h1_b: "to intelligence.",
      sub: "An investment, operations and product company for technology and artificial intelligence. We operate from Lima to scale products, teams and markets across Peru and Colombia.",
      cta_primary: "Start a conversation",
      cta_secondary: "View services",
    },
    hv: {
      tag1: "COUNTRY OPS",
      r1l: "Market",
      r1r: "Peru · Colombia",
      r2l: "Model",
      r2r: "Representation / SaaS",
      r3l: "Status",
      r3r: "Active",
      tag2: "AI PRODUCT",
      r4l: "Practice",
      r4r: "LLMs · Agents · Computer Vision",
      r5l: "Status",
      r5r: "In build",
      tag3: "PIPELINE",
      step1: "Discover",
      step2: "Build",
      step3: "Operate",
    },
    intro: {
      label: "2026 · Early stage",
      text: "We launched operations this year. We're formalizing our first technology alliances and representations in Peru and Colombia. Want to be one of them?",
      cta: "Propose an alliance",
    },
    alliances: {
      eyebrow: "Alliances",
      h2: "Companies we operate with.",
      sub: "Strategic alliances with technology companies across LATAM. We represent and operate their solutions in Peru and Colombia.",
    },
    platforms: {
      label: "Platforms we implement and build on",
    },
    pillars: {
      eyebrow: "What we do",
      h2: "Two practices, one operation.",
      sub: "We combine expert country operations with full-stack product building. Global companies choose us to grow in LATAM; corporates choose us to automate and transform.",
      p1_label: "LATAM REPRESENTATION",
      p1_badge: "Country ops",
      p1_title: "We bring your technology to Peru and Colombia.",
      p1_body: "We represent, distribute and operate global digital products across LATAM. Full go-to-market, local sales, regulated support, finance and reporting.",
      p1_items: ["Commercial representation & agency", "Distribution and licensing", "Country operations (sales, support, finance)", "Local compliance and regulation", "Logistics and tech importing"],
      p1_cta: "See the model",
      p2_label: "PRODUCT & AI",
      p2_badge: "Build · Run",
      p2_title: "We design and run digital products with AI.",
      p2_body: "End-to-end construction: discovery, design, engineering and applied AI. SaaS platforms, LLM automation, agents and intelligent workflows for enterprises.",
      p2_items: ["SaaS, PaaS, IaaS platforms", "AI, LLMs and Computer Vision", "Automation (RPA) and IoT", "Cloud, data and architecture", "Digital transformation consulting"],
      p2_cta: "See capabilities",
    },
    bento: {
      eyebrow: "Capabilities",
      h2: "Full stack, from strategy to operations.",
      sub: "Cross-functional teams between Lima and Bogotá, ready to join at any point in the cycle.",
      c1_tag: "APPLIED AI",
      c1_h: "LLMs and agents in production",
      c1_p: "Generative models, RAG, fine-tuning, agents and computer vision wired into your critical processes.",
      c1_label: "Models and platforms",
      c2_tag: "AUTOMATION",
      c2_h: "RPA + intelligent workflows",
      c2_p: "Cut operational time with automation and orchestration across systems.",
      c2_label: "RPA and orchestrators",
      c3_tag: "PLATFORMS",
      c3_h: "SaaS, web and mobile",
      c3_p: "End-to-end digital product, ready to scale regionally.",
      c4_tag: "DATA",
      c4_h: "Big data, pipelines and BI",
      c4_p: "Ingestion, modeling and activation with real-time dashboards.",
      c5_tag: "CLOUD",
      c5_h: "Secure architecture",
      c5_p: "AWS, GCP, Azure: scalable, observable, cost-controlled infrastructure.",
      c6_tag: "CONSULTING",
      c6_h: "Digital transformation",
      c6_p: "Technical roadmaps, tech audits and team enablement.",
    },
    markets: {
      eyebrow: "Markets",
      h2: "We operate where the growth is.",
      sub: "Two connected markets, one binational team. Legal operation in Peru, active commercial network in Colombia.",
      peru_coord: "12.04°S · 77.04°W",
      peru_name: "Peru",
      peru_meta: "Legal & operating HQ · Lima",
      col_coord: "4.71°N · 74.07°W",
      col_name: "Colombia",
      col_meta: "Commercial network · Bogotá",
    },
    cta: {
      h2: "Ready to take your technology further.",
      sub: "Write us: representation, product, or something in between.",
      btn1: "Start a conversation",
      btn2: "View services",
    },
    footer: {
      tag: "LATAM technology operator. We represent, run, and build technology and AI across Peru and Colombia.",
      h_company: "Company",
      h_services: "Services",
      h_legal: "Legal",
      l_about: "About us",
      l_markets: "Markets",
      l_partners: "Partners",
      l_careers: "Work with us",
      l_repr: "LATAM Representation",
      l_build: "Product building",
      l_ai: "AI and automation",
      l_cloud: "Cloud and data",
      l_terms: "Terms",
      l_privacy: "Privacy",
      l_legal: "Legal notice",
      copy: "© 2026 ARELIA S.A.C. · Incorporated in Lima, Peru",
    },
    sv: {
      eyebrow: "Services",
      h1: "How we work with you.",
      sub: "Two practices that complement each other: one for companies entering LATAM, one for enterprises transforming their tech.",
      block1_tag: "01 · LATAM REPRESENTATION",
      block1_h: "Country operations for global tech companies.",
      block1_p: "We replace the complexity of standing up an office in Peru or Colombia. We operate your brand, your product and your team from day one.",
      block1_items: [
        ["Go-to-market", "Commercial strategy, local pricing, positioning and first customer acquisition."],
        ["Country team", "We hire, contract and lead the team under our legal structure."],
        ["Compliance", "Regulatory handling: tax, IP, data, contracts."],
        ["Distribution", "Channels, partners, importing and tech logistics."],
        ["Support", "Customer success, technical support and 24/7 ops when needed."],
        ["Reporting", "Transparent monthly dashboards and reports for your HQ."],
      ],
      block2_tag: "02 · PRODUCT & AI",
      block2_h: "We build and run digital products with AI.",
      block2_p: "For enterprises that need to transform critical processes: from discovery to running AI-powered platforms.",
      block2_items: [
        ["Discovery", "Tech audit, process mapping and automation opportunities."],
        ["Platforms", "End-to-end SaaS, web and mobile products with modern stack."],
        ["Applied AI", "Agents, RAG, LLMs in production and domain-specific ML models."],
        ["Automation", "RPA, intelligent workflows and API integrations."],
        ["Cloud & data", "Architecture, observability, pipelines and BI."],
        ["Support", "Operations, continuous evolution and team enablement."],
      ],
      back: "← Back to home",
    },
    ct: {
      eyebrow: "Contact",
      h1: "Let's start talking.",
      sub: "Tell us what you need. We'll get back to you personally.",
      f_name: "Name",
      f_company: "Company",
      f_email: "Work email",
      f_country: "Country",
      f_interest: "I'm interested in",
      f_msg: "Tell us more",
      f_msg_ph: "Target market, product, team, timeline…",
      f_submit: "Send message",
      f_sent: "Got it! We'll get back to you soon.",
      i_repr: "LATAM Representation",
      i_build: "Product building",
      i_ai: "AI and automation",
      i_other: "Other",
      side_h: "Also reachable",
      side_email_l: "Email",
      side_email_v: "info@arelia.com.pe",
      side_addr_l: "Location",
      side_addr_v: "Lima · Bogotá",
      side_loc_l: "Location",
      side_loc_v: "Lima · Bogotá",
      side_legal_l: "Legal name",
      side_legal_v: "ARELIA S.A.C.",
      back: "← Back to home",
    },
  },
};

(function () {
  function get(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  }

  function applyLang(lang) {
    const dict = window.I18N[lang];
    if (!dict) return;
    document.documentElement.setAttribute("lang", lang);
    document.body.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = get(dict, key);
      if (typeof value === "string") {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = value;
        } else {
          el.textContent = value;
        }
      }
    });
    // Per-language image swap: elements with data-src-es / data-src-en
    document.querySelectorAll("[data-src-es][data-src-en]").forEach((el) => {
      const next = el.getAttribute("data-src-" + lang);
      if (next && el.getAttribute("src") !== next) {
        el.setAttribute("src", next);
      }
    });
    document.querySelectorAll(".lang-pill button").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.lang === lang);
    });
    try { localStorage.setItem("arelia.com.peng", lang); } catch (e) {}
  }

  window.setLang = applyLang;

  document.addEventListener("DOMContentLoaded", () => {
    let lang = "es";
    try { lang = localStorage.getItem("arelia.com.peng") || "es"; } catch (e) {}
    applyLang(lang);

    document.querySelectorAll(".lang-pill button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    // Scroll-aware nav
    const nav = document.querySelector(".nav");
    if (nav) {
      const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  });
})();
