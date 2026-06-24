import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KNOWLEDGE_BASE = [
  {
    keys: ['isro', 'iprc', 'internship', 'propulsion', 'space', 'rocket', 'mahendragiri'],
    answer: 'R Jerphin completed a prestigious 10-day internship at the ISRO Propulsion Complex (IPRC) in Mahendragiri in 2026. He worked on rocket propulsion telemetry systems and telemetry data logging instrumentation. This experience is highly useful because it trained him in analyzing high-speed mission-critical data telemetry, teaching him how to design fault-tolerant, low-latency, and highly reliable software pipelines for critical aerospace and data systems.'
  },
  {
    keys: ['project', 'solar', 'footstep', 'bus', 'scheduling', 'booking', 'wait', 'simulator', 'cpu', 'hotel'],
    answer: 'Jerphin has developed 6 notable projects:\n1. "Solar Tracking System" (Sem-1): Automatically rotates panels for maximum efficiency using LDR sensors.\n2. "Footstep Power Generation" (Sem-2): Harvests kinetic energy from human footsteps via piezoelectric sensors.\n3. "SmartBusGo" (Sem-3): Real-time GPS bus tracking & ticketing concept.\n4. "Stop-and-Wait Simulator" (Sem-4): Python-based socket simulation demonstrating reliable packet transport.\n5. "CPU Scheduling Visualizer" (Sem-4): React app visualizing FCFS, SJF, and Round Robin timelines.\n6. "Hotel Booking System" (Sem-4): Angular-based room management system with RxJS subscriptions.\n\nThese projects are useful because they demonstrate his practical ability to build full-stack web applications, simulate complex operating system/network algorithms, and integrate physical IoT hardware sensors.'
  },
  {
    keys: ['skill', 'python', 'sql', 'java', 'c ', 'languages', 'databases', 'git', 'linux', 'tool', 'concept', 'ds', 'oop', 'dbms'],
    answer: 'Jerphin is skilled in Programming (Python, SQL, Java, C), Core Concepts (Data Structures, OOP, DBMS), Web Development (HTML, CSS, JavaScript, Angular), and Tools (Git & GitHub, Canva, Linux). These skills are useful because they establish a strong base for AI model training, data analysis, and building responsive client-side web architectures.'
  },
  {
    keys: ['certification', 'certify', 'verified', 'credential', 'angular', 'l&t', 'udemy', 'infosys', 'hackerrank', 'test'],
    answer: 'Jerphin holds several certified credentials:\n- "Advanced JavaScript Frameworks (Angular)" - L&T EduTech (First Class)\n- "UI/UX Developer" - L&T EduTech (First Class)\n- "Python Programming" & "AI Principles" - Udemy\n- "Network Fundamentals" - Infosys\n- "HackerRank Certifications" in Python, Java, and SQL (Basic & Intermediate).\n\nThese are useful because they officially validate his software developer credentials and verify his knowledge of enterprise frameworks, clean coding, and network architectures.'
  },
  {
    keys: ['education', 'university', 'christ', 'college', 'school', 'joseph', 'cgpa', 'grade', 'gpa', 'sem', 'current', 'embedded', 'edge', 'mahindra'],
    answer: 'Jerphin is currently pursuing his B.Tech in Computer Science (AI & ML) at Christ University, Bangalore (2024–2028), and is currently in his 5th Semester (as of June 2026) with a CGPA of 3.3/4.0. He is currently pursuing electives in "Introduction to Embedded Systems and Edge AI" offered by Tech Mahindra. This education is highly useful because it merges deep AI/ML and Edge computing hardware with business management fundamentals, equipping him to deploy neural models directly onto resource-constrained physical Edge devices.'
  },
  {
    keys: ['contact', 'email', 'phone', 'call', 'mail', 'linkedin', 'github', 'reach', 'hire', 'locate', 'location'],
    answer: 'You can reach R Jerphin via email at r.jerphin@gmail.com, call him at +91 7305695031, or connect with his LinkedIn profile (https://www.linkedin.com/in/r-jerphin-a8a7b5315). He is based in Kanyakumari, Tamil Nadu. These endpoints are useful for recruiters who want to schedule interviews, ask for code references, or offer internship positions.'
  }
];

export default function AskJR() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm ASK JR, R Jerphin's automated portfolio assistant. Ask me anything about Jerphin's projects, skills, education, or his internship at ISRO!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    // Process Bot Response after artificial latency
    setTimeout(() => {
      let botResponse = "I'm sorry, I can only answer questions related directly to R Jerphin's projects, skills, education, certifications, and his ISRO internship. Please ask me about these topics, and I will explain how they are useful!";
      
      const query = userText.toLowerCase();

      // Simple keyword matching search
      for (const item of KNOWLEDGE_BASE) {
        const matches = item.keys.filter(key => query.includes(key));
        if (matches.length > 0) {
          botResponse = item.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 font-code">
      {/* Floating Chat Bubble Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-black shadow-glow-blue cursor-pointer flex items-center justify-center relative"
        title="Chat with ASK JR"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
      </motion.button>

      {/* Floating Chatbox Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] rounded-2xl border border-white/10 shadow-2xl glass-card flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121214] px-4 py-3 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">ASK JR</h4>
                  <span className="text-[8px] text-green-400 font-semibold uppercase flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse" />
                    AI Agent Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-tr-none'
                          : 'bg-white/5 border border-white/5 text-gray-300 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-primary animate-bounce" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-500 rounded-tl-none flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3 bg-[#121214]/60 border-t border-white/5 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, education..."
                className="flex-grow px-3 py-2 rounded-xl glass-input text-xs"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
