import React from 'react';
import { Gift, FileText, Layout, Star, MessageCircle } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      tag: "BÔNUS 01",
      title: "Guia de Perguntas e Respostas",
      value: "R$ 47,00",
      icon: <FileText size={36} className="text-white" />,
      desc: "As 30 perguntas mais frequentes do consulado explicadas para você responder com firmeza e segurança."
    },
    {
      tag: "BÔNUS 02",
      title: "Planilha de Gastos & Dólar",
      value: "R$ 27,00",
      icon: <Layout size={36} className="text-white" />,
      desc: "Planeje o orçamento da sua família, economize na conversão da moeda e viaje sem sustos."
    },
    {
      tag: "BÔNUS 03",
      title: "Checklist de Malas & Família",
      value: "R$ 17,00",
      icon: <Gift size={36} className="text-white" />,
      desc: "Tudo o que você e sua família precisam levar para uma viagem tranquila e confortável aos EUA."
    },
    {
      tag: "BÔNUS 04",
      title: "Grupo VIP de Alunos no WhatsApp",
      value: "R$ 97,00",
      icon: <MessageCircle size={36} className="text-white" />,
      desc: "Comunidade exclusiva para networking e troca de dicas com brasileiros que já conquistaram o visto."
    }
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#0A3161] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none hidden sm:block">
        <Star size={240} fill="white" className="translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-[#B31942] font-black tracking-widest uppercase text-xs sm:text-sm bg-white px-3 py-1 rounded inline-block">
            Presentes Exclusivos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-3 sm:mt-4 mb-3 sm:mb-4 text-balance">
            Aceleradores de Aprovação:
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-medium px-2">
            Ao garantir o Método Oneway hoje, você recebe estes 4 bônus totalmente de graça.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx} 
              className="bg-[#0e3b72] p-6 sm:p-7 md:p-8 rounded-3xl md:rounded-[2.5rem] border-2 border-white/10 relative group hover:border-[#B31942] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-block bg-[#B31942] text-white px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase mb-5 shadow-sm">
                  {bonus.tag}
                </div>
                <div className="mb-4 sm:mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {bonus.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 uppercase text-white leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-blue-100/75 mb-6 text-xs sm:text-sm leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10">
                <span className="text-blue-200/60 text-[10px] sm:text-xs uppercase font-bold">
                  Valor: <span className="line-through">{bonus.value}</span>
                </span>
                <span className="text-[#B31942] font-black text-xs sm:text-sm bg-white px-2.5 py-1 rounded-md">
                  GRÁTIS HOJE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
