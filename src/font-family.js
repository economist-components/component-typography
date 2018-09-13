const systemSans = [
  '-apple-system',
  'BlinkMacSystemFont',
  '\'Segoe UI\'',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(', ');

const systemSerif = [
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
  sans: `\'EconSansOS\', \'EconSansOSSec\', ${ systemSans }`,
  serif: `\'MiloTE\', \'MiloTESec\', ${ systemSerif }`,
  _: {
    // for backwards compatibility only
    prefix: '--fontfamily',
    'sans-default': `\'EconSansOS\', \'EconSansOSSec\', ${ systemSans }`,
    'sans': 'var(--fontfamily-sans-custom, var(--fontfamily-sans-default))',
    'serif-default': `\'MiloTE\', \'MiloTESec\', ${ systemSerif }`,
    'serif': 'var(--fontfamily-serif-custom, var(--fontfamily-serif-default))',
    'sans-condensed-default': `\'EconSansCnd\', \'EconSansCndSec\', \'Arial Narrow\', ${ systemSans }`,
    'sans-lining-default': `\'EconSansLin\', ${ systemSans }`,
    'smallcaps-serif-default': `\'MiloTESC\', ${ systemSerif }`,
  },
};
export default fontFamily;
