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
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-16 md:pb-36 lg:pt-20 lg:pb-44 overflow-hidden flag-bg text-white">
      {/* Estrelas decorativas sutis no fundo para telas grandes */}
      <div className="absolute top-10 left-10 grid grid-cols-5 gap-4 opacity-10 pointer-events-none hidden xl:grid z-0">
        {[...Array(20)].map((_, i) => (
          <Star key={i} size={18} fill="white" className="text-white" />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-4 md:mb-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          
          {/* Coluna de Conteúdo */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B31942] border border-white/20 text-white mb-4 sm:mb-6 shadow-lg shadow-red-900/20 max-w-full">
              <Star size={12} fill="white" className="shrink-0" />
              <span className="text-[9px] sm:text-[11px] md:text-xs font-black tracking-wider sm:tracking-[0.18em] uppercase italic text-center">
                Segurança, Liberdade e Futuro Para Sua Família
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] mb-4 sm:mb-6 tracking-tight text-balance">
              Garanta a Segurança da Sua Família nos EUA e Aprove o Visto{' '}
              <span className="text-[#B31942] block sm:inline">Sem Pagar Rios de Dinheiro</span>{' '}
              para Agências
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 sm:mb-8 lg:mb-10 max-w-2xl font-medium leading-relaxed opacity-95">
              Diante da <strong className="text-white font-bold">incerteza econômica, aumento abusivo de impostos e insegurança jurídica no Brasil</strong>, ter as portas dos Estados Unidos abertas é o melhor plano de segurança e conforto para quem você ama. Com o <strong className="text-white font-bold underline decoration-[#B31942]">Método Oneway</strong>, você domina a DS-160 e a entrevista consular sozinho, economizando até <strong className="text-white font-bold border-b-2 border-[#B31942]">R$ 2.500</strong> em taxas de assessoria.
            </p>

            {/* CTA Desktop */}
            <div className="hidden lg:flex flex-col items-start gap-4 w-full max-w-md">
              <button 
                onClick={scrollToOffer}
                className="w-full px-8 py-5 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-2xl text-xl flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] active:scale-95 cta-pulse shadow-2xl shadow-red-900/50 uppercase italic tracking-tight cursor-pointer"
              >
                QUERO PROTEGER MINHA FAMÍLIA
                <ArrowRight size={22} className="shrink-0" />
              </button>
              
              <div className="flex flex-col items-start px-1">
                <div className="flex items-center gap-1 mb-1.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FFD700" className="text-[#FFD700]" />)}
                </div>
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">Muitos brasileiros aprovados</p>
              </div>
            </div>
          </div>

          {/* Coluna do Vídeo VSL */}
          <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none mx-auto relative">
            <div className="relative group cursor-pointer" onClick={handlePlayVideo}>
              {/* Glow decorativo de fundo */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#B31942] rounded-3xl sm:rounded-[3rem] blur-2xl sm:blur-[50px] opacity-25 group-hover:opacity-35 transition-opacity"></div>
              
              <div className="relative z-10 p-1 sm:p-2.5 md:p-4 bg-slate-900 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                <video 
                  ref={videoRef}
                  src="https://eliabcampos.com/wp-content/uploads/2026/04/VSL-MAX.mov#t=0.001" 
                  controls={isPlaying}
                  preload="metadata"
                  playsInline 
                  className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-[2rem] object-contain bg-black"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  Seu navegador não suporta vídeos.
                </video>

                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 group-hover:bg-black/30 transition-all">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#B31942] rounded-full flex items-center justify-center text-white shadow-2xl pulse-animation mb-2 sm:mb-3">
                      <Play size={28} fill="white" className="ml-1 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm drop-shadow-md">
                      Clique para Assistir
                    </span>
                  </div>
                )}
              </div>
              
              {/* Badge de Oferta Responsivo */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 md:-top-5 md:-right-5 bg-white text-[#0A3161] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border-2 border-[#B31942] z-30 transform rotate-2">
                <p className="text-[7px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-wider text-[#B31942]">OFERTA DE HOJE</p>
                <p className="text-base sm:text-2xl md:text-3xl font-black leading-none tracking-tight italic my-0.5 text-[#0A3161]">R$ 50,00</p>
                <p className="text-[7px] sm:text-[9px] md:text-[10px] font-bold text-slate-500 uppercase">DE DESCONTO REAL</p>
              </div>
            </div>

            {/* CTA Mobile & Tablet (< 1024px) */}
            <div className="lg:hidden flex flex-col items-center gap-4 w-full max-w-md mx-auto mt-6 sm:mt-8">
              <button 
                onClick={scrollToOffer}
                className="w-full py-4 sm:py-5 px-6 bg-[#B31942] hover:bg-[#911435] text-white font-black rounded-2xl text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 cta-pulse shadow-xl shadow-red-900/50 uppercase italic tracking-tight"
              >
                QUERO PROTEGER MINHA FAMÍLIA
                <ArrowRight size={20} className="shrink-0" />
              </button>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={15} fill="#FFD700" className="text-[#FFD700]" />)}
                </div>
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">Muitos brasileiros aprovados</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Divisor em Arco Responsivo */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[100.1%] h-[40px] sm:h-[65px] md:h-[95px] lg:h-[110px] fill-white"
          style={{ transform: 'translateX(-0.05%)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C42.83,18.57,118.66,41,180,51.17,235.77,60.4,284.17,63.34,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
