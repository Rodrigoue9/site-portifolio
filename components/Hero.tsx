import React, { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';

const roles = [
  "Software Developer",
  "Estrategista de Marketing",
  "Especialista em E-commerce"
];

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(100);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6">
          <p className="font-mono text-cyan-400 text-sm md:text-base tracking-widest uppercase">
            Olá, eu sou
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Rodrigo Flávio<span className="text-cyan-400">.</span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-mono text-slate-300 border-r-4 border-cyan-400 pr-2 animate-pulse">
              {text}
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            Estudante de Engenharia de Software unindo <span className="text-white font-medium">código robusto</span> com <span className="text-white font-medium">estratégias de marketing</span> que convertem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="#projetos"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-dark-900 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Baixar CV
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};