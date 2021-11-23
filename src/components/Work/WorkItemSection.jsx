import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';
import Container from '../Layout/Container';

export const WorkItemSection = ({
  path,
  title,
  text,
  displayTwoImages,
  thumbnail,
  thumbnailSecond,
  reversedGrid,
}) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  const link = `/work/${path}`;

  const Info = (
    <Box
      justify="center"
      align={isMobile ? 'center' : 'start'}
      pad={{ horizontal: 'large' }}
    >
      <Box pad={{ bottom: 'small' }}>
        <Heading
          level={fontSizeVariant}
          color="brand"
          textAlign={textAlignVariant}
        >
          {title}
        </Heading>
      </Box>
      <Box
        pad={
          isMobile
            ? { bottom: 'medium', horizontal: 'medium' }
            : { bottom: 'medium' }
        }
      >
        <Text
          size="medium"
          color="text-dark-grey"
          style={{ fontFamily: 'HelveticaNeueCyr', whiteSpace: 'pre-line' }}
        >
          {text}
        </Text>
      </Box>
      {isMobile || <RouterLink to={link}>See case</RouterLink>}
    </Box>
  );

  const Thumbnails = displayTwoImages ? (
    <Box align="center">
      <Grid columns={{ count: 2, size: 'auto' }}>
        <Box align="center" justify="center">
          <img
            style={{ height: 'auto', width: '100%' }}
            src={thumbnail}
            alt={title}
          />
        </Box>
        {thumbnailSecond && (
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src={thumbnailSecond}
              alt={title}
            />
          </Box>
        )}
      </Grid>
    </Box>
  ) : (
    <Box direction="row" justify="center" align="center">
      <Box
        justify="center"
        align="start"
        margin={{ left: 'xsmall', right: 'medium' }}
      >
        <img
          style={{ height: 'auto', width: '110%' }}
          src={thumbnail}
          alt={title}
        />
      </Box>
      <Box justify="center" pad={{ left: 'large' }}>
        <img
          style={{ height: 'auto', width: '130%' }}
          src={thumbnailSecond}
          alt={title}
        />
      </Box>
    </Box>
  );

  return (
    <Box justify="center" background={{ color: 'white' }}>
      <Container>
        <Grid
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          gap="large"
          pad={paddingVariant}
        >
          {reversedGrid ? (
            <>
              {Thumbnails}
              {Info}
            </>
          ) : (
            <>
              {Info}
              {Thumbnails}
            </>
          )}
          {isMobile && (
            <Box align="center" pad={{ top: 'medium', bottom: 'xlarge' }}>
              <RouterLink to={link}>See case</RouterLink>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

WorkItemSection.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  displayTwoImages: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  thumbnailSecond: PropTypes.string.isRequired,
  reversedGrid: PropTypes.bool,
};

WorkItemSection.defaultProps = {
  displayTwoImages: false,
  reversedGrid: false,
};
