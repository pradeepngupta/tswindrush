- [Getting Started](#getting-started)
  - [Clone Repo \& run](#clone-repo--run)
  - [Get Started from Scratch](#get-started-from-scratch)
  - [Available Scripts](#available-scripts)
    - [`npm run dev` or `yarn dev`](#npm-run-dev-or-yarn-dev)
    - [`npm run build` or `yarn build`](#npm-run-build-or-yarn-build)
    - [`npm run start` or `yarn start`](#npm-run-start-or-yarn-start)
    - [`npm run lint` or `yarn lint`](#npm-run-lint-or-yarn-lint)
  - [Using Typescript](#using-typescript)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone Repo & run

1. Install Node.js and npm on your system.
2. Clone this repo
3. cd to repo folder
4. Install the dependencies

   ```bash
   npm install
   ```

5. Run the development server

   ```bash
   npm run dev
   ```

6. The above command runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Get Started from Scratch

To get started with Next JS, follow the steps below:

1. Install Node.js and npm on your system.
2. Create a new directory for your project.
3. Open the directory in your terminal and run the following command to create a new Next JS project:

   ```bash
   npx create-next-app nextjs-typescript-tailwindcss
   ```

4. This will create the next js Project And Install the required dependencies

   ```bash
   Using npm.
   Installing dependencies:
   react
   react-dom
   next

   Installing devDependencies:
   - eslint
   - eslint-config-next

   Inside that directory, you can run several commands:

   npm run dev
       Starts the development server.

   npm run build
       Builds the app for production.

   npm start
       Runs the built app in production mode.

   We suggest that you begin by typing:

   cd nextjs-typescript-tailwindcss
   npm run dev
   ```

5. cd to your project directory, which is just created & Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Starts the production server after a build is created.

### `npm run lint` or `yarn lint`

Lints the files using ESLint.

## Using Typescript

Next.js comes with built-in TypeScript, automatically installing the necessary packages and configuring the proper settings when you create a new project with `create-next-app`.

To add TypeScript to an existing project, rename a file to `.ts` / `.tsx`. Run `next dev` and `next build` to automatically install the necessary dependencies and add a `tsconfig.json` file with the recommended config options.

Try renaming index.js to index.tsx => VS Code will show some compilation issue but for a time, please ignore that issue and continue.

And run the command `npm run dev`

Following are the output:

```bash
Installing dependencies
If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your app and pages directories).

Installing devDependencies (npm):
@types/react
@types/node

We detected TypeScript in your project and created a tsconfig.json file for you.
```

Now please rename other js files to tsx files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
