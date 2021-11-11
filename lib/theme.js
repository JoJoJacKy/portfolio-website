import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F2EBC7', '#070D0B')(props),
      color: mode('#001a54', '#a8a388')(props), // Text Color
      fontSize: 18
      // fontWeight: mode(300, 200)(props)
      // letterSpacing: 1.2
    }
  })
}

const components = {
  Heading: {
    baseStyle: props => ({
      color: mode('#001440', '#F2EBC7')(props)
    }),
    variants: {
      'section-title': {
        // textDecoration: 'underline',
        fontSize: 24,
        // textUnderlineOffset: 6,
        // textDecorationColor: '#82004b',
        marginTop: 12,
        // marginBottom: 1.5,
        // fontWeight: 800,
        letterSpacing: 1.2
      },
      'page-title': {
        fontSize: 40,
        fontWeight: 900,
        letterSpacing: 1.6
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#1c24f4', '#F2055C')(props),
      textUnderlineOffset: 3,
      fontWeight: 600
    })
  }
}

const fonts = {
  heading: "'Calibre Semibold'",
  body: "'Calibre Medium'"
}

const colors = {
  // From https://smart-swatch.netlify.app/#FF0075
  pinkred: {
    50: '#ffe1f9',
    100: '#ffb1e2',
    200: '#ff7ec7',
    300: '#ff4caa',
    400: '#ff1a8b',
    500: '#e60069',
    600: '#b4005e',
    700: '#82004b',
    800: '#500033',
    900: '#200016'
  },
  seagreen: {
    50: '#fbf8e5',
    100: '#f1e9c1',
    200: '#e7da9b',
    300: '#ddcb72',
    400: '#d4bc4c',
    500: '#baa333',
    600: '#917f27',
    700: '#675b1b',
    800: '#3e360e',
    900: '#161200'
  },
  purpleblue: {
    50: '#e2edff',
    100: '#b3caff',
    200: '#82a7fc',
    300: '#5284fb',
    400: '#2861fa',
    500: '#1649e2',
    600: '#0e38b0',
    700: '#06287e',
    800: '#00184d',
    900: '#00081e'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'true'
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
})

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  breakpoints
})

export default theme
