import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <motion.div
      className='absolute'
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 2,
      }}
    >
      <Spline
        scene="https://prod.spline.design/thPGkOvNXu8XjGlk/scene.splinecode"
      />
    </motion.div>
  );
};

export default Background;
