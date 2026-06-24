import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ from = 0, to, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let active = true;
    const controls = animate(from, to, {
      duration,
      onUpdate: (value) => {
        if (active) setCount(Math.floor(value));
      },
    });
    return () => {
      active = false;
      controls.stop();
    };
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Achievements() {
  const metrics = [
    {
      label: 'Projects Scaffolded',
      value: 6,
      suffix: '+',
      description: 'Physical IoT & Software Visualizers'
    },
    {
      label: 'Core Technologies',
      value: 12,
      suffix: '+',
      description: 'Languages, Databases, & Frameworks'
    },
    {
      label: 'Certifications Completed',
      value: 8,
      suffix: '',
      description: 'Udemy, HackerRank, Infosys & L&T'
    },
    {
      label: 'ISRO Telemetry Internship',
      value: 10,
      suffix: ' Days',
      description: 'IPRC Propulsion Site Experience'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D11]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass-card text-center flex flex-col justify-center space-y-2 border border-white/5 hover:border-primary/20 hover:shadow-2xl transition-all"
            >
              <div className="text-4xl sm:text-5xl font-black font-outfit text-white tracking-tight">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-primary uppercase font-code">
                {m.label}
              </div>
              <div className="text-[10px] text-gray-500 max-w-[150px] mx-auto leading-normal">
                {m.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
