import React from 'react'
import { motion } from 'framer-motion';

const Loading = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // Toggling the animation durations
  const loadDuration = 3;
  const loadStart = 1;
  const loadEnd = 2.5;

  // Loading dots animation
  const [dots, setDots] = React.useState('');
  React.useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 800); 

    return () => clearInterval(interval);
  }, [isLoading]);

  React.useLayoutEffect(() => {

    // Only show loading on hard refresh
    if (!window || !window.sessionStorage) {
      setIsLoading(true);
    } else {
      if (sessionStorage.getItem("firstload") === null) {
        sessionStorage.setItem("firstload", "true");
      } else if (sessionStorage.getItem("firstload") === "true") {
        setIsLoading(true);
        sessionStorage.setItem("firstload", "false");
      } else {
        // Don't show loading animation
        setIsLoading(false);
        return;
      }
    } 
    
    // Otherwise, show loading animation
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

  if (!isLoading) {
    return null;
  }

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
      <div className="text-white text-xl mb-4 font-mono pb-5">
        Loading{dots}
      </div>
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