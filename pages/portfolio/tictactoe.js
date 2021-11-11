import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TicTacToe = () => {
  return (
    <Layout title="Tic Tac Toe">
      <Container maxW="container.md">
        <Title>Tic Tac Toe</Title>
        <Paragraph>
          Tic Tac Toe created from scratch with vanilla JavaScript. I learned
          all about DOM traversal & manipulation. This project also kick started
          my interest in web development.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://jojojacky.github.io/TicTacToeVanillaJs/">
              https://jojojacky.github.io/TicTacToeVanillaJs/{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/TicTacToeVanillaJs">
              https://github.com/JoJoJacKy/TicTacToeVanillaJs{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              JavaScript (Nodejs),{' '}
              <Link href="http://getskeleton.com/">Skeleton (CSS) </Link>{' '}
            </span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/ticTacToe/ticTacToe1.png"
          alt="Tic Tac Toe"
        />
        <PortfolioImage
          src="/images/portfolio/ticTacToe/ticTacToe2.png"
          alt="Tic Tac Toe"
        />
      </Container>
    </Layout>
  )
}

export default TicTacToe
