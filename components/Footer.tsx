
import React from 'react';
import { Shield, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-black mb-4">Manual do Visto Independente</h2>
          <p className="text-slate-400 text-sm max-w-md mb-8">
            Este produto não garante a aprovação do visto, pois a decisão final cabe exclusivamente ao Consulado Americano. O manual fornece orientações baseadas em experiências de sucesso.
          </p>
          
          <div className="flex gap-8 mb-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Mail size={18} />
              Suporte
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Instagram size={18} />
              Instagram
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 mb-8">
            <a href="#" className="hover:underline">Políticas de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Aviso Legal</a>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] text-slate-600 border-t border-slate-800 pt-8 w-full justify-center">
            <Shield size={12} />
            <span>COPYRIGHT © 2024 - MAX MILLIAN MARTINS - TODOS OS DIREITOS RESERVADOS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
