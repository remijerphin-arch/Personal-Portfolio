import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, ArrowRight, Download, Sparkles } from 'lucide-react';

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [profilePic, setProfilePic] = useState(null);
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fileInputRef = useRef(null);

  const taglines = [
    'Building Intelligent Systems.',
    'Designing Autonomic Pipelines.',
    'Exploring Generative AI / ML.',
    'Connecting IoT with Cloud Telemetry.'
  ];

  // Typing Effect
  useEffect(() => {
    let timer;
    const currentFullText = taglines[textIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && typedText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % taglines.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentFullText.substring(0, typedText.length - 1)
            : currentFullText.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  // Load profile pic from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('jerphin_profile_pic');
    if (saved) {
      setProfilePic(saved);
    }
  }, []);

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        setProfilePic(base64data);
        localStorage.setItem('jerphin_profile_pic', base64data);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPic = (e) => {
    e.stopPropagation();
    setProfilePic(null);
    localStorage.removeItem('jerphin_profile_pic');
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden bg-[#0A0A0A] bg-cyber-grid bg-aurora-blue bg-aurora-purple"
    >
      {/* Background radial gradient highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Left Column: Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-grow space-y-6 lg:max-w-xl text-center lg:text-left z-10"
        >
          {/* Status Label */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest animate-pulse-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seeking AI/ML Internships &amp; Roles</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-outfit text-white leading-none">
            R JERPHIN
          </h1>

          {/* Typing Subtitle */}
          <div className="h-12 flex items-center justify-center lg:justify-start">
            <span className="text-lg sm:text-2xl font-semibold font-code bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {typedText}
            </span>
            <span className="w-1.5 h-6 bg-primary ml-1 cursor-blink" />
          </div>

          {/* Introduction */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            B.Tech Computer Science student specializing in "AI &amp; Machine Learning" at Christ University, Bangalore. Gained hands-on engineering insights during an internship at the "ISRO Propulsion Complex (IPRC)", and design experiences across physical IoT and full-stack solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-sm text-black flex items-center justify-center space-x-2 shadow-glow-blue hover:scale-105 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resume"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 hover:border-primary/50 text-sm font-semibold text-gray-300 hover:text-white glass-card flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 pt-6 text-gray-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/r-jerphin-a8a7b5315" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Cyber Profile Pic Slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 z-10"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-1.5 bg-gradient-to-tr from-primary via-transparent to-secondary overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-glow-blue hover:shadow-glow-purple">
            {/* Spinning Neon Aura Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-30 animate-pulse-slow pointer-events-none" />

            {/* Inner Content Slot */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full rounded-[20px] bg-[#121214] flex flex-col items-center justify-center relative cursor-pointer overflow-hidden border border-white/5 transition-all duration-300 group-hover:bg-[#121214]/80"
            >
              {profilePic ? (
                <>
                  <img
                    src={profilePic}
                    alt="R Jerphin Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Delete Hover Control */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={clearPic}
                      className="p-2 bg-red-600/80 rounded-full hover:bg-red-600 transition-colors text-white"
                      title="Clear picture"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-white ml-2 font-medium">Change Photo</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto border border-white/10 group-hover:border-primary/50 group-hover:shadow-glow-blue transition-all duration-300">
                    <Upload className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Upload Profile Photo</p>
                    <p className="text-[10px] text-gray-500 mt-1 max-w-[200px] mx-auto leading-normal">
                      Drag &amp; drop or click to upload your futuristic avatar (Persists locally)
                    </p>
                  </div>
                </div>
              )}
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePicUpload}
                className="hidden"
              />
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-secondary" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
