import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ExternalLink, X, Cpu, Layers } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Innovations & Prototypes
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Featured Engineering Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Hands-on biomedical instruments, wearable telemetry devices, IoT firmware, and biomechanical simulation platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group border border-purple-500/20 hover:border-purple-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-gradient-to-br from-slate-900 to-purple-950/40 relative overflow-hidden flex flex-col justify-between p-6 border-b border-purple-500/20">
                  <div className="flex justify-between items-start z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.category || 'MedTech Hardware'}
                    </span>
                    <Layers size={18} className="text-purple-400/80 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white z-10 group-hover:text-purple-300 transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-6">
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-purple-950/50 text-purple-300 rounded-md border border-purple-500/20 font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-slate-900 text-slate-400 rounded-md border border-slate-800">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <div className="text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View specs & features &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] bg-[#090710]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800/60 transition-colors"
                aria-label="Close project modal"
              >
                <X size={22} />
              </button>
              
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  {selectedProject.category || 'Featured Engineering Project'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 pr-6 leading-tight">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed text-base">
                {selectedProject.description}
              </p>
              
              <div className="mb-6 p-5 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Cpu size={18} className="text-purple-400" />
                  Key Specifications & Architecture
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start leading-relaxed">
                      <span className="text-purple-400 mr-2.5 font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">
                  Technologies & Protocols Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-purple-950/60 text-purple-300 rounded-lg text-xs font-semibold border border-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
