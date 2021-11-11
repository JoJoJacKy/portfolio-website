import { Box } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

const MotionBox = motion(Box)

const Scale2 = ({ children }) => {
  const control = useAnimation()

  const beamUp = () => {
    control.start({
      y: -200,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    })
  }

  return (
    <MotionBox bg="pink" h="100px" w="100px" animate={control} onClick={beamUp}>
      {children}
    </MotionBox>
  )
}

export default Scale2
