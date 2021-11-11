import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -50 }
}

const NavAnimate = ({ children }) => (
  <motion.div
    initial="hidden" // This runs when the component is loaded
    animate="enter"
    exit="exit" // This runs when the component is removed from the tree
    variants={variants}
    transition={{ duration: 1.2, type: 'easeIn' }}
    style={{ position: 'relative' }}
  >
    {children}
  </motion.div>
)
export default NavAnimate
