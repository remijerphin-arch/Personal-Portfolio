import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-6 h-6 text-primary" />,
      glowColor: 'shadow-glow-blue',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'Java', level: 'Basic' },
        { name: 'C Language', level: 'Basic' }
      ]
    },
    {
      title: 'AI/ML & Core Concepts',
      icon: <BrainCircuit className="w-6 h-6 text-secondary" />,
      glowColor: 'shadow-glow-purple',
      skills: [
        { name: 'AI Principles', level: 'Certified' },
        { name: 'Data Structures', level: 'Intermediate' },
        { name: 'OOP Concepts', level: 'Intermediate' },
        { name: 'DBMS Basics', level: 'Intermediate' },
        { name: 'UI/UX Design', level: 'Certified' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6 text-primary" />,
      glowColor: 'shadow-glow-blue',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Linux OS', level: 'Basic' },
        { name: 'HTML & CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Basic' },
        { name: 'Canva Pro', level: 'Intermediate' },
        { name: 'Hardware Telemetry', level: 'Basic' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      glowColor: 'shadow-glow-purple',
      skills: [
        { name: 'Communication', level: 'Strong' },
        { name: 'Presentation', level: 'Strong' },
        { name: 'Problem Solving', level: 'Expert' },
        { name: 'Time Management', level: 'Strong' },
        { name: 'Quick Learner', level: 'Core' },
        { name: 'Adaptability', level: 'Core' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-background bg-cyber-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            SKILLS <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">DASHBOARD</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Categorized capabilities, verified through academic projects, certifications, and hands-on laboratory work.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`p-8 rounded-2xl glass-card flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:${category.glowColor}`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                  {category.icon}
                  <h3 className="text-lg font-bold font-outfit uppercase tracking-wide text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex flex-col items-start"
                    >
                      <span className="text-xs font-semibold text-white">{skill.name}</span>
                      <span className="text-[9px] text-gray-500 font-code mt-0.5">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative detail */}
              <div className="text-[10px] text-gray-600 font-code mt-6 text-right select-none">
                CLASS::SYS_VERIFICATION::PASS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
