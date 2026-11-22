import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3.5 bg-black/70 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-1 group"
          >
            <span>Vaibhav</span>
            <span className="text-purple-500 group-hover:scale-125 transition-transform">.</span>
          </motion.a>
          
          <div className="hidden lg:flex space-x-7 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Resume button */}
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Thakur_Vaibhav_Singh_Resume.pdf"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
            >
              <FileText size={14} />
              <span>Resume</span>
            </motion.a>

            <motion.a 
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              className="text-slate-300 hover:text-purple-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={19} />
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Thakur_Vaibhav_Singh_Resume.pdf"
              className="flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-900/60 text-purple-300 border border-purple-500/30"
            >
              <FileText size={12} />
              Resume
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden glass absolute top-full left-0 w-full border-b border-purple-500/20 bg-black/95 backdrop-blur-xl"
        >
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-purple-950/30 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center gap-4 px-3">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-purple-400 flex items-center gap-2 text-sm"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
