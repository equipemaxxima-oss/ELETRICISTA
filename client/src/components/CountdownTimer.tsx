import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12 bg-gradient-to-b from-background to-card border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/95 border-2 border-primary/50 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <div className="p-8 md:p-12 text-center space-y-8">
              {/* Título */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                  A OPORTUNIDADE AO SEU ALCANCE, A MUDANÇA AGORA ESTÁ COM VOCÊ!
                </h3>
              </div>

              {/* Contador */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                      {formatTime(minutes)}
                    </div>
                    <div className="text-primary text-sm md:text-base font-semibold uppercase tracking-wide mt-2">
                      MINUTOS
                    </div>
                  </div>
                  <div className="text-6xl md:text-7xl font-bold text-primary">
                    :
                  </div>
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                      {formatTime(seconds)}
                    </div>
                    <div className="text-primary text-sm md:text-base font-semibold uppercase tracking-wide mt-2">
                      SEGUNDOS
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPRE OS 4 CURSOS + 4 BÔNUS POR com destaque */}
              <div className="relative">
                {/* Efeito de brilho ao fundo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full max-w-md h-16 md:h-20 bg-primary/30 blur-2xl rounded-full"></div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary uppercase tracking-wider relative z-10 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse-glow">
                  COMPRE OS 4 CURSOS + 4 BÔNUS POR
                </p>
              </div>

              {/* Oferta de Preço */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <p className="text-white line-through text-xl md:text-2xl">
                    DE R$ 788,00
                  </p>
                  <p className="text-primary text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                    R$ 97,00
                  </p>
                  <p className="text-white text-sm md:text-base font-medium">
                    PAGAMENTO ÚNICO - SEM MENSALIDADE
                  </p>
                </div>
              </div>

              {/* Botão CTA */}
              <button
                onClick={scrollToOffer}
                className="w-full md:w-auto mx-auto bg-gradient-to-b from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-extrabold text-lg md:text-xl px-8 py-4 rounded-xl uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Zap className="w-6 h-6" />
                GARANTIR MINHA VAGA AGORA
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

