export function StudentTestimonial() {
  return (
    <section data-section="testimonial" className="py-20 bg-card border-y border-white/5 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Título com destaque */}
          <div className="text-center relative">
            {/* Efeito de brilho ao fundo do título */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-3xl h-24 md:h-32 bg-primary/20 blur-3xl rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-2xl h-16 md:h-20 bg-primary/30 blur-2xl rounded-full"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30 shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Instituto Profissionalize" 
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center relative z-10 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Depoimento de Aluno do Curso EAD Eletricista Profissional
                </span>
              </h2>
            </div>
            
            {/* Linha decorativa abaixo do título */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>

          {/* Vídeo com contorno destacado */}
          <div className="relative">
            {/* Efeito de brilho ao redor do vídeo - reduzido */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-xl blur-xl opacity-30"></div>
            <div className="absolute -inset-1 bg-primary/15 rounded-lg blur-md"></div>
            
            <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.2)] border-4 border-primary/60 ring-2 ring-primary/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Iul_IwLgm30"
                title="Depoimento de Aluno - Curso EAD Eletricista Profissional"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

