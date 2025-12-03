import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { MySite } from './components/MySite';
import { Contact } from './components/Contact';
import { BackgroundAnimation } from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen text-slate-200 relative">
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <MySite />
        <Contact />
      </main>
    </div>
  );
}

export default App;