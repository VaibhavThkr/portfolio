import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-[#07070a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Impact & Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Leadership & Co-Curriculars</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {resumeData.activities.map((act, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_12px_rgba(168,85,247,0.8)] border-4 border-black z-10"></div>

                <div className="md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center">
                  <div className={`glass-card p-6 rounded-2xl relative border border-purple-500/20 hover:border-purple-500/40 transition-all ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-purple-400 shrink-0" />
                      {act.role}
                    </h3>
                    <h4 className="text-base font-semibold text-purple-200 mb-2">{act.organization}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                      <Calendar size={13} className="text-purple-400" />
                      {act.period}
                    </p>
                    <ul className="space-y-2">
                      {act.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-slate-300 text-sm flex items-start leading-relaxed">
                          <CheckCircle2 size={14} className="text-purple-400 mr-2 mt-1 shrink-0" />
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

        {/* Honors & Certifications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
              Recognitions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Certifications & Honors</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.achievements.map((achieve, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass p-6 rounded-2xl flex items-start gap-4 border border-purple-500/20 hover:border-purple-500/50 transition-all bg-slate-950/40"
              >
                <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30 shrink-0">
                  <Award className="text-yellow-400" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1.5 leading-snug">{achieve.title}</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{achieve.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
