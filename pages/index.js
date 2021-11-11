import NextLink from 'next/link'
import {
  Divider,
  Button,
  Container,
  Image,
  Link,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  HStack,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Scale from '../components/scale'
import { BioSection, BioYear } from '../components/biography'
import Layout from '../components/layouts/article'
import { PortfolioGridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import sketchifyThumb from '../public/images/portfolio/sketchify/sketchify3.png'
import mockBlogThumb from '../public/images/portfolio/blog/blog1.png'
import { Meta } from '../components/portfolio-detail'
import Skillset from '../components/skillset'
import { EmailIcon } from '@chakra-ui/icons'

function Page() {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.3}>
          {/* <Box
            rounded="md"
            bg={useColorModeValue('#001440', '#F2EBC7')}
            p={1}
            mb={6}
            mt={10}
            align="center"
          >
            <Text
              bg={useColorModeValue('#F2EBC7', '#00010d')}
              bgClip="text"
              fontFamily="Calibri Semibold"
            >
              Hello! I&apos;m a Jr. Full-Stack Engineer based in California,
              USA!
            </Text>
          </Box> */}

          <Box
            borderRadius={25}
            color={useColorModeValue('#001440', '#F2EBC7')}
            border="1px solid"
            borderColor={useColorModeValue('#001440', '#F2EBC7')}
            p={1}
            mb={6}
            mt={14}
            align="center"
          >
            <Text fontFamily="Calibri Semibold">
              Hello! I&apos;m a Jr. Full-Stack Engineer based in California,
              USA!
            </Text>
          </Box>

          <Box display={{ md: 'flex' }} mb={-14}>
            <Box
              flexGrow={1}
              // maxW={{ md: '500px' }}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Heading variant="page-title">Jose Alexander Navas</Heading>
              <Text>
                Mathematics Pragmatist / Programming Enthusiast / Traditional &
                Digital Artist
              </Text>
            </Box>

            <Box
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
              ml={{ base: 0 }}
              mr={{ base: 0 }}
              align="center"
            >
              <Image
                borderColor={useColorModeValue('#001440', '#F2EBC7')}
                borderWidth={4}
                borderStyle="solid"
                maxWidth="150px"
                display="inline-block"
                borderRadius="100%"
                src="/images/me4.png"
                alt="profile"
                padding={0}
              />
            </Box>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            Hello! My name is Jose and I've recently developed a passion for
            programming. My journey began during the final year of my undergrad
            @ CSUF. I found myself enjoying working with Python in my
            computational math courses. This sparked a major interest in me in
            learning more about Python and JavaScript, which led me down a path
            of learning all about web development. At the moment, I don't have
            any formal{' '}
            <Link isExternal href="/jose-navas-resume.pdf">
              experience
            </Link>{' '}
            relating to software engineering, however I am striving to change
            that. If interested, you can learn more about my journey into
            programming{'  '}
            <NextLink href="/about">
              <Link>here</Link>
            </NextLink>
            ,{'  '}and below are some technologies that I've recently worked
            with this past year.
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title" marginTop={7}>
            Technologies
          </Heading>
          <List>
            <ListItem>
              <Text>
                <Meta>Languages</Meta>{' '}
                <Skillset>JavaScript, Python, Java, C#, MATLAB</Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Frameworks</Meta>
                <Skillset>
                  Reactjs, Redux, Nextjs, Nodejs, Expressjs, JEST, jQuery, EJS
                </Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Databases</Meta>
                <Skillset>NoSQL (MongoDB), SQLite </Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Tools</Meta>
                <Skillset>Git, Webpack, ESLint, Prettier, Postman </Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Platforms</Meta>
                <Skillset>GitHub, Netlify, Heroku, Firebase </Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>UI Libraries</Meta>
                <Skillset>
                  Chakra UI, Material UI, Framer Motion, Tailwind CSS, Threejs
                </Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Design</Meta>
                <Skillset>Framer, Figma, PhotoShop, Affinity Designer</Skillset>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Meta>Other</Meta>
                <Skillset>Unity, Blender, Godot</Skillset>
              </Text>
            </ListItem>
          </List>
          <Box align="center" marginTop={10}>
            <NextLink href="/portfolio">
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
                  My Portfolio
                </Button>
              </Scale>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Featured Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={6}>
            <PortfolioGridItem
              id="sketchify"
              title="Sketchify"
              thumbnail={sketchifyThumb}
            >
              A MERN stack application where you can share drawings with others
            </PortfolioGridItem>
            <PortfolioGridItem
              id="mockblog"
              title="Mock Blog Website"
              thumbnail={mockBlogThumb}
            >
              A mock blog website where you can create blog posts using markdown
            </PortfolioGridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in California, USA
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated with a B.A in Applied Mathematics, Concentration in
            Computational Modeling from California State University of Fullerton
            in May
          </BioSection>
        </Section>

        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>Drawing, Weightlifting, Game Development </Paragraph>
        </Section>

        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>

          <HStack
            mt={-1}
            mb={6}
            justifyContent={{ base: 'none', md: 'space-around' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Link href="mailto:josenavasiv@gmail.com" target="_blank">
              <Scale>
                <Button
                  variant="ghost"
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
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
