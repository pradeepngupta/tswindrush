# Tech Stack

## Development

### Next.js

We love React. React has made UI development accessible in ways we never imagined before. It also can lead developers down some rough paths.

Next.js offers a lightly opinionated, heavily optimized approach to creating applications using React.

From routing to API definitions to image rendering, we trust Next.js to lead developers toward good decisions.

Next JS provides the following features:

    - Server-side Rendering (SSR)

    - Static File Serving

    - Automatic Code Splitting

    - Hot Module Reloading (HMR)

    - Built-in TypeScript Support for static typing

    - Built-in CSS Support

    - Built-in Image Optimization

    - Built-in Internationalization (i18n) Support

    - Built-in Routing

    - Built-in API Support

    - Built-in Data Fetching

    - Built-in Styling Support (Tailwind CSS)

    - Built-in Testing Support (Jest, Enzyme)

    - Built-in Code Linting Support (ESLint, Prettier)

    - Built-in Bundling and Minification Support (Webpack)

    - Built-in Deployment Support (Vercel, Netlify)

### TypeScript

JavaScript is hard. Why add more rules?

We firmly believe the experience TypeScript provides will help you be a better developer.

It provides live feedback as you write your code by defining expected data types, and either provides helpful autocomplete in your editor or yells at you with red squiggly lines if you’re trying to access a property that doesn’t exist or trying to pass a value of the wrong type, which you would otherwise have to debug further down the line.

Whether you’re new to web development or a seasoned pro, the “strictness” of TypeScript will provide a less frustrating, more consistent experience than vanilla JS.

Typesafety makes you faster. If you’re not convinced, you [might be using TypeScript wrong…↗](https://www.youtube.com/watch?v=RmGHnYUqQ4k)

### Tailwind CSS

Tailwind feels like “zen-mode CSS”.

By providing building blocks in the form of good default colors, spacing, and other primitives, Tailwind makes it easy to create a good-looking app. And unlike component libraries, it does not hold you back when you want to take your app to the next level and create something beautiful and unique.

Additionally, with its inline-like approach, Tailwind encourages you to style without worrying about naming classes, organizing files, or any other issue not directly tied to the problem you’re trying to solve.

## Deployment & Hosting

### Vercel

**Vercel is the native Next.js platform, designed to enhance the Next.js experience.**

[Next.js](https://nextjs.org/) is a fullstack React framework for the web, maintained by Vercel.

While Next.js works when self-hosting, deploying to Vercel is zero-configuration and provides additional enhancements for **scalability, availability, and performance globally**.

Vercel supports [popular frontend frameworks](https://vercel.com/docs/frameworks) out-of-the-box, and its scalable, secure infrastructure is globally distributed to serve content from data centers near your users for optimal speeds.

### Github Pages

GitHub Pages are public webpages hosted and published through GitHub.

Github Pages are quick to showcase open source stativ web application.

## Continuous Integration / Continuous Deployment

### Github Actions

GitHub Actions is one of the popular continuous integration and continuous delivery (CI/CD) platform that allows us to automate our build, test, and deployment pipeline.

And It is having seamless integration with GitHub

## Static Code Analysis

### Eslint

**Eslint** is a popular static code analysis tool that checks your code for errors and enforces coding standards.

Why would you use ESLint to check TypeScript code when the TypeScript compiler already performs some code quality checks?

Well, the TypeScript compiler is capable of carrying out a few code quality checks. ESLint is capable of carrying out many more [checks](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).

## Code Formatter

### Prettier

Building & enforcing a code - style guide.

Prettier is an opinionated code formatter with support for multiple languages.

It removes all original styling[\*](https://prettier.io/docs/en/#footnotes) and ensures that all outputted code conforms to a consistent style.

Why Only Prettier?

Prettier is the only “style guide” that is fully automatic.

## Package Manager

### npm

[npm](https://www.npmjs.com/) is a package manager for Node.js with hundreds of thousands of packages.

npm provides automated dependency and package management.

## Git Hooks

### Husky

Husky is widely used for Git hooks because

1. It simplifies the process of setting up and managing these automated scripts,
2. allowing developers to easily enforce code quality checks like linting and testing before committing or pushing code,
3. essentially preventing poor quality code from entering the repository,
4. all without needing to manually configure complex Git hook configurations within the `.git` directory.

Husky provides a straightforward way to define Git hooks within your project's `package.json` file, eliminating the need to manually edit the hidden `.git` directory.

By running scripts like linters and tests before committing, Husky helps maintain consistent code style and catch potential issues early on.

Since everyone on the project is using the same set of pre-commit hooks, it ensures that all code adheres to the established standards.

Husky seamlessly integrates with popular tools like ESLint, Prettier, and Jest, allowing you to leverage their functionality within your Git hooks.

## Test cases

Jest

Playwright

Storybook
