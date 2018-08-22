# component-typography

Provides typography postCSS variables for other components to use.

# Provided files

* `lib/font-face.js` - font faces with relative paths
* `lib/font-family.js` - JS variables for font families
* `lib/typography.js` - JS variables for typography

# Variables

## Font family

 * `--fontfamily-sans-default`: Econ Sans OS (primary and secondary subsets)
 * `--fontfamily-serif-default`: Milo TE (primary and secondary subsets)
 * `--fontfamily-sans-condensed-default`: Econ Sans Condensed (primary and secondary subsets)
 * `--fontfamily-smallcaps-serif-default`: Milo TE small caps

## `text-size-step-X`

(Where X is a number from `-2` to `7`)

These variables contain a font-size in  `em`s, incrementing in a [modular scale](http://www.modularscale.com/?20&px&1.125&web&text) (a Major Second scale, or 1.125). Use these to calculate values for `font-size`.

For example, `var(--text-size-step-2)` is the value in `em`s for the font size in the second step of the modular scale.


## `--text-line-height-Y-on-step-X`

(Where X is a number from `-2` to `7`, and `Y` is one or two words `separated-by-dashes`)

These variables represent the line height for a combination of font weight, style and size.

Values for Y:

 * `body` - Body text
 * `body-bold` - Body text, in bold
 * `body-light` - Body text, light
 * `display` - Display text
 * `display-italic` - Display text, italic

for example, `var(--text-line-height-body-bold-on-step-4)` is the correct `line-height` value for body text in bold and in the 4th step of the modular scale.
