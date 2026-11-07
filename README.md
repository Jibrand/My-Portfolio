# Muhammad Jibran’s portfolio

A Next.js App Router portfolio using TypeScript and Tailwind CSS v4.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to check the production build.

`npm run build` creates a static site in `build/`, including the homepage, all project pages, and assets. Netlify publishes this directory. You can also upload the complete `build` folder through Netlify's manual deployment interface.

Project entries, featured order, and external project links come from `portfolio-data.json`. Project cards use original graphics until their catalog image paths are available under `public/images/work`. Set `SITE_URL` to the deployment origin if it differs from the source portfolio URL.
