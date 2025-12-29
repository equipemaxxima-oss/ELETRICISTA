import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COURSE_CONTENT } from "@/lib/constants";
import { FileText, Award, Briefcase, Check } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

export function Bonuses() {
  const icons = {
    recommendation: FileText,
    resume: Briefcase,
    internship: Award
  };

  return (
    <section data-section="bonuses" className="py-20 bg-card border-y border-white/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background/0 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Bônus Exclusivos</span>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30">
              <img 
                src="/images/logo.png" 
                alt="Instituto Profissionalize" 
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Presentes Para Você <span className="text-primary">Acelerar</span>
            </h2>
          </div>
          <p className="text-white max-w-2xl mx-auto">
            Além de todo o conteúdo do curso, você receberá gratuitamente 4 ferramentas essenciais para sua entrada no mercado.
          </p>
        </div>

        {/* COMBO DE PRESENTE - 12 Livros */}
        <div className="mb-16 max-w-5xl mx-auto">
          <Card className="bg-background/90 border-2 border-primary/50 rounded-2xl overflow-hidden relative">
            {/* Badge BÔNUS 1 no canto superior direito */}
            <div className="absolute top-4 right-4 bg-primary text-black px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider z-10">
              BÔNUS 1
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              {/* Seção Esquerda - Texto */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide mb-4">
                    COMBO DE PRESENTE
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Ganhe de presente nossa biblioteca exclusiva com <span className="font-bold">12 LIVROS</span> motivacionais e de gestão de alta performance.
                  </p>
                </div>

                {/* Preços */}
                <div className="space-y-2">
                  <p className="text-red-400 line-through text-lg font-semibold">
                    VALOR REAL: R$ 250,00
                  </p>
                  <p className="text-primary text-3xl md:text-4xl font-extrabold">
                    SAI POR: R$ 0,00
                  </p>
                </div>

                {/* Badge Liberação Imediata */}
                <div className="flex items-center gap-2 border border-primary/50 rounded-lg px-4 py-2 w-fit">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold uppercase tracking-wide text-sm">
                    LIBERAÇÃO IMEDIATA
                  </span>
                </div>
              </div>

              {/* Seção Direita - Imagem dos Livros */}
              <div className="flex items-center justify-center md:justify-end relative">
                <div className="relative">
                  {/* Logo do Instituto (opcional, se houver espaço) */}
                  <img
                    src="/images/12-livros_reduzido (1).png"
                    alt="12 Livros - Combo de Presente"
                    className="w-full max-w-md h-auto object-contain rounded-lg border-4 border-primary/80 shadow-[0_0_20px_rgba(245,158,11,0.5)] ring-2 ring-primary/50"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {COURSE_CONTENT.bonuses.map((bonus, index) => {
            const Icon = icons[bonus.image as keyof typeof icons] || FileText;
            
            // Mapear imagens para cada bônus
            const bonusImages: Record<string, string> = {
              recommendation: "/images/CARTA RECOMENDACAO.png",
              resume: "/images/CURRICULO DE ALTO IMPACTO.png",
              internship: "/images/CURRICULO.png"
            };
            
            return (
              <div key={index} className="flex flex-col h-full relative">
                {/* Badge BÔNUS acima do card */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-primary text-black px-4 py-1.5 rounded-full font-extrabold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)] border-2 border-primary/50">
                    BÔNUS {index + 2}
                  </div>
                </div>
                <Card className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group flex-1 flex flex-col min-h-[320px]">
                  <CardHeader className="text-center flex-shrink-0 pt-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                      {bonus.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-1 flex flex-col justify-between">
                    <p className="text-white text-sm leading-relaxed mb-4">
                      {bonus.description}
                    </p>
                    {/* Espaço vazio para manter altura uniforme */}
                    <div className="flex-1"></div>
                  </CardContent>
                </Card>
                
                {/* Imagem abaixo do container */}
                <div className="flex justify-center mt-4">
                  <img
                    src={bonusImages[bonus.image]}
                    alt={bonus.title}
                    className="w-full max-w-xs h-auto object-contain rounded-lg border-4 border-primary/80 shadow-[0_0_20px_rgba(245,158,11,0.5)] ring-2 ring-primary/50"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contador Regressivo */}
      <CountdownTimer />
    </section>
  );
}
