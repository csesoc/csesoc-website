import { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface ScrollEnterProps {
  children: ReactNode;
  delay?: number;
  viewport?: number;
}

const ScrollEnterAnimation = ({ children, delay = 0 }: ScrollEnterProps) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ amount: 0.3, once: true }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollEnterAnimation