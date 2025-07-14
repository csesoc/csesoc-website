import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

const Background = () => {

  // delay background loading
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 900); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {shouldLoad && (
        <Spline
          scene="https://prod.spline.design/thPGkOvNXu8XjGlk/scene.splinecode"
          renderOnDemand={true}
        />
      )}
    </>
  );
};

export default Background;
