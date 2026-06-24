import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-[#0A0A0A] to-[#040405] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit uppercase tracking-wider text-white">
            SECURE <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">CONNECTION</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Establish a connection endpoint to discuss internship opportunities, software architecture, or project collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit text-white">
                Let's Build Something Revolutionary
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently pursuing software development and AI/ML engineering positions. Feel free to ping me or drop a message via the secure neural channel.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-semibold font-code uppercase">Secure Mail</div>
                  <a href="mailto:r.jerphin@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors">
                    r.jerphin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-semibold font-code uppercase">Access Line</div>
                  <a href="tel:+917305695031" className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors">
                    +91 7305695031
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-semibold font-code uppercase">Base Coordinates</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Kanyakumari, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/r-jerphin-a8a7b5315"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 hover:text-primary transition-all text-xs font-semibold flex items-center space-x-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/40 hover:text-secondary transition-all text-xs font-semibold flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Node</span>
              </a>
            </div>
          </div>

          {/* Right Column: Encrypted Form */}
          <div className="p-8 rounded-2xl glass-card relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold font-code text-gray-500 uppercase">IDENTIFIER (NAME)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Collaborator"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold font-code text-gray-500 uppercase">ROUTING ADDRESS (EMAIL)</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold font-code text-gray-500 uppercase">TRANSMISSION BODY (MESSAGE)</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Draft your query details..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">ENCYRPTING PACKETS...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>LAUNCH SECURE COMMS</span>
                  </>
                )}
              </button>
            </form>

            {/* Success Alert */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 bg-[#0A0A0ADF] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 animate-bounce" />
                  <div>
                    <h4 className="text-lg font-bold font-outfit text-white">Transmission Successful</h4>
                    <p className="text-xs text-gray-400 mt-2 max-w-[250px] mx-auto leading-normal">
                      Message encrypted. Node confirmation receipt ID:
                      <span className="text-primary font-code block mt-1">00D4FF-{(Math.random() * 1000000).toFixed(0)}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white hover:bg-white/10"
                  >
                    Close Endpoint
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
