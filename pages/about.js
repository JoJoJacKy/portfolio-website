import {
  Box,
  Image,
  Text,
  Container,
  Divider,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const About = () => {
  return (
    <Layout title="About">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Box
            m="auto"
            mt={16}
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
        </Section>

        <Section delay={0.2}>
          <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={3}>
            About Me
          </Text>
          <Divider mb={3} bg={useColorModeValue('#2c457d', '')} />

          <Paragraph>
            I'm Jose, and I was born and raised in California, USA. I find
            solving problems with programming enjoyable, as well as learning new
            ways to be creative. I enjoy drawing, but for now my love for art
            has been put on the backlog.
          </Paragraph>
          <Paragraph>
            After graduating from CSUF, I decided I would pursue a career in
            tech. This was not an easy decision, for my programming experience
            was pretty limited at the time. With only a handful of semi-related
            to programming college courses under my belt, I took the plunge to
            learn all about web development.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={3}>
            Journey Into Programming
          </Text>
          <Divider mb={3} bg={useColorModeValue('#2c457d', '')} />
          <Paragraph>
            My journey into programming began by reading a book on Python called{' '}
            <Link href="https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994">
              Automate The Boring Stuff
            </Link>
            . Upon completion, I realized very little knowledge on the
            fundamentals of programming. After some research, I discovered that
            MIT offered{' '}
            <Link href="https://ocw.mit.edu/courses/intro-programming/">
              computer science lectures online
            </Link>
            . After completing the introductory programming courses, I felt more
            confident in learning new languages and frameworks.
            {/* everything related to software engineering jobs. I used the
          requirements as */}
          </Paragraph>
          <Paragraph>
            The Summer of 2021 was where my learning really began. I read the
            books{' '}
            <Link href="https://www.amazon.com/C-Players-Guide-4th/dp/0985580143">
              The C# Player's Guide
            </Link>
            ,{' '}
            <Link href="https://www.amazon.com/Think-Java-Like-Computer-Scientist-dp-1492072508/dp/1492072508/ref=dp_ob_image_bk">
              Think Java
            </Link>
            , and{' '}
            <Link href="https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/">
              A Common-Sense Guide to Data Structures and Algorithms
            </Link>{' '}
            from cover to cover. These books really solidified my understanding
            of the fundamentals. Eventually, I discovered two major resources
            that kick started my interest in web development.
          </Paragraph>
          <Paragraph>
            <Link href="https://cs50.harvard.edu/web/2020/">
              CS50's Web Programming Course
            </Link>{' '}
            and{' '}
            <Link href="https://www.theodinproject.com/">The Odin Project</Link>{' '}
            were the two major reasons why I decided to pursue a career in web
            development. I took my time and made sure I got the most out of
            these two, and learned a ton in the process. I learned all about how
            to use JavaScript with the frontend, and databases with the backend.
            I also learned the differences between all the different frameworks
            and databases that exist, and the usefullness of RESTful APIs.
          </Paragraph>
          <Paragraph>
            Towards the end of summer I completed both of these courses, and
            eversince then I've been iterating on everything that I've learned.
            Slowly but surely I have been working on personal projects to help
            me learn more about full-stack development and to improve my skills
            as a programmer. Now I am confident in my ability to perform well as
            a developer.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
