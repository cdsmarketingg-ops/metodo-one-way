import React from 'react';
import { CheckCircle, ShieldCheck, Map, HelpCircle, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="text-green-500 shrink-0" size={24} />,
      title: "Checklist DS-160 Sem Erros",
      description: "Guia de preenchimento campo a campo para blindar seu formulário e não deixar margem para recusa do cônsul."
    },
    {
      icon: <ShieldCheck className="text-green-500 shrink-0" size={24} />,
      title: "Estratégias Reais para a Entrevista",
      description: "Saiba exatamente como responder com firmeza, demonstrar estabilidade e garantir tranquilidade no Consulado."
    },
    {
      icon: <Map className="text-green-500 shrink-0" size={24} />,
      title: "Roteiro de Documentação Familiar",
      description: "Lista precisa dos documentos essenciais para comprovar seus vínculos e a solidez financeira da sua família."
    },
    {
      icon: <HelpCircle className="text-green-500 shrink-0" size={24} />,
      title: "O Plano B da Sua Família nos EUA",
      description: "Orientações práticas para viajar com conforto, economizar em dólar e desfrutar da segurança que você busca."
    }
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Imagem Proporcional em Mobile, Tablet e Desktop */}
          <div className="w-full max-w-lg lg:max-w-none lg:w-1/2 mx-auto shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#0A3161]/10 to-[#B31942]/10 rounded-3xl sm:rounded-[3rem] blur-xl"></div>
              <img 
                src="https://i.ibb.co/Gf7Y1vLw/Chat-GPT-Image-16-de-abr-de-2026-19-02-23.png" 
                alt="Pessoa sorrindo com passaporte e visto americano aprovado" 
                className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-xl w-full object-cover max-h-[380px] sm:max-h-[480px] lg:max-h-[580px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Conteúdo Textual */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Seu Plano de Segurança e Conforto
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight text-balance">
              Mais que uma Viagem: Segurança, Conforto e Liberdade nos EUA para Sua Família
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              Ter o visto americano aprovado significa ter a chave mestra de um Plano B inabalável. Quando o cenário no Brasil aperta — com alta de impostos, insegurança e incerteza política —, ter acesso aos Estados Unidos oferece estabilidade, qualidade de vida e poder de compra. Com o <strong className="font-bold text-blue-600 italic">Método Oneway</strong>, você conquista essa aprovação com autonomia total, sem pagar até <strong className="font-bold text-[#B31942]">R$ 2.500</strong> para agências intermediárias.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3.5 sm:gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <button 
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl transition-all transform active:scale-95 cta-pulse shadow-xl shadow-red-900/40 uppercase italic tracking-tight cursor-pointer text-center"
              >
                QUERO GARANTIR A SEGURANÇA DA MINHA FAMÍLIA
                <ArrowRight size={20} className="shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
