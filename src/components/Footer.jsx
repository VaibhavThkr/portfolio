import React from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, ArrowUp, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-purple-500/20 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-white mb-2">{resumeData.personal.name}</h2>
            <p className="text-purple-400 font-medium text-sm">Biomedical & Embedded Systems Engineer | GATE 2026 AIR 154</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href={resumeData.personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/40 transition-all hover:scale-105"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href={resumeUrl}
              target="_blank" 
              rel="noreferrer" 
              download="Thakur_Vaibhav_Singh_Resume.pdf"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/40 transition-all hover:scale-105"
              title="Resume PDF"
            >
              <FileText size={18} />
            </a>
            <a 
              href={`mailto:${resumeData.personal.email}`} 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/40 transition-all hover:scale-105"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href={resumeData.personal.github} 
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/40 transition-all hover:scale-105"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors font-medium"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
