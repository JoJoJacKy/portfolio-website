import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
export const ArtGridItem = ({ children, title, thumbnail }) => (
  <Box w="100%" align="center">
    <Zoom>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
    </Zoom>
    <Text mt={2}>{title}</Text>
  </Box>
)

export const PortfolioGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/portfolio/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/portfolio/${id}`}>
          <Text
            mt={2}
            fontSize={22}
            color={useColorModeValue('#001440', '#F2EBC7')}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={18}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

// This is passed via the framer motion Article Layout
export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 5px;
    }
  `}
  />
)
