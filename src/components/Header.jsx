import React from "react"
import { Link } from "gatsby"
import { Box, Header, Button, Image } from "grommet"
import Logo from "..//..//static/assets/logo.svg"
 
const linkItems = [
  { label: "Work", link: "/work" },
  { label: "Our team", link: "/our-team" },
  { label: "Blog", link: "/blog" },
]

export const SiteHeader = () => (
    <Header pad="medium">
      <Box width="100wh" justify="stretch" direction="row" gap="medium" margin="medium" align="center">
      <Link to="/">
        <Image
          src={Logo}
          alt="Soft Bee"
          alignSelf="start" 
          href='/'         
        />
        </Link>
      </Box>
      <Box alignSelf="end" direction="row">
        {linkItems.map(props => (
          <Button
            plain
            label={props.label}
            onClick={() => {}}
            href={props.link}
            margin="medium"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
          />
        ))}
        <Box justify="center" align="center" height="60px" width="200px">
          <Button label="Let’s talk 👋" fill color="yellow" />
        </Box>
      </Box>
    </Header>
  )