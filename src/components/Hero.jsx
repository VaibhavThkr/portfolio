import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import heroImg from '../assets/Transparent PNG.png';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = resumeData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="text-left space-y-6 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full glass-card border border-primary/30"
            >
              <p className="text-primary font-medium tracking-wider text-sm sm:text-base uppercase">
                Welcome to my portfolio
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight mb-2">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Vaibhav Singh
                </span>
              </h1>
            </motion.div>

            <div className="h-16 flex items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300"
                >
                  {roles[currentRoleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-xl leading-relaxed"
            >
              {resumeData.personal.summary.split('.')[0]}. I transform innovative ideas into robust healthcare solutions and intelligent systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <a href="#projects" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-medium hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all flex items-center gap-2 group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" target="_blank" className="px-8 py-3.5 rounded-xl glass-card text-white font-medium flex items-center gap-2 hover:bg-slate-800/50 hover:border-primary/50 transition-all">
                <Download size={18} /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-72 sm:w-80 lg:w-[450px]">
              <img 
                src={heroImg} 
                alt="Thakur Vaibhav Singh" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(14,165,233,0.2)] hover:scale-105 transition-transform duration-700 z-10 relative"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20"
      >
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
