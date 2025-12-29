import { COURSE_CONTENT } from "@/lib/constants";

export function Modules() {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          {/* Título com círculo dourado e efeitos de destaque */}
          <div className="relative inline-block mb-6">
            {/* Círculo dourado decorativo ao redor */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full border-4 border-primary/50 shadow-[0_0_30px_rgba(245,158,11,0.6)]"></div>
            <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-full border-2 border-primary/80 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse-glow"></div>
            
            {/* Título com logo */}
            <div className="relative z-10 flex items-center justify-center gap-3 px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30">
                <img 
                  src="/images/logo.png" 
                  alt="Instituto Profissionalize" 
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                O que você vai <span className="text-primary drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]">aprender no curso</span>
              </h2>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-primary font-bold text-lg md:text-xl">Aulas em Vídeo + Apostila</p>
          </div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Um cronograma completo, do básico ao avançado, desenvolvido para te preparar para o mercado de trabalho real.
          </p>
        </div>

        <div className="mb-8">
          {/* Modules Grid - 3 colunas otimizadas e compactas */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
              {COURSE_CONTENT.modules.map((module, index) => (
                <div 
                  key={index}
                  className="group flex items-center p-1.5 md:p-2 bg-card hover:bg-white/5 border border-white/5 rounded-md transition-all hover:translate-x-1"
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs md:text-sm mr-1.5 md:mr-2 shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-white font-medium text-xs md:text-sm leading-tight">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
