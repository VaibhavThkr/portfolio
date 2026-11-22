import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, X, Sparkles, Award, Cpu, Stethoscope, Users } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "1st Prize at NSI-45 (ISOI / IISc Bangalore)",
    category: "Symposium & Award",
    date: "Jan 2026",
    tag: "1st Prize Award",
    description: "Won 1st prize presenting 'Mitigating SANS: A Novel Wearable Device for Real-Time Non-Invasive ICP Monitoring in Spaceflight' with Ushasree B at the 45th National Symposium on Instrumentation.",
    badgeIcon: Award,
    gradient: "from-amber-600/40 via-yellow-600/20 to-purple-900/30",
    color: "text-amber-400"
  },
  {
    id: 2,
    title: "GATE 2026 (BM) AIR 154 Milestone",
    category: "National Examination",
    date: "Feb 2026",
    tag: "All India Rank 154",
    description: "Secured All India Rank 154 in GATE 2026 Biomedical Engineering paper, validating excellence in engineering mathematics, biomechanics, and medical devices.",
    badgeIcon: Sparkles,
    gradient: "from-purple-600/40 via-indigo-600/20 to-purple-950/40",
    color: "text-purple-300"
  },
  {
    id: 3,
    title: "NIPER Embedded LFA Diagnostic Reader",
    category: "R&D Prototyping",
    date: "May - June 2026",
    tag: "Raspberry Pi & OpenCV",
    description: "Engineered automated optical Lateral Flow Assay (LFA) point-of-care diagnostic reader integrating dynamic thresholding and ROI detection firmware.",
    badgeIcon: Stethoscope,
    gradient: "from-blue-600/40 via-purple-600/20 to-slate-900/40",
    color: "text-blue-400"
  },
  {
    id: 4,
    title: "Biomedical Sensors & Systems Lab (USA)",
    category: "Biomechanical Modeling",
    date: "May 2026 - Present",
    tag: "OpenSim & Mimics",
    description: "Developing personalized neuromusculoskeletal digital twin joint simulations and processing continuous kinematic telemetry datasets.",
    badgeIcon: Cpu,
    gradient: "from-emerald-600/40 via-teal-600/20 to-purple-950/40",
    color: "text-emerald-400"
  },
  {
    id: 5,
    title: "2D Hip Biotribometer Prototyping",
    category: "Hardware R&D",
    date: "2026",
    tag: "TMC2209 & Load Cells",
    description: "80x50 mm active stroke electromechanical testing platform simulating physiological figure-8 hip wear paths with dual-axis load cell shear measurement.",
    badgeIcon: Cpu,
    gradient: "from-purple-700/40 via-fuchsia-600/20 to-black",
    color: "text-purple-400"
  },
  {
    id: 6,
    title: "Chairperson — IEEE EMBS OUCE Chapter",
    category: "Leadership",
    date: "2026 - 2027",
    tag: "IEEE EMBS",
    description: "Leading the student branch chapter, conducting IoT biomedical hands-on workshops, and organizing tech symposia bridging academia and MedTech industry.",
    badgeIcon: Users,
    gradient: "from-indigo-600/40 via-purple-600/20 to-slate-900",
    color: "text-indigo-400"
  },
  {
    id: 7,
    title: "TEDxOsmaniaU 2025 Organizing Committee",
    category: "Leadership & Stage Management",
    date: "Aug - Nov 2025",
    tag: "TEDx LOR Recipient",
    description: "Spearheaded stage management, speaker transitions, and theme reveal logistics for TEDxOsmaniaU 2025, receiving official Letter of Recommendation.",
    badgeIcon: Users,
    gradient: "from-rose-600/40 via-purple-600/20 to-slate-950",
    color: "text-rose-400"
  },
  {
    id: 8,
    title: "AMTZ Visakhapatnam Industrial Exposure",
    category: "Medical Device Regulatory",
    date: "2025",
    tag: "AMTZ Cleanrooms",
    description: "Industrial visit studying medical device manufacturing plants, rapid tooling, cleanrooms, and testing facilities at Andhra Pradesh MedTech Zone.",
    badgeIcon: Stethoscope,
    gradient: "from-teal-600/40 via-purple-600/20 to-black",
    color: "text-teal-400"
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 block flex items-center gap-2">
              <Camera size={16} /> Visual Journey & Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Moments, Labs & Milestones
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mt-4 rounded-full"></div>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-xl glass border border-purple-500/20 hover:border-purple-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-950/40 transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-xl glass border border-purple-500/20 hover:border-purple-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-950/40 transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 sm:px-6 lg:px-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryItems.map((item) => {
          const Icon = item.badgeIcon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              className="flex-shrink-0 w-80 sm:w-96 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-500/50 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group shadow-lg transition-all"
            >
              {/* Background gradient banner */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-80 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/60 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-5 backdrop-blur-sm group-hover:border-purple-400/50 transition-colors">
                  <Icon size={26} className={item.color} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className={`text-xs font-semibold ${item.color}`}>
                  #{item.tag}
                </span>
                <span className="text-xs text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                  View details &rarr;
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass border border-purple-500/30 max-w-lg w-full rounded-3xl p-8 relative shadow-2xl bg-[#0c0a14]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800/60 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/90 text-purple-300 border border-purple-500/30">
                  {selectedItem.category}
                </span>
                <span className="text-xs text-slate-400">{selectedItem.date}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">
                {selectedItem.title}
              </h3>

              <div className={`p-4 rounded-2xl bg-gradient-to-r ${selectedItem.gradient} mb-5 border border-white/10`}>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                  Highlight: {selectedItem.tag}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <button
                onClick={() => setSelectedItem(null)}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
