import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-dark-950/80 backdrop-blur-lg border-t border-white/5 pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vamos criar algo <br />
                <span className="text-cyan-400">extraordinário?</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Seja para desenvolver um novo sistema ou elevar sua marca com marketing estratégico, estou pronto para o desafio.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:rodrigoue9oficial@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center group-hover:bg-cyan-400/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">rodrigoue9oficial@gmail.com</span>
              </a>
              
              <a href="tel:+5562995714707" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center group-hover:bg-cyan-400/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+55 62 99571-4707</span>
              </a>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-lg">Rubiataba, Goiás</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="glass-card p-8 rounded-2xl space-y-6 border border-white/5 bg-dark-900/60">
            <h3 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-slate-400">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-slate-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-mono text-slate-400">Assunto</label>
              <select 
                id="subject"
                className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
              >
                <option>Desenvolvimento Web</option>
                <option>Marketing Digital</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-slate-400">Mensagem</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-cyan-400 text-dark-900 font-bold py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <Send size={18} />
            </button>
          </form>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; 2024 Rodrigo Flávio. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-mono">Desenvolvido com <span className="text-cyan-400">&lt;/&gt;</span> e estratégia.</p>
        </div>
      </div>
    </footer>
  );
};