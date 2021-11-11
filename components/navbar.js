import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { ResumeButton } from './resume-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#001440', '#F2EBC7')
  const yesActiveBg = useColorModeValue('#001440', '#F2EBC7')
  const yesActiveColor = useColorModeValue('#F2EBC7', '#000a1f')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? yesActiveBg : undefined}
        color={active ? yesActiveColor : inactiveColor}
        letterSpacing={1.2}
        fontWeight="900"
        fontFamily="Nunito"
        fontSize={18}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#cae4e60', '#10101c0')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={1}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex flex={1} align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="center"
          flex={2}
          fontWeight="bold"
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/art" path={path}>
            Art
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <Link
            href="https://github.com/JoJoJacKy"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 3 }}
            pl={2}
            isExternal
            _focus={{}}
            fontWeight="900"
            fontFamily="Nunito"
            fontSize={18}
          >
            <Icon as={IoLogoGithub} marginBottom={1} fontSize={20} />
            GitHub
          </Link>
        </Stack>

        <Box mt={4} flex={1} align="right" mr={4}>
          <ThemeToggleButton />
          <ResumeButton />
          <Box ml={2} mr={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                maxH={36}
                mt={2}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/art" passHref>
                  <MenuItem as={Link}>Art</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/JoJoJacKy"
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 3 }}
                  fontFamily="Calibre Semibold"
                >
                  <Icon as={IoLogoGithub} mt={-1.5} />
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
