
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Experience from './components/Experience';
import Suites from './components/Suites';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#D4C3A1] selection:text-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7]"
            exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-4xl tracking-[0.4em] text-[#8C7355] uppercase"
              >
                Kilamba
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] w-48 bg-[#D4C3A1] mt-6 mx-auto origin-center opacity-50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#D4C3A1] z-[60] origin-left"
        style={{ scaleX }}
      />

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Manifesto />
            <Experience />
            <Suites />
            <BookingForm />
          </main>
          <Footer />
          <AIConcierge />
        </>
      )}
    </div>
  );
};

export default App;
