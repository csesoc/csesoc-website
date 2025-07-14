import { ReactNode } from 'react'
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface FadeEnterProps {
  children: ReactNode;
  delay?: number;
}

const FadeEnterAnimation = ({ children, delay = 0 }: FadeEnterProps) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      viewport={{ amount: 0.3, once: true }}
    >
      {children}
    </motion.div>
  )
}

export default FadeEnterAnimation