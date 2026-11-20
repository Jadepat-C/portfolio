# Portfolio

Personal portfolio site built with React, React Router, Sass and Bootstrap, bundled with [Vite](https://vite.dev).

## Requirements

- Node.js 20.19+ or 22.12+

## Scripts

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` (or `npm start`) | Start the dev server at http://localhost:3000 |
| `npm run build` | Build the production site into `build/` |
| `npm run preview` | Serve the built `build/` folder locally to check it |
| `npm test` | Run the tests with Vitest (watch mode; `npm test -- --run` runs once) |
| `npm run lint` | Lint the code with ESLint |

## Deploying

`npm run build` produces a static site in `build/`. Serve that folder with any web server.
The app uses client-side routing, so the server must send unknown paths to `index.html`.
For Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
