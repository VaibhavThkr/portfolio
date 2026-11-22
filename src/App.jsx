import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GateRank from './components/GateRank';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-purple-600/40 selection:text-white">
      {/* Global Ambient Background Lighting */}
      <div className="fixed inset-0 z-[-1] bg-[#050505]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <GateRank />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Gallery />
        <Activities />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
