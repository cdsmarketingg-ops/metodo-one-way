
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como recebo o acesso ao ebook?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso e o link para download de todos os arquivos em PDF."
    },
    {
      question: "Eu preciso saber inglês para tirar o visto?",
      answer: "Não! No manual eu te mostro como preencher a DS-160 em português (com as traduções oficiais) e como se portar na entrevista que é feita em português no Brasil."
    },
    {
      question: "Serve para qualquer tipo de visto?",
      answer: "O foco principal deste manual é o Visto de Turismo e Negócios (B1/B2), que é o mais solicitado por brasileiros."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim! Utilizamos as plataformas de pagamento mais seguras do Brasil, com criptografia de ponta a ponta."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "O acesso é vitalício! Você pode baixar o material e guardar para usar sempre que precisar renovar ou ajudar algum familiar."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600">Ainda tem dúvidas? Veja se a sua pergunta está aqui:</p>
          </div>
          
          <div className="space-y-2">
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
