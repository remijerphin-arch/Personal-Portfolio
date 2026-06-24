import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import ResumePreview from './components/ResumePreview';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import ParticlesBg from './components/ParticlesBg';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-gray-100 min-h-screen bg-[#0A0A0A]"
        >
          {/* Futuristic pointer details & particle systems */}
          <MouseFollower />
          <ParticlesBg />

          {/* Nav */}
          <Navbar />

          {/* Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Timeline />
            <ResumePreview />
            <Contact />
          </main>

          {/* Futuristic Footer */}
          <footer className="py-12 border-t border-white/5 bg-[#08080A] text-center text-xs text-gray-500 font-code relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                © {new Date().getFullYear()} R JERPHIN. ALL RIGHTS RESERVED.
              </div>
              <div className="flex space-x-4">
                <span className="text-primary">LATENCY: 12ms</span>
                <span>•</span>
                <span className="text-secondary">HOST: LOCAL_HOST_PERSISTENT</span>
              </div>
            </div>
          </footer>

          {/* Scroll to Top capsule */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-black shadow-glow-blue z-50 hover:scale-110 transition-transform"
                title="Scroll to top"
              >
                <ChevronUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
