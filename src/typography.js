const initialStep = 1;
const scaleFactor = 1.125;
function produceSteps() {
  let stepUp = initialStep;
  let stepDown = initialStep;
  const MAX_STEPS = 8;
  const steps = {};
  for (let index = 1; index < MAX_STEPS; index += 1) {
    stepUp *= scaleFactor;
    stepDown /= scaleFactor;
    steps[`${ index }`] = `${ stepUp.toFixed(2) }em`;
    steps[`-${ index }`] = `${ stepDown.toFixed(2) }em`;
  }
  return steps;
}
const basicLineHeight = 1.4;
const text = {
  _: {
    // for backwards compatibility with typography.css only
    prefix: '-',
    'scale-factor': scaleFactor,
  },
  sizeStep: Object.assign(
    {
      prefix: '--text-size-step',
      '0': `${ initialStep }em`,
    },
    produceSteps()
  ),
  lineHeight: {
    _: {
      prefix: '--text-line-height',
      basic: basicLineHeight,
    },
    basic: basicLineHeight,
    sansOnStep: {
      prefix: '--text-line-height-sans-on-step',
      '7': 1.25,
      '6': 1.3,
      '5': 1.3,
      '4': 1.35,
      '3': 1.4,
      '2': 1.4,
      '1': 1.41,
      '0': 1.35,
      '-1': 1.4,
      '-2': 1.34,
    },
    /* Font: Halifax Bold */
    sansBoldOnStep: {
      prefix: '--text-line-height-sans-bold-on-step',
      '7': 1.1,
      '6': 1.17,
      '5': 1.22,
      '4': 1.23,
      '3': 1.3,
      '2': 1.33,
      '1': 1.3,
      '0': 1.3,
      '-1': 1.28,
      '-2': 1.4,
    },
    /* Font: Halifax Light */
    sansLightOnStep: {
      prefix: '--text-line-height-sans-light-on-step',
      '7': 1.21,
      '5': 1.33,
      '6': 1.25,
      '4': 1.3,
      '3': 1.34,
      '2': 1.3,
      '1': 1.3,
      '0': 1.35,
      '-1': 1.35,
      '-2': 1.4,
    },
    /* Font: Ff Milo Serif Pro Med Italic */
    serifItalicOnStep: {
      prefix: '--text-line-height-serif-italic-on-step',
      '7': 1.2,
      '6': 1.23,
      '5': 1.25,
      '4': 1.25,
      '3': 1.25,
      '2': 1.26,
      '1': 1.27,
      '0': 1.27,
      '-1': 1.24,
      '-2': 1.25,
    },
    /* Font: Ff Milo Serif Pro */
    serifOnStep: {
      prefix: '--text-line-height-serif-on-step',
      '7': 1.18,
      '6': 1.26,
      '5': 1.27,
      '4': 1.33,
      '3': 1.36,
      '2': 1.37,
      '1': 1.37,
      '0': 1.4,
      '-1': 1.38,
      '-2': 1.38,
    },
    /* Font: FF Milo Serif OT Medium */
    serifMediumOnStep: {
      prefix: '--text-line-height-serif-medium-on-step',
      '7': 1.2,
      '6': 1.23,
      '5': 1.25,
      '4': 1.25,
      '3': 1.25,
      '2': 1.26,
      '1': 1.27,
      '0': 1.27,
      '-1': 1.24,
      '-2': 1.25,
    },
    letterSpacing: {
      /* Font: Halifax Regular */
      sansOnStep: {
        prefix: '--text-letter-spacing-sans-on-step',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      /* Font: Halifax Bold */
      sansBoldOnStep: {
        prefix: '--text-letter-spacing-sans-bold-on-step',
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': '0.003em',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      /* Font: Halifax Light */
      sansLightOnStep: {
        prefix: '--text-letter-spacing-sans-light-on-step',
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': '0.015em',
        '-2': '0.015em',
      },
      /* Font: Ff Milo Serif Pro Med Italic */
      serifItalicOnStep: {
        prefix: '--text-letter-spacing-serif-italic-on-step',
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      /* Font: Ff Milo Serif Pro */
      serifOnStep: {
        prefix: '--text-letter-spacing-serif-on-step',
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      /* Font: FF Milo Serif OT Medium */
      serifMediumOnStep: {
        prefix: '--text-letter-spacing-serif-medium-on-step',
        '7': '-0.02em',
        '6': '-0.02em',
        '5': '-0.02em',
        '4': '-0.02em',
        '3': '-0.02em',
        '2': '-0.02em',
        '1': '-0.02em',
        '0': '-0.02em',
        '-1': '-0.02em',
        '-2': '-0.02em',
      },
    },
  },
};
export default text;
