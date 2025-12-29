import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, PlayCircle } from "lucide-react";
import professionalImage from "@assets/generated_images/professional_electrician_working_on_a_panel.png";
import toolsBg from "@assets/generated_images/electrician_tools_background_texture.png";

export function Hero() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-32 lg:pb-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={toolsBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap w-full">
              {/* Logo em círculo dourado */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-primary flex items-center justify-center p-2 sm:p-2.5 md:p-3 shadow-[0_0_30px_rgba(245,158,11,0.6)] ring-4 ring-primary/30">
                  <img 
                    src="/images/logo.png" 
                    alt="Instituto Profissionalize" 
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              {/* Imagem +25000 alunos */}
              <img 
                src="/images/+25.000 alunos.png" 
                alt="Mais de 25.000 Alunos Formados" 
                className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-tight text-white drop-shadow-lg">
              Torne-se um <span className="text-primary">Eletricista Profissional</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 md:max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Domine a elétrica residencial e predial mesmo começando do absoluto zero. 
              Curso completo com <span className="text-white font-semibold">Certificado</span> válido em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Button 
                size="lg" 
                onClick={scrollToOffer}
                className="bg-primary hover:bg-primary/90 text-background font-bold text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse cursor-pointer w-full sm:w-auto"
              >
                Quero Garantir Minha Vaga
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span>Certificado Incluso</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-full sm:max-w-md lg:max-w-[500px] space-y-3 sm:space-y-4 mt-8 lg:mt-0">
            {/* Banner Dourado - Botão Clicável */}
            <button
              onClick={scrollToOffer}
              className="bg-primary text-black py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-center font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-pulse-glow border-2 border-black/20 w-full transition-all hover:scale-105 cursor-pointer"
            >
              <span className="line-through text-black/60 mr-1 sm:mr-2 text-xs sm:text-sm">DE R$788,00</span>
              <span className="text-lg sm:text-xl md:text-2xl">POR R$97,00</span>
              <span className="block mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm">COM BOLSA DE ESTUDOS</span>
            </button>
            
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white/5 shadow-2xl group cursor-pointer">
            <img 
              src={professionalImage} 
              alt="Eletricista Profissional" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-background fill-background" />
              </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
              <p className="text-white font-medium text-sm sm:text-base md:text-lg text-center">Ative o som do vídeo</p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
