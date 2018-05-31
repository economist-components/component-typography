# component-typography

Provides typography postCSS variables for other components to use.

# Provided files

* `lib/font-face.css` - font faces with relative paths
* `lib/font-face.js` - font faces with relative paths
* `lib/font-face-absolute.css` - font faces with absolute paths
* `lib/font-face-absolute.js`- font faces with absolute paths
* `lib/font-family.js` - JS variables for font families
* `lib/font-family.css` - CSS variables for font families
* `lib/typography.js` - JS variables for typography
* `lib/typography.css` - CSS variables for typography


# Variables we have around here


## `--fontfamily-display` and `--fontfamily-body`

By using `var(--fontfamily-display)` and `var(--fontfamily-body)`, respectively, you will get a serif (Milo), or a sans-serif font (Halifax), and their respective fallback fonts. By standardizing this we enable future changes to the main sans-serif and serif fonts of the website to be much simpler to perform, besides making it easier to provide font fallbacks.


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
