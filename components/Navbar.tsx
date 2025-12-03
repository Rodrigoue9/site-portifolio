import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Jornada', href: '#jornada' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, '#')}
          >
            <Code2 className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-mono text-xl font-bold text-white tracking-tighter">
              &lt;RF /&gt;
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://wa.me/5562995714707"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm font-bold text-dark-900 bg-cyan-400 rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
            >
              Vamos Conversar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-mono font-bold text-white hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562995714707"
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-8 py-3 text-lg font-bold text-dark-900 bg-cyan-400 rounded shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Vamos Conversar
          </a>
        </div>
      </div>
    </nav>
  );
};