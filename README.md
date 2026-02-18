# Web Presentation Scaffold

Frontend slide deck scaffold built from your `Contetnts scafold` document, using clear separation of concerns.

## Project Structure

- `index.html`: presentation shell and semantic layout
- `styles/main.css`: all visual styling, theme, responsive behavior, animations
- `scripts/main.js`: rendering and navigation logic
- `data/slides.js`: slide content (titles, bullets, text, figure placeholders)
- `assets/images/`: add your real images/charts/plots here

## Run Locally

1. Open a terminal in this folder.
2. Start a local server:

```powershell
python -m http.server 8080
```

3. Open `http://localhost:8080` in your browser.

## Navigation

- `ArrowRight` / `PageDown` / `Space`: next slide
- `ArrowLeft` / `PageUp`: previous slide
- `Home` / `End`: first or last slide
- Mobile: swipe left/right

## Edit Your Content

1. Open `data/slides.js`.
2. Each slide is one object in `presentation.slides`.
3. Update these fields per slide:
   - `title`
   - `lead`
   - `bullets` (array)
   - `paragraphs` (array)
   - `figures` (placeholder labels)

## Insert Real Figures

1. Copy figure files into `assets/images/`.
2. Replace placeholder text in `data/slides.js` with your final figure labels or references.
3. If you want, the next step can be upgrading placeholders to real `<img>` rendering from `assets/images/`.
