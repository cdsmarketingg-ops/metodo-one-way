
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <ShieldCheck size={120} className="text-blue-600 relative z-10" strokeWidth={1.5} />
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-slate-900 font-black w-14 h-14 rounded-full flex items-center justify-center text-xs shadow-lg">
                7 DIAS
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-4 uppercase">Garantia Incondicional</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Você tem <strong>7 dias inteiros</strong> para testar o meu método. Se por QUALQUER motivo você achar que não é para você, ou se simplesmente não gostar da cor do PDF, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia e sem ressentimentos.
            </p>
            <p className="text-slate-900 font-bold">O risco é todo meu, e a segurança é toda sua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
