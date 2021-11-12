import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Sketchify = () => {
  return (
    <Layout title="Sketchify">
      <Container maxW="container.md">
        <Title>Sketchify</Title>
        <Paragraph>
          A RESTful web app whose client and server communications are handled
          with Axios and Express. State management is solved with Redux, and
          includes user authentication handled with Google's OAuth and JWT. User
          data is stored in a database hosted on MongoDB. Resource creation
          involves the execution of C.R.U.D. operations within the server, but
          requires users to be logged in. Can also like and comment on other
          posts from other users as well!
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://frosty-engelbart-7a5ab6.netlify.app/posts">
              https://frosty-engelbart-7a5ab6.netlify.app/posts{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/sketchify-app">
              https://github.com/JoJoJacKy/sketchify-app{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Reactjs, Redux, React Router, Axios, Material UI, Expressjs,
              MongoDB
            </span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/sketchify/sketchify3.png"
          alt="Sketchify"
        />
        <PortfolioImage
          src="/images/portfolio/sketchify/sketchify2.png"
          alt="Sketchify"
        />
        <PortfolioImage
          src="/images/portfolio/sketchify/sketchify1.png"
          alt="Sketchify"
        />
      </Container>
    </Layout>
  )
}

export default Sketchify
