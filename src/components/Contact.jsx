import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-slate-400 text-sm mb-1">Email</h4>
                <a href={`mailto:${resumeData.personal.email}`} className="text-lg text-white font-medium hover:text-primary transition-colors">
                  {resumeData.personal.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="text-slate-400 text-sm mb-1">Phone</h4>
                <a href={`tel:${resumeData.personal.phone}`} className="text-lg text-white font-medium hover:text-secondary transition-colors">
                  {resumeData.personal.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-slate-400 text-sm mb-1">Location</h4>
                <p className="text-lg text-white font-medium">Hyderabad, Telangana</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
