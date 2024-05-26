[![example workflow](https://github.com/hansogj/package-test-utils/actions/workflows/build.yml/badge.svg)](https://github.com/hansogj/package-test-utils/actions/workflows/build.yml/badge.svg)

# PACKAGE-TEST-UTILS

Test suite for hansogj npm packages

### Installation

Run `pnpm i --frozen-lockfile` to install dependencies for utility package

Each folder

```bash
workspaces/
├── commonjs
├── javascript
└── typescript

```

contains scripts and html-templates needed to verify the different packages pulled into this util in the _dependencies_ block from [package.json](package.json).

### Run

Commands `pnpm web-cjs serve` && `pnpm web-js serve` && `pnpm web-ts serve` run the webpack server for commonjs and typescript, respectively. Likewise, `pnpm web-cjs run test:watch` && `pnpm web-ts run test:watch` will run tests for the two modes.

To verify the packages open in you favorite browser

- [http://localhost:4114/](http://localhost:4114/)
- [http://localhost:3113/](http://localhost:3113/)
- [http://localhost:2112/](http://localhost:2112/)
