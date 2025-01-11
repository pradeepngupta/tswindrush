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

# Git Hooks via Husky

Husky stands as a versatile library that facilitates the execution of designated scripts before pivotal Git events like git commit or git push occur. This sophisticated tool essentially acts as a conductor, guiding the flow of actions within Git, and empowers developers to assert greater control over the development process. Husky operates by implementing hooks, strategically positioned amidst Git events, enabling meticulous orchestration of workflows. This paradigm of controlled event interception is commonly referred to as git hook management.

### Lint-Staged

Run linters against staged git files and don't let 💩 slip into your code base!

Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style.

But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

# Jest

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

> Notice the `testMatch `& `testPathIgnorePatterns`, If you want to modify, you can modify them in` jest.config.js`

### React-Testing-Library

Install required libraries for RTL to work with Typescript:

```
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```
