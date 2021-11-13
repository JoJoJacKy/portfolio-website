import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FinalBattle = () => {
  return (
    <Layout title="C# Mini Text Game">
      <Container maxW="container.md">
        <Title>C# Mini Text Game</Title>
        <Paragraph>
          The final project that concludes the book{' '}
          <Link href="https://www.amazon.com/C-Players-Guide-4th/dp/0985580143">
            The C# Player's Guide
          </Link>
          . This project revolved around on using concepts of object oriented
          programming such as classes, polymorphism, and types. This mini text
          game keeps track of the player and their companions, and walks the
          player through a series of pokemon like turn based battles.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/c-sharp-text-game">
              https://github.com/JoJoJacKy/c-sharp-text-game{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <span>C#</span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/finalBattle/finalBattle1.png"
          alt="Final Battle"
        />
        <PortfolioImage
          src="/images/portfolio/finalBattle/finalBattle2.png"
          alt="Final Battle"
        />
      </Container>
    </Layout>
  )
}

export default FinalBattle
