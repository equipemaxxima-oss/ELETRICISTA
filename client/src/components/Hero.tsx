import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, ShieldCheck, PlayCircle } from "lucide-react";
import professionalImage from "@assets/generated_images/professional_electrician_working_on_a_panel.png";
import toolsBg from "@assets/generated_images/electrician_tools_background_texture.png";

export function Hero() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-32">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={toolsBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-semibold tracking-wide uppercase">Mais de 20.000 Alunos Formados</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Torne-se um <span className="text-primary">Eletricista Profissional</span>
            </h1>
            
            <p className="text-xl text-gray-300 md:max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Domine a elétrica residencial e predial mesmo começando do absoluto zero. 
              Curso completo com <span className="text-white font-semibold">Certificado Grátis</span> válido em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={scrollToOffer}
                className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 h-14 uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse cursor-pointer"
              >
                Quero Garantir Minha Vaga
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Certificado Incluso</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl group cursor-pointer">
            <img 
              src={professionalImage} 
              alt="Eletricista Profissional" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 text-background fill-background" />
              </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-white font-medium text-lg text-center">Assista ao vídeo de apresentação</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
