import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Engenharia de Software',
    company: 'UNOPAR',
    period: '2026 - Ano de Conclusão',
    description: 'Curso de graduação voltado a projetar sistemas e desenvolver soluções robustas.',
    type: 'education',
  },
  {
    id: 2,
    role: 'Freelancer',
    company: 'fiverr.com',
    period: '2024 - Ativo',
    description: 'Desenvolvedor PHP e JavaScript, criando sites e lojas virtuais personalizados.',
    type: 'work',
  },
  {
    id: 3,
    role: 'Marketing Digital',
    company: 'ADS/MÍDIA',
    period: '2023 - Ativo',
    description: 'Gestão de tráfego, criação de conteúdo visual e estratégias de engajamento.',
    type: 'work',
  },
  {
    id: 4,
    role: 'Marketing',
    company: 'Faculdade UNOPAR',
    period: '2022 - Ativo',
    description: 'Trabalho na criação de identidades visuais que fortalecem marcas na sociedade. Minhas funções incluem a elaboração de anúncios, gestão de mídias, desenvolvimento de sites, automações de tarefas repetitivas com Python e construção de estratégias de marca.',
    type: 'work',
  },
  {
    id: 5,
    role: 'Desenvolvimento Web',
    company: 'UNOPAR',
    period: '2022 - Concluído',
    description: 'Curso de graduação voltado a área de sites com foco em programação.',
    type: 'education',
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="jornada" className="py-24 bg-dark-900/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Jornada <span className="text-cyan-400">Profissional & Acadêmica</span>
          </h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-cyan-400 to-cyan-400/20 md:transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Dot on Line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark-900 border-2 border-cyan-400 rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}>
                <div className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyan-400/30 transition-colors bg-dark-900/80">
                  <div className={`flex items-center gap-2 mb-2 text-cyan-400 font-mono text-sm ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    <span className="uppercase tracking-wider">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};