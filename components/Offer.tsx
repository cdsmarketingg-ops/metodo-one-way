
import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#0A3161] rounded-[3rem] shadow-2xl overflow-hidden text-white flex flex-col md:flex-row border-4 border-[#B31942]">
          
          <div className="md:w-5/12 p-8 md:p-12 bg-[#0e3b72]/50 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-xl font-black mb-8 text-white uppercase tracking-tighter italic">O que está incluso:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="font-medium text-blue-50">Manual do Visto (Ebook PDF)</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="font-medium text-blue-50">Guia Passo-a-Passo DS-160</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="font-medium text-blue-50">Macetes para a Entrevista</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-black text-[#B31942] bg-white px-2 py-1 rounded">
                <Check className="flex-shrink-0 mt-0.5" size={18} />
                <span>TODOS OS 3 BÔNUS GRÁTIS</span>
              </li>
            </ul>
            
            <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <ShieldCheck className="text-blue-300" size={32} />
              <p className="text-[10px] text-blue-200 uppercase font-bold tracking-widest leading-tight">Acesso imediato e seguro via Hotmart</p>
            </div>
          </div>
          
          <div className="md:w-7/12 p-8 md:p-12 text-center flex flex-col justify-center items-center bg-[#0A3161]">
            <div className="w-full max-w-sm mx-auto">
              <div className="mb-6 inline-block px-6 py-2 rounded-full bg-[#B31942]/10 border border-[#B31942]/40">
                <span className="text-[#ff5c5c] text-[10px] md:text-xs font-black tracking-widest uppercase">
                  OFERTA PATRIÓTICA LIMITADA
                </span>
              </div>
              
              <p className="text-slate-400 line-through text-lg md:text-xl mb-2 font-bold opacity-60">
                De R$ 97,00
              </p>
              
              <div className="flex items-center justify-center gap-3 md:gap-5 mb-6">
                <div className="flex flex-col text-right leading-[0.85]">
                  <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">POR</span>
                  <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">APENAS</span>
                </div>
                
                <div className="flex items-start leading-none text-white">
                  <span className="text-2xl md:text-4xl font-black mt-2 md:mt-4 mr-0.5 italic text-[#B31942]">R$</span>
                  <span className="text-7xl md:text-9xl font-black tracking-tighter italic">47<span className="text-3xl md:text-5xl">,00</span></span>
                </div>
              </div>
              
              <p className="text-blue-100/60 text-sm md:text-base font-bold mb-8 uppercase tracking-widest italic">
                E você ainda pode parcelar no cartão
              </p>
            </div>
            
            <button className="w-full py-6 bg-[#B31942] hover:bg-[#911435] text-white font-black text-2xl rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-red-900/40 mb-6 uppercase italic tracking-tighter">
              Aproveitar 50% de Desconto
            </button>
            
            <div className="flex flex-wrap justify-center gap-5 opacity-40 grayscale brightness-200">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" className="h-4" alt="Pix" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Offer;
