import { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  viewport?: number;
  yInitial?: number;
  className?: string;
}

const FadeInAnimation = ({ children, delay = 0, yInitial = 30, className }: FadeInProps) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yInitial }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeInAnimation