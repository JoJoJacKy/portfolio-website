import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;

  height: 90px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 400ms ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const Logo = () => {
  // This looks within /public
  // const icosahedronImg = `/images/icosahedron${useColorModeValue(
  //   '',
  //   '-dark'
  // )}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            styled={{ position: 'relative' }}
            src={'/images/retrosun2.png'}
            width={65}
            height={65}
            alt="logo"
          />
          <Text
            color={useColorModeValue('#001440', '#F2EBC7')}
            fontWeight="900"
            fontFamily="Nunito"
            letterSpacing={1.2}
            ml={2}
          >
            Jose Navas
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
