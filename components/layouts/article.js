import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.div
    initial="hidden" // This runs when the component is loaded
    animate="enter"
    exit="exit" // This runs when the component is removed from the tree
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    {/* If title was provided, this runs */}
    <>
      {title && (
        <Head>
          <title>{title} - Jose Alexander Navas</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.div>
)
export default Layout
