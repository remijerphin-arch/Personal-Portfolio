import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Target, Award, Rocket } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 px-6 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            THE STORY OF <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">JERPHIN</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            From coding basic microcontrollers to researching autonomous telemetry and complex machine learning pipelines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Story Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Technical Journey */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl glass-card flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-primary">
              <Cpu className="w-6 h-6" />
              <h3 className="text-lg font-bold font-outfit uppercase tracking-wide">The Technical Journey</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              My engineering adventure started with physical hardware integration, building automatic solar trackers, and harvesting piezoelectric energy from footsteps. This hands-on background cultivated my deep fascination with how raw sensor data feeds back into intelligent decision-making, naturally driving me toward "Artificial Intelligence and Machine Learning".
            </p>
            <div className="pt-2 text-xs text-gray-500 font-code">&gt; focus: computer_vision &amp; signal_processing</div>
          </motion.div>

          {/* Card 2: ISRO Propulsion Complex Internship */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl glass-card border border-secondary/20 bg-secondary/5 flex flex-col space-y-4 shadow-glow-purple relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-3 text-secondary">
              <Rocket className="w-6 h-6 text-secondary animate-bounce" />
              <h3 className="text-lg font-bold font-outfit uppercase tracking-wide">ISRO (IPRC) Internship</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              Completed a prestigious 10-day internship at the "ISRO Propulsion Complex (IPRC)". Immersed in rocket propulsion testing systems, I analyzed high-velocity data telemetry channels and observed mission-critical hardware architectures. This experience instilled in me a rigorous standard for building highly fault-tolerant, low-latency software pipelines.
            </p>
            <div className="pt-2 text-xs text-secondary font-code">&gt; location: Mahendragiri, Tamil Nadu</div>
          </motion.div>

          {/* Card 3: Education & Academics */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl glass-card flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-primary">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-lg font-bold font-outfit uppercase tracking-wide">Education &amp; Minor</h3>
            </div>
            <div className="space-y-4 flex-grow text-sm">
              <div>
                <p className="font-semibold text-white">B.Tech in Computer Science (AI &amp; ML)</p>
                <p className="text-gray-400 text-xs">Christ University, Bangalore • 2024 - 2028</p>
                <p className="text-primary text-xs mt-1 font-semibold">CGPA: 3.3 / 4.0 (till 3rd sem) • Minors: General Management</p>
                <p className="text-gray-400 text-[10px] mt-1 italic">Elective: "Introduction to Embedded Systems and Edge AI" (by Tech Mahindra)</p>
              </div>
              <hr className="border-white/5" />
              <div>
                <p className="font-semibold text-white">High School &amp; Secondary Education</p>
                <p className="text-gray-400 text-xs">St. Joseph's School, Tamil Nadu</p>
                <p className="text-gray-400 text-xs">Class 12 &amp; Class 10 Graduation</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-code">&gt; status: 3rd sem complete / active researcher</div>
          </motion.div>

          {/* Card 4: Career Aspirations & Interests */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl glass-card flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-primary">
              <Target className="w-6 h-6" />
              <h3 className="text-lg font-bold font-outfit uppercase tracking-wide">Aspirations &amp; Alignment</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              My ultimate goal is to design scalable AI agents and real-time distributed networks that bridge the gap between intelligence and physical devices. Outside of academics, I spend time exploring IoT prototyping, drafting new product ideas, and playing cricket to stay active and sharp.
            </p>
            <div className="pt-2 text-xs text-gray-500 font-code">&gt; stack: python // pytorch // sql // node</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
