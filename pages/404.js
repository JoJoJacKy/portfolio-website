import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Scale from '../components/scale'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'

const NotFound = () => {
  return (
    <Layout title="404">
      <Container maxW="container.md">
        <Heading as="h3" variant="section-title">
          Not Found
        </Heading>
        <Text>The page you're looking for was not found.</Text>
        <Divider my={6} bg={useColorModeValue('#2c457d', '')} />
        <Box my={6} align="center">
          <NextLink href="/">
            <Scale>
              <Button
                rightIcon={<ChevronRightIcon />}
                fontWeight="900"
                fontFamily="Nunito"
                fontSize={16}
                color={useColorModeValue('#F2EBC7', '#00010d')}
                bg={useColorModeValue('#001440', '#f1e9c1')}
                _hover={{
                  bg: useColorModeValue('#001440', '#f1e9c1')
                }}
              >
                Home
              </Button>
            </Scale>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}
export default NotFound
