import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const MMOSection = ({ withBackground }) => (
  <Box
    height="800px"
    justify="center"
    background={ withBackground && {
      size: 'large',
      position: 'absolute',
      image: 'url(./assets/mmoBackground.svg)',
      color: '#F0F6F4' 
    }}
  >
    <Grid columns={['2/3', '1/3']} pad="xsmall">
      <Box direction="row" justify="center">
        <Box justify="center" align="start" margin={{ left: 'xsmall' }}>
          <img
            src="./assets/sectionMMO.svg"
            alt="screenshot of MMO website page"
          />
        </Box>
        <Box justify="center" pad={{ left: 'large', top: 'large' }}>
          <img
            src="./assets/mmoSectionMini.svg"
            alt="screenshot of MMO website page, mobile version"
          />
        </Box>
      </Box>
      <Box
        justify="center"
        align="start"
        margin={{ right: 'large', top: 'large' }}
      >
        <Box>
          <Heading level={2} color="brand">
            MMO.cat selling website
          </Heading>
        </Box>
        <Box width="491px" pad={{ bottom: 'small' }}>
          <Box pad={{ bottom: 'large' }}>
            <Text size="medium" color="text-dark-grey">
              We provided full-stack development service
            </Text>
            <Text size="medium" color="text-dark-grey">
              for end-to-end websites of MMO.cat team
            </Text>
          </Box>
          <RouterLink fill to="/404" color="accent-2" primary>
            See case study
          </RouterLink>
        </Box>
      </Box>
    </Grid>
  </Box>
);

MMOSection.propTypes = {
  withBackground: PropTypes.boolean
};

MMOSection.defaultProps = {
  withBackground: undefined
};