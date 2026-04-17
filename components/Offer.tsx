
import React from 'react';
import { ShieldCheck, Check, Star, Lock, CreditCard } from 'lucide-react';

const Offer: React.FC = () => {
  const inclusions = [
    { title: "Método Oneway (Ebook Completo)", desc: "O passo a passo do zero à aprovação." },
    { title: "Guia Mestre DS-160", desc: "Como preencher sem cometer erros fatais." },
    { title: "Segredos da Entrevista Consular", desc: "Script das perguntas e como se portar." },
    { title: "Checklist de Documentação", desc: "Não esqueça nada no dia do Consulado." },
    { title: "Grupo de WhatsApp VIP", desc: "Acesso à nossa comunidade exclusiva de alunos." },
  ];

  return (
    <section id="oferta" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B31942] font-black uppercase tracking-widest text-sm mb-4 inline-block">Acesso Imediato</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Comece sua jornada hoje</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Garanta sua vaga no Método Oneway com 50% de desconto por tempo limitado.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#0A3161] rounded-[2rem] md:rounded-[4rem] shadow-2xl shadow-blue-900/20 border border-white/10 overflow-hidden isolate">
            
            {/* Left Column: Value Stack */}
            <div className="lg:w-7/12 p-8 md:p-16 bg-[#0e3b72]/30">
              <div className="flex items-center gap-2 mb-8">
                <Star size={20} fill="#FFD700" className="text-yellow-500" />
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">O que você vai receber:</h3>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <Check className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold md:text-lg mb-1">{item.title}</h4>
                      <p className="text-blue-200/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#B31942] text-white">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Star size={24} fill="white" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm md:text-base uppercase italic">+ TODOS OS 4 BÔNUS EXCLUSIVOS</h4>
                      <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-widest">Incluso apenas para a oferta atual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & CTA */}
            <div className="lg:w-5/12 p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-[#0A3161] to-[#041a36]">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B31942] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 w-full">
                <div className="mb-6 inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20">
                  <span className="text-blue-100 text-[10px] font-black tracking-widest uppercase">Oferta por Tempo Limitado</span>
                </div>

                <div className="mb-2">
                  <span className="text-slate-400 line-through text-lg font-bold">De R$ 197,00</span>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-xl md:text-2xl font-black text-[#B31942] italic mt-4">R$</span>
                  <span className="text-7xl md:text-8xl font-black text-white tracking-tighter italic">47<span className="text-3xl">,90</span></span>
                </div>
                
                <p className="text-blue-100/60 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 leading-relaxed">
                  Pagamento único. <br/>Acesso Vitalício.
                </p>

                <a 
                  href="https://pay.hotmart.com/F104259667H?checkoutMode=10&hideBillet=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 md:py-8 bg-[#B31942] hover:bg-[#911435] text-white font-black text-lg md:text-2xl rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(179,25,66,0.3)] mb-8 uppercase italic tracking-tighter flex items-center justify-center gap-3 px-4 no-underline"
                >
                  QUERO MEU VISTO AGORA
                  <Star size={20} fill="white" className="flex-shrink-0" />
                </a>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-4 opacity-50 grayscale brightness-200 grayscale-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 md:h-4" alt="Visa" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5 md:h-6" alt="Mastercard" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" className="h-4 md:h-5" alt="Pix" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 pt-4 text-[10px] md:text-xs text-blue-200/40 font-bold uppercase tracking-widest border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <Lock size={12} />
                      Pagamento Seguro
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={12} />
                      Garantia de 7 Dias
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <CreditCard size={18} className="text-[#0A3161]" />
              <span className="text-sm font-medium">Parcele em até 12x no cartão</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" />
              <span className="text-sm font-medium">Ambiente 100% criptografado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
