
import React from 'react';
import { Gift, FileText, Layout, Star } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      tag: "BÔNUS 01",
      title: "Guia de Perguntas e Respostas",
      value: "R$ 47,00",
      icon: <FileText size={40} className="text-white" />,
      desc: "Um PDF com as 30 perguntas mais comuns do consulado e como responder cada uma."
    },
    {
      tag: "BÔNUS 02",
      title: "Planilha de Gastos de Viagem",
      value: "R$ 27,00",
      icon: <Layout size={40} className="text-white" />,
      desc: "Controle seu orçamento desde o pedido do visto até a passagem aérea."
    },
    {
      tag: "BÔNUS 03",
      title: "Checklist de Malas e Docs",
      value: "R$ 17,00",
      icon: <Gift size={40} className="text-white" />,
      desc: "Não esqueça nada importante na hora de viajar para os Estados Unidos."
    }
  ];

  return (
    <section className="py-24 bg-[#0A3161] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        {/* Fix: Added Star to imports to resolve "Cannot find name 'Star'" error */}
        <Star size={300} fill="white" className="translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#B31942] font-black tracking-widest uppercase text-sm bg-white px-3 py-1 rounded">Presentes Exclusivos</span>
          <h2 className="text-xl md:text-5xl font-black mt-4 mb-4">Aceleradores de Aprovação:</h2>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">Levando o guia principal hoje, você recebe estes 3 bônus totalmente de graça.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-[#0e3b72] p-8 rounded-[2.5rem] border-2 border-white/5 relative group hover:border-[#B31942] transition-all duration-500">
              <div className="absolute -top-4 left-8 bg-[#B31942] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest">
                {bonus.tag}
              </div>
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-2 uppercase">{bonus.title}</h3>
              <p className="text-blue-100/70 mb-6 text-sm leading-relaxed">{bonus.desc}</p>
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-blue-200/50 text-[10px] uppercase font-bold">Valor: <span className="line-through">{bonus.value}</span></span>
                <span className="text-[#B31942] font-black text-sm bg-white px-3 py-1 rounded-lg">GRÁTIS HOJE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
