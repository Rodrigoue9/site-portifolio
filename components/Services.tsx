import React from 'react';
import { Monitor, TrendingUp, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-12 h-12 text-cyan-400" />,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites institucionais, Lojas Virtuais e Sistemas SaaS focados em performance e usabilidade.',
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
    title: 'Marketing Digital',
    description: 'Gestão de Tráfego (Ads), criação de conteúdo visual e estratégias de marca para conectar empresas ao público-alvo.',
  },
  {
    icon: <PenTool className="w-12 h-12 text-cyan-400" />,
    title: 'Identidade Visual',
    description: 'Design de logos e branding completos para fortalecer a presença online da sua marca desde o primeiro contato.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-dark-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">O Que Eu Faço</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Soluções de <span className="italic font-serif">Ponta a Ponta</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-dark-900/80 border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.15)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
              
              <div className="mb-6 bg-dark-800 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};