import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Box, Footer, Grid, Image, FormField } from 'grommet';

import { Button } from '../legos/Button/Button';
import { Text } from '../legos/typography/Text';
import Logo from '../../static/assets/logo.svg';
import { Heading } from '../legos/typography/Heading';
import { TextInput } from '../legos/TextInput/TextInput';
import SendButtonIcon from '../../static/assets/sendButton.svg';

const linkFooterItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Contacts', link: '/contacts' },
  { id: '4', label: 'Blog', link: '/blog' },
];

const StyledButton = styled(Button)`
  border-radius: unset;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SiteFooter = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const columnsCount = isMobile ? 1 : 2;
  const alignVariant = isMobile ? 'center' : 'start';

  return (
    <Footer background="brand" justify="stretch">
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        fill="horizontal"
        pad={isMobile ? 'large' : { vertical: 'large', horizontal: 'xlarge' }}
      >
        <Box
          align={alignVariant}
          pad={
            isMobile
              ? { top: 'medium', right: 'none' }
              : { left: 'large', right: 'xlarge' }
          }
        >
          <StyledLink to="/">
            <Image
              src={Logo}
              alt="Soft Bee"
              margin={isMobile ? { bottom: 'small' } : { bottom: 'medium' }}
            />
          </StyledLink>
          <Box
            width="100%"
            justify="stretch"
            direction={isMobile ? 'row' : 'column'}
            align={alignVariant}
            pad={isMobile ? { vertical: 'none' } : { vertical: 'small' }}
            style={{ justifyContent: 'space-between' }}
          >
            {linkFooterItems.map(linkItem => (
              <Button
                size="large"
                key={linkItem.id}
                plain
                label={linkItem.label}
                href={linkItem.link}
                style={{
                  textAlign: { alignVariant },
                  fontSize: '18px',
                  lineHeight: '40px',
                  fontWeight: '500',
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          justify="center"
          align="start"
          pad={
            isMobile ? { vertical: 'large', left: 'none' } : { left: 'xlarge' }
          }
        >
          <Heading
            alignSelf="start"
            level={isMobile ? 3 : 2}
            margin={
              isMobile ? { bottom: 'large' } : { top: 'small', bottom: 'none' }
            }
            fontWeight="400"
          >
            Message us anything
          </Heading>
          <Text alignSelf="start" size="medium" weight="400">
            Your message will be posted in one of our <br /> Slack channels.
          </Text>
          <Grid
            columns={{ count: 2, size: ['auto', 'auto'] }}
            fill="horizontal"
            margin={isMobile ? { top: 'large' } : { top: 'medium' }}
          >
            <Box>
              <FormField>
                <Box>
                  <TextInput
                    placeholder="Let’s create somethign dope!!! Xoxo"
                    size="medium"
                    style={{
                      lineHeight: '26px',
                    }}
                  />
                </Box>
              </FormField>
            </Box>
            <Box justify="start" align="start">
              <StyledButton plain margin={{ left: 'medium' }}>
                <Image fill src={SendButtonIcon} alt="Send Button" />
              </StyledButton>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Footer>
  );
};
