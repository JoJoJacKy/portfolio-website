import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const MockBlog = () => {
  return (
    <Layout title="Mock Blog Website">
      <Container maxW="container.md">
        <Title>Mock Blog Website</Title>
        <Paragraph>
          A mock blog website built with Express and EJS. Blog post creation
          involves execution of C.R.U.D. operations. Blogs are saved on &
          fetched from MongoDB. Used middleware with Express to handle blog post
          pagination as well as routing.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://hidden-ocean-31140.herokuapp.com/articles">
              https://hidden-ocean-31140.herokuapp.com/articles{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/markdownblog">
              https://github.com/JoJoJacKy/markdownblog{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Expressjs, MongoDB, EJS, Bootstrap, Nodejs</span>
          </ListItem>
        </List>

        <PortfolioImage src="/images/portfolio/blog/blog1.png" alt="Blog" />
        <PortfolioImage src="/images/portfolio/blog/blog2.png" alt="Blog" />
        <PortfolioImage src="/images/portfolio/blog/blog3.png" alt="Blog" />
      </Container>
    </Layout>
  )
}

export default MockBlog
