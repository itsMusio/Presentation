# Web Presentation Scaffold

Frontend slide deck scaffold built from your `Contetnts scafold` document, using clear separation of concerns.

## Project Structure

- `index.html`: presentation shell and semantic layout
- `styles/main.css`: all visual styling, theme, responsive behavior, animations
- `scripts/main.js`: rendering and navigation logic
- `data/slides.js`: slide content (title + ordered `blocks`)
- `assets/images/`: add your real images/charts/plots here

## Run Locally

1. Open a terminal in this folder.
2. Start a local server:

```powershell
python -m http.server 8080
```

3. Open `http://localhost:8080` in your browser.

If you see a MIME type error for `.js` modules on Windows, run the included server instead:

```powershell
python server.py
```

## Navigation

- `ArrowRight` / `PageDown` / `Space`: next slide
- `ArrowLeft` / `PageUp`: previous slide
- `Home` / `End`: first or last slide
- Mobile: swipe left/right

## Edit Your Content

1. Open `data/slides.js`.
2. Each slide is one object in `presentation.slides`.
3. Update these fields per slide:
   - `id`
   - `title`
   - `blocks` (ordered array of content blocks)

Example slide body:

```js
blocks: [
  { type: "lead", text: "Short intro" },
  { type: "image", src: "assets/images/example.png", alt: "Example", align: "center" },
  { type: "bullets", items: ["Point A", "Point B"] },
  { type: "paragraph", text: "Context between lists." },
  { type: "bullets", items: ["Point C", "Point D"] },
  { type: "figures", items: ["Insert chart"] }
]
```

Supported block types:
- `lead` with `text`
- `paragraph` with `text`
- `bullets` with `items` (array of strings)
- `figures` with `items` (array of labels/placeholders)
- `image` with `src`, optional `alt`, and optional `align` (`left`, `center`, `right`)

## Insert Real Figures

1. Copy figure files into `assets/images/`.
2. Replace placeholder text in `data/slides.js` with your final figure labels or references.
3. If you want, the next step can be upgrading placeholders to real `<img>` rendering from `assets/images/`.
