# PACKAGE-TEST-UTILS

Test suite for hansogj npm packages

### Installation

Run `npm i` to install dependencies for utility package

Each folder

```bash
.
├── commonjs
├── javascript
└── typescript
```

contains scripts and html-templates needed to verify the different packages pulled into this util in the _dependencies_ block from [package.json](package.json).

### Run

Commands `npm run serve:cjs` && `npm run serve:ts` run the webpack server for commonjs and typescript, respectively. Likewise, `npm run test:cjs:watch` && `npm run test:ts:watch` will run tests for the two modes.

To verify the packages are working as plain old js included bu `<script src="...>` tags, just open [javascript/index.html](javascript/index.html) in you browser
