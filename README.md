# Microcrawler Browser

Proof-of-Concept: Microcrawler in your Browser!

## Getting started

Sample setup with Gulp, Babel, Mocha and Webpack over ES6, transpiled to ES5 (source maps included).

All the code, Mocha tests and config files from Gulp and Webpack are ES6.

Running ```gulp``` will:

1. Transpile ES6 code with Babel
2. Run Mocha unit tests
3. Package bundles with Webpack (dedupe + uglify)

See it live: run ```gulp server``` and open [http://localhost:8080/public/](http://localhost:8080/public/). Verify you have downloaded just the preload JS bundle file. Now hit the button, it will download an additional bundle file, related with that button.
