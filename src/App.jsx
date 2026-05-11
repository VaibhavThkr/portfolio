import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GateRank from './components/GateRank';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <GateRank />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
