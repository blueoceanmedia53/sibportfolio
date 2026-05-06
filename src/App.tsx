/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Films from './components/Films';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-black scroll-smooth">
      {/* Red progress bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Work />
        <Brands />
        <Films />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Decorative VFX elements */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[20px] border-black/10 mix-blend-overlay" />
    </div>
  );
}
