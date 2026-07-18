// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById("burger");
const links = document.querySelector(".nav__links");
burger.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Animated counters
const counters = document.querySelectorAll("[data-count]");
const counterIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const tick = () => {
        cur += step;
        if (cur >= target) {
          el.textContent = target + "+";
        } else {
          el.textContent = cur;
          requestAnimationFrame(tick);
        }
      };
      tick();
      counterIO.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterIO.observe(c));

/* =========================================================
   LANGUAGE SWITCH (RU / EN)
   ========================================================= */
const i18n = {
  logo: { ru: "AIBOLAT", en: "AIBOLAT", kz: "AIBOLAT" },
  "nav.home": { ru: "Главная", en: "Home", kz: "Басты бет" },
  "nav.about": { ru: "Обо мне", en: "About", kz: "Мен туралы" },
  "nav.work": { ru: "Работы", en: "Work", kz: "Жұмыстар" },
  "nav.pricing": { ru: "Цены", en: "Pricing", kz: "Бағалар" },
  "nav.services": { ru: "Услуги", en: "Services", kz: "Қызметтер" },
  "nav.contact": { ru: "Контакты", en: "Contact", kz: "Байланыс" },

  "hero.meta1": { ru: "Портфолио фотографа", en: "Photographer Portfolio", kz: "Фотограф портфолиосы" },
  "hero.meta2": { ru: "С 2016 года", en: "Est. 2016", kz: "2016 жылдан бері" },
  "hero.lead": {
    ru: "Ловлю свет и тень. Чёрно-белая история о людях, городе и тишине.",
    en: "Chasing light and shadow. A black-and-white story about people, the city and silence.",
    kz: "Жарық пен көлеңкені аулаймын. Адамдар, қала және тыныштық туралы ақ-қара әңгіме.",
  },
  "hero.cta1": { ru: "Смотреть работы", en: "View Work", kz: "Жұмыстарды көру" },
  "hero.cta2": { ru: "Смотреть цены", en: "See Pricing", kz: "Бағаларды көру" },

  "about.eyebrow": { ru: "01 — Обо мне", en: "01 — About", kz: "01 — Мен туралы" },
  "about.hello": { ru: "ПРИВЕТ,", en: "HELLO,", kz: "СӘЛЕМ," },
  "about.iam": { ru: "Я", en: "I'AM", kz: "МЕН" },
  "about.p1": {
    ru: "Меня зовут Aibolat Amanzholov. Я фотограф, влюблённый в монохром. Эта подборка — коллекция работ, которые отражают мой взгляд, стиль и путь.",
    en: "My name is Aibolat Amanzholov. I'm a photographer in love with monochrome. This is a collection of work that reflects my perspective, style and path.",
    kz: "Менің атым Aibolat Amanzholov. Мен монохромды жақсы көретін фотографпын. Бұл жинақ — менің көзқарасымды, стилімді және жолымды көрсететін жұмыстар топтамасы.",
  },
  "about.p2": {
    ru: "Превращаю идеи в чистые, смелые кадры, созданные, чтобы оставить след.",
    en: "I turn ideas into clean, bold frames, made to leave a mark.",
    kz: "Идеяларды таза әрі батыл кадрларға айналдырамын, із қалдыру үшін жасалған.",
  },
  "about.stat1": { ru: "Съёмок", en: "Shoots", kz: "Түсірілім" },
  "about.stat2": { ru: "Лет опыта", en: "Years Experience", kz: "Жыл тәжірибе" },
  "about.stat3": { ru: "Наград", en: "Awards", kz: "Марапат" },

  "work.eyebrow": { ru: "02 — Избранные работы", en: "02 — Selected Work", kz: "02 — Таңдаулы жұмыстар" },
  "work.title": { ru: "ГАЛЕРЕЯ", en: "GALLERY", kz: "ГАЛЕРЕЯ" },
  "work.ctaEyebrow": { ru: "Прайс-лист", en: "Price List", kz: "Баға тізімі" },
  "work.ctaText": { ru: "Смотреть цены на съёмку", en: "See shoot pricing", kz: "Түсірілім бағасын көру" },

  "pricing.eyebrow": { ru: "03 — Цены", en: "03 — Pricing", kz: "03 — Бағалар" },
  "pricing.title": { ru: "ПРАЙС", en: "PRICE", kz: "БАҒА" },

  "pricing.standart.subtitle": {
    ru: "Для камерных торжеств и банкетной части",
    en: "For intimate celebrations and the banquet part",
    kz: "Камералық мерекелер мен банкет бөлігіне арналған",
  },
  "pricing.standart.i1": { ru: "1 профессиональный фотограф", en: "1 professional photographer", kz: "1 кәсіби фотограф" },
  "pricing.standart.i2": { ru: "6 часов съёмки", en: "6 hours of shooting", kz: "6 сағат түсірілім" },
  "pricing.standart.i3": { ru: "300–500 фото в авторской художественной обработке", en: "300–500 photos with signature artistic retouch", kz: "300–500 фото авторлық көркем өңдеумен" },
  "pricing.standart.i4": { ru: "Персональная онлайн-галерея", en: "Personal online gallery", kz: "Жеке онлайн-галерея" },
  "pricing.standart.i5": { ru: "Готовые фотографии в течение месяца", en: "Photos ready within a month", kz: "Фотосуреттер бір ай ішінде дайын болады" },
  "pricing.standart.i6": { ru: "Резервная копия фотографий — 12 месяцев", en: "Photo backup stored for 12 months", kz: "Фотосуреттердің резервтік көшірмесі — 12 ай" },

  "pricing.elite.badge": { ru: "Хит", en: "Popular", kz: "Хит" },
  "pricing.elite.subtitle": {
    ru: "Идеальное решение для полного свадебного дня",
    en: "The perfect solution for a full wedding day",
    kz: "Той күнінің толық түсірілімі үшін тамаша шешім",
  },
  "pricing.elite.i1": { ru: "Полный свадебный день", en: "Full wedding day", kz: "Тойдың толық күні" },
  "pricing.elite.i2": { ru: "2 профессиональных фотографа", en: "2 professional photographers", kz: "2 кәсіби фотограф" },
  "pricing.elite.i3": { ru: "Съёмка в течение всего свадебного дня", en: "Coverage throughout the whole wedding day", kz: "Той күні бойы түсірілім" },
  "pricing.elite.i4": { ru: "600–800 фото в авторской художественной обработке", en: "600–800 photos with signature artistic retouch", kz: "600–800 фото авторлық көркем өңдеумен" },
  "pricing.elite.i5": { ru: "Удобная онлайн-галерея для вас и гостей", en: "Convenient online gallery for you and guests", kz: "Сіз бен қонақтарыңызға ыңғайлы онлайн-галерея" },
  "pricing.elite.i6": { ru: "QR-код — гости получают фото уже во время банкета", en: "QR code — guests get photos during the banquet", kz: "QR-код — қонақтар фотосуреттерді банкет кезінде-ақ алады" },
  "pricing.elite.i7": { ru: "Резервная копия фотографий — 12 месяцев", en: "Photo backup stored for 12 months", kz: "Фотосуреттердің резервтік көшірмесі — 12 ай" },

  "pricing.premium.subtitle": {
    ru: "Максимальный комфорт и безупречный результат",
    en: "Maximum comfort and a flawless result",
    kz: "Максималды жайлылық пен мінсіз нәтиже",
  },
  "pricing.premium.i1": { ru: "Полный свадебный день", en: "Full wedding day", kz: "Тойдың толық күні" },
  "pricing.premium.i2": { ru: "3 профессиональных фотографа", en: "3 professional photographers", kz: "3 кәсіби фотограф" },
  "pricing.premium.i3": { ru: "800–1200 фото в авторской художественной обработке", en: "800–1200 photos with signature artistic retouch", kz: "800–1200 фото авторлық көркем өңдеумен" },
  "pricing.premium.i4": { ru: "Удобная онлайн-галерея для вас и гостей", en: "Convenient online gallery for you and guests", kz: "Сіз бен қонақтарыңызға ыңғайлы онлайн-галерея" },
  "pricing.premium.i5": { ru: "QR-код во время банкета", en: "QR code during the banquet", kz: "Банкет кезінде QR-код" },
  "pricing.premium.i6": { ru: "Премиальная фотокнига 30×30 см, 15 разворотов", en: "Premium 30×30 cm photobook, 15 spreads", kz: "Премиум фотокітап 30×30 см, 15 бет" },
  "pricing.premium.i7": { ru: "Резервная копия фотографий — 12 месяцев", en: "Photo backup stored for 12 months", kz: "Фотосуреттердің резервтік көшірмесі — 12 ай" },

  "pricing.individual.title": { ru: "Индивидуальная фотосессия", en: "Individual Photosession", kz: "Жеке фотосессия" },
  "pricing.individual.i1": { ru: "1 час съёмки", en: "1 hour of shooting", kz: "1 сағат түсірілім" },
  "pricing.individual.i2": { ru: "50–100 фото в авторской обработке", en: "50–100 photos with signature retouch", kz: "50–100 фото авторлық өңдеумен" },
  "pricing.individual.i3": { ru: "10 фото в детальной ретуши", en: "10 photos with detailed retouch", kz: "10 фото толық ретушьпен" },
  "pricing.individual.i4": { ru: "Онлайн-галерея", en: "Online gallery", kz: "Онлайн-галерея" },
  "pricing.individual.i5": { ru: "Фотографии будут готовы за 2–3 дня", en: "Photos ready in 2–3 days", kz: "Фотосуреттер 2–3 күнде дайын болады" },
  "pricing.individual.i6": { ru: "Аренда студии оплачивается отдельно", en: "Studio rental paid separately", kz: "Студияны жалдау бөлек төленеді" },

  "pricing.additional.title": { ru: "Дополнительные услуги", en: "Additional Services", kz: "Қосымша қызметтер" },
  "pricing.additional.s1": { ru: "Фотокнига 30×30 см", en: "Photobook 30×30 cm", kz: "Фотокітап 30×30 см" },
  "pricing.additional.s2": { ru: "Второй фотограф", en: "Second photographer", kz: "Екінші фотограф" },
  "pricing.additional.s3": { ru: "Семейная фотосессия", en: "Family photosession", kz: "Отбасылық фотосессия" },
  "pricing.additional.s4": { ru: "Услуга QR", en: "QR service", kz: "QR қызметі" },
  "pricing.additional.s5": { ru: "Экспресс-обработка (1 неделя)", en: "Express retouch (1 week)", kz: "Жедел өңдеу (1 апта)" },
  "pricing.additional.s6": { ru: "Индивидуальный флешбокс", en: "Individual flash box", kz: "Жеке флешбокс" },
  "pricing.additional.s7": { ru: "Часовая съёмка (мин. 3 часа)", en: "Hourly shoot (min. 3 hours)", kz: "Сағаттық түсірілім (мин. 3 сағат)" },

  "pricing.info.title": { ru: "Важная информация", en: "Important Information", kz: "Маңызды ақпарат" },
  "pricing.info.i1": { ru: "Ваша дата бронируется по предоплате в сумме 50.000 ₸.", en: "Your date is booked with a 50,000 ₸ prepayment.", kz: "Күніңіз 50.000 ₸ алдын ала төлеммен броньданады." },
  "pricing.info.i2": { ru: "Предоплата является невозвратной.", en: "The prepayment is non-refundable.", kz: "Алдын ала төлем қайтарылмайды." },
  "pricing.info.i3": { ru: "Остаток передаётся наличными в день съёмки.", en: "The remainder is paid in cash on the shoot day.", kz: "Қалған сома түсірілім күні қолма-қол беріледі." },
  "pricing.info.i4": { ru: "Доп. час — 50.000 ₸.", en: "Extra hour — 50,000 ₸.", kz: "Қосымша сағат — 50.000 ₸." },
  "pricing.info.i5": { ru: "Готовые фотографии вы получаете ссылкой для скачивания.", en: "Finished photos are delivered via a download link.", kz: "Дайын фотосуреттерді жүктеп алу сілтемесі арқылы аласыз." },
  "pricing.info.i6": { ru: "Все фотографии в авторской обработке, без исходников.", en: "All photos come signature-retouched, without raw files.", kz: "Барлық фотосуреттер авторлық өңдеумен, түпнұсқасыз беріледі." },
  "pricing.info.i7": { ru: "Ивенты в других городах Казахстана и за рубежом предусматривают дополнительный трансфер и проживание за счёт приглашающей стороны.", en: "Events in other cities of Kazakhstan and abroad require additional transfer and accommodation, covered by the inviting party.", kz: "Қазақстанның басқа қалаларындағы және шетелдегі іс-шаралар қосымша трансфер мен тұруды шақырушы тарап есебінен көздейді." },
  "pricing.rider.title": { ru: "Бытовой райдер (другие города)", en: "Travel Rider (other cities)", kz: "Тұрмыстық райдер (басқа қалалар)" },
  "pricing.rider.i1": { ru: "Оплачивается перелёт в пункт назначения и обратно (Air Astana).", en: "Round-trip flight to the destination is covered (Air Astana).", kz: "Бару-қайту жол ақысы төленеді (Air Astana)." },
  "pricing.rider.i2": { ru: "Оплачивается трансфер в аэропорт.", en: "Airport transfer is covered.", kz: "Әуежайға трансфер төленеді." },
  "pricing.rider.i3": { ru: "Оплачивается отель + завтрак (если поездка дольше 12 часов).", en: "Hotel + breakfast covered (if the trip is longer than 12 hours).", kz: "Қонақүй + таңғы ас төленеді (сапар 12 сағаттан асса)." },
  "pricing.cta": { ru: "Забронировать дату", en: "Book a Date", kz: "Күнді брондау" },

  "services.eyebrow": { ru: "04 — Услуги", en: "04 — Services", kz: "04 — Қызметтер" },
  "services.title": { ru: "НАВЫКИ &amp;", en: "SKILLS &amp;", kz: "ДАҒДЫЛАР &amp;" },
  "services.s1.title": { ru: "Портретная съёмка", en: "Portrait Photography", kz: "Портреттік түсірілім" },
  "services.s1.desc": { ru: "Студийные и уличные портреты с драматичным светом.", en: "Studio and street portraits with dramatic light.", kz: "Драмалық жарықпен студиялық және көше портреттері." },
  "services.s2.title": { ru: "Свадьбы &amp; события", en: "Weddings &amp; Events", kz: "Тойлар &amp; іс-шаралар" },
  "services.s2.desc": { ru: "Живые, честные кадры важных моментов.", en: "Honest, lively shots of the moments that matter.", kz: "Маңызды сәттердің шынайы, жанды кадрлары." },
  "services.s3.title": { ru: "Пейзаж &amp; архитектура", en: "Landscape &amp; Architecture", kz: "Пейзаж &amp; сәулет" },
  "services.s3.desc": { ru: "Монохромная геометрия города и природы.", en: "Monochrome geometry of the city and nature.", kz: "Қала мен табиғаттың монохромды геометриясы." },
  "services.s4.title": { ru: "Ретушь &amp; печать", en: "Retouch &amp; Print", kz: "Ретуш &amp; баспа" },
  "services.s4.desc": { ru: "Профессиональная обработка и подготовка к печати.", en: "Professional editing and print preparation.", kz: "Кәсіби өңдеу және баспаға дайындау." },

  "contact.script": { ru: "Для связи", en: "For Contact", kz: "Байланысу үшін" },
  "contact.title": { ru: "СПАСИБО", en: "THANK YOU", kz: "РАХМЕТ" },
  "contact.pill": { ru: "НАПИСАТЬ", en: "CONTACT", kz: "ЖАЗУ" },
  "footer.text": { ru: "Aibolat Amanzholov — Монохромная фотография", en: "Aibolat Amanzholov — Monochrome Photography", kz: "Aibolat Amanzholov — Монохромды фотография" },
};

const LANG_KEY = "site-lang";
const LANGS = ["ru", "en", "kz"];
const langSwitch = document.getElementById("langSwitch");
const langCur = langSwitch.querySelector(".lang-switch__cur");
const langOther = langSwitch.querySelector(".lang-switch__other");

function nextLang(lang) {
  const idx = LANGS.indexOf(lang);
  return LANGS[(idx + 1) % LANGS.length];
}

function applyLang(lang) {
  document.documentElement.lang = lang === "kz" ? "kk" : lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = i18n[el.dataset.i18n];
    if (!entry) return;
    const value = entry[lang] ?? entry.ru;
    if (value == null) return;
    // Preserve markup for keys that intentionally contain HTML entities (&amp;)
    if (value.includes("&amp;")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  langCur.textContent = lang.toUpperCase();
  langOther.textContent = nextLang(lang).toUpperCase();
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* storage unavailable, ignore */
  }
}

let currentLang = "ru";
try {
  currentLang = localStorage.getItem(LANG_KEY) || "ru";
  if (!LANGS.includes(currentLang)) currentLang = "ru";
} catch (e) {
  currentLang = "ru";
}
applyLang(currentLang);

langSwitch.addEventListener("click", () => {
  currentLang = nextLang(currentLang);
  applyLang(currentLang);
});

/* =========================================================
   HERO PARALLAX (background mosaic + portrait image)
   ========================================================= */
const heroSection = document.querySelector(".hero");
const heroBg = document.getElementById("heroBg");
const heroBgGrid = heroBg ? heroBg.querySelector(".hero__bg-grid") : null;
const heroImg = document.getElementById("heroImg");
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let ticking = false;
function updateHeroParallax() {
  ticking = false;
  if (!heroSection || prefersReducedMotion) return;

  const rect = heroSection.getBoundingClientRect();
  const viewH = window.innerHeight;
  // progress: 0 when hero top is at viewport top, 1 when hero has fully scrolled past
  const progress = Math.min(Math.max(-rect.top / (rect.height || viewH), 0), 1.4);

  if (heroBgGrid) {
    heroBgGrid.style.transform = `translateY(${progress * 60}px) scale(${1 + progress * 0.06})`;
  }
  if (heroImg) {
    heroImg.style.transform = `translateY(${progress * 90}px) scale(${1 + progress * 0.05})`;
  }

  // On mobile: once scrolled a bit, push the hero photo back + blur it
  if (isMobile()) {
    const receded = progress > 0.12;
    heroImg.classList.toggle("is-receded", receded);
    heroBg.classList.toggle("is-receded", receded);
  } else {
    heroImg.classList.remove("is-receded");
    heroBg.classList.remove("is-receded");
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateHeroParallax);
    }
  },
  { passive: true }
);
window.addEventListener("resize", updateHeroParallax);
updateHeroParallax();

/* =========================================================
   LIGHTBOX — click a gallery photo to view it full size
   ========================================================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".grid .card:not(.card--cta) img").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});