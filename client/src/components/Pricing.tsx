import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { COURSE_CONTENT } from "@/lib/constants";
import { Check, AlertTriangle, ArrowRight, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="oferta" data-section="pricing" className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container px-3 sm:px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 text-red-400 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse relative z-10 shrink-0" />
            <span className="font-extrabold uppercase tracking-wide sm:tracking-widest text-xs sm:text-sm md:text-base lg:text-lg relative z-10 whitespace-nowrap">Oferta por tempo limitado</span>
          </div>
          
          {/* ============================================
              TEXTO OCULTO - TÍTULO E DESCRIÇÃO
              Guardado para visualização futura
              Para reativar, descomente o bloco abaixo
              ============================================ */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center p-1 sm:p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30 shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Instituto Profissionalize" 
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Escolha o Melhor <span className="text-primary">Pacote Para Você</span>
          </h2>
          </div>
          <p className="text-white max-w-2xl mx-auto">
            Duas opções incríveis de investimento. Escolha a que mais se encaixa na sua situação.
          </p> */}
        </div>

        {/* Pacote Destaque - R$ 97,00 (SUPER OFERTA ➜ Maior economia) */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-3 sm:px-4 md:px-0 overflow-visible">
          {COURSE_CONTENT.packages
            .filter((pkg) => pkg.price === "97,00")
            .map((pkg, index) => (
              <div className="relative pt-8 sm:pt-10 md:pt-12">
                {/* Badge SUPER ECONOMIA - posicionado acima do card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full font-extrabold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest whitespace-nowrap z-30 shadow-[0_0_20px_rgba(245,158,11,0.8)]">
                  ⭐ SUPER ECONOMIA ⭐
                </div>
              <Card 
                key={`highlight-${index}`} 
                className="relative flex flex-col transition-all duration-300 overflow-hidden border-4 border-primary/80 bg-card shadow-2xl shadow-primary/30 scale-100 sm:scale-105"
              >

                {/* Carimbo VÍDEO AULAS + APOSTILA - ajustado para mobile */}
                <div className="absolute top-1.5 sm:top-3 md:top-4 right-1.5 sm:right-3 md:right-4 transform rotate-12 z-10 pointer-events-none">
                  <div className="bg-primary text-black px-1.5 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-md sm:rounded-lg border-2 border-black/20 shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative">
                    <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-md sm:rounded-lg pointer-events-none"></div>
                    <p className="font-extrabold text-[8px] sm:text-[9px] md:text-xs uppercase tracking-tight leading-tight text-center relative z-10">
                      VÍDEO AULAS<br />+ APOSTILA
                    </p>
                  </div>
                </div>

                <CardHeader className="text-center pb-2 pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4 md:px-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 relative mx-auto break-words">
                    {pkg.name.includes("SUPER OFERTA") ? (
                      <span className="relative inline-block">
                        {/* Efeito de luz ao redor */}
                        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="text-primary/30 blur-xl animate-pulse-slow text-lg sm:text-xl md:text-2xl lg:text-3xl">{pkg.name}</span>
                        </span>
                        <span className="relative z-10 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] text-primary animate-pulse break-words">{pkg.name}</span>
                      </span>
                    ) : (
                      <span className="break-words">{pkg.name}</span>
                    )}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base mt-1 break-words">{pkg.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-8">
                  {/* Pricing */}
                  <div className="text-center my-3 sm:my-4 md:my-6 pb-3 sm:pb-4 md:pb-6 border-b border-white/10 w-full">
                    <p className="text-white/70 line-through text-xs sm:text-sm md:text-lg mb-1 sm:mb-2">De R$ {pkg.originalPrice}</p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <span className="text-primary font-bold text-xs sm:text-sm md:text-lg">Por apenas</span>
                    </div>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-1 sm:mt-2">
                      <span className="text-xl sm:text-2xl md:text-3xl align-top text-primary">R$</span>
                      {pkg.price}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-green-500 font-medium uppercase tracking-wide mt-1 sm:mt-2 text-center px-2">Pagamento Único • Sem Mensalidades</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 flex-1 w-full max-w-full">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start justify-center gap-1.5 sm:gap-2 md:gap-3 px-1">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-green-500" />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-white text-center flex-1 break-words leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href={pkg.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full cursor-pointer px-1"
                  >
                    <Button 
                      className="relative w-full h-12 sm:h-14 md:h-16 font-extrabold uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg transition-all bg-primary hover:bg-primary/90 text-black shadow-[0_0_40px_rgba(245,158,11,0.8),0_0_80px_rgba(245,158,11,0.6)] animate-pulse-glow cursor-pointer px-3 sm:px-4 md:px-6 overflow-hidden"
                    >
                      {/* Efeito de brilho interno */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-1.5 md:mr-2 relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] shrink-0" />
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] text-[11px] sm:text-xs md:text-sm lg:text-base">Garantir Minha Vaga Agora</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-1.5 md:ml-2 relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] shrink-0" />
                    </Button>
                  </a>

                  {/* Security badge */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 w-full px-1">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2">
                      <span className="text-base sm:text-lg">🔒</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-green-400">Pagamento seguro via Hotmart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
        </div>

        {/* ============================================
            CONTAINER OCULTO - PACOTE BÁSICO (R$ 197,00)
            Guardado para visualização futura
            Para reativar, descomente o bloco abaixo
            ============================================ */}
        {/* Outros pacotes */}
        {/* <div className="flex justify-center items-stretch px-2 sm:px-0">
          <div className="w-full max-w-md">
            {COURSE_CONTENT.packages
              .filter((pkg) => pkg.price !== "97,00")
              .map((pkg, index) => (
            <Card 
              key={index} 
                className={`relative flex flex-col h-full transition-all duration-300 overflow-hidden min-h-[500px] sm:min-h-[600px] ${
                pkg.highlighted 
                    ? 'border-primary/50 bg-card shadow-2xl shadow-primary/20' 
                  : 'border-white/10 bg-card hover:border-primary/30'
              }`}
            >
              {/* Carimbo VÍDEO AULAS + APOSTILA */}
              {/* <div className="absolute top-2 sm:top-4 right-2 sm:right-4 transform rotate-12 z-10 pointer-events-none">
                <div className="bg-primary text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black/20 shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative">
                  {/* Efeito de carimbo com borda tracejada */}
                  {/* <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-lg pointer-events-none"></div>
                  <p className="font-extrabold text-[10px] sm:text-xs uppercase tracking-tight leading-tight text-center relative z-10">
                    VÍDEO AULAS<br />+ APOSTILA
                  </p>
                </div>
              </div>

              <CardHeader className="text-center pb-2 pt-6 sm:pt-8 px-4 sm:px-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 relative mx-auto">
                  {pkg.name.includes("SUPER OFERTA") ? (
                    <span className="relative inline-block">
                      {/* Efeito de luz ao redor */}
                      {/* <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-primary/30 blur-xl animate-pulse-slow">{pkg.name}</span>
                      </span>
                      <span className="relative z-10 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] text-primary animate-pulse">{pkg.name}</span>
                    </span>
                  ) : (
                    <span className="inline-block">{pkg.name}</span>
                  )}
                </h3>
                <p className="text-white text-xs sm:text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col items-center px-4 sm:px-6">
                {/* Pricing */}
                {/* <div className="text-center my-6 pb-6 border-b border-white/10 w-full">
                  <p className="text-white/70 line-through text-sm mb-2">De R$ {pkg.originalPrice}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary font-bold">Por apenas</span>
                  </div>
                  <p className="text-5xl font-bold text-white tracking-tight mt-2">
                    <span className="text-2xl align-top text-primary">R$</span>
                    {pkg.price}
                  </p>
                  <p className="text-xs text-green-500 font-medium uppercase tracking-wide mt-2 text-center">Pagamento Único • Sem Mensalidades</p>
                </div>

                {/* Features */}
                {/* <ul className="space-y-3 mb-8 flex-1 w-full">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="flex items-start justify-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm text-white text-center flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {/* <a 
                  href={pkg.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full cursor-pointer"
                >
                  <Button 
                    className={`relative w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base transition-all px-4 sm:px-6 overflow-hidden ${
                      pkg.price === "97,00"
                        ? 'bg-primary hover:bg-primary/90 text-black shadow-[0_0_40px_rgba(245,158,11,0.8),0_0_80px_rgba(245,158,11,0.6)] animate-pulse-glow'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_rgba(37,99,235,0.6)]'
                    }`}
                  >
                    {/* Efeito de brilho interno para botão dourado */}
                    {/* {pkg.price === "97,00" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    )}
                    {pkg.price === "97,00" ? (
                      <>
                        <Zap className="w-4 h-4 mr-2 relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
                        <span className="relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">Garantir Minha Vaga Agora</span>
                        <ArrowRight className="w-4 h-4 ml-2 relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Me Inscrever</span>
                        <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
                      </>
                    )}
                  </Button>
                </a>

                {/* Security badge */}
                {/* <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <span className="text-lg">🔒</span>
                    <span className="text-sm font-semibold text-green-400">Pagamento seguro via Hotmart</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div> */}

        {/* ============================================
            CONTAINER OCULTO - SEÇÃO "ENTENDA A DIFERENÇA"
            Guardado para visualização futura
            Para reativar, descomente o bloco abaixo
            ============================================ */}
        {/* Explicação dos Pacotes */}
        {/* <div className="mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8 max-w-4xl mx-auto px-3 sm:px-4">
          <div className="bg-card/50 border-2 border-primary/30 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
              <span className="text-primary">Entenda a Diferença:</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-sm md:text-base">
              <div className="text-center space-y-2">
                <div className="inline-block bg-primary/20 text-primary px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold text-[10px] sm:text-xs uppercase mb-2">
                  Pacote Básico
                </div>
                <p className="text-white font-semibold text-sm sm:text-base">R$ 197,00</p>
                <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed px-1">
                  Curso de Eletricista + <span className="text-white font-semibold">4 Bônus Exclusivos</span> (Carta, Currículo, Estágio, 12 Livros) + Certificado
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="inline-block bg-primary text-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold text-[10px] sm:text-xs uppercase mb-2 animate-pulse-glow">
                  ⭐ MAIS COMPLETO ⭐
                </div>
                <p className="text-primary font-bold text-base sm:text-lg">R$ 97,00</p>
                <p className="text-white text-xs sm:text-sm md:text-base font-semibold leading-relaxed px-1">
                  <span className="text-primary">4 Cursos Completos</span> (Eletricista + NR-10 + NR-25 + Energia Solar) + <span className="text-white">Todos os 4 Bônus</span>
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-white/10">
              <p className="text-center text-white text-xs sm:text-sm md:text-base leading-relaxed px-2">
                <span className="text-primary font-bold">💡 Dica:</span> O pacote de <span className="text-white font-semibold">R$ 97,00</span> é o mais completo e econômico! Você ganha <span className="text-primary font-bold">3 formações complementares</span> (NR-10, NR-25 e Energia Solar) além de todos os bônus, economizando <span className="text-green-400 font-bold">R$ 691,00</span>!
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
