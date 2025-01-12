# Deploying Next JS Web Application

We can deploy the Next JS Web applicatioin either

1. managed with Vercel or AWS or any public / private cloud or
2. self-host.on a Node.js server, Docker image, or even static HTML files.

## Production Build

Production Build can be get by running the command `npm run build`

The output of this command:

```bash
build
next build
▲ Next.js 15.1.4
 ✓ Linting and checking validity of types
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Collecting page data
 ✓ Generating static pages (3/3)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

 Route (pages)                          Size     First Load JS
┌ ○ /                                     6.3 kB         97.7 kB
├   └ css/f7bac67f9d9badbc.css            657 B
├   /_app                                 0 B            91.4 kB
├ ○ /404                                  2.42 kB        93.8 kB
└ ƒ /api/hello                            0 B            91.4 kB
First Load JS shared by all             91.6 kB
├ chunks/framework-a4ddb9b21624b39b.js  57.5 kB
├ chunks/main-4212ba9651e5cb31.js       31.9 kB
└ other shared chunks (total)           2.24 kB
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

Steps:

1. Enable Pages in Github Repository to use Github Actions (Settings / Pages)
2. Add the Workflow to deploy in .github/workflows
3. Create Fine Grained Personal Access Token in the Account to give the "Pages" repository permission (read / write) + "Administration" repository permissions (read / write) - copy the token
4. Add Secret in the repository with the name "PAGES_TOKEN" and the value as the token obtained above.
5. Run the Workflow

Go to Settings / Pages, you will see

Your site is live at [https://pradeepngupta.github.io/nextjs-typescript-tailwindcss/](https://pradeepngupta.github.io/nextjs-typescript-tailwindcss/)
