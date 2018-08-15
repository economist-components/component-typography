import React from 'react';
import SampleText from './sampletext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const fonts = [
  [ 'sans', '300', '', 'EconSans' ],
  [ 'sans', '', 'normal', 'EconSans' ],
  [ 'sans', '', 'italic', 'EconSans' ],
  [ 'sans', '500', '', 'EconSans' ],
  [ 'sans', '700', '', 'EconSans' ],
  [ 'serif', '400', 'normal', 'MiloSerifPro' ],
  [ 'serif', '400', 'italic', 'MiloSerifPro' ],
  [ 'serif', '500', 'normal', 'MiloSerifPro' ],
  [ 'serif', '500', 'italic', 'MiloSerifPro' ],
  [ 'serif', '700', 'normal', 'MiloSerifPro' ],
  [ 'serif', '700', 'italic', 'MiloSerifPro' ],
  [ 'sans', '300', '', 'EconSansCnd' ],
  [ 'sans', '', 'normal', 'EconSansCnd' ],
  [ 'sans', '', 'italic', 'EconSansCnd' ],
  [ 'sans', '500', '', 'EconSansCnd' ],
  [ 'sans', '700', '', 'EconSansCnd' ],
  [ 'serif', '400', 'normal', 'MiloSerifProSmallCaps' ],
  [ 'serif', '400', 'italic', 'MiloSerifProSmallCaps' ],
  [ 'serif', '500', 'normal', 'MiloSerifProSmallCaps' ],
  [ 'serif', '500', 'italic', 'MiloSerifProSmallCaps' ],
  [ 'serif', '700', 'normal', 'MiloSerifProSmallCaps' ],
  [ 'serif', '700', 'italic', 'MiloSerifProSmallCaps' ],
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
