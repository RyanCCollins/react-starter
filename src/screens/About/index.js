// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading } from 'grommet'

const About = () => (
  <Box pad="small">
    <Heading>
      About
    </Heading>
    <Link to="/">
      Go to Home Page
    </Link>
  </Box>
)

export default About
