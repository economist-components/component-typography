const fontFamily = {
  sans: '\'EconSansOS\', Tahoma, sans-serif',
  serif: '\'MiloTE\', Palatino, serif',
  _: {
    // for backwards compatibility only
    prefix: '--fontfamily',
    'sans-default': '\'EconSansOS\', \'EconSansOSSec\', Tahoma, sans-serif',
    'sans': 'var(--fontfamily-sans-custom, var(--fontfamily-sans-default))',
    'serif-default': '\'MiloTE\', \'MiloTESec\', Palatino, serif',
    'serif': 'var(--fontfamily-serif-custom, var(--fontfamily-serif-default))',
    'sans-condensed-default': '\'EconSansCnd\', \'EconSansCndSec\', Tahoma, sans-serif',
    'smallcaps-serif-default': '\'MiloTESC\', Palatino, serif',
  },
};
export default fontFamily;
