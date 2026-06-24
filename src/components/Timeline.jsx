import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, School, BookOpen, Star } from 'lucide-react';

export default function Timeline() {
  const timelineData = [
    {
      year: '2025 (Sem-4)',
      title: 'Advanced Networking & Operating Systems',
      location: 'Christ University, Bangalore',
      desc: 'Simulated the Stop-and-Wait protocol, developed a CPU Scheduling visualizer, and engineered Angular-based reservation systems.',
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      type: 'edu'
    },
    {
      year: '2024 (Sem-3)',
      title: 'Management Minor & SmartBusGo',
      location: 'Christ University, Bangalore',
      desc: 'Acquired core competencies in General Management. Authored the SmartBusGo concept proposing real-time ticketing solutions.',
      icon: <Star className="w-5 h-5 text-secondary" />,
      type: 'project'
    },
    {
      year: '2024 (Interim)',
      title: 'ISRO (IPRC) Internship',
      location: 'Mahendragiri, TN',
      desc: '10-day internship analyzing telemetry channels, observing test stand telemetry databases, and rocket propulsion instrumentation structures.',
      icon: <Rocket className="w-5 h-5 text-secondary" />,
      type: 'intern',
      highlight: true
    },
    {
      year: '2024 (Sem-1 & 2)',
      title: 'B.Tech in CS (AI & ML) & IoT Work',
      location: 'Christ University, Bangalore',
      desc: 'Began B.Tech studies. Successfully integrated solar tracking hardware sensors and footstep energy harvesting piezoelectric circuits.',
      icon: <School className="w-5 h-5 text-primary" />,
      type: 'edu'
    },
    {
      year: '2024',
      title: 'Higher Secondary Education (Class 12)',
      location: "St. Joseph's School, TN",
      desc: 'Completed CBSE Higher Secondary Certificate focusing on Mathematics and Computer Science (Score: 68%).',
      icon: <School className="w-5 h-5 text-gray-400" />,
      type: 'school'
    },
    {
      year: '2022',
      title: 'Secondary Education (Class 10)',
      location: "St. Joseph's School, TN",
      desc: 'Graduated CBSE High School Certificate with a grade of 76%.',
      icon: <School className="w-5 h-5 text-gray-400" />,
      type: 'school'
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 relative bg-[#0A0A0A] bg-cyber-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            TIMELINE <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">JOURNEY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Academic progression and hands-on professional experiences charting the journey so far.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-gray-800 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } relative`}
                >
                  {/* Circle Indicator on the center line */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-[#121214] border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div
                      className={`p-6 rounded-2xl glass-card relative transition-all duration-300 ${
                        item.highlight
                          ? 'border border-secondary/40 shadow-glow-purple bg-secondary/5'
                          : 'hover:border-primary/20'
                      }`}
                    >
                      {item.highlight && (
                        <span className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-[8px] font-bold font-code tracking-widest text-white rounded-full uppercase">
                          Featured Internship
                        </span>
                      )}
                      <span className="text-[10px] font-bold font-code text-primary uppercase">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold font-outfit text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-semibold mt-0.5">
                        {item.location}
                      </p>
                      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
