const sans = [
  '-apple-system',
  'BlinkMacSystemFont',
  '\'Segoe UI\'',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(', ');

const serif = [
  'Constantia',
  '\'Lucida Bright\'',
  'Lucidabright',
  '\'Lucida Serif\'',
  'Lucida',
  '\'DejaVu Serif\'',
  '\'Bitstream Vera Serif\'',
  '\'Liberation Serif\'',
  'Georgia',
  'serif',
].join(', ');

const fontFamily = {
  sans: `\'EconSansOS\', '\'EconSansOSSec\', ${ sans }`,
  serif: `\'MiloTE\', \'MiloTESec\', ${ serif }`,
  _: {
    // for backwards compatibility only
    prefix: '--fontfamily',
    'sans-default': `\'EconSansOS\', '\'EconSansOSSec\', ${ sans }`,
    'sans': 'var(--fontfamily-sans-custom), var(--fontfamily-sans-default)',
    'serif-default': `\'MiloTE\', \'MiloTESec\', ${ serif }`,
    'serif': 'var(--fontfamily-serif-custom), var(--fontfamily-serif-default)',
    'sans-condensed-default': `\'EconSansCnd\', \'EconSansCndSec\', ${ sans }`,
    'smallcaps-serif-default': `\'MiloTESC\', ${ serif }`,
  },
};
export default fontFamily;
