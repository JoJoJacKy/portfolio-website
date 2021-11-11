import NextLink from 'next/link'
import NextImage from 'next/image'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/color-mode'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/portfolio">
      <Link fontSize={24} fontFamily="Calibri Semibold" letterSpacing={0.4}>
        Portfolio
      </Link>
    </NextLink>

    <span>
      &nbsp;
      <ChevronRightIcon fontSize={24} mb={1.5} />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h2" fontSize={24} mb={4} letterSpacing={0.4}>
      {children}
    </Heading>
  </Box>
)

export const PortfolioImage = ({ src, alt }) => (
  <Zoom>
    {/* <Image borderRadius="8px" w="full" src={src} alt={alt} mb={4} /> */}
    <Image
          src={src}
          alt={alt}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
  </Zoom>
)

export const Meta = ({ children }) => (
  <Badge
    colorScheme={useColorModeValue('purpleblue', 'seagreen')}
    mr={2}
    mb={1}
    // variant="outline"
    fontWeight="800"
    fontFamily="'JetBrains Mono'"
    letterSpacing={2}
  >
    {children}
  </Badge>
)
