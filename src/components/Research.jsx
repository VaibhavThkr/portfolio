import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ExternalLink, Award, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Research = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'publications', 'presentations'

  const publications = resumeData.publications || [];
  const presentations = resumeData.presentations || [];

  return (
    <section id="research" className="py-24 bg-[#07070a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Academic & Scientific Contributions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Publications & Presentations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Peer-reviewed research articles and national-level symposium presentations in biomedical instrumentation, smart assistive robotics, and machine-learning diagnostics.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'glass text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              All Research ({publications.length + presentations.length})
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'publications'
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'glass text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              Peer-Reviewed Publications ({publications.length})
            </button>
            <button
              onClick={() => setActiveTab('presentations')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'presentations'
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'glass text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              Presentations & Awards ({presentations.length})
            </button>
          </div>
        </motion.div>

        {/* Peer-Reviewed Publications Section */}
        {(activeTab === 'all' || activeTab === 'publications') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Peer-Reviewed Publications
              </h3>
              <div className="h-px bg-slate-800 flex-grow ml-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 rounded-2xl flex flex-col justify-between border border-purple-500/25 hover:border-purple-500/50 shadow-[0_4px_25px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full pointer-events-none group-hover:bg-purple-600/20 transition-all"></div>

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-purple-950/80 text-purple-300 text-xs font-bold rounded-lg border border-purple-500/30 uppercase tracking-wider">
                          {pub.publisher}
                        </span>
                        <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/20">
                          {pub.type || 'Published'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{pub.date}</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                      "{pub.title}"
                    </h4>

                    <p className="text-sm font-medium text-purple-200/90 mb-4 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      📖 {pub.journal}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pub.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                      {pub.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-purple-950/40 text-purple-300 rounded-md border border-purple-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Presentations & Awards Section */}
        {(activeTab === 'all' || activeTab === 'presentations') && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-yellow-400" size={24} />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Symposium Presentations & Awards
              </h3>
              <div className="h-px bg-slate-800 flex-grow ml-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {presentations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-slate-800 hover:border-purple-500/30 transition-all relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700">
                        {item.type.includes('Paper') ? (
                          <FileText className="text-purple-400" size={18} />
                        ) : (
                          <BookOpen className="text-purple-300" size={18} />
                        )}
                      </div>
                      {item.award && (
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                          item.award.includes('1st')
                            ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                            : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                        }`}>
                          {item.award}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {item.conference}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[11px] px-2 py-0.5 bg-slate-900 text-slate-400 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Research;
