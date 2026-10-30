import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 bg-white p-6 sm:p-10 md:p-14 lg:p-16 rounded-3xl md:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 text-center md:text-left">
          
          <div className="flex-shrink-0">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <ShieldCheck size={90} className="sm:w-28 sm:h-28 md:w-32 md:h-32 text-blue-600 relative z-10" strokeWidth={1.5} />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 font-black w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[10px] sm:text-xs shadow-lg z-20">
                7 DIAS
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm block mb-1">
              Risco Zero Para Você
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 sm:mb-4 uppercase tracking-tight">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Você tem <strong>7 dias inteiros</strong> para testar o <strong>Método Oneway</strong>. Se por QUALQUER motivo você achar que não é para você, ou se simplesmente não gostar do material, basta nos enviar um e-mail que devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia e sem ressentimentos.
            </p>
            <p className="text-slate-900 font-bold text-sm sm:text-base">
              O risco é todo meu, e a segurança é toda sua e da sua família.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guarantee;
