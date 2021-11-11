import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const WeatherApp = () => {
  return (
    <Layout title="Weather App">
      <Container maxW="container.md">
        <Title>Weather App</Title>
        <Paragraph>
          A simple weather app that obtains weather data from{' '}
          <Link href="https://openweathermap.org/">openweathermap.org</Link>. I
          explored the basics of REST APIs and how to interact with them using
          JavaScript.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://jojojacky.github.io/weatherVanillaJS/">
              https://jojojacky.github.io/weatherVanillaJS/{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/weatherVanillaJS">
              https://github.com/JoJoJacKy/weatherVanillaJS{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <span>JavaScript, Webpack, Nodejs</span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/weatherApp/weatherapp1.png"
          alt="Weather"
        />
      </Container>
    </Layout>
  )
}

export default WeatherApp
