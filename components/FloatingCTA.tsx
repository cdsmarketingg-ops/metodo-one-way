
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-md animate-slideUp">
      <button 
        onClick={scrollToOffer}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black py-4 px-6 rounded-2xl shadow-2xl shadow-yellow-500/30 flex items-center justify-between group transition-all"
      >
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold tracking-widest leading-none">Aproveite agora</p>
          <p className="text-lg">QUERO MEU VISTO</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm line-through opacity-50">R$97</span>
          <span className="text-xl">R$47</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};

export default FloatingCTA;
