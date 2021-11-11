import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const AmazonClone = () => {
  return (
    <Layout title="Amazon Website Clone">
      <Container maxW="container.md">
        <Title>Amazon Website Clone</Title>
        <Paragraph>
          A simple high level clone with limited functionality of the Amazon
          website. The purpose of this project was to break out of my comfort
          zone and learn react. Authentication is handled with Firebase, and
          react hooks are used to carry out interface manipulation.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://clone-703a1.web.app/">
              https://clone-703a1.web.app/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/amazon-clone-react">
              https://github.com/JoJoJacKy/amazon-clone-react{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Reactjs, Firebase, Nodejs</span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/amazonClone/amazonclone1.png"
          alt="Amazon"
        />
        <PortfolioImage
          src="/images/portfolio/amazonClone/amazonclone2.png"
          alt="Amazon"
        />
        <PortfolioImage
          src="/images/portfolio/amazonClone/amazonclone3.png"
          alt="Amazon"
        />
      </Container>
    </Layout>
  )
}

export default AmazonClone
