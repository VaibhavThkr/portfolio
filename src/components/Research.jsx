import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Research = () => {
  const researchItems = [
    {
      title: "Mitigating SANS: A Novel Wearable Device for Real-Time Non-Invasive ICP Monitoring in Spaceflight",
      type: "Poster Presentation",
      conference: "National Symposium on Instrumentation-45 (ISOI, IISc Bangalore)",
      award: "1st Prize",
      tags: ["Wearables", "Aerospace Medicine", "Monitoring"]
    },
    {
      title: "A Multimodal Control Approach for Smart Wheelchairs Using Accelerometer and EMG Gesture Interfaces",
      type: "Paper Presentation",
      conference: "IFIP IOT’25",
      tags: ["Smart Wheelchair", "EMG", "Control Systems"]
    },
    {
      title: "Thermal vision-based Sleep apnea detection using CNN and LSTM networks",
      type: "Poster Presentation",
      conference: "National Level Technical Symposium (Spoorthy Eng. College)",
      award: "1st Prize",
      tags: ["Deep Learning", "CNN", "LSTM", "Sleep Apnea"]
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-10"></div>
              
              <div className="mb-4 flex items-center justify-between">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  {item.type.includes('Paper') ? <FileText className="text-primary" /> : <BookOpen className="text-secondary" />}
                </div>
                {item.award && (
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-semibold rounded-full border border-yellow-500/20">
                    {item.award}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-tight flex-grow">{item.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{item.conference}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
