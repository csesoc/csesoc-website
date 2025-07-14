import { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface FadeEnterProps {
  children: ReactNode;
  delay?: number;
  viewport?: number;
}

const FadeEnterAnimation = ({ children, delay = 0, viewport = 0.3 }: FadeEnterProps) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ amount: viewport, once: true }}
    >
      {children}
    </motion.div>
  )
}

export default FadeEnterAnimation