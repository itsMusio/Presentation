import { presentation } from "../data/slides.js";

const state = {
  index: 0,
  touchStartX: null,
  menuOpen: false
};

const slideRoot = document.getElementById("slideRoot");
const deckKicker = document.getElementById("deckKicker");
const deckTitle = document.getElementById("deckTitle");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const slideMenu = document.getElementById("slideMenu");
const slideMenuNav = document.getElementById("slideMenuNav");
const menuBackdrop = document.getElementById("menuBackdrop");

const allSlides = presentation.slides;

deckKicker.textContent = presentation.meta.kicker;
deckTitle.textContent = presentation.meta.title;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupLiveGradient() {
  if (prefersReducedMotion.matches) {
    return;
  }

  let targetX = 18;
  let targetY = 14;
  let currentX = targetX;
  let currentY = targetY;

  const setVars = () => {
    document.documentElement.style.setProperty("--live-x", `${currentX.toFixed(2)}%`);
    document.documentElement.style.setProperty("--live-y", `${currentY.toFixed(2)}%`);
    document.documentElement.style.setProperty("--live-x-2", `${(100 - currentX).toFixed(2)}%`);
    document.documentElement.style.setProperty("--live-y-2", `${(100 - currentY).toFixed(2)}%`);
  };

  const onPointerMove = (event) => {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;
    targetX = (event.clientX / width) * 100;
    targetY = (event.clientY / height) * 100;
  };

  const tick = () => {
    currentX += (targetX - currentX) * 0.045;
    currentY += (targetY - currentY) * 0.045;
    setVars();
    window.requestAnimationFrame(tick);
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  setVars();
  window.requestAnimationFrame(tick);
}

function createTextBlock(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = `${className} reveal`;
  element.textContent = text;
  return element;
}

function createList(items) {
  const list = document.createElement("ul");
  list.className = "slide-list reveal";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

function createFigures(items) {
  const wrap = document.createElement("div");
  wrap.className = "figure-grid";

  items.forEach((item) => {
    const figure = document.createElement("div");
    figure.className = "figure-placeholder reveal";
    figure.textContent = item;
    wrap.appendChild(figure);
  });

  return wrap;
}

function createImageBlock(block) {
  const src = block.src;
  const alt =
    typeof block.alt === "string" && block.alt.length > 0 ? block.alt : "Slide image";
  const image = document.createElement("img");
  image.className = "slide-image reveal";
  image.src = src;
  image.alt = alt;
  image.decoding = "async";
  image.loading = "eager";
  return image;
}

function buildLegacyBlocks(slide) {
  const blocks = [];

  if (slide.lead) {
    blocks.push({ type: "lead", text: slide.lead });
  }

  if (Array.isArray(slide.bullets) && slide.bullets.length > 0) {
    blocks.push({ type: "bullets", items: slide.bullets });
  }

  if (Array.isArray(slide.paragraphs)) {
    slide.paragraphs.forEach((paragraph) => {
      blocks.push({ type: "paragraph", text: paragraph });
    });
  }

  if (Array.isArray(slide.figures) && slide.figures.length > 0) {
    blocks.push({ type: "figures", items: slide.figures });
  }

  return blocks;
}

function getSlideBlocks(slide) {
  if (Array.isArray(slide.blocks)) {
    return slide.blocks;
  }
  return buildLegacyBlocks(slide);
}

function appendBlock(card, block) {
  if (!block || typeof block !== "object") {
    return;
  }

  switch (block.type) {
    case "lead":
      if (typeof block.text === "string" && block.text.length > 0) {
        card.appendChild(createTextBlock("p", "slide-lead", block.text));
      }
      break;
    case "paragraph":
      if (typeof block.text === "string" && block.text.length > 0) {
        card.appendChild(createTextBlock("p", "slide-p", block.text));
      }
      break;
    case "paragraphs":
      if (Array.isArray(block.items)) {
        block.items.forEach((paragraph) => {
          if (typeof paragraph === "string" && paragraph.length > 0) {
            card.appendChild(createTextBlock("p", "slide-p", paragraph));
          }
        });
      }
      break;
    case "bullets":
      if (Array.isArray(block.items) && block.items.length > 0) {
        card.appendChild(createList(block.items));
      }
      break;
    case "figures":
      if (Array.isArray(block.items) && block.items.length > 0) {
        card.appendChild(createFigures(block.items));
      }
      break;
    case "image":
      if (typeof block.src === "string" && block.src.length > 0) {
        card.appendChild(createImageBlock(block));
      }
      break;
    default:
      break;
  }
}

function setMenuOpen(open) {
  state.menuOpen = open;
  document.body.classList.toggle("menu-open", open);
  menuBackdrop.hidden = !open;
  menuBackdrop.setAttribute("aria-hidden", String(!open));
  slideMenu.setAttribute("aria-hidden", String(!open));
  menuBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    closeMenuBtn.focus();
  } else {
    menuBtn.focus();
  }
}

function syncMenuSelection() {
  const activeItem = slideMenuNav.querySelector('[aria-current="true"]');
  if (activeItem) {
    activeItem.removeAttribute("aria-current");
    activeItem.classList.remove("is-active");
  }

  const currentItem = slideMenuNav.querySelector(`[data-slide-index="${state.index}"]`);
  if (currentItem) {
    currentItem.setAttribute("aria-current", "true");
    currentItem.classList.add("is-active");
    currentItem.scrollIntoView({ block: "nearest" });
  }
}

function renderMenu() {
  const fragment = document.createDocumentFragment();
  allSlides.forEach((slide, index) => {
    const item = document.createElement("button");
    const indexLabel = document.createElement("span");
    const titleLabel = document.createElement("span");

    item.type = "button";
    item.className = "slide-menu__item";
    item.dataset.slideIndex = String(index);
    indexLabel.className = "slide-menu__index";
    indexLabel.textContent = `${slide.id}.`;
    titleLabel.className = "slide-menu__text";
    titleLabel.textContent = slide.title;
    item.append(indexLabel, titleLabel);
    item.addEventListener("click", () => {
      setMenuOpen(false);
      goTo(index);
    });
    fragment.appendChild(item);
  });
  slideMenuNav.replaceChildren(fragment);
  syncMenuSelection();
}

function renderSlide() {
  const slide = allSlides[state.index];
  const card = document.createElement("article");
  card.className = "slide-card";
  if (slide.id === 1) {
    card.classList.add("slide-card--center");
  }
  const slideBlocks = getSlideBlocks(slide);
  const titleAfterFirstImage = slide.id === 1 && slideBlocks[0]?.type === "image";

  if (slide.kicker) {
    card.appendChild(createTextBlock("p", "slide-kicker", slide.kicker));
  }

  if (titleAfterFirstImage) {
    appendBlock(card, slideBlocks[0]);
  }

  card.appendChild(createTextBlock("h2", "slide-title", slide.title));

  if (slide.subtitle) {
    card.appendChild(createTextBlock("p", "slide-subtitle", slide.subtitle));
  }

  if (titleAfterFirstImage) {
    slideBlocks.slice(1).forEach((block) => appendBlock(card, block));
  } else {
    slideBlocks.forEach((block) => appendBlock(card, block));
  }

  const revealNodes = card.querySelectorAll(".reveal");
  revealNodes.forEach((node, i) => {
    node.style.setProperty("--delay", `${i * 65}ms`);
  });

  slideRoot.replaceChildren(card);
  counter.textContent = `${state.index + 1}/${allSlides.length}`;
  progressBar.style.width = `${((state.index + 1) / allSlides.length) * 100}%`;
  prevBtn.disabled = state.index === 0;
  nextBtn.disabled = state.index === allSlides.length - 1;
  document.title = `${slide.id}. ${slide.title} | ${presentation.meta.shortTitle}`;

  const targetHash = `#slide-${slide.id}`;
  if (window.location.hash !== targetHash) {
    window.history.replaceState(null, "", targetHash);
  }

  syncMenuSelection();
}

function goTo(index) {
  const bounded = Math.max(0, Math.min(allSlides.length - 1, index));
  if (bounded === state.index) {
    return;
  }
  state.index = bounded;
  renderSlide();
}

function step(delta) {
  goTo(state.index + delta);
}

function parseHash() {
  const match = window.location.hash.match(/slide-(\d+)/i);
  if (!match) {
    return;
  }

  const slideId = Number(match[1]);
  const nextIndex = allSlides.findIndex((slide) => slide.id === slideId);
  if (nextIndex >= 0) {
    state.index = nextIndex;
  }
}

prevBtn.addEventListener("click", () => step(-1));
nextBtn.addEventListener("click", () => step(1));
menuBtn.addEventListener("click", () => setMenuOpen(!state.menuOpen));
closeMenuBtn.addEventListener("click", () => setMenuOpen(false));
menuBackdrop.addEventListener("click", () => setMenuOpen(false));

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const blockedTags = ["INPUT", "TEXTAREA", "SELECT"];
  if (blockedTags.includes(document.activeElement?.tagName || "")) {
    return;
  }

  if (key === "Escape" && state.menuOpen) {
    event.preventDefault();
    setMenuOpen(false);
    return;
  }

  if (state.menuOpen) {
    return;
  }

  if (["ArrowRight", "PageDown", " ", "Enter"].includes(key)) {
    event.preventDefault();
    step(1);
  }

  if (["ArrowLeft", "PageUp"].includes(key)) {
    event.preventDefault();
    step(-1);
  }

  if (key === "Home") {
    event.preventDefault();
    goTo(0);
  }

  if (key === "End") {
    event.preventDefault();
    goTo(allSlides.length - 1);
  }
});

slideRoot.addEventListener(
  "touchstart",
  (event) => {
    state.touchStartX = event.changedTouches[0].clientX;
  },
  { passive: true }
);

slideRoot.addEventListener(
  "touchend",
  (event) => {
    if (state.touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - state.touchStartX;
    state.touchStartX = null;

    if (Math.abs(deltaX) < 52) {
      return;
    }

    if (deltaX < 0) {
      step(1);
    } else {
      step(-1);
    }
  },
  { passive: true }
);

window.addEventListener("hashchange", () => {
  parseHash();
  renderSlide();
});

parseHash();
renderMenu();
renderSlide();
setupLiveGradient();
