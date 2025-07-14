import React from 'react'
import { motion } from 'framer-motion';

const Loading = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Toggling the animations
  const loadDuration = 3;
  const loadStart = 1;
  const loadEnd = 2.5;

  React.useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const startAnimation = () => {
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        setIsLoading(false);
      }, loadDuration * 1000);
      
      return timer;
    };
    
    const timer = requestAnimationFrame(() => startAnimation());
    
    return () => {
      cancelAnimationFrame(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1}} 
      animate={{ opacity: 0 }}
      transition={{
        duration: loadDuration - loadEnd,
        delay: loadEnd, 
      }}
      className="fixed inset-0 bg-[#000021] z-[999] flex flex-col items-center justify-center"
      style={{
        willChange: 'opacity',
      }}
    >      
      <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-400 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: loadEnd - loadStart,
            ease: "easeInOut",
            delay: loadStart, 
          }}
          style={{
            willChange: 'width',
          }}
        />
      </div>
    </motion.div>
  )
}

export default Loading