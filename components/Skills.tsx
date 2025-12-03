import React from 'react';
import { Code, Database, Layout, Languages, FileJson, Server } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Frontend', icon: <Layout /> },
  { name: 'CSS3', level: 90, category: 'Frontend', icon: <Code /> },
  { name: 'JavaScript', level: 85, category: 'Frontend', icon: <FileJson /> },
  { name: 'Bootstrap', level: 90, category: 'Frontend', icon: <Layout /> },
  { name: 'PHP', level: 80, category: 'Backend', icon: <Server /> },
  { name: 'phpMyAdmin', level: 75, category: 'Backend', icon: <Database /> },
  { name: 'Pacote Office', level: 95, category: 'Tools', icon: <Layout /> },
  { name: 'Inglês', level: 40, category: 'Languages', icon: <Languages /> },
  { name: 'Espanhol', level: 40, category: 'Languages', icon: <Languages /> },
];

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-transparent relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Arsenal <span className="text-cyan-400">Tecnológico</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para construir soluções robustas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-mono text-cyan-400 border-b border-white/10 pb-2">
                {category === 'Tools' ? 'Ferramentas' : category === 'Languages' ? 'Idiomas' : category}
              </h3>
              <div className="space-y-4">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                           {skill.icon || <Code size={18} />}
                        </span>
                        <span className="font-bold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">
                        {skill.category === 'Languages' ? (skill.level < 50 ? 'Básico' : 'Fluente') : `${skill.level}%`}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-dark-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.5)]" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};