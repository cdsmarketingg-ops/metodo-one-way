import React from 'react';
import { XCircle, TrendingDown, DollarSign, ShieldAlert } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <TrendingDown className="text-[#B31942]" size={30} />,
      title: "Incerteza & Impostos no Brasil",
      description: "Aumento constante de impostos, inflação acumulada e a sensação de trabalhar cada vez mais para ter menos estabilidade financeira no país."
    },
    {
      icon: <ShieldAlert className="text-[#B31942]" size={30} />,
      title: "Insegurança Jurídica & Futuro",
      description: "A instabilidade política e jurídica deixa o futuro imprevisível. Ter uma alternativa segura para sua família deixou de ser luxo e virou prioridade."
    },
    {
      icon: <DollarSign className="text-[#B31942]" size={30} />,
      title: "Agências Cobrando R$ 2.500+",
      description: "Justo quando você precisa economizar, assessorias cobram fortunas abusivas por um preenchimento que você mesmo realiza com o roteiro certo."
    },
    {
      icon: <XCircle className="text-[#B31942]" size={30} />,
      title: "Medo do 'Não' na Entrevista",
      description: "O pavor de errar na DS-160 ou travar diante do cônsul e perder a chance de abrir as portas dos EUA com conforto para quem você ama."
    }
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm">O Cenário Atual</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0A3161] mt-2 mb-3 sm:mb-4 leading-tight text-balance">
            O Futuro no Brasil Ficou Incerto Demais <br className="hidden md:block"/> para Você Ficar sem um Plano B
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Aumento de impostos, instabilidade e agências cobrando taxas astronômicas. Ter o visto americano é a chave para a liberdade e a tranquilidade da sua família.
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#B31942] mx-auto rounded-full mt-5"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pains.map((pain, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-7 md:p-8 rounded-3xl md:rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-start transition-all duration-300 hover:shadow-[0_22px_50px_rgba(0,0,0,0.14)] hover:-translate-y-1"
            >
              <div className="mb-5 sm:mb-6 bg-red-50 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0">
                {pain.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-[#0A3161] leading-snug">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
