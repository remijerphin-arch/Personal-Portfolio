import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const bootLogs = [
    'INITIALIZING ANTIGRAVITY KERNEL v2.0.26...',
    'RESOLVING COMPILER CORRELATIONS FOR R JERPHIN...',
    'ESTABLISHING NEURAL PIPELINES...',
    'LOADING COGNITIVE INTERACTION MODELS...',
    'COMPILING PROJECT CORE MEMORIES (Sem-1 to Sem-4)...',
    'MOUNTING ISRO IPRC PROPULSION RECORDS...',
    'ACTIVATING CYBERNETIC INTEGRATION INTERFACE...',
    'HANDSHAKE COMPLETE. REDIRECTING...'
  ];

  useEffect(() => {
    // 1. Progress Counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800); // Wait for AnimatePresence exit animation
          }, 400);
          return 100;
        }
        // Random increments
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // 2. Typing Console Logs
    const interval = setInterval(() => {
      setLogs((prev) => {
        if (prev.length < bootLogs.length) {
          return [...prev, bootLogs[prev.length]];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 bg-background z-[9999] flex flex-col justify-between p-6 sm:p-12 font-code"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xs text-primary opacity-60">
            <div>SYSTEM: ONLINE</div>
            <div>STATION ID: 00D4FF-7B61FF</div>
          </div>

          {/* Central Progress / Logo */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-outfit uppercase">
                JERPHIN
              </h1>
              <p className="text-[10px] sm:text-xs text-secondary tracking-widest mt-2 uppercase">
                AI &amp; Machine Learning Engineer
              </p>
            </motion.div>

            {/* Glowing Ring & Percentage */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="2"
                  fill="transparent"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#00D4FF"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray="440"
                  strokeDashoffset={440 - (440 * Math.min(progress, 100)) / 100}
                  className="transition-all duration-100"
                  style={{
                    filter: 'drop-shadow(0 0 8px #00D4FF)'
                  }}
                />
              </svg>
              <div className="text-center">
                <div className="text-3xl font-extrabold font-outfit text-white">
                  {Math.min(progress, 100)}%
                </div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                  System Load
                </div>
              </div>
            </div>
          </div>

          {/* Log Console at Bottom */}
          <div className="w-full max-w-2xl mx-auto h-32 overflow-hidden text-[10px] sm:text-xs text-gray-400 border border-gray-900 bg-black/40 p-4 rounded-lg">
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary mr-2">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
              {logs.length < bootLogs.length && (
                <div className="flex items-center">
                  <span className="text-primary mr-2">&gt;</span>
                  <span className="w-2 h-4 bg-primary cursor-blink" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
