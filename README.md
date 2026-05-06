# HC Debt Model Web App

This folder contains a responsive static web app generated from `HC Debt Only Model.xlsx`. It has no server-side dependency: open `index.html` locally, or host the folder on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static hosting provider.

## Files

- `index.html` - single-page app shell
- `style.css` - responsive styling for desktop and phone
- `model.js` - workbook values and formula engine converted from the Excel model
- `app.js` - UI, scenario links, CSV export, and Excel model export
- `jszip.min.js` - browser ZIP library used to produce the Excel workbook download
- `manifest.webmanifest` - installable/PWA metadata
- `sw.js` and `icons/` - offline/PWA support for phones
- `assets/HC Debt Only Model.xlsx` - original workbook template used by the Excel export

## Exports

The app has two export buttons:

- **Export CSV** downloads a flat output snapshot for quick analysis.
- **Export Excel** downloads a full `.xlsx` copy of the original model, with the current app scenario written back into the model input cells. The workbook keeps the original sheets, formatting, formulas, and output structure. Excel is instructed to recalculate the workbook when it opens.

## Hosting

For GitHub Pages, commit the contents of this folder to the repository root and enable Pages from Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)`.

After replacing files in an existing GitHub Pages deployment, hard-refresh the hosted page or open it with a cache-busting query string such as `?v=3`.

## Notes

The browser app reproduces the key Capital Inputs, Debt Model, and Output dashboard calculations. The Excel export is generated from the original workbook template in `assets/`, so do not delete or rename `assets/HC Debt Only Model.xlsx`.
