import { Button, Link, useColorModeValue } from '@chakra-ui/react'
import Scale from './scale'

export const ResumeButton = () => {
  return (
    <Scale>
      <Button
        maxH={37}
        w="80px"
        fontSize={17}
        color={useColorModeValue('#1c24f4', '#F2055C')}
        _hover={{
          color: '#FF0075'
        }}
        borderColor={useColorModeValue('#1c24f4', '#F2055C')}
        variant="outline"
        mt={2}
        ml={2}
        _active={{
          borderColor: useColorModeValue('#1c24f4', '#F2055C')
        }}
      >
        <Link
          _focus={{}}
          textUnderlineOffset={-2000}
          isExternal
          href="/jose-navas-resume.pdf"
          fontWeight="900"
          fontFamily="Nunito"
        >
          Resume
        </Link>
      </Button>
    </Scale>
  )
}
