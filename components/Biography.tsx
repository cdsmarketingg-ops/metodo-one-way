
import React from 'react';

const Biography: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/3 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#B31942] rounded-3xl -rotate-6 scale-95 opacity-10"></div>
            <img 
              src="https://i.ibb.co/202NXs3H/Whats-App-Image-2026-04-16-at-18-39-01.jpg" 
              alt="Max Millian Martins" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="md:w-2/3">
            <h4 className="text-[#B31942] font-black uppercase tracking-[0.2em] text-xs mb-3">Autor e Especialista</h4>
            <h2 className="text-2xl md:text-5xl font-black text-[#0A3161] mb-6 tracking-tight">Max Millian Martins</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Viajante experiente e especialista em processos consulares, Max Millian Martins já ajudou mais de 2.500 brasileiros a conseguirem o tão sonhado visto americano sem depender de intermediários.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ele acredita que o acesso aos Estados Unidos não deve ser um privilégio de quem pode pagar agências caras, mas sim um direito de quem se prepara corretamente.
            </p>
            <div className="flex gap-4">
               <div className="text-center bg-white p-6 rounded-3xl flex-1 border border-gray-50 shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-3xl font-black text-[#B31942]">2.5k</p>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Alunos</p>
               </div>
               <div className="text-center bg-white p-6 rounded-3xl flex-1 border border-gray-50 shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-3xl font-black text-[#0A3161]">98%</p>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Aprovação</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
