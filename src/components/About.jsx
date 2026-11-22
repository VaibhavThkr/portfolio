import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Activity, Brain, Microchip, ShieldCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: <Microchip className="text-purple-400" size={24} />, 
      title: 'Embedded MedTech', 
      desc: 'Developing firmware and hardware on ESP32, AVR, and Raspberry Pi for medical diagnostic systems.' 
    },
    { 
      icon: <Activity className="text-purple-300" size={24} />, 
      title: 'Sensors & Physiology', 
      desc: 'Interfacing PPG, EMG, and 6-DOF IMUs directly with clinical physiological monitoring workflows.' 
    },
    { 
      icon: <Brain className="text-indigo-400" size={24} />, 
      title: 'Biomechanics & AI/ML', 
      desc: 'Neuromusculoskeletal simulations in OpenSim, Materialise Mimics, and OpenCV diagnostic pipelines.' 
    },
    { 
      icon: <ShieldCheck className="text-emerald-400" size={24} />, 
      title: 'ISO 13485 & V&V', 
      desc: 'Certified in ISO 13485:2016 Medical Devices QMS with disciplined Verification & Validation protocols.' 
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Background & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {resumeData.personal.summary}
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Currently completing my B.E. in Biomedical Engineering at the University College of Engineering (A), Osmania University (GATE 2026 AIR 154). Serving as Chairperson of the IEEE EMBS OUCE Chapter and backed by two peer-reviewed publications with Springer and Elsevier, I bridge hardware development, clinical sensor physiology, and medical device regulatory standards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-slate-900/90 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
