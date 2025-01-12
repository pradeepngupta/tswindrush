# Babel

Babel is the **javascript compiler.**

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as [core-js](https://github.com/zloirock/core-js))
- Source code transformations (codemods)
- And more! (check out these [videos](https://babeljs.io/videos) for inspiration)

For the Next JS Web application, Next JS comes with Next JS compiler to transform and minify your JavaScript code for production.

This replaces Babel for individual files and Terser for minifying output bundles.

## Babel vs NextJS Compiler

| Babel | NextJS Compiler |
| --- | --- |
| Babel is a generic JavaScript transpiler that can be used in any javascript project<br />to convert newer JavaScript syntax into older browser-compatible code | The Next.js Compiler is specifically designed to optimize JavaScript compilation within the Next.js framework,<br />including features like server-side rendering and code splitting. |
| Babel is slower than NextJS Compiler | Next.js now uses Rust-based compiler[SWC](https://swc.rs/) to compile JavaScript/TypeScript. <br />This new compiler is up to 17x faster than Babel when compiling individual files and up to 5x faster Fast Refresh. |
| With Babel, you have a high degree of customization through plugins<br />and presets to tailor the compilation process to your specific needs | The Next.js Compiler prioritizes Next.js specific optimizations and<br />may offer less flexibility for fine-grained configuration |

Next.js provides full backwards compatibility with applications that have [custom Babel configuration](https://nextjs.org/docs/pages/building-your-application/configuring/babel).

When an application has custom Babel configuration Next.js will automatically opt-out of using SWC for compiling JavaScript/Typescript and will fall back to using Babel in the same way that it was used in Next.js 11.

To start with Babel, we only need to define a `.babelrc` file (or `babel.config.js`) in the root directory of our project. If such a file is found, it will be considered as the _source of truth_ , and therefore it needs to define what Next.js needs as well, which is the `next/babel` preset.

Here's an example `.babelrc` file:

```
{
	"presets": ["next/babel"],
	"plugins": []
}
```

# MRM

Command line tool to help you keep configuration (package.json, .gitignore, .eslintrc, etc.) of your open source projects in sync.

Install using command

```bash
npm install -g mrm
npx mrm
```

# GitHub Dependabot

Dependabot is a free GitHub feature that automatically updates your dependencies.

Dependabot will scan your GitHub repository and submit PRs to update your dependencies (for example by updating your `composer.json` or `package.json`) files.

When this is set up, Dependabot will automatically analyze your repository in every X period of time you configured (daily, weekly, or monthly) and submit a PR if a dependency can be updated.

To enable it, create a `.github` folder at the root of your project directory. And Create a file named `dependabot.yml` inside this folder and paste this content into it:

```
# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.
# Please see the documentation for all configuration options:
# https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: 'npm'
    # Look for `package.json` and `lock` files in the `root` directory
    directory: '/'
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: 'daily'

  # Enable version updates for GitHub Actions
  - package-ecosystem: 'github-actions'
    # Workflow files stored in the default location of `.github/workflows`
    # You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.
    directory: '/'
    schedule:
      interval: 'weekly'
```

# Git Hooks via Husky

Husky stands as a versatile library that facilitates the execution of designated scripts before pivotal Git events like git commit or git push occur. This sophisticated tool essentially acts as a conductor, guiding the flow of actions within Git, and empowers developers to assert greater control over the development process. Husky operates by implementing hooks, strategically positioned amidst Git events, enabling meticulous orchestration of workflows. This paradigm of controlled event interception is commonly referred to as git hook management.

### Lint-Staged

Run linters against staged git files and don't let 💩 slip into your code base!

Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style.

But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

# Testing Tools

## Jest

**Please do not use MRM task to integrate with JEST, MRM task is using Enzyme library which is now deprecated.**

Install required libraries and then initialize jest:

```
npm install --save-dev jest jest-environment-jsdom ts-jest ts-node @types/jest
npx ts-jest config:init
```

This will give out some warnings like:

`npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful. npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead`

> These warnings will go away once new version of Jest will be released. For now, please ignore these warnings.

These commands will create the file: `jest.config.js`

Also, add the required scripts in `package.json`:

```nodejs
"test:jest": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
"test": "npm run test:jest --"
```

I have added more scripts to run before and after test. These will run lint checks, typescript compiler checks and post test, run the prettier formatter.

```
"pretest": "npm run lint && tsc --noEmit",
"posttest": "npm run format",
```

We can now run the test using these scripts:

```
npm run test
```

The Output is:

```bash
pretest
npm run lint && tsc --noEmitlint
next lint
✔ No ESLint warnings or errorstest
npm run test:jest --test:jest
jestNo tests found, exiting with code 1
Run with --passWithNoTests to exit with code 0
In \nextjs-typescript-tailwindcss
  57 files checked.
  testMatch: /tests//.[jt]s?(x), **/?(.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 57 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

Since we have not written any tests, it says no tests found.

> Notice the `testMatch `& `testPathIgnorePatterns`, If you want to modify, you can modify them in ` jest.config.js`

### React-Testing-Library

Install required libraries for RTL to work with Typescript:

```
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```

### @swc/jest

SWC is an extensible Rust-based platform for the next generation of fast developer tools

Traditionally with TypeScript projects, the transformer to use for running Jest tests would either be `babel-jest` or `ts-jest`.

These were fine but could sometimes suffer from a performance point-of-view.

Given the SWC tools are written in Rust, they're rapid.

```
npm install @swc/core @swc/jest -D
```

Configure transform in ` jest.config.ts`:

```
transform: { '.*\\.(tsx?)$': '@swc/jest' }
```

This tells Jest to run our tests through `@swc/jest`.

For React,

- Using React 19+ (with automatic JSX runtime). This means you are not importing React in each component
- Using `jsdom` as Jest `testEnvironment`
- Using React Testing Library

As Jest (and @swc/jest) does not know about React because you are not importing it, we can tell `@swc/jest` about this. Let's tweak the `jest.config.js`.

```javascript
testEnvironment: 'jsdom',
  transform: {
    '.*\\.(tsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
```

This means we don't have to import React in our tests in order to run them.

## Playwright

Installed Playwright and Initialize

```
npm init playwright
```

> Following is the output

```
Need to install the following packages:
create-playwright@1.17.134
Ok to proceed? (y) ynpx
create-playwrightGetting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Where to put your end-to-end tests? · e2e
√ Add a GitHub Actions workflow? (y/N) · true
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Installing Playwright Test (npm install --save-dev @playwright/test)…added 3 packages, and audited 695 packages in 6s182 packages are looking for funding
  run npm fund for detailsfound 0 vulnerabilities
Writing playwright.config.ts.
Writing .github\workflows\playwright.yml.
Writing e2e\example.spec.ts.
Writing tests-examples\demo-todo-app.spec.ts.
Writing package.json.
Downloading browsers (npx playwright install)…
✔ Success! Created a Playwright Test project at D:\Biz\BoilerplateCode\NextJS\nextjs-typescript-tailwindcssInside that directory, you can run several commands:  npx playwright test
    Runs the end-to-end tests.  npx playwright test --ui
    Starts the interactive UI mode.  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.  npx playwright test example
    Runs the tests in a specific file.  npx playwright test --debug
    Runs the tests in debug mode.  npx playwright codegen
    Auto generate tests with Codegen.We suggest that you begin by typing:    npx playwright testAnd check out the following files:.\_e2e_\example.spec.ts - Example end-to-end test.\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests.\playwright.config.ts - Playwright Test configurationVisit https://playwright.dev/docs/intro for more information. ✨Happy hacking! 🎭
```

Add the following scripts in `package.json`

```
"test:e2e": "npx playwright test",
"test:e2e-ui": "npx playwright test --ui",
"test:e2e-debug": "npx playwright test --debug"
```

You can add more scripts as per your convenience.
