import { CheckCircle2 } from "lucide-react";

export function CourseBundle() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background border-y border-white/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Imagem */}
            <div className="flex justify-center md:justify-start relative">
              {/* Efeito de brilho ao redor da imagem */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-xl blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-md"></div>
              <img
                src="/images/eletrecista story12.png"
                alt="4 Cursos em 1 - Curso Eletricista Profissional"
                className="relative w-full max-w-md h-auto object-contain rounded-lg border-4 border-primary/80 ring-4 ring-primary/30 shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              />
            </div>

            {/* Conteúdo com botão */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left mt-6 md:mt-0">
              {/* Logo e Ministério da Educação acima do título */}
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                {/* Logo em círculo dourado */}
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary flex items-center justify-center p-1.5 sm:p-2 md:p-3 shadow-[0_0_30px_rgba(245,158,11,0.6)] ring-4 ring-primary/30">
                    <img 
                      src="/images/logo.png" 
                      alt="Instituto Profissionalize" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                {/* Imagem Ministério da Educação */}
                <img
                  src="/images/MINISTERIO EDUCACAO.jpg"
                  alt="Ministério da Educação - Brasil"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary uppercase tracking-wide drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] relative">
                  <span className="relative z-10">4 CURSOS EM 1</span>
                  {/* Efeito de brilho ao fundo do título */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-xs h-8 sm:h-12 md:h-16 bg-primary/30 blur-2xl rounded-full"></div>
                  </div>
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Curso eletricista profissional</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Curso NR-10</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Curso NR-25</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Curso energia Solar</span>
                  </li>
                </ul>
              </div>

              {/* Informações Adicionais */}
              <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/10">
                <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Cursos Profissionalizantes EAD 100% Online</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Material Completo Liberado Imediatamente</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>1 Ano de Acesso Completo</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certificado Reconhecido pelo MEC</span>
                  </li>
                </ul>
              </div>

              {/* Para quem é este curso? */}
              <div className="p-3 sm:p-4 md:p-6 bg-card/50 border border-white/10 rounded-xl mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center md:text-left">Para quem é este curso?</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-gray-300 text-sm sm:text-base">Iniciantes absolutos (do zero)</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-gray-300 text-sm sm:text-base">Quem busca uma nova profissão rápida</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-gray-300 text-sm sm:text-base">Sem exigência de Ensino Médio completo</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-gray-300 text-sm sm:text-base">Quem busca uma qualificação profissional com uma boa renda</span>
                  </li>
                </ul>
              </div>

              {/* Botão Dourado */}
              <button
                onClick={scrollToOffer}
                className="bg-primary hover:bg-primary/90 text-black font-extrabold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.6)] animate-pulse-glow transition-all hover:scale-105 w-full md:w-auto cursor-pointer"
              >
                QUERO SER UM ELETRICISTA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

