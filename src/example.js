import React from 'react';
import SampleText from './sampletext';
import TabPanel from 'react-tab-panel';

const fonts = [
  [ 'sans', '300', '', 'EconSans' ],
  [ 'sans', '', 'normal', 'EconSans' ],
  [ 'sans', '', 'italic', 'EconSans' ],
  [ 'sans', '500', '', 'EconSans' ],
  [ 'sans', '700', '', 'EconSans' ],
  [ 'serif', '', 'normal', 'MiloSerifPro' ],
  [ 'serif', '', 'italic', 'MiloSerifPro' ],
  [ 'serif', '500', '', 'MiloSerifPro' ],
  [ 'serif', '700', '', 'MiloSerifPro' ],
  [ 'sans', '300', '', 'EconSansCnd' ],
  [ 'sans', '', 'normal', 'EconSansCnd' ],
  [ 'sans', '', 'italic', 'EconSansCnd' ],
  [ 'sans', '500', '', 'EconSansCnd' ],
  [ 'sans', '700', '', 'EconSansCnd' ],
];
const panels = fonts.map((fontFamily) => {
  const [ kind, modifier, fontStyle, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`,
  ].join(' ');
  const style = { fontFamily: family };
  if (modifier !== '') {
    style.fontWeight = modifier;
  }
  if (fontStyle !== '') {
    style.fontStyle = fontStyle;
  }
  return (
    <div
      tabTitle={`${ family } ${ modifier } ${ fontStyle }`}
      key={`panel-typography-${ fontFamily.join('x') }`}
    >
      <h2>Sample for font-family: {fontFamily.join(' ')}</h2>
      <div
        className={classes}
        style={style}
        data-font={family.toLowerCase().replace(/ /g, '-')}
      ><SampleText /></div>
      <hr />
    </div>
  );
});
export default (
  <TabPanel>
    {panels}
  </TabPanel>
);
