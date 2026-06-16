import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Activities</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 transform md:-translate-x-1/2"></div>

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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(14,165,233,0.8)] border-4 border-slate-900 z-10"></div>

                <div className="md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center">
                  <div className={`glass-card p-6 rounded-2xl relative ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    {/* Arrow for large screens */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-slate-800 border-t border-r border-slate-700 transform ${idx % 2 === 0 ? '-left-2 -rotate-135' : '-right-2 rotate-45'}`}></div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      {act.role}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-300 mb-2">{act.organization}</h4>
                    <p className="text-sm text-primary flex items-center gap-1 mb-4">
                      <Calendar size={14} />
                      {act.period}
                    </p>
                    <ul className="space-y-2">
                      {act.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-slate-400 text-sm flex items-start">
                          <span className="text-secondary mr-2 mt-1">•</span>
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

        {/* Achievements Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.achievements.map((achieve, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-5 rounded-xl flex items-start gap-4 border border-slate-700/50 hover:border-secondary/50 transition-colors"
              >
                <div className="p-3 bg-slate-800 rounded-lg">
                  <Award className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{achieve.title}</h4>
                  <p className="text-slate-400 text-sm">{achieve.description}</p>
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
