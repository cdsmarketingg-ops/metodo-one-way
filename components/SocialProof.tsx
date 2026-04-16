
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Melo",
      role: "Aprovada",
      text: "Foi mais fácil do que pensava-mos e a entrevista foi muito tranquila, graças a Deus deu tudo certo!",
      img: "https://i.ibb.co/933sYZQN/Whats-App-Image-2026-04-16-at-18-49-38.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 mb-4">O que dizem os nossos alunos:</h2>
          <p className="text-gray-600">+2.500 pessoas já realizaram o sonho do visto com nossa ajuda.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center text-center">
              <Quote size={48} className="text-blue-500/20 mb-6" />
              <p className="text-lg md:text-2xl text-slate-700 mb-8 italic font-medium leading-relaxed">"{t.text}"</p>
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-[#0A3161] p-1 mb-6"
                referrerPolicy="no-referrer"
              />
              <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
              <p className="text-gray-500 mb-4">{t.role}</p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="#eab308" className="text-yellow-500" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
