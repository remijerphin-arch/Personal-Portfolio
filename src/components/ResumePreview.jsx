import React, { useState } from 'react';
import { Download, FileJson, Award, GraduationCap, Copy, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumePreview() {
  const [activeTab, setActiveTab] = useState('json');
  const [copied, setCopied] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const resumeJson = `{
  "candidate": {
    "name": "R JERPHIN",
    "specialization": "AI & Machine Learning Engineering",
    "contact": {
      "email": "r.jerphin@gmail.com",
      "phone": "+91 7305695031",
      "location": "Kanyakumari, Tamil Nadu",
      "linkedin": "https://www.linkedin.com/in/r-jerphin-a8a7b5315"
    }
  },
  "education": [
    {
      "degree": "Bachelor of Technology - Computer Science (AI & ML)",
      "institution": "Christ University, Kengeri Campus, Bangalore",
      "period": "2024 - 2028 (Pursuing)",
      "metrics": {
        "cgpa": "3.3 / 4.0 (till 3rd semester)",
        "minor": "General Management",
        "backlogs": "None"
      }
    },
    {
      "degree": "Class 12 - CBSE (Maths, Computer Science)",
      "institution": "St. Joseph's School, Manavalakurichy, Tamil Nadu",
      "period": "2024"
    },
    {
      "degree": "Class 10 - CBSE",
      "institution": "St. Joseph's School, Manavalakurichy, Tamil Nadu",
      "period": "2022"
    }
  ],
  "internship": {
    "organization": "ISRO Propulsion Complex (IPRC) Mahendragiri",
    "focus": "Propulsion telemetry systems & telemetry data logging structural testing"
  },
  "academic_projects": [
    {
      "title": "Solar Tracking System",
      "semester": "Sem-1",
      "description": "Built a solar tracker using LDR sensors to detect sunlight direction and automatically rotate the panel for maximum efficiency."
    },
    {
      "title": "Footstep Power Generation System",
      "semester": "Sem-2",
      "description": "Developed a prototype using piezoelectric sensors to generate electrical energy from human footsteps."
    },
    {
      "title": "SmartBusGo - Startup Idea",
      "semester": "Sem-3",
      "description": "Proposed a smart bus tracking and digital ticketing solution."
    },
    {
      "title": "Stop-and-Wait Protocol Simulator",
      "semester": "Sem-4",
      "description": "Simulated the Stop-and-Wait ARQ protocol to demonstrate reliable data transmission with acknowledgments, timeout and retransmission."
    },
    {
      "title": "CPU Scheduling Visualizer (OS)",
      "semester": "Sem-4",
      "description": "Developing an interface to visualize CPU scheduling algorithms with Gantt chart, waiting time and turnaround time calculation."
    },
    {
      "title": "Hotel Booking & Room Management System",
      "semester": "Sem-4",
      "description": "Built a web-based hotel booking system using Angular with room browsing, booking interface and admin dashboard."
    }
  ],
  "technical_skills": {
    "programming": ["Python", "Java (Basic)", "C (Basic)", "SQL"],
    "core_concepts": ["Data Structures (Basic)", "OOP", "DBMS Basics"],
    "web_basics": ["HTML", "CSS", "JavaScript (Basic)"],
    "tools": ["Git & GitHub", "Canva", "Linux (Basic)"],
    "other": ["Basic knowledge of sensors, mini-projects and hardware integration"]
  },
  "certifications": [
    "Python Programming - Udemy",
    "AI Principles - Udemy",
    "Network Fundamentals - Infosys",
    "Java Basic - HackerRank",
    "Python Basic - HackerRank",
    "SQL Basic - HackerRank",
    "SQL Intermediate - HackerRank",
    "UI/UX Developer - L&T EduTech (First Class)",
    "Advanced JavaScript Frameworks (Angular) - L&T EduTech (First Class)"
  ],
  "soft_skills": ["Communication", "Presentation", "Time Management", "Problem Solving", "Quick Learner", "Adaptability"],
  "interests": ["Artificial Intelligence & Machine Learning", "Software Development", "IoT Mini-Projects", "Startup/Product Ideas"]
}`;

  const certs = [
    { name: 'Advanced JavaScript Frameworks (Angular)', issuer: 'L&T EduTech', status: 'First Class', pdf: null },
    { name: 'UI/UX Developer', issuer: 'L&T EduTech', status: 'First Class', pdf: null },
    { name: 'Python Programming', issuer: 'Udemy', status: 'Verified', pdf: 'certs/python_udemy.pdf' },
    { name: 'AI Principles', issuer: 'Udemy', status: 'Verified', pdf: 'certs/ai_principles.pdf' },
    { name: 'Network Fundamentals', issuer: 'Infosys', status: 'Verified', pdf: 'certs/network_infosys.pdf' },
    { name: 'Java Basic', issuer: 'HackerRank', status: 'Passed', pdf: 'certs/java_basic.pdf' },
    { name: 'Python Basic', issuer: 'HackerRank', status: 'Passed', pdf: 'certs/python_basic.pdf' },
    { name: 'SQL Basic', issuer: 'HackerRank', status: 'Passed', pdf: null },
    { name: 'SQL Intermediate', issuer: 'HackerRank', status: 'Passed', pdf: null }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadText = () => {
    // Generate text file containing the resume
    const element = document.createElement("a");
    const file = new Blob([resumeJson], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "R_Jerphin_Resume.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            INTERACTIVE <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RESUME</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore my profile variables directly through the cybernetic IDE or download a raw JSON file (Updated till June 2026).
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* IDE Layout */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black/60 backdrop-blur-xl">
          {/* IDE Window Title Bar */}
          <div className="bg-[#121214] px-4 py-3.5 border-b border-white/5 flex justify-between items-center text-xs">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-gray-500 font-code flex items-center space-x-1 select-none">
              <span>jerphin_terminal.py</span>
            </div>
            <div className="w-16" />
          </div>

          {/* IDE Tabs */}
          <div className="flex border-b border-white/5 bg-[#171719] text-xs font-code">
            <button
              onClick={() => setActiveTab('json')}
              className={`px-6 py-3 border-r border-white/5 flex items-center space-x-2 transition-all ${
                activeTab === 'json'
                  ? 'bg-black text-primary border-t-2 border-t-primary'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              <FileJson className="w-4 h-4 text-primary" />
              <span>resume.json</span>
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-6 py-3 border-r border-white/5 flex items-center space-x-2 transition-all ${
                activeTab === 'certs'
                  ? 'bg-black text-secondary border-t-2 border-t-secondary'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4 text-secondary" />
              <span>credentials.yaml</span>
            </button>
          </div>

          {/* Code Editor Body */}
          <div className="p-6 bg-black/90 min-h-[350px] font-code text-xs sm:text-sm overflow-x-auto relative flex">
            {/* Action Bar */}
            <div className="absolute top-4 right-4 flex space-x-3 z-10">
              <button
                onClick={handleCopy}
                className="p-2 rounded bg-white/5 border border-white/5 hover:border-primary/50 text-gray-400 hover:text-primary transition-all"
                title="Copy contents"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href="R_Jerphin_Resume.pdf"
                download="R_Jerphin_Resume.pdf"
                className="p-2 rounded bg-white/5 border border-white/5 hover:border-secondary/50 text-gray-400 hover:text-secondary transition-all flex items-center justify-center"
                title="Download PDF Resume"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Editor Area */}
            {activeTab === 'json' ? (
              <div className="flex w-full">
                {/* Line Numbers */}
                <div className="text-gray-700 text-right pr-4 select-none border-r border-white/5 mr-4 hidden sm:block">
                  {Array.from({ length: resumeJson.split('\n').length }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                {/* Syntax Highlighted JSON */}
                <pre className="text-gray-300 leading-relaxed font-code whitespace-pre">
                  {resumeJson.split('\n').map((line, idx) => {
                    // Quick crude syntax highlight
                    let coloredLine = line;
                    if (line.includes('"')) {
                      coloredLine = line.replace(
                        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g,
                        '<span class="text-cyan-400">$1</span>'
                      );
                    }
                    return (
                      <div
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: coloredLine }}
                      />
                    );
                  })}
                </pre>
              </div>
            ) : (
              <div className="w-full space-y-6">
                <div className="text-secondary font-semibold text-xs tracking-wider uppercase mb-2 select-none">
                  # Certifications &amp; Accreditations
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certs.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-white text-xs">{c.name}</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">{c.issuer} • {c.status}</div>
                        </div>
                      </div>
                      {c.pdf && (
                        <button
                          onClick={() => setSelectedPdf(c.pdf)}
                          className="px-3 py-1.5 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 hover:border-secondary/40 text-[10px] font-semibold transition-all cursor-pointer"
                        >
                          View
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Centered Row */}
        <div className="text-center">
          <a
            href="R_Jerphin_Resume.pdf"
            download="R_Jerphin_Resume.pdf"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold text-xs shadow-glow-blue uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Download PDF Resume
          </a>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#121214] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 bg-[#171719] border-b border-white/5 flex justify-between items-center">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-code">System Verification Node // Viewer Only</span>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Container with transparent click-blocker layer */}
              <div className="flex-grow relative bg-[#0D0D0F] select-none">
                <iframe
                  src={`${selectedPdf}#toolbar=0&navpanes=0`}
                  title="Certificate Preview"
                  className="w-full h-full border-none pointer-events-auto"
                />
                {/* Transparent Shield overlay to prevent drag, print triggers or saving */}
                <div
                  className="absolute inset-0 bg-transparent cursor-default"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ pointerEvents: 'auto' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
