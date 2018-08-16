import React from 'react';
import SampleText from './sampletext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const fonts = [
  [ 'sans', '300', 'normal', 'EconSansOS' ],
  [ 'sans', '300', 'italic', 'EconSansOS' ],
  [ 'sans', '400', 'normal', 'EconSansOS' ],
  [ 'sans', '400', 'italic', 'EconSansOS' ],
  [ 'sans', '500', 'normal', 'EconSansOS' ],
  [ 'sans', '500', 'italic', 'EconSansOS' ],
  [ 'sans', '700', 'normal', 'EconSansOS' ],
  [ 'sans', '700', 'italic', 'EconSansOS' ],
  [ 'serif', '400', 'normal', 'MiloTE' ],
  [ 'serif', '400', 'italic', 'MiloTE' ],
  [ 'serif', '500', 'normal', 'MiloTE' ],
  [ 'serif', '500', 'italic', 'MiloTE' ],
  [ 'serif', '700', 'normal', 'MiloTE' ],
  [ 'serif', '700', 'italic', 'MiloTE' ],
  [ 'sans', '300', 'normal', 'EconSansCnd' ],
  [ 'sans', '300', 'italic', 'EconSansCnd' ],
  [ 'sans', '400', 'normal', 'EconSansCnd' ],
  [ 'sans', '400', 'italic', 'EconSansCnd' ],
  [ 'sans', '500', 'normal', 'EconSansCnd' ],
  [ 'sans', '500', 'italic', 'EconSansCnd' ],
  [ 'sans', '700', 'normal', 'EconSansCnd' ],
  [ 'sans', '700', 'italic', 'EconSansCnd' ],
  [ 'serif', '400', 'normal', 'MiloTESC' ],
  [ 'serif', '400', 'italic', 'MiloTESC' ],
  [ 'serif', '500', 'normal', 'MiloTESC' ],
  [ 'serif', '500', 'italic', 'MiloTESC' ],
  [ 'serif', '700', 'normal', 'MiloTESC' ],
  [ 'serif', '700', 'italic', 'MiloTESC' ],
];
const tabPanels = fonts
  .map((fontFamily) => {
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

    return {
      key: `panel-typography-${ fontFamily.join('x') }`,
      title: `${ family } ${ modifier } ${ fontStyle }`,
      classes,
      style,
      family,
      fontFamily,
    };
  })
  .reduce((result, config) => {
    result.tabs.push(
      <Tab key={config.key}>{config.title}</Tab>
    );
    result.panels.push(
      <TabPanel key={config.key}>
        <h2>Sample for font-family: {config.fontFamily.join(' ')}</h2>
        <div
          className={config.classes}
          style={config.style}
          data-font={config.family.toLowerCase().replace(/ /g, '-')}
        ><SampleText /></div>
      </TabPanel>
    );

    return result;
  }, { tabs: [], panels: [] });
export default (
  <Tabs>
    <TabList>
      {tabPanels.tabs}
    </TabList>
    {tabPanels.panels}
  </Tabs>
);
