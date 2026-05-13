import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for internships, research opportunities, and exciting projects in Biomedical Engineering and AI in Healthcare.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shrink-0">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-slate-400 text-sm mb-1">Email</h4>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="text-lg text-white font-medium hover:text-primary transition-colors break-all"
              >
                {resumeData.personal.email}
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shrink-0">
              <Phone className="text-secondary" size={24} />
            </div>
            <div>
              <h4 className="text-slate-400 text-sm mb-1">Phone</h4>
              <a
                href={`tel:${resumeData.personal.phone.replace(/\s/g, '')}`}
                className="text-lg text-white font-medium hover:text-secondary transition-colors"
              >
                {resumeData.personal.phone}
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shrink-0">
              <FaLinkedin className="text-[#0A66C2]" size={24} />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-slate-400 text-sm mb-1">LinkedIn</h4>
                <p className="text-white font-medium">Connect on LinkedIn</p>
              </div>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white font-medium transition-colors shadow-lg shadow-[#0A66C2]/20 shrink-0"
              >
                <FaLinkedin size={20} />
                View profile
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shrink-0">
              <MapPin className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-slate-400 text-sm mb-1">Location</h4>
              <p className="text-lg text-white font-medium">Hyderabad, Telangana</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
