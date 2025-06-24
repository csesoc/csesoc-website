import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'next-emoji-rain/dist/index.css';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  // Basic lenis setup
  // Basically updates on every frame to stay synchronised with browser refresh rate
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  
  return <Component {...pageProps} />;
}
