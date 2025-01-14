- [Deploying Next JS Web Application](#deploying-next-js-web-application)
  - [Production Build](#production-build)
  - [Deployment with Managed Host (Vercel)](#deployment-with-managed-host-vercel)
  - [Deployment Static Export](#deployment-static-export)
    - [Deployment to GitHub Pages](#deployment-to-github-pages)

# Deploying Next JS Web Application

We can deploy the Next JS Web applicatioin either

1. managed with Vercel or AWS or any public / private cloud or
2. self-host.on a Node.js server, Docker image, or even static HTML files.

## Production Build

Production Build can be get by running the command `npm run build`

The output of this command:

```bash

> build
> next build

   ▲ Next.js 15.1.4
   - Environments: .env

   Creating an optimized production build ...
 ✓ Compiled successfully
   Skipping linting
 ✓ Checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (10/10)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.57 kB         111 kB
├ ○ /_not-found                          979 B           106 kB
├ ○ /apple-icon.png                      0 B                0 B
├ ○ /icon.png                            0 B                0 B
├ ○ /manifest.json                       0 B                0 B
├ ○ /robots.txt                          0 B                0 B
└ ○ /sitemap.xml                         0 B                0 B
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-20882bf820444624.js  52.9 kB
  ├ chunks/517-da775dc7c050d5b8.js       50.5 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)  prerendered as static content
```

- The build output generated is in .next folder.
- The build output is an optimized version of our application for production
- HTML, CSS, and JavaScript files are created based on our pages.
- JavaScript is **compiled** and browser bundles are **minified** using the [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler) to help achieve the best performance and support [all modern browsers](https://nextjs.org/docs/architecture/supported-browsers).

`next build` generates an optimized version of our application for production. This standard output includes:

- HTML files for pages using `getStaticProps` or [Automatic Static Optimization](https://nextjs.org/docs/13/pages/building-your-application/rendering/automatic-static-optimization)
- CSS files for global styles or for individually scoped styles
- JavaScript for pre-rendering dynamic content from the Next.js server
- JavaScript for interactivity on the client-side through React

This output is generated inside the `.next` folder:

- `.next/static/chunks/pages` – Each JavaScript file inside this folder relates to the route with the same name. For example, `.next/static/chunks/pages/about.js` would be the JavaScript file loaded when viewing the `/about` route in your application
- `.next/static/media` – Statically imported images from `next/image` are hashed and copied here
- `.next/static/css` – Global CSS files for all pages in your application
- `.next/server/pages` – The HTML and JavaScript entry points prerendered from the server. The `.nft.json` files are created when [Output File Tracing](https://nextjs.org/docs/13/pages/api-reference/next-config-js/output) is enabled and contain all the file paths that depend on a given page.
- `.next/server/chunks` – Shared JavaScript chunks used in multiple places throughout your application
- `.next/cache` – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images

All JavaScript code inside `.next` has been **compiled** and browser bundles have been **minified** to help achieve the best performance and support [all modern browsers](https://nextjs.org/docs/13/architecture/supported-browsers).

## Deployment with Managed Host (Vercel)

**Vercel is the native Next.js platform, designed to enhance the Next.js experience.**

[Next.js](https://nextjs.org/) is a fullstack React framework for the web, maintained by Vercel.

While Next.js works when self-hosting, deploying to Vercel is zero-configuration and provides additional enhancements for **scalability, availability, and performance globally**.

This particular got deployed to vercel and here is the [Deployed Site](https://nextjs-typescript-tailwindcss-8wzeqraoi-pradeepnguptas-projects.vercel.app/)

Learn more about [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs?utm_source=next-site&utm_medium=docs&utm_campaign=next-website) or [deploy a template for free](https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=docs&utm_campaign=next-website) to try it out.

## Deployment Static Export

### Deployment to GitHub Pages

GitHub Pages deployment is not done for this repository.

Steps:

1. Enable Pages in Github Repository to use Github Actions (Settings / Pages)
2. Add the Workflow to deploy in .github/workflows
3. Create Fine Grained Personal Access Token in the Account to give the "Pages" repository permission (read / write) + "Administration" repository permissions (read / write) - copy the token
4. Add Secret in the repository with the name "PAGES_TOKEN" and the value as the token obtained above.
5. Run the Workflow

Go to Settings / Pages, you will see

Your site is live at URL
