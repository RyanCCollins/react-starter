// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading } from 'grommet'

const Home = () => (
  <Box pad="small">
    <Heading>
      Home
    </Heading>
    <Link to="/about">
      Go to About Page
    </Link>
  </Box>
)

export default Home
