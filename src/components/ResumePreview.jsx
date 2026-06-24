import React, { useState } from 'react';
import { Download, FileJson, Award, GraduationCap, Copy, Check } from 'lucide-react';

export default function ResumePreview() {
  const [activeTab, setActiveTab] = useState('json');
  const [copied, setCopied] = useState(false);

  const resumeJson = `{
  "candidate": {
    "name": "R JERPHIN",
    "specialization": "AI & Machine Learning",
    "contact": {
      "email": "r.jerphin@gmail.com",
      "phone": "+91 7305695031",
      "location": "Kanyakumari, Tamil Nadu",
      "linkedin": "https://www.linkedin.com/in/r-jerphin-a8a7b5315"
    }
  },
  "internship": {
    "organization": "ISRO Propulsion Complex (IPRC)",
    "duration": "10 Days",
    "focus": "Propulsion telemetry systems & telemetry data logging structural testing"
  },
  "education": [
    {
      "degree": "B.Tech in Computer Science (AI & ML)",
      "institution": "Christ University, Bangalore",
      "period": "2024 - 2028 (Pursuing)",
      "metrics": {
        "cgpa": "3.3 / 4.0 (till 3rd semester)",
        "minor": "General Management"
      }
    }
  ],
  "languages": ["Python", "SQL", "Java (Basic)", "C (Basic)"],
  "concepts": ["Data Structures", "OOP", "DBMS Basics", "Web Development"]
}`;

  const certs = [
    { name: 'Advanced JavaScript Frameworks (Angular)', issuer: 'L&T EduTech', status: 'First Class' },
    { name: 'UI/UX Developer', issuer: 'L&T EduTech', status: 'First Class' },
    { name: 'Python Programming', issuer: 'Udemy', status: 'Verified' },
    { name: 'AI Principles', issuer: 'Udemy', status: 'Verified' },
    { name: 'Network Fundamentals', issuer: 'Infosys', status: 'Verified' },
    { name: 'Java Basic', issuer: 'HackerRank', status: 'Passed' },
    { name: 'Python Basic', issuer: 'HackerRank', status: 'Passed' },
    { name: 'SQL Basic & Intermediate', issuer: 'HackerRank', status: 'Passed' }
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
    <section id="resume" className="py-24 px-6 relative bg-[#0A0A0A]">
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
              <button
                onClick={handleDownloadText}
                className="p-2 rounded bg-white/5 border border-white/5 hover:border-secondary/50 text-gray-400 hover:text-secondary transition-all"
                title="Download JSON Resume"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Editor Area */}
            {activeTab === 'json' ? (
              <div className="flex w-full">
                {/* Line Numbers */}
                <div className="text-gray-700 text-right pr-4 select-none border-r border-white/5 mr-4 hidden sm:block">
                  {Array.from({ length: 25 }).map((_, i) => (
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
                    <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center space-x-3">
                      <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-xs">{c.name}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{c.issuer} • {c.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Centered Row */}
        <div className="text-center">
          <button
            onClick={handleDownloadText}
            className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold text-xs shadow-glow-blue uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Direct JSON Download
          </button>
        </div>
      </div>
    </section>
  );
}
