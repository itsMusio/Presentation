import { presentation } from "../data/slides.js";

const state = {
  index: 0,
  touchStartX: null
};

const slideRoot = document.getElementById("slideRoot");
const deckKicker = document.getElementById("deckKicker");
const deckTitle = document.getElementById("deckTitle");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const allSlides = presentation.slides;

deckKicker.textContent = presentation.meta.kicker;
deckTitle.textContent = presentation.meta.title;

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

function renderSlide() {
  const slide = allSlides[state.index];
  const card = document.createElement("article");
  card.className = "slide-card";

  if (slide.kicker) {
    card.appendChild(createTextBlock("p", "slide-kicker", slide.kicker));
  }

  card.appendChild(createTextBlock("h2", "slide-title", slide.title));

  if (slide.subtitle) {
    card.appendChild(createTextBlock("p", "slide-subtitle", slide.subtitle));
  }

  if (slide.lead) {
    card.appendChild(createTextBlock("p", "slide-lead", slide.lead));
  }

  if (Array.isArray(slide.bullets) && slide.bullets.length > 0) {
    card.appendChild(createList(slide.bullets));
  }

  if (Array.isArray(slide.paragraphs)) {
    slide.paragraphs.forEach((paragraph) => {
      card.appendChild(createTextBlock("p", "slide-p", paragraph));
    });
  }

  if (Array.isArray(slide.figures) && slide.figures.length > 0) {
    card.appendChild(createFigures(slide.figures));
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

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const blockedTags = ["INPUT", "TEXTAREA", "SELECT"];
  if (blockedTags.includes(document.activeElement?.tagName || "")) {
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
renderSlide();
