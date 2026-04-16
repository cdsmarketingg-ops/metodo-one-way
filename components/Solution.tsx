
import React from 'react';
import { CheckCircle, ShieldCheck, Map, HelpCircle } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: "Checklist DS-160 Sem Erros",
      description: "Um guia de preenchimento campo a campo para você não errar nenhuma informação crucial."
    },
    {
      icon: <ShieldCheck className="text-green-500" size={24} />,
      title: "Estratégias para a Entrevista",
      description: "Saiba exatamente o que responder às perguntas mais temidas do cônsul e como se vestir."
    },
    {
      icon: <Map className="text-green-500" size={24} />,
      title: "Roteiro de Documentação",
      description: "Lista completa de todos os documentos que você PRECISA levar e quais são opcionais."
    },
    {
      icon: <HelpCircle className="text-green-500" size={24} />,
      title: "Dúvidas Frequentes Resolvidas",
      description: "Compilado de casos reais para quem está desempregado, estudante ou autônomo."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://i.ibb.co/Gf7Y1vLw/Chat-GPT-Image-16-de-abr-de-2026-19-02-23.png" 
              alt="Pessoa sorrindo com passaporte" 
              className="rounded-3xl shadow-xl w-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 mb-6">
              A Solução Definitiva para sua Aprovação
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Eu reuni anos de experiência ajudando viajantes e criei o <span className="font-bold text-blue-600 italic">Método Oneway</span>. Um sistema direto ao ponto, focado em quem quer autonomia e economia.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-5 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-xl text-xl transition-all transform hover:scale-105 cta-pulse shadow-2xl shadow-red-900/40 uppercase italic tracking-tighter"
            >
              QUERO O PASSO A PASSO COMPLETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
