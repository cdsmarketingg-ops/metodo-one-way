import React from 'react';

const Biography: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Foto com moldura responsiva */}
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0 relative mx-auto">
            <div className="absolute inset-0 bg-[#B31942] rounded-3xl -rotate-6 scale-95 opacity-15"></div>
            <img 
              src="https://i.ibb.co/202NXs3H/Whats-App-Image-2026-04-16-at-18-39-01.jpg" 
              alt="Max Millian Martins" 
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Texto Biográfico */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h4 className="text-[#B31942] font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-2">
              Autor e Especialista
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0A3161] mb-4 sm:mb-6 tracking-tight">
              Max Millian Martins
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Viajante experiente e especialista em processos consulares, Max Millian Martins já ajudou muitos brasileiros aprovados a conquistarem o tão sonhado visto americano sem depender de intermediários caros.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Diante do atual momento de incerteza econômica, aumento abusivo de impostos e insegurança jurídica no Brasil, Max defende que ter as portas abertas nos Estados Unidos é a maior salvaguarda de segurança, estabilidade e conforto para sua família — e que ninguém precisa gastar até R$ 2.500 com agências para conquistar essa liberdade.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto md:mx-0">
               <div className="text-center bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#B31942] uppercase">Muitos</p>
                  <p className="text-[9px] sm:text-[11px] text-gray-500 uppercase font-black tracking-wider mt-1">Brasileiros Aprovados</p>
               </div>
               <div className="text-center bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A3161]">98%</p>
                  <p className="text-[9px] sm:text-[11px] text-gray-500 uppercase font-black tracking-wider mt-1">Taxa de Sucesso</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Biography;
