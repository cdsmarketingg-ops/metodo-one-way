import React from 'react';
import { ShieldCheck, Check, Star, Lock, CreditCard, ArrowRight } from 'lucide-react';

const Offer: React.FC = () => {
  const inclusions = [
    { title: "Método Oneway (Ebook Completo)", desc: "O roteiro passo a passo do zero à aprovação sem intermediários caros." },
    { title: "Guia Mestre DS-160 Blindado", desc: "Como preencher campo a campo sem erros que geram recusa consular." },
    { title: "Segredos da Entrevista Consular", desc: "Script das perguntas reais e postura para transmitir total solidez." },
    { title: "Checklist de Documentação Familiar", desc: "Organize vínculos e comprovantes com clareza para toda a família." },
    { title: "Grupo de WhatsApp VIP Exclusivo", desc: "Comunidade fechada de alunos para suporte mútuo e networking." },
  ];

  return (
    <section id="oferta" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm mb-2 inline-block">
            Plano B Aprovado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight text-balance">
            Garanta a Segurança e o Futuro da Sua Família
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Abra as portas dos Estados Unidos com conforto e autonomia, economizando até R$ 2.500 em assessorias abusivas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#0A3161] rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-900/25 border border-white/10 overflow-hidden isolate">
            
            {/* Left Column: Value Stack */}
            <div className="lg:w-7/12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-[#0e3b72]/40">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <Star size={22} fill="#FFD700" className="text-yellow-500 shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">
                  O que você vai receber:
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 mt-0.5">
                      <Check className="text-green-400" size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug">{item.title}</h4>
                      <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 sm:pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#B31942] text-white">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Star size={20} fill="white" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs sm:text-sm md:text-base uppercase italic">
                        + TODOS OS 4 BÔNUS EXCLUSIVOS
                      </h4>
                      <p className="text-[9px] sm:text-[11px] opacity-90 uppercase tracking-wider">
                        Incluso apenas para esta oferta especial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Checkout Button */}
            <div className="lg:w-5/12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-[#0A3161] to-[#041a36]">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B31942] rounded-full blur-[90px] opacity-25 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-sm mx-auto">
                <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-1 rounded-full bg-white/10 border border-white/20">
                  <span className="text-blue-100 text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    Oferta por Tempo Limitado
                  </span>
                </div>

                <div className="mb-1 sm:mb-2">
                  <span className="text-slate-400 line-through text-base sm:text-lg font-bold">De R$ 197,00</span>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-xl sm:text-2xl font-black text-[#B31942] italic mt-2">R$</span>
                  <span className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter italic">
                    47<span className="text-2xl sm:text-3xl font-bold">,90</span>
                  </span>
                </div>
                
                <p className="text-blue-100/70 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-6 sm:mb-8 leading-relaxed">
                  Pagamento único · Acesso Vitalício
                </p>

                <a 
                  href="https://pay.hotmart.com/F104259667H?checkoutMode=10&hideBillet=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 bg-[#B31942] hover:bg-[#911435] text-white font-black text-base sm:text-lg md:text-xl rounded-2xl transition-all transform active:scale-95 shadow-[0_15px_40px_rgba(179,25,66,0.35)] mb-6 sm:mb-8 uppercase italic tracking-tight flex items-center justify-center gap-2.5 sm:gap-3 no-underline text-center leading-tight cursor-pointer"
                >
                  <span>QUERO MEU VISTO & PROTEGER MINHA FAMÍLIA</span>
                  <ArrowRight size={20} className="shrink-0" />
                </a>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-4 opacity-75 grayscale brightness-200">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 sm:h-4" alt="Visa" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 sm:h-5" alt="Mastercard" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" className="h-3.5 sm:h-4" alt="Pix" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 pt-4 text-[10px] sm:text-xs text-blue-200/60 font-bold uppercase tracking-wider border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Lock size={12} className="shrink-0" />
                      <span>Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={12} className="shrink-0" />
                      <span>Garantia de 7 Dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CreditCard size={18} className="text-[#0A3161] shrink-0" />
              <span>Parcele em até 12x no cartão</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-600 shrink-0" />
              <span>Ambiente 100% criptografado e blindado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
