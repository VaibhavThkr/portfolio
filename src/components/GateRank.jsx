import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star } from 'lucide-react';

const GateRank = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent mix-blend-screen filter blur-[80px]"></div>
        
        {/* Animated Particles/Stars */}
        <div className="absolute top-1/4 left-1/4 animate-pulse text-yellow-500/30"><Star size={24} /></div>
        <div className="absolute top-3/4 right-1/4 animate-pulse text-yellow-500/30 animation-delay-2000"><Star size={16} /></div>
        <div className="absolute top-1/2 left-3/4 animate-pulse text-yellow-500/30 animation-delay-4000"><Star size={20} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass border border-yellow-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.1)]"
        >
          {/* Inner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/20 rounded-full blur-[50px]"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-500/20 rounded-full blur-[50px]"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium text-sm tracking-widest uppercase mb-2"
              >
                <Award size={16} /> National Level Achievement
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                GATE 2026 <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  All India Rank 154
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-slate-300 text-lg max-w-2xl"
              >
                Demonstrated exceptional technical proficiency by securing a top tier rank in the highly competitive Graduate Aptitude Test in Engineering (GATE) for the Biomedical Engineering paper.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="relative w-48 h-48 flex items-center justify-center shrink-0"
            >
              <div className="absolute inset-0 border-4 border-yellow-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-4 border-yellow-500/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <Trophy size={64} className="text-white drop-shadow-lg" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-700/50">
            {[
              { label: "Exam", value: "GATE 2026" },
              { label: "Paper", value: "Biomedical Eng." },
              { label: "AIR", value: "154", highlight: true },
              { label: "Status", value: "Qualified" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                className="text-center md:text-left"
              >
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <p className={`text-xl md:text-2xl font-bold ${stat.highlight ? 'text-yellow-500' : 'text-white'}`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default GateRank;
