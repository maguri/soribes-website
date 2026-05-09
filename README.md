# SORIBES Web Corporativa

Web corporativa industrial B2B desarrollada con React, Vite y Tailwind CSS para una empresa fabricante de basculas industriales.

## Stack

- React
- Vite
- Tailwind CSS
- npm
- GitHub Actions
- GitHub Pages

## Estructura del proyecto

```text
soribes-web/
|-- public/
|   |-- images/
|   |-- CNAME
|   |-- catalogo.pdf
|   |-- robots.txt
|   `-- sitemap.xml
|-- src/
|   |-- assets/
|   |-- components/
|   |-- data/
|   |-- pages/
|   |-- App.jsx
|   |-- main.jsx
|   `-- index.css
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- package.json
|-- vite.config.js
|-- tailwind.config.js
|-- postcss.config.js
`-- README.md
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

## Deploy automatico en GitHub Pages

1. Asegura que la rama principal sea `master`.
2. Activa GitHub Pages en `Settings > Pages` y selecciona `GitHub Actions` como source.
3. Haz push a `master`.
4. El workflow `.github/workflows/deploy.yml` compila y publica automaticamente.

## SEO implementado

- Metadatos base, Open Graph y Twitter Cards.
- Canonical por ruta.
- `robots.txt` y `sitemap.xml`.
- Datos estructurados JSON-LD de tipo `Organization`.
- Rutas limpias y navegacion semantica.

## Notas

- `public/catalogo.pdf` es un placeholder inicial: sustituir por el catalogo comercial final.
- `public/CNAME` preparado para `www.soribes.com`.
