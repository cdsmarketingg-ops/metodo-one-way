
import React, { useState, useRef } from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative pt-6 pb-12 md:pt-20 md:pb-40 overflow-hidden flag-bg text-white">
      {/* Estrelas decorativas extras no canto superior esquerdo para reforçar a identidade USA */}
      <div className="absolute top-10 left-10 grid grid-cols-5 gap-4 opacity-10 pointer-events-none hidden lg:grid z-0">
        {[...Array(20)].map((_, i) => (
          <Star key={i} size={20} fill="white" className="text-white" />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-4 md:mb-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-7xl mx-auto">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B31942] border border-white/20 text-white mb-4 shadow-lg shadow-red-900/20">
              <Star size={10} fill="white" />
              <span className="text-[8px] md:text-xs font-black tracking-[0.2em] uppercase italic">Passaporte para o Sonho Americano</span>
            </div>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tighter">
              Aprove seu visto Americano <br className="hidden xl:block"/>
              <span className="text-[#B31942]">Sem Pagar Rios de Dinheiro</span> <br className="hidden xl:block"/>
              para Agências
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 lg:mb-10 max-w-2xl font-medium leading-relaxed opacity-90 mx-auto lg:mx-0">
              O guia definitivo para dominar o formulário DS-160 e a entrevista consular. Economize até <span className="text-white font-bold border-b-2 border-[#B31942]">R$ 2.500</span> em taxas de assessoria.
            </p>

            <div className="hidden lg:flex flex-col items-start gap-8 w-full max-w-md">
              <button 
                onClick={scrollToOffer}
                className="w-full px-8 py-5 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-2xl text-xl md:text-2xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 cta-pulse shadow-2xl shadow-red-900/50 uppercase italic tracking-tighter"
              >
                QUERO SER APROVADO
                <ArrowRight size={24} />
              </button>
              
              <div className="flex flex-col items-start px-2">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFD700" className="text-[#FFD700]" />)}
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-widest">+2.500 brasileiros aprovados</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative group cursor-pointer" onClick={handlePlayVideo}>
              {/* Glow de fundo patriótico */}
              <div className="absolute -inset-4 bg-[#B31942] rounded-[3rem] blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative z-10 p-1.5 md:p-4 bg-white/10 backdrop-blur-md rounded-[1rem] md:rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                <video 
                  ref={videoRef}
                  src="https://eliabcampos.com/wp-content/uploads/2026/04/VSL-MAX.mov" 
                  controls={isPlaying}
                  playsInline 
                  className="w-full h-full rounded-[0.8rem] md:rounded-[2.5rem] object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  Seu navegador não suporta vídeos.
                </video>

                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 group-hover:bg-black/30 transition-all">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-[#B31942] rounded-full flex items-center justify-center text-white shadow-2xl pulse-animation mb-4">
                      <Play size={32} fill="white" className="ml-1" />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm drop-shadow-lg">Clique para Assistir</span>
                  </div>
                )}
              </div>
              
              {/* Badge de Oferta Estilizada */}
              <div className="absolute -top-3 -right-1 md:-right-6 bg-white text-[#0A3161] p-2 md:p-6 rounded-lg md:rounded-[2rem] shadow-2xl border border-[#B31942] z-30 animate-bounce-slow transform rotate-3 scale-90 md:scale-100">
                <p className="text-[6px] md:text-[10px] font-black uppercase tracking-widest mb-0 text-[#B31942]">OFERTA DE HOJE</p>
                <p className="text-sm md:text-4xl font-black leading-none tracking-tighter italic">R$ 50,00</p>
                <p className="text-[6px] md:text-[10px] font-bold text-slate-400 mt-0 uppercase">DE DESCONTO REAL</p>
              </div>
            </div>
          </div>

          {/* Versão Mobile do CTA */}
          <div className="lg:hidden flex flex-col items-center gap-6 w-full max-w-md mx-auto mt-6">
            <button 
              onClick={scrollToOffer}
              className="w-full px-8 py-5 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-2xl text-xl md:text-2xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 cta-pulse shadow-2xl shadow-red-900/50 uppercase italic tracking-tighter"
            >
              QUERO SER APROVADO
              <ArrowRight size={24} />
            </button>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFD700" className="text-[#FFD700]" />)}
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-widest">+2.500 brasileiros aprovados</p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Divisor em Arco Corrigido para evitar quebras nas bordas */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[100.1%] h-[60px] md:h-[110px] fill-white"
          style={{ transform: 'translateX(-0.05%)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C42.83,18.57,118.66,41,180,51.17,235.77,60.4,284.17,63.34,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
