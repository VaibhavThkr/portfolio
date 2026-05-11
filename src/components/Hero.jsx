import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-12">
      {/* Deep Purple Glow behind the person */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/30 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 h-full">
          
          {/* Left Column - Name */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center lg:pr-12"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-semibold text-xl md:text-2xl mb-2 tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
              Thakur <br className="hidden lg:block" /> Vaibhav <br className="hidden lg:block" /> Singh
            </h1>
          </motion.div>

          {/* Center Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 flex justify-center order-1 lg:order-2 relative mx-auto w-72 sm:w-80 lg:w-[450px]"
          >
            <div className="relative z-10 w-full overflow-hidden">
              <img 
                src={heroImg} 
                alt="Thakur Vaibhav Singh" 
                className="w-full h-auto drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Right Column - Role */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center lg:text-right order-3 lg:order-3 flex flex-col justify-center lg:pl-12"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-purple-600 font-semibold text-xl md:text-2xl mb-2 tracking-wider">
              Passionate
            </p>
            <div className="h-20 lg:h-32 relative flex justify-center lg:justify-end w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold text-white tracking-tight leading-tight absolute lg:right-0"
                >
                  {roles[currentRoleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Social Icons (Left absolute) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-20"
      >
        <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
          <FaGithub size={22} />
        </a>
        <a href={`mailto:${resumeData.personal.email}`} className="text-slate-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
          <Mail size={22} />
        </a>
      </motion.div>

      {/* Resume Link (Right absolute bottom) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-12 bottom-12 z-20 hidden lg:block"
      >
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em] text-xs font-bold">
          RESUME 
          <span className="p-3 border border-slate-800 group-hover:border-purple-500 rounded transition-colors bg-[#0a0a0a]">
            <FileText size={16} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
          </span>
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
