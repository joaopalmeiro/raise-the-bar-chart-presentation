# Raise the Bar (📊)

A summary of empirical findings and new (or not so new) questions in Data Visualization.

## Papers

- [Truncating the Y-Axis: Threat or Menace?](https://visualthinking.psych.northwestern.edu/publications/CorrellTruncationInPress.pdf).
- [Biased Average Position Estimates in Line and Bar Graphs: Underestimation, Overestimation, and Perceptual Pull](https://visualthinking.psych.northwestern.edu/publications/XiongCejaBiasedPosition2020.pdf).
- [Truth or Square: Aspect Ratio Biases Recall of Position Encodings](https://visualthinking.psych.northwestern.edu/publications/CejaTruthSquare2021.pdf).
- [Readability and Precision in Pictorial Bar Charts](https://kosara.net/papers/2017/Skau-EuroVis-2017.pdf).
- [Good Fonts for Dyslexia](http://dyslexiahelp.umich.edu/sites/default/files/good_fonts_for_dyslexia_study.pdf).

## Getting Started

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the webpack server. The server will run at the default `webpack-dev-server` address, [`localhost:8080`](http://localhost:8080).

   ```sh
   $ npm start

   # or with a specific port
   $ npm start -- --port=3000
   ```

## Build & Deployment

Building the dist version of the project is as easy as running

```sh
npm run build
```

## Development

- Install [ImageMagick](https://imagemagick.org/) to run the `merge` script.
- Export PDF:
  - `http://localhost:8080/?exportMode=true`.
  - `<Appear />` tags may not appear. In that case, remove them before exporting the PDF.

Monkey patch the following DeckTape function (`decktape.js` file) to generate screenshots with better resolution:

```js
function parseSize(size) {
  const match = size.match(/^(\d+)x(\d+)$/);
  if (match) {
    const [, width, height] = match;
    return {
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      // Add this argument to generate screenshots with better resolution
      deviceScaleFactor: 3,
    };
  } else {
    return "<size> must follow the <width>x<height> notation, e.g., '1280x720'";
  }
}
```

## Notes

- `npx -p spectacle-cli spectacle-boilerplate` or `npx -p spectacle-cli spectacle-boilerplate -d slides`.
- [rimraf](https://github.com/isaacs/rimraf): `rm -rf` for Node.js.
- [API documentation](https://formidable.com/open-source/spectacle/docs/api-reference/).
- [Nord colors](https://www.nordtheme.com/docs/colors-and-palettes).
- [Language identifiers in VS Code](https://code.visualstudio.com/docs/languages/identifiers#_known-language-identifiers).
- [DeckTape](https://github.com/astefanutti/decktape):
  - Run: `` `npm bin`/decktape `` (use the backticks).
  - `` `npm bin`/decktape generic -h ``.
  - Download Chromium manually ([source](https://stackoverflow.com/a/60843949)): `node node_modules/decktape/node_modules/puppeteer/install.js` (the error was not due to the version of [ChromeDriver](https://chromedriver.chromium.org/)).
  - Use `--max-slides` to prevent the export from being endless ([source](https://github.com/astefanutti/decktape/issues/77#issuecomment-262747521)).
- [`page.setViewport()`](https://pptr.dev/#?product=Puppeteer&version=v5.1.0&show=api-pagesetviewportviewport) (Puppeteer documentation).
