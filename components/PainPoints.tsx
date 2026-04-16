
import React from 'react';
import { XCircle, AlertCircle, TrendingDown, DollarSign } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <DollarSign className="text-[#B31942]" size={32} />,
      title: "Taxas Exploratórias",
      description: "Agências cobram fortunas por um serviço que você mesmo pode fazer com as instruções corretas."
    },
    {
      icon: <XCircle className="text-[#B31942]" size={32} />,
      title: "Medo do 'Não'",
      description: "A insegurança na hora da entrevista é o maior motivo de vistos negados para brasileiros."
    },
    {
      icon: <AlertCircle className="text-[#B31942]" size={32} />,
      title: "Erros de Preenchimento",
      description: "Um erro bobo na DS-160 pode custar caro. O consulado não perdoa falta de clareza."
    },
    {
      icon: <TrendingDown className="text-[#B31942]" size={32} />,
      title: "Processo Lento",
      description: "Sem um guia, você perde tempo precioso com burocracias que poderiam ser simplificadas."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#B31942] font-black uppercase tracking-tighter text-sm">O problema</span>
          <h2 className="text-xl md:text-5xl font-extrabold text-[#0A3161] mt-2 mb-4 leading-tight">
            Por que tirar o visto sozinho <br className="hidden md:block"/> parece tão difícil?
          </h2>
          <div className="w-20 h-1.5 bg-[#B31942] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-[2rem] border-2 border-transparent hover:border-[#B31942]/10 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0A3161]">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
