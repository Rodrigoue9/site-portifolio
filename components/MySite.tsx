import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

export const MySite: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-16 text-center border border-cyan-400/20 shadow-[0_0_50px_rgba(0,229,255,0.05)] relative overflow-hidden group bg-dark-900/60 backdrop-blur-md">
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

          <div className="flex justify-center mb-6">
            <div className="p-4 bg-dark-900/80 rounded-full border border-cyan-400/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Globe className="w-10 h-10 text-cyan-400" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meu Site
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Visite meu portal oficial para conferir mais detalhes, projetos exclusivos e conteúdos sobre desenvolvimento e marketing.
          </p>

          <a 
            href="https://devhq.online/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-dark-900 font-bold text-lg rounded hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transform hover:-translate-y-1"
          >
            Acessar devhq.online
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};