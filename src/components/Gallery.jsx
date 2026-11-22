import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn, Award, Sparkles, Newspaper, Cpu, Users } from 'lucide-react';

import fasmiImg from '../assets/gallery/fasmi_conference.jpg';
import nsi45Img from '../assets/gallery/nsi45_award.jpg';
import tedxTeamImg from '../assets/gallery/tedx_team.jpg';
import tedxPresImg from '../assets/gallery/tedx_presentation.jpg';
import newspaperTeluguImg from '../assets/gallery/newspaper_telugu.jpg';
import newspaperToiImg from '../assets/gallery/newspaper_toi.jpg';
import wearableImg from '../assets/gallery/wearable_prototype.jpg';
import roboticHandImg from '../assets/gallery/robotic_hand_kiosk.jpg';

const galleryPhotos = [
  {
    id: 1,
    image: newspaperToiImg,
    title: "Times of India: Wearable Health Monitor for Knees",
    category: "Press & Media",
    tag: "Times of India Feature",
    date: "2026",
    description: "National news coverage in Times of India: 'OU team builds wearable health monitor for knees'. Developed by Thakur Vaibhav Singh and Adusumelli Manmayi under the mentorship of Dr. KE Ch Vidyasagar, utilizing wearable sensors and digital twin simulations for real-time joint stress calculation.",
    icon: Newspaper,
    accent: "text-red-400",
    border: "border-red-500/30"
  },
  {
    id: 2,
    image: nsi45Img,
    title: "1st Prize Award Ceremony — NSI-45 (IISc Bangalore & ISOI)",
    category: "National Award",
    tag: "1st Prize Winner",
    date: "Jan 30, 2026",
    description: "Receiving the 1st Prize certificate from eminent dignitaries at the 45th National Symposium on Instrumentation (NSI-45) for our research presentation: 'Mitigating SANS: A Novel Wearable Device for Real-Time Non-Invasive ICP Monitoring in Spaceflight'.",
    icon: Award,
    accent: "text-yellow-400",
    border: "border-yellow-500/30"
  },
  {
    id: 3,
    image: wearableImg,
    title: "Wearable Lower-Limb Telemetry System Architecture",
    category: "Hardware R&D",
    tag: "Prototype Telemetry",
    date: "2026",
    description: "End-to-end wearable hardware breakdown featuring the custom 3D-printed telemetry display console, wearable IMU sensor strap, and insole-instrumented athletic shoe integrated with dual FSR sensors, microcontroller, and low-latency wireless transmission.",
    icon: Cpu,
    accent: "text-purple-400",
    border: "border-purple-500/30"
  },
  {
    id: 4,
    image: newspaperTeluguImg,
    title: "Telugu Daily Feature: మోకాలి ఆరోగ్యం గుట్టు విప్పే ‘డిజిటల్ ట్విన్’",
    category: "Press & Media",
    tag: "State Press Recognition",
    date: "2026",
    description: "Prominent regional newspaper feature reporting on our smart musculoskeletal digital twin device developed by OU biomedical engineering students Thakur Vaibhav Singh and team to prevent sports injuries and aid osteoarthritis rehabilitation.",
    icon: Newspaper,
    accent: "text-blue-400",
    border: "border-blue-500/30"
  },
  {
    id: 5,
    image: roboticHandImg,
    title: "ICRHI — Smart Handshake Health Kiosk & Robotic Hand",
    category: "Medical Robotics",
    tag: "Clinical Prototype",
    date: "2026",
    description: "Multi-sensor robotic hand prototype integrating 6 servo degrees of freedom actuated via PCA9685 PWM driver, non-invasive pulse oximetry (MAX30102), IR contactless thermometry (MLX90614), and standalone diagnostic touchscreen kiosk.",
    icon: Cpu,
    accent: "text-emerald-400",
    border: "border-emerald-500/30"
  },
  {
    id: 6,
    image: tedxTeamImg,
    title: "TEDxOsmaniaU 2025 Organizing Committee",
    category: "Leadership & Events",
    tag: "TEDx Committee Member",
    date: "Nov 2025",
    description: "The core organizing team of TEDxOsmaniaU 2025 on stage. Executed comprehensive event operations, stage management, speaker transitions, and theme reveal logistics.",
    icon: Users,
    accent: "text-rose-400",
    border: "border-rose-500/30"
  },
  {
    id: 7,
    image: tedxPresImg,
    title: "TEDxOsmaniaU Speaker Memento Presentation",
    category: "Leadership",
    tag: "TEDx Organizing Committee",
    date: "2025",
    description: "Presenting the memento to the guest speaker on stage during TEDxOsmaniaU 2025 as part of the organizing committee.",
    icon: Users,
    accent: "text-amber-400",
    border: "border-amber-500/30"
  },
  {
    id: 8,
    image: fasmiImg,
    title: "Joint FASMI-MISI International Conference 2026",
    category: "International Conference",
    tag: "FASMI Biennial Meeting",
    date: "Oct 2026",
    description: "Faculty, delegates, and biomedical researchers at the Joint FASMI-MISI International Conference & FASMI Biennial Meeting 2026 hosted at Osmania University, Hyderabad.",
    icon: Sparkles,
    accent: "text-purple-300",
    border: "border-purple-500/30"
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const scrollContainerRef = useRef(null);

  // Manual scroll buttons
  const manualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // We duplicate the items to make the seamless infinite autoscroll loop
  const duplicatedPhotos = [...galleryPhotos, ...galleryPhotos];

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full filter blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <Camera size={16} /> Gallery & Moments
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Visual Highlights & Milestones
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mt-4 rounded-full"></div>
            <p className="text-slate-400 text-sm mt-3">
              Press features, prototype setups, symposium awards, and leadership moments.
            </p>
          </div>

          {/* Autoscroll indicator & Manual Controls */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
              Auto-scrolling • Hover to pause
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => manualScroll('left')}
                aria-label="Scroll gallery left"
                className="w-11 h-11 rounded-xl glass border border-purple-500/25 hover:border-purple-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-950/50 transition-all active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => manualScroll('right')}
                aria-label="Scroll gallery right"
                className="w-11 h-11 rounded-xl glass border border-purple-500/25 hover:border-purple-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-950/50 transition-all active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Autoscrolling Track */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar py-6 cursor-pointer"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="animate-marquee flex gap-6 px-4">
          {duplicatedPhotos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setSelectedPhoto(item)}
                className="flex-shrink-0 w-80 sm:w-96 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-500/60 overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] flex flex-col justify-between"
              >
                {/* Image Container with Zoom overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Zoom Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={16} />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/30 text-xs font-semibold text-purple-300">
                    <Icon size={13} className={item.accent} />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className={`font-semibold ${item.accent}`}>#{item.tag}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                    <span>Click to view full photo</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / High-Resolution Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass border border-purple-500/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 relative shadow-[0_0_60px_rgba(168,85,247,0.3)] bg-[#0c0a14]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2.5 rounded-full hover:bg-slate-800/80 transition-colors z-20"
                aria-label="Close photo preview"
              >
                <X size={22} />
              </button>

              {/* Photo Display */}
              <div className="rounded-2xl overflow-hidden mb-6 bg-black/60 border border-slate-800 max-h-[50vh] flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-950 text-purple-300 border border-purple-500/40">
                    {selectedPhoto.category}
                  </span>
                  <span className={`text-xs font-bold ${selectedPhoto.accent}`}>
                    #{selectedPhoto.tag}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedPhoto.date}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-extrabold text-white mb-3 leading-snug">
                {selectedPhoto.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedPhoto.description}
              </p>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Close Preview
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
