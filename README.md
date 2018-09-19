# component-typography

Provides typography postCSS variables for other components to use.

# Provided files

* `lib/font-face.js` - font faces with relative paths
* `lib/font-family.js` - JS variables for font families
* `lib/typography.js` - JS variables for typography

# Typography

## Available weights and styles
### Econ Sans OS
Primary subset (aA-zZ 0-9 etc)  
Secondary subset (all other characters)
  * Econ Sans OS Light (normal, 300)
  * Econ Sans OS Light Italic (italic, 300)
  * Econ Sans OS Regular (normal, 400)
  * Econ Sans OS Italic (italic, 400)
  * Econ Sans OS Medium (normal, 500)
  * Econ Sans OS Medium Italic (italic, 500)
  * Econ Sans OS Bold (normal, 700)
  * Econ Sans OS Bold Italic (italic, 700)

### Econ Sans Condensed
Primary subset (aA-zZ 0-9 etc)  
Secondary subset (all other characters)
  * Econ Sans Condensed Light (normal, 300)
  * Econ Sans Condensed Light Italic (italic, 300)
  * Econ Sans Condensed Regular (normal, 400)
  * Econ Sans Condensed Italic (italic, 400)
  * Econ Sans Condensed Medium (normal, 500)
  * Econ Sans Condensed Medium Italic (italic, 500)
  * Econ Sans Condensed Bold (normal, 700)
  * Econ Sans Condensed Bold Italic (italic, 700)

### Econ Sans (lining figures, 0-9 only)
  * Econ Sans Light (normal, 300)  
  * Econ Sans Light Italic (italic, 300)
  * Econ Sans Regular (normal, 400)
  * Econ Sans Italic (italic, 400)
  * Econ Sans Medium (normal, 500)
  * Econ Sans Medium Italic (italic, 500)
  * Econ Sans Bold (normal, 700)
  * Econ Sans Bold Italic (italic, 700)

### Milo TE
Primary subset (aA-zZ 0-9 etc)  
Secondary subset (all other characters)
  * Milo TE Regular (normal, 400)
  * Milo TE Italic (italic, 400)
  * Milo TE Medium (normal, 500)
  * Milo TE Medium Italic (italic, 500)
  * Milo TE Bold (normal, 700)
  * Milo TE Bold Italic (italic, 700)

### Milo TE SC (small caps)
  * Milo TE Regular (normal, 400)
  * Milo TE Italic (italic, 400)
  * Milo TE Medium (normal, 500)
  * Milo TE Medium Italic (italic, 500)
  * Milo TE Bold (normal, 700)
  * Milo TE Bold Italic (italic, 700)

## Subsets
### Primary
Includes alphabet, numerals, punctuation, currency, ligatures:
```
!"#$%&'()*+,-./0123456789:;<=>?@ ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~¢£¥ª¬±µº÷ƒ‐‑‒–—‘’“”…‰€◼ﬀﬁﬂﬃﬄﬆ
```

### Secondary
Includes accents and additional characters / glyphs:
```
¡¤¦§¨©«¬®¯°²³´¶·¸¹»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƏƵƶǢǣǺǻǼǽǾǿȘșȚțȲȳȷəʻʼˆˇˉ˘˙˚˛˜˝̧̨̦̀́̂̃̄̆̇̈̊̋̌̒̓ΔΩπẀẁẂẃẄẅẊẋỲỳ​‚„†‡•‹›⁄⁰⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉™Ω⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟∂∆∏∑−∕∙√∞∫≈≠≤≥⋅◊
```

# Variables

## Font family

 * `--fontfamily-sans-default`: Econ Sans OS (primary and secondary subsets)
 * `--fontfamily-sans-condensed-default`: Econ Sans Condensed (primary and secondary subsets)
 * `--fontfamily-sans-lining-default`: Econ Sans lining figures
 * `--fontfamily-serif-default`: Milo TE (primary and secondary subsets)
 * `--fontfamily-smallcaps-serif-default`: Milo TE small caps

## `text-size-step-X`

(Where `X` is a number from `-2` to `7`)

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
