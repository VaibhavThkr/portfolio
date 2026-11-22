import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, FileText, ArrowRight, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import heroImg from '../assets/Transparent PNG.png';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = resumeData.personal.roles;
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-600/25 rounded-full filter blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-900/20 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Details, Name, Roles, Actions & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-sm font-semibold tracking-wide w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Hello, I'm
            </div>

            {/* Full Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
              Thakur <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-600">
                Vaibhav Singh
              </span>
            </h1>

            {/* Rotating Roles directly below name */}
            <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 min-h-[40px]">
              <span className="text-slate-400">Passionate</span>
              <div className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="text-white font-bold underline decoration-purple-500 underline-offset-8"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Short Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Final-year Biomedical Engineering student (GATE 2026 AIR 154) bridging clinical signal physiology, embedded firmware (ESP32, AVR, Raspberry Pi), and ISO 13485-aligned MedTech instrumentation. Backed by peer-reviewed publications with Springer and Elsevier.
            </p>

            {/* Action Buttons & Social Icons below */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
              {/* Primary Resume Button */}
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Thakur_Vaibhav_Singh_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all hover:scale-105 active:scale-95 group"
              >
                <FileText size={18} className="text-purple-200 group-hover:rotate-6 transition-transform" />
                <span>View Resume</span>
                <Download size={16} className="text-purple-300 ml-1 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary Contact Button */}
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social & Quick Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mr-1">
                Connect:
              </span>

              {/* LinkedIn */}
              <a 
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>

              {/* Resume Quick Icon */}
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Download / View Resume"
                className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all hover:scale-110"
              >
                <FileText size={18} />
              </a>

              {/* Email */}
              <a 
                href={`mailto:${resumeData.personal.email}`}
                title="Send Email"
                className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all hover:scale-110"
              >
                <Mail size={18} />
              </a>

              {/* GitHub */}
              <a 
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
            </div>

          </motion.div>

          {/* Right Column - Image on the right with glow and gradient bottom fade */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Glowing orb behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-purple-600/35 rounded-full filter blur-[90px] pointer-events-none -z-10"></div>
            
            {/* Photo container */}
            <div className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-[400px]">
              <img 
                src={heroImg} 
                alt="Thakur Vaibhav Singh" 
                className="w-full h-auto drop-shadow-2xl relative z-10"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
