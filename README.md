# Portfolio

Personal portfolio site built with React, React Router, Tailwind CSS and Sass modules, bundled with [Vite](https://vite.dev).

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

## Deploying with Docker

The `Dockerfile` builds the site and serves it with Nginx. You only need Docker on the server.

```bash
# On your server, inside a clone of this repo:
docker compose up -d --build   # build the image and start it in the background
```

The site is then at `http://<server-address>:8080`. To change the port, edit `ports` in `compose.yaml`
(`"80:80"` serves it on the normal HTTP port).

To deploy a new version:

```bash
git pull
docker compose up -d --build
```

Useful commands:

| Command | What it does |
|---|---|
| `docker compose ps` | Show whether the container is running and healthy |
| `docker compose logs -f` | Follow the Nginx logs |
| `docker compose down` | Stop and remove the container |

### HTTPS

The container serves plain HTTP. Put a reverse proxy that handles certificates in front of it,
for example [Caddy](https://caddyserver.com) (gets Let's Encrypt certificates automatically):

```
your-domain.com {
    reverse_proxy localhost:8080
}
```

### Without Docker

`npm run build` produces a static site in `build/`. Serve that folder with any web server.
The app uses client-side routing, so the server must send unknown paths to `index.html`.
See `deploy/nginx.conf` for a complete Nginx config; the key part is:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
