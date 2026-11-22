import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Research Internships & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-purple-500 transform -translate-x-[9px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(168,85,247,0.8)] border-4 border-black z-10"></div>

                <div className="md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center">
                  <div className={`glass-card p-7 rounded-2xl relative border border-purple-500/20 hover:border-purple-500/40 transition-all ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                        {exp.badge || 'Research Experience'}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin size={12} className="text-purple-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-purple-400 shrink-0" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">{exp.organization}</h4>
                    
                    <p className="text-xs font-medium text-slate-400 flex items-center gap-1 mb-4">
                      <Calendar size={13} className="text-purple-400" />
                      {exp.period}
                    </p>

                    <ul className="space-y-2.5">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-slate-300 text-sm flex items-start leading-relaxed">
                          <CheckCircle2 size={15} className="text-purple-400 mr-2.5 mt-1 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
