import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Melo",
      role: "Visto Americano Aprovado",
      text: "Foi mais fácil do que pensávamos e a entrevista foi muito tranquila. O checklist da DS-160 e as orientações da entrevista me deram a segurança que precisava. Graças a Deus deu tudo certo!",
      img: "https://i.ibb.co/933sYZQN/Whats-App-Image-2026-04-16-at-18-49-38.jpg"
    }
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm">Resultados Reais</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3 sm:mb-4 text-balance">
            O que dizem os nossos alunos:
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Muitos brasileiros aprovados já realizaram o sonho do visto com nossa ajuda e autonomia total.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            >
              <Quote size={40} className="text-[#0A3161]/20 mb-4 sm:mb-6" />
              <p className="text-base sm:text-xl md:text-2xl text-slate-700 mb-6 sm:mb-8 italic font-medium leading-relaxed max-w-xl">
                "{t.text}"
              </p>
              
              <div className="relative mb-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-[#0A3161] p-1 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1 shadow">
                  <CheckCircle2 size={16} />
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-slate-900">{t.name}</h4>
              <p className="text-xs sm:text-sm text-green-700 font-semibold mb-3 flex items-center gap-1">
                <span>{t.role}</span>
              </p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={18} fill="#eab308" className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
