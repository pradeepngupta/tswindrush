# Babel

Babel is the **javascript compiler.**

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

Here are the main things Babel can do for you:

* Transform syntax
* Polyfill features that are missing in your target environment (through a third-party polyfill such as [core-js](https://github.com/zloirock/core-js))
* Source code transformations (codemods)
* And more! (check out these [videos](https://babeljs.io/videos) for inspiration)

For the Next JS Web application, Next JS comes with Next JS compiler to transform and minify your JavaScript code for production. 

This replaces Babel for individual files and Terser for minifying output bundles.


## Babel vs NextJS Compiler

| Babel                                                                                                                                                          | NextJS Compiler                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Babel is a generic JavaScript transpiler that can be used in any javascript project<br />to convert newer JavaScript syntax into older browser-compatible code | The Next.js Compiler is specifically designed to optimize JavaScript compilation within the Next.js framework,<br />including features like server-side rendering and code splitting.                              |
| Babel is slower than NextJS Compiler                                                                                                                           | Next.js now uses Rust-based compiler[SWC](https://swc.rs/) to compile JavaScript/TypeScript. <br />This new compiler is up to 17x faster than Babel when compiling individual files and up to 5x faster Fast Refresh. |
| With Babel, you have a high degree of customization through plugins<br />and presets to tailor the compilation process to your specific needs                  | The Next.js Compiler prioritizes Next.js specific optimizations and<br />may offer less flexibility for fine-grained configuration                                                                                 |


Next.js provides full backwards compatibility with applications that have [custom Babel configuration](https://nextjs.org/docs/pages/building-your-application/configuring/babel).

When an application has custom Babel configuration Next.js will automatically opt-out of using SWC for compiling JavaScript/Typescript and will fall back to using Babel in the same way that it was used in Next.js 11.


To start with Babel, we only need to define a `.babelrc` file (or `babel.config.js`) in the root directory of our project. If such a file is found, it will be considered as the  *source of truth* , and therefore it needs to define what Next.js needs as well, which is the `next/babel` preset.

Here's an example `.babelrc` file:

```
{
	"presets": ["next/babel"],
	"plugins": []
}
```
