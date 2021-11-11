import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import DT from '../d20'
import NoSsr from '../no-ssr'
import NavAnimate from '../animations/navanimation.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jose Navas - Home</title>
      </Head>
      <NavAnimate>
        <Navbar path={router.asPath} />
      </NavAnimate>
      <Container
        pt={14}
        // We do this to center everything
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        maxW="container.lg"
      >
        <NoSsr>
          <DT />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
