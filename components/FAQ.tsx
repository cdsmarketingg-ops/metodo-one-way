import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-3 sm:py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0A3161] transition-colors pr-3 leading-snug">
          {question}
        </span>
        <div className="p-1 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors shrink-0">
          {isOpen ? <ChevronUp className="text-[#0A3161]" size={18} /> : <ChevronDown className="text-gray-500" size={18} />}
        </div>
      </button>
      {isOpen && (
        <div className="pt-2 pb-3 text-sm sm:text-base text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Por que tirar o visto agora, diante do momento atual do Brasil?",
      answer: "Justamente por conta da incerteza econômica, aumento desenfreado de impostos e instabilidade política no Brasil. O visto tem validade de até 10 anos! Conquistar o seu visto hoje garante um verdadeiro Plano B na mão: você e sua família ganham a liberdade imediata de viajar, descansar, fazer compras em moeda forte e desfrutar da segurança e do conforto americano sempre que quiserem."
    },
    {
      question: "Consigo aplicar para toda a minha família usando o Método Oneway?",
      answer: "Com certeza! O Método Oneway ensina o passo a passo tanto para aplicações individuais quanto familiares. Você aprende como vincular os formulários DS-160, como organizar os documentos conjuntos e como se comportar na entrevista em família, economizando milhares de reais que seriam cobrados por pessoa nas agências."
    },
    {
      question: "Como recebo o acesso ao ebook?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso e o link para download de todos os arquivos em PDF e bônus."
    },
    {
      question: "Eu preciso saber inglês para tirar o visto?",
      answer: "Não! No Método Oneway eu te mostro como preencher a DS-160 com tranquilidade (com as devidas traduções oficiais) e como se portar na entrevista consular, que é 100% conduzida em português dentro do Brasil."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim! O pagamento é processado pela Hotmart com ambiente 100% criptografado e seguro, aceitando Pix ou cartão de crédito em até 12x."
    },
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer: "O acesso é vitalício! Você pode baixar o material e guardar para usar sempre que precisar renovar ou auxiliar outros familiares e amigos."
    }
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#B31942] font-black uppercase tracking-widest text-xs sm:text-sm">Tire Suas Dúvidas</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3 text-balance">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Ainda tem dúvidas? Veja as perguntas mais comuns antes de garantir seu acesso:
            </p>
          </div>
          
          <div className="space-y-1 divide-y divide-gray-100 bg-white p-4 sm:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
