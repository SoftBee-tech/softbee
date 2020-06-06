import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { theme } from '../../utils/theme';
import { Text } from '../../legos/typography/Text';

const toolchainItems = [
  { label: 'React', icon: './assets/icons/reactIcon.svg' },
  { label: 'Vue', icon: './assets/icons/vueIcon.svg' },
  { label: 'React Native', icon: './assets/icons/reactNativeIcon.svg' },
  { label: 'Angular', icon: './assets/icons/angularIcon.svg' },
  { label: 'Flutter', icon: './assets/icons/flutterIcon.svg' },
  { label: 'Node.js', icon: './assets/icons/nodeJSIcon.svg' },
  { label: 'Ionic', icon: './assets/icons/ionicIcon.svg' },
];

class ToolchainSection extends React.Component {
  render() {
    return (
      <Box
      direction="row"
      wrap="true"        
        justify="center"
        align="center"
      >
          {toolchainItems.map(props => (
        <Box pad="medium">
          <Box>
            <img src={props.icon} alt={props.label}/>
          </Box>
          <Text alignSelf="center" size="medium" color={theme.global.colors}>
          {props.label}
          </Text>
        </Box>
        ))}
      </Box>
    );
  }
}

export default ToolchainSection;