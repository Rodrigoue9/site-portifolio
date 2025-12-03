import React from 'react';
import { ExternalLink, ShoppingCart, BarChart, BookOpen } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Loja Virtual Ecommerce',
    category: 'E-commerce Full Stack',
    description: 'Plataforma completa de vendas com painel administrativo. Desenvolvido em PHP e JavaScript.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS para Microempresas',
    category: 'Software de Gestão',
    description: 'Sistema B2B para controle de estoque e vendas, focado em micro e pequenas empresas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 3,
    title: 'Catálogo Online',
    category: 'Portal Acadêmico',
    description: 'Portal de graduações interativo para visualização de cursos e grade curricular.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  // Placeholders 4-12
  {
    id: 4,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 5,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 6,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 7,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1531297424005-06342e7f3947?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 8,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 9,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 10,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 11,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 12,
    title: 'Novo Projeto',
    category: 'Em Desenvolvimento',
    description: 'Espaço reservado para futuro projeto.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Projetos <span className="text-cyan-400">Selecionados</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Uma coleção de trabalhos que demonstram a união entre código limpo e experiência do usuário.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Browser Window Frame */}
              <div className="bg-dark-800 rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                {/* Browser Header */}
                <div className="h-8 bg-dark-950 border-b border-white/5 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>

                {/* Content Area */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                    <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-300 mb-6">{project.description}</p>
                    
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-400 text-dark-900 font-bold rounded hover:bg-white transition-colors"
                    >
                      Visitar Site
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};