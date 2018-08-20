const fontFamily = {
  sans: '\'EconSansOS\', \'EconSansOSSec\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif,',
  serif: '\'MiloTE\', \'MiloTESec\', Constantia, \'Lucida Bright\', Lucidabright, \'Lucida Serif\', Lucida, \'DejaVu Serif\', \'Bitstream Vera Serif\', \'Liberation Serif\', Georgia, serif',
  _: {
    // for backwards compatibility only
    prefix: '--fontfamily',
    'sans-default': '\'EconSansOS\', \'EconSansOSSec\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif,',
    'sans': 'var(--fontfamily-sans-custom, var(--fontfamily-sans-default))',
    'serif-default': '\'MiloTE\', \'MiloTESec\', Constantia, \'Lucida Bright\', Lucidabright, \'Lucida Serif\', Lucida, \'DejaVu Serif\', \'Bitstream Vera Serif\', \'Liberation Serif\', Georgia, serif',
    'serif': 'var(--fontfamily-serif-custom, var(--fontfamily-serif-default))',
    'sans-condensed-default': '\'EconSansCnd\', \'EconSansCndSec\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif,',
    'smallcaps-serif-default': '\'MiloTESC\', Constantia, \'Lucida Bright\', Lucidabright, \'Lucida Serif\', Lucida, \'DejaVu Serif\', \'Bitstream Vera Serif\', \'Liberation Serif\', Georgia, serif',
  },
};
export default fontFamily;
