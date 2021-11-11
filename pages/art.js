import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ArtGridItem } from '../components/grid-item'

import angelThumb from '../public/images/art/angel.jpg'
import coldThumb from '../public/images/art/cold.jpg'
import eyeThumb from '../public/images/art/eye.jpg'
import parasiteThumb from '../public/images/art/parasite.jpg'
import vintageThumb from '../public/images/art/vintage.jpg'

const Art = () => {
  return (
    <Layout title="Art">
      <Container maxW="container.md">
        <Heading variant="section-title">Art</Heading>
        <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={2}>
          2020
        </Text>
        <Divider mb={4} bg={useColorModeValue('#2c457d', '')} />
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 2, 2]} gap={6}>
            <Section delay={0.2}>
              <ArtGridItem title="Practice I" thumbnail={angelThumb} />
            </Section>
            <Section delay={0.3}>
              <ArtGridItem title="Practice II" thumbnail={coldThumb} />
            </Section>
            <Section delay={0.4}>
              <ArtGridItem title="Practice III" thumbnail={eyeThumb} />
            </Section>
            <Section delay={0.5}>
              <ArtGridItem title="Practice IV" thumbnail={parasiteThumb} />
            </Section>
            <Section delay={0.6}>
              <ArtGridItem title="Practice V" thumbnail={vintageThumb} />
            </Section>
          </SimpleGrid>
        </Section>
        <Divider mb={4} bg={useColorModeValue('#2c457d', '')} />
        <Text fontSize={20} textAlign="center" fontWeight="semibold" mt={2}>
          More Art Soon!
        </Text>
      </Container>
    </Layout>
  )
}

export default Art
