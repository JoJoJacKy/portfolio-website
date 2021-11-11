import Layout from '../components/layouts/article'
import {
  Text,
  Divider,
  Button,
  HStack,
  Link,
  Container,
  Heading,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import Scale from '../components/scale'

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container maxW="container.md">
        <Heading as="h3" variant="section-title" mb={5}>
          Contact
        </Heading>
        <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={2}>
          Contact Links
        </Text>
        <Divider mb={4} bg={useColorModeValue('#2c457d', '')} />
        <HStack
          mt={-1}
          mb={6}
          justifyContent={{ base: 'none', md: 'space-around' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Link href="mailto:josenavasiv@gmail.com">
            <Scale>
              <Button
                variant="ghost"
                fontWeight="bold"
                color={useColorModeValue('#001440', '#F2EBC7')}
                leftIcon={<Icon as={EmailIcon} />}
                fontWeight="900"
                fontFamily="Nunito"
              >
                Email
              </Button>
            </Scale>
          </Link>
          <Link href="https://github.com/JoJoJacKy" target="_blank">
            <Scale>
              <Button
                variant="ghost"
                fontWeight="bold"
                color={useColorModeValue('#001440', '#F2EBC7')}
                leftIcon={<Icon as={IoLogoGithub} />}
                fontWeight="900"
                fontFamily="Nunito"
              >
                GitHub
              </Button>
            </Scale>
          </Link>

          <Link
            href="https://www.linkedin.com/in/jose-navas-737268173/"
            target="_blank"
          >
            <Scale>
              <Button
                variant="ghost"
                fontWeight="bold"
                color={useColorModeValue('#001440', '#F2EBC7')}
                leftIcon={<Icon as={IoLogoLinkedin} />}
                fontWeight="900"
                fontFamily="Nunito"
              >
                LinkedIn
              </Button>
            </Scale>
          </Link>
        </HStack>
      </Container>
    </Layout>
  )
}

export default Contact
