import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Cpu, BatteryCharging, Bus, ShieldAlert, Monitor, Home } from 'lucide-react';

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Solar Tracking System',
      semester: 'Semester 1',
      icon: <Cpu className="w-8 h-8 text-primary" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      description: 'Built an intelligent solar tracker using light-dependent sensors to detect sunlight direction and rotate the panel dynamically.',
      technologies: ['LDR Sensors', 'Microcontrollers', 'Servo Motors', 'Hardware Integration'],
      features: [
        'Real-time multi-axis tracking using LDR sensor matrix',
        'Automatic sleep mode during low-light conditions',
        'Optimized solar energy absorption (up to 30% increase)'
      ],
      challenges: 'Calibrating LDR sensor sensitivity thresholds to avoid erratic panel oscillations under variable cloudy skies.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'SYS::LDR_READ -> COMPARATOR -> MOTOR_DRIVE -> ROTATE'
    },
    {
      id: 2,
      title: 'Footstep Power Generation',
      semester: 'Semester 2',
      icon: <BatteryCharging className="w-8 h-8 text-secondary" />,
      color: 'from-purple-500/20 to-pink-500/20',
      description: 'Developed an eco-friendly prototype harvesting human kinetic energy through piezoelectric transceivers into electrical storage.',
      technologies: ['Piezoelectric Sensors', 'Bridge Rectifier', 'Voltage Regulators', 'Lead-Acid Battery'],
      features: [
        'High-density piezo transducer grid setup',
        'Sub-circuit storage routing with charge controllers',
        'Direct LED grid lighting testing module'
      ],
      challenges: 'Handling chaotic voltage spikes from footsteps; resolved by placing voltage clamping circuits before the battery input.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'KINETIC_FORCE -> PIEZO_GEN -> CLAMP_REG -> STORAGE'
    },
    {
      id: 3,
      title: 'SmartBusGo - Startup Concept',
      semester: 'Semester 3',
      icon: <Bus className="w-8 h-8 text-primary" />,
      color: 'from-cyan-500/20 to-teal-500/20',
      description: 'Conceptualized a smart public bus tracking and digital ticketing infrastructure to eliminate wait times.',
      technologies: ['GPS Integration', 'WebSockets', 'React Native', 'Node.js'],
      features: [
        'Real-time passenger location to bus alignment mapping',
        'Contactless QR ticketing generation system',
        'Crowd density updates inside approaching buses'
      ],
      challenges: 'Developing a synchronization mechanism to handle sudden cellular connection dropouts in moving transport.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'BUS_GPS -> WEBSOCKET -> CLOUD -> PASSENGER_APP'
    },
    {
      id: 4,
      title: 'Stop-and-Wait Simulator',
      semester: 'Semester 4',
      icon: <ShieldAlert className="w-8 h-8 text-secondary" />,
      color: 'from-indigo-500/20 to-purple-500/20',
      description: 'Simulated the Stop-and-Wait ARQ network protocol demonstrating packet transport reliability.',
      technologies: ['Python', 'Socket API', 'Tkinter UI', 'Thread Management'],
      features: [
        'Visual interactive packet drop rate control',
        'Timer callback triggers for acknowledgments timeouts',
        'Detailed transport layer debugging log console'
      ],
      challenges: 'Preventing the main Tkinter UI thread from blocking during raw socket communication waiting loops.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'TX_FRAME -> WAIT_ACK -> TIMEOUT? -> RETRANSMIT'
    },
    {
      id: 5,
      title: 'CPU Scheduling Visualizer',
      semester: 'Semester 4',
      icon: <Monitor className="w-8 h-8 text-primary" />,
      color: 'from-blue-500/20 to-indigo-500/20',
      description: 'An interactive system visualizing fundamental OS process scheduling algorithms with dynamic statistics.',
      technologies: ['React', 'CSS Grid', 'Tailwind', 'Algorithms'],
      features: [
        'Supports FCFS, SJF, and Round Robin scheduling algorithms',
        'Generates active colored Gantt charts dynamically',
        'Provides real-time average waiting and turnaround time analysis'
      ],
      challenges: 'Synchronizing timeline transitions of tasks entering and exiting ready queue states with millisecond precision.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'READY_QUEUE -> scheduler() -> GANTT_RENDER -> METRICS'
    },
    {
      id: 6,
      title: 'Hotel Booking System',
      semester: 'Semester 4',
      icon: <Home className="w-8 h-8 text-secondary" />,
      color: 'from-purple-500/20 to-blue-500/20',
      description: 'Built a web-based room browsing and booking dashboard featuring mock transaction handling.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'JSON Mock Database'],
      features: [
        'Interactive booking calendar with date selection bounds',
        'Reactive room searches and type sorting filters',
        'Administrative analytics dashboard showing active occupancies'
      ],
      challenges: 'Formulating clean Angular state subscriptions to manage checkout lists and avoid memory leaks upon component unmounting.',
      github: 'https://github.com',
      demo: 'https://github.com',
      schematic: 'ROOM_BROWSER -> CHECKOUT -> RxJS_SUB -> MOCK_API'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            PROJECTS <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">SHOWCASE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Exploring software simulation, low-latency networking, web architectures, and kinetic IoT hardware integrations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
            >
              <div>
                {/* Schematic Vector Image Placeholder */}
                <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center p-4 border-b border-white/5`}>
                  <div className="absolute inset-0 bg-cyber-grid opacity-20" />
                  <div className="z-10 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center mx-auto border border-white/10 shadow-lg">
                      {project.icon}
                    </div>
                    <div className="text-[9px] font-code text-gray-400 select-none uppercase tracking-widest max-w-[200px] truncate">
                      {project.schematic}
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-code text-primary uppercase">
                    {project.semester}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold font-outfit text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-code text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden py-3 space-y-3"
                    >
                      <div>
                        <span className="text-[10px] font-semibold text-primary uppercase font-code">Key Features:</span>
                        <ul className="list-disc pl-4 text-[11px] text-gray-400 space-y-1 mt-1 leading-relaxed">
                          {project.features.map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-secondary uppercase font-code">Challenges Solved:</span>
                        <p className="text-[11px] text-gray-400 mt-1 leading-relaxed italic">
                          "{project.challenges}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons Row */}
                <div className="flex justify-between items-center mt-3 gap-2">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-xs font-semibold text-gray-400 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <span>{expandedId === project.id ? 'Hide Details' : 'View Details'}</span>
                    {expandedId === project.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:text-primary transition-all"
                      title="View GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-secondary/30 hover:text-secondary transition-all"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
