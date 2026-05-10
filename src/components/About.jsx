import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Activity, Brain, Microchip, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Activity className="text-primary" size={24} />, title: 'Biomedical Systems', desc: 'Designing medical equipment and rehabilitation tools.' },
    { icon: <Brain className="text-secondary" size={24} />, title: 'AI in Healthcare', desc: 'Applying ML/DL to diagnostics and personalized medicine.' },
    { icon: <Microchip className="text-purple-400" size={24} />, title: 'Embedded Devices', desc: 'Developing IoT and wearable sensors for health monitoring.' },
    { icon: <GraduationCap className="text-emerald-400" size={24} />, title: 'Research Driven', desc: 'Passionate about innovations in biomedical engineering.' },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {resumeData.personal.summary}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing my B.E in Biomedical Engineering at Osmania University. My academic journey is complemented by hands-on projects, research papers, and active participation in IEEE events. I thrive at the intersection of biology, medicine, and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
