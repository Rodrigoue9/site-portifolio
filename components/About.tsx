import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-900/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating Border */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-400 rounded-full animate-spin-slow"></div>
              {/* Static Border */}
              <div className="absolute inset-2 border-2 border-white/20 rounded-full"></div>
              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-dark-800 shadow-2xl">
                 {/* 
                    Updated to use the user's uploaded photo.
                    Note: Ensure the file 'rodrigo.jpg' exists in the public directory.
                 */}
                <img 
                  src="/rodrigo.jpg" 
                  alt="Rodrigo Flávio" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-dark-900 border border-cyan-400 p-3 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <span className="font-mono text-cyan-400 font-bold text-xs">DEV + MKT</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-cyan-400"></span>
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Sobre Mim</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              De Rubiataba para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mundo Digital</span>.
            </h2>
            
            <p className="text-slate-400 leading-relaxed">
              Sou estudante de Engenharia de Software, combinando a lógica da programação com a criatividade do marketing digital. 
              Minha jornada começou atendendo clientes locais em diversos setores, desde vendedores de barcos até lojas de varejo.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              Essa diversidade me ensinou que um site não é apenas código; é uma ferramenta de negócios. 
              Hoje, meu foco é criar identidades visuais e sistemas que não apenas funcionam, mas fortalecem marcas e geram resultados.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-cyan-400 w-5 h-5" />
                <span>Rubiataba, Goiás</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase className="text-cyan-400 w-5 h-5" />
                <span>Disponível para Freelance & Consultoria</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};