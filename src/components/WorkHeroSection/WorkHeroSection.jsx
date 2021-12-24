import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { Heading } from '../../legos/typography/Heading';
import { StyledButton } from '../../legos/Button/Button';
import { Text } from '../../legos/typography/Text';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const WorkHeroSection = ({
  title,
  subtitle,
  text,
  whatWeDo,
  withBackground,
}) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('bMobile', size);
  const columnsCount = isMobile ? 1 : 2;
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);
  const headingSize = isDesktopOrTablet ? 4 : 2;
  const alignVariant = isMobile ? 'center' : 'start';
  const textMarginVariant = isMobile
    ? { horizontal: 'medium', vertical: 'xsmall' }
    : { vertical: 'xsmall' };
  const gridColumns = isMobile ? 2 : 1;
  const textFontSizeVariant = isMobile ? 'small' : 'xlarge';
  const paddingVariant = isMobile
    ? { vertical: 'medium' }
    : { vertical: 'medium' };

  return (
    <Box
      height={{ min: '695px' }}
      justify="center"
      background={
        !isMobile !== 'small' && withBackground
          ? {
              size: 'small',
              position: 'bottom right',
              image: isMobile ? undefined : 'url(/assets/background-work.svg)',
            }
          : {
              color: '#fff',
            }
      }
    >
      <Container>
        <Heading alignSelf="center" level={1} color="brand" wordBreak="normal">
          Work
        </Heading>
        <Grid
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          fill="horizontal"
        >
          <Box
            pad={paddingVariant}
            justify="center"
            margin={isMobile ? { bottom: 'large' } : { paddingVariant }}
          >
            <Box>
              <Heading
                level={headingSize}
                color="brand"
                textAlign="start"
                wordBreak="normal"
                margin={{ top: 'none' }}
              >
                {title}
              </Heading>
              <Box pad={{ bottom: 'small' }}>
                <Text size="medium" color="brand">
                  {subtitle}
                </Text>
              </Box>
              <Box pad={{ bottom: 'large' }}>
                <Text size="medium" color="brand" whiteSpace="pre-line">
                  {text}
                </Text>
              </Box>
              <Box
                pad={{ top: 'medium' }}
                justify="center"
                alignSelf={alignVariant}
                height="60px"
                width="200px"
              >
                <StyledButton
                  label="How we work"
                  fill
                  color="accent-1"
                  primary
                />
              </Box>
            </Box>
          </Box>
          <Box
            justify="end"
            pad={
              !isMobile
                ? { left: '200px', right: '40px', bottom: '50px' }
                : { paddingVariant }
            }
            background={
              isMobile
                ? {
                    color: 'brand',
                  }
                : undefined
            }
          >
            <Heading
              level={headingSize}
              alignSelf="center"
              color="text-white"
              wordBreak="normal"
              fontWeight="normal"
              margin={{ vertical: isMobile ? 'large' : 'small' }}
            >
              What we do?
            </Heading>

            <Grid
              alignSelf={isMobile ? 'center' : undefined}
              columns={{ count: gridColumns, size: ['auto', 'auto'] }}
              pad={isMobile ? { bottom: 'large' } : undefined}
            >
              {whatWeDo.map(skillItem => (
                <Text
                  key={skillItem}
                  size={textFontSizeVariant}
                  margin={textMarginVariant}
                  color="text-white"
                >
                  {skillItem}
                </Text>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

WorkHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  whatWeDo: PropTypes.arrayOf(PropTypes.string).isRequired,
  withBackground: PropTypes.bool,
};

WorkHeroSection.defaultProps = {
  withBackground: undefined,
};
