require('babel-register')({
  presets: [ 'es2015', 'react' ],
});
const nodeFS = require('fs');
const path = require('path');
const getCssVarables = require('./get-css-varables').default;
const typography = require('../src/typography.js').default;
const fontFamily = require('../src/font-family.js').default;
const fontFace = require('../src/font-face').default;
const typographyCSS = `/* stylelint-disable custom-property-pattern, number-max-precision, value-keyword-case */
/**
 * Modular scale for type.
 */

:root {
${ getCssVarables(fontFamily)
  .map((line) => `  ${ line }`)
  .join('\n')
}
${ getCssVarables(typography)
  .map((line) => `  ${ line }`)
  .join('\n')
}
}

/* stylelint-disable selector-no-type */
/* setting base font size on html - no default selector */

html {
  font-size: 18px;
  line-height: var(--text-line-height-sans-on-step-0);
}

@media screen and (min-width: 500px) {
  html {
    font-size: 20px;
  }
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}`;

const LIB_DIR = path.resolve(process.env.npm_package_directories_lib || 'lib');
nodeFS.writeFile(path.join(LIB_DIR, 'typography.css'), typographyCSS, (fileWriteError) => {
  if (fileWriteError) {
    throw fileWriteError;
  }
});
nodeFS.writeFile(path.join(LIB_DIR, 'font-face.css'), fontFace, (fileWriteError) => {
  if (fileWriteError) {
    throw fileWriteError;
  }
});
