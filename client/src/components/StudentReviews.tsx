export function StudentReviews() {
  const testimonials = [
    {
      image: "/images/DEPO.jpeg",
      alt: "Depoimento de aluno sobre o curso de eletricista profissional"
    },
    {
      image: "/images/DEPO2.jpeg",
      alt: "Depoimento de aluno sobre o curso de eletricista profissional"
    },
    {
      image: "/images/depo2 eletricista.jpeg",
      alt: "Depoimento de aluno sobre o curso de eletricista profissional"
    },
    {
      image: "/images/depoimento eletricista2.jpeg",
      alt: "Depoimento de aluno sobre o curso de eletricista profissional"
    },
    {
      image: "/images/eletricistadepoimento.jpeg",
      alt: "Depoimento de aluno sobre o curso de eletricista profissional"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background border-y border-white/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Título */}
          <div className="text-center space-y-3 sm:space-y-4 relative py-6 sm:py-8">
            {/* Efeito de luz ao fundo - múltiplas camadas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-5xl h-24 sm:h-32 md:h-40 bg-primary/30 blur-3xl rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-4xl h-16 sm:h-24 md:h-32 bg-primary/40 blur-2xl rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-3xl h-12 sm:h-16 md:h-20 bg-primary/50 blur-xl rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white relative z-10 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] text-shadow-[0_0_30px_rgba(245,158,11,0.6)] px-4">
              O que os alunos dizem sobre o nosso curso eletricista profissional?
            </h2>
          </div>

          {/* Grid de Depoimentos e Redes Sociais - 3 colunas, 2 linhas com tamanhos uniformes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-fr">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg bg-card/50 border-2 border-primary/60 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] shadow-[0_0_10px_rgba(245,158,11,0.3)]"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-contain bg-card/30 p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Redes Sociais - mesmo tamanho e proporção das imagens */}
            <div className="relative group overflow-hidden rounded-lg bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="aspect-[3/4] w-full overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 bg-primary/10">
                <p className="text-white text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 text-center">
                  Veja o que os alunos dizem no nosso:
                </p>
                <div className="flex flex-col gap-2 sm:gap-3 w-full">
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/inst.profissionalizemaxxima" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:from-[#9B3FC7] hover:via-[#F56040] hover:to-[#FCAF45] text-white font-extrabold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(225,48,108,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] sm:text-xs md:text-sm">@inst.profissionalizemaxxima</span>
                  </a>
                  {/* YouTube */}
                  <a 
                    href="https://youtube.com/@profissionalizemaxxima" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] sm:text-xs md:text-sm">Profissionalize Maxxima</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

