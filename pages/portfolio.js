import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import { PortfolioGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Scale from '../components/scale'
import { ChevronRightIcon } from '@chakra-ui/icons'

import thumbToDoList from '../public/images/portfolio/toDoList/todolist1.png'
import thumbFinalBattle from '../public/images/portfolio/finalBattle/finalBattle1.png'
import thumbWeatherApp from '../public/images/portfolio/weatherApp/weatherapp1.png'
import amazonCloneThumb from '../public/images/portfolio/amazonClone/amazonclone1.png'
import mockBlogThumb from '../public/images/portfolio/blog/blog1.png'
import ticTacToeThumb from '../public/images/portfolio/ticTacToe/ticTacToe1.png'
import sketchifyThumb from '../public/images/portfolio/sketchify/sketchify3.png'

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container maxW="container.md">
        <Heading as="h3" variant="section-title">
          Portfolio
        </Heading>
        <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={2}>
          MERN STACK
        </Text>
        <Divider mb={4} bg={useColorModeValue('#2c457d', '')} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <PortfolioGridItem
              id="sketchify"
              title="Sketchify"
              thumbnail={sketchifyThumb}
            >
              A MERN stack application where you can share drawings with others
            </PortfolioGridItem>
          </Section>

          <Section delay={0.2}>
            <PortfolioGridItem
              id="mockblog"
              title="Mock Blog Website"
              thumbnail={mockBlogThumb}
            >
              A mock blog website where you can create blog posts using markdown
            </PortfolioGridItem>
          </Section>

          <Section delay={0.3}>
            <PortfolioGridItem
              id="amazonclone"
              title="Amazon Website Clone"
              thumbnail={amazonCloneThumb}
            >
              A clone of amazon website that includes authentication with
              Firebase
            </PortfolioGridItem>
          </Section>

          <Section delay={0.4}>
            <PortfolioGridItem
              id="todolist"
              title="To-Do List App"
              thumbnail={thumbToDoList}
            >
              A minimalistic app with the purpose of exercising my front-end
              skills
            </PortfolioGridItem>
          </Section>

          <Section delay={0.5}>
            <PortfolioGridItem
              id="weatherapp"
              title="Weather App"
              thumbnail={thumbWeatherApp}
            >
              A simple weather app that fetches weather data from an api
            </PortfolioGridItem>
          </Section>

          <Section delay={0.6}>
            <PortfolioGridItem
              id="tictactoe"
              title="Tic Tac Toe"
              thumbnail={ticTacToeThumb}
            >
              Tic Tac Toe created from scratch with vanilla JavaScript and
              Skeleton (CSS)
            </PortfolioGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.7}>
          <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={2}>
            .NET
          </Text>
          <Divider bg="transparent" color="transparent" />
          <Divider mb={4} bg={useColorModeValue('#2c457d', '')} />
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.8}>
            <PortfolioGridItem
              id="finalbattle"
              title="C# Mini Text Game"
              thumbnail={thumbFinalBattle}
            >
              A mini text game created with C# focusing on object oriented
              programming concepts
            </PortfolioGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.9}>
          <Box align="center" my={6}>
            <NextLink href="/contact">
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
                  Get In Touch
                </Button>
              </Scale>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Portfolio
