import { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Pallet from './Components/Pallet/Pallet';
import Footer from './Components/Footer/Footer';
import Lenis from '@studio-freight/lenis';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Pallet />
      <Footer />
    </div>
  );
}

export default App;
