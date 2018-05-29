const fontFamily = {
  sans: 'EconSans, Tahoma, sans-serif',
  serif: '\'MiloSerifPro\', Palatino, serif',
  _: {
    // for backwards compatibility only
    prefix: '--fontfamily',
    'sans-default': '\'EconSans\', \'EconSansSec\', Tahoma, sans-serif',
    'sans': 'var(--fontfamily-sans-custom, var(--fontfamily-sans-default))',
    'serif-default': '\'MiloSerifPro\', \'MiloSerifProSec\', Palatino, serif',
    'serif': 'var(--fontfamily-serif-custom, var(--fontfamily-serif-default))',
    'sans-condensed-default': '\'EconSansCnd\', Tahoma, sans-serif',
    'smallcaps-serif-default': '\'MiloSerifProSmallCaps\', Palatino, serif',
  },
};
export default fontFamily;
