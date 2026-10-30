import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 400px (quando passa do topo do hero)
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-6 sm:right-6 z-50 lg:hidden flex justify-center animate-slideUp">
      <div className="w-full max-w-lg bg-[#0A3161]/95 backdrop-blur-md border border-white/20 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex items-center justify-between gap-2">
        
        {/* Informação de Preço */}
        <div className="flex flex-col pl-2 text-left shrink-0">
          <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider">Acesso Vitalício</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-[#B31942] font-black">R$</span>
            <span className="text-lg sm:text-xl font-black text-white italic tracking-tight">47,90</span>
          </div>
        </div>

        {/* Botão de Ação */}
        <div className="flex items-center gap-1.5 flex-1 justify-end">
          <button 
            onClick={scrollToOffer}
            className="flex-1 max-w-[240px] bg-[#B31942] hover:bg-[#911435] text-white font-black py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm uppercase italic tracking-tight flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>PROTEGER FAMÍLIA</span>
            <ArrowRight size={14} className="shrink-0" />
          </button>

          {/* Botão sutil de fechar se o usuário preferir */}
          <button 
            onClick={() => setIsDismissed(true)} 
            className="p-1.5 text-white/50 hover:text-white rounded-lg transition-colors shrink-0"
            aria-label="Fechar barra flutuante"
          >
            <X size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default FloatingCTA;
