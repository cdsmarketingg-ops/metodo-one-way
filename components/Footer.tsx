import React from 'react';
import { Shield, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 sm:py-14 md:py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black mb-3 text-white tracking-tight">Método Oneway</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 px-2">
            Este produto não garante a aprovação do visto, pois a decisão final cabe exclusivamente ao Consulado Americano. O Método Oneway fornece orientações estratégicas baseadas em anos de experiência prática e casos de sucesso.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <a 
              href="mailto:suporte@metodooneway.com" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm py-2 px-3 rounded-lg hover:bg-slate-800"
            >
              <Mail size={16} />
              <span>Suporte</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm py-2 px-3 rounded-lg hover:bg-slate-800"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-400 mb-6 sm:mb-8">
            <a href="#oferta" className="hover:text-white transition-colors py-1">Políticas de Privacidade</a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a href="#oferta" className="hover:text-white transition-colors py-1">Termos de Uso</a>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a href="#oferta" className="hover:text-white transition-colors py-1">Aviso Legal</a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-500 border-t border-slate-800/80 pt-6 sm:pt-8 w-full">
            <Shield size={12} className="shrink-0" />
            <span>COPYRIGHT © {new Date().getFullYear()} · MAX MILLIAN MARTINS · TODOS OS DIREITOS RESERVADOS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
