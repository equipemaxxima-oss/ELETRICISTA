import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { COURSE_CONTENT } from "@/lib/constants";
import { Check, AlertTriangle, ArrowRight, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="oferta" data-section="pricing" className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container px-3 sm:px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 text-red-400 px-6 py-3 rounded-full border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse relative z-10" />
            <span className="font-extrabold uppercase tracking-widest text-base md:text-lg relative z-10">Oferta por tempo limitado</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Escolha o Melhor <span className="text-primary">Pacote Para Você</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Três opções incríveis de investimento. Escolha a que mais se encaixa na sua situação.
          </p>
        </div>

        {/* Pacote Destaque - R$ 97,00 (Combo 4 Cursos) */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-2 sm:px-0">
          {COURSE_CONTENT.packages
            .filter((pkg) => pkg.price === "97,00")
            .map((pkg, index) => (
              <Card 
                key={`highlight-${index}`} 
                className="relative flex flex-col transition-all duration-300 overflow-hidden border-4 border-primary/80 bg-card shadow-2xl shadow-primary/30 scale-100 sm:scale-105"
              >
                {/* Badge MAIS ECONÔMICO */}
                <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-primary text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap z-20 shadow-[0_0_20px_rgba(245,158,11,0.8)]">
                  ⭐ MAIS ECONÔMICO ⭐
                </div>

                {/* Carimbo VÍDEO AULAS + APOSTILA */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 transform rotate-12 z-10 pointer-events-none">
                  <div className="bg-primary text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black/20 shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative">
                    <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-lg pointer-events-none"></div>
                    <p className="font-extrabold text-[10px] sm:text-xs uppercase tracking-tight leading-tight text-center relative z-10">
                      VÍDEO AULAS<br />+ APOSTILA
                    </p>
                  </div>
                </div>

                <CardHeader className="text-center pb-2 pt-8 sm:pt-10 pr-16 sm:pr-20 pl-4 sm:pl-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{pkg.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                  {/* Pricing */}
                  <div className="text-center my-4 sm:my-6 pb-4 sm:pb-6 border-b border-white/10 w-full">
                    <p className="text-gray-500 line-through text-sm sm:text-lg mb-2">De R$ {pkg.originalPrice}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-primary font-bold text-sm sm:text-lg">Por apenas</span>
                    </div>
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-2">
                      <span className="text-2xl sm:text-3xl align-top text-primary">R$</span>
                      {pkg.price}
                    </p>
                    <p className="text-xs sm:text-sm text-green-500 font-medium uppercase tracking-wide mt-2 text-center">Pagamento Único • Sem Mensalidades</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href={pkg.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full cursor-pointer"
                  >
                    <Button 
                      className="w-full h-14 sm:h-16 font-extrabold uppercase tracking-wider text-sm sm:text-base md:text-lg transition-all bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/40 animate-pulse-glow cursor-pointer px-4 sm:px-6"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">Garantir Minha Vaga Agora</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                    </Button>
                  </a>

                  {/* Security badge */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                      <span className="text-lg">🔒</span>
                      <span className="text-sm font-semibold text-green-400">Pagamento seguro via Hotmart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Outros dois pacotes */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto items-stretch px-2 sm:px-0">
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
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 transform rotate-12 z-10 pointer-events-none">
                <div className="bg-primary text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black/20 shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative">
                  {/* Efeito de carimbo com borda tracejada */}
                  <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-lg pointer-events-none"></div>
                  <p className="font-extrabold text-[10px] sm:text-xs uppercase tracking-tight leading-tight text-center relative z-10">
                    VÍDEO AULAS<br />+ APOSTILA
                  </p>
                </div>
              </div>

              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-3 sm:px-4 py-1 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap z-20">
                  {pkg.badge}
                </div>
              )}

              <CardHeader className="text-center pb-2 pt-6 sm:pt-8 pr-12 sm:pr-16 md:pr-20 pl-4 sm:pl-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col px-4 sm:px-6">
                {/* Pricing */}
                <div className="text-center my-6 pb-6 border-b border-white/10">
                  <p className="text-gray-500 line-through text-sm mb-2">De R$ {pkg.originalPrice}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary font-bold">Por apenas</span>
                  </div>
                  <p className="text-5xl font-bold text-white tracking-tight mt-2">
                    <span className="text-2xl align-top text-primary">R$</span>
                    {pkg.price}
                  </p>
                  <p className="text-xs text-green-500 font-medium uppercase tracking-wide mt-2">Pagamento Único • Sem Mensalidades</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href={pkg.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full cursor-pointer"
                >
                  <Button 
                    className={`w-full h-12 sm:h-14 font-bold uppercase tracking-wider text-sm sm:text-base transition-all px-4 sm:px-6 ${
                      pkg.price === "97,00"
                        ? 'bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {pkg.price === "97,00" ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Garantir Minha Vaga Agora
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Me Inscrever
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </a>

                {/* Security badge */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <span className="text-lg">🔒</span>
                    <span className="text-sm font-semibold text-green-400">Pagamento seguro via Hotmart</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explicação dos Pacotes */}
        <div className="mt-12 mb-8 max-w-4xl mx-auto">
          <div className="bg-card/50 border-2 border-primary/30 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
              <span className="text-primary">Entenda a Diferença:</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
              <div className="text-center space-y-2">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full font-bold text-xs uppercase mb-2">
                  Pacote Básico
                </div>
                <p className="text-gray-300 font-semibold">R$ 27,99</p>
                <p className="text-gray-400 text-xs md:text-sm">
                  Apenas o <span className="text-white font-semibold">Curso de Eletricista</span> + Certificado
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full font-bold text-xs uppercase mb-2">
                  Pacote Completo
                </div>
                <p className="text-gray-300 font-semibold">R$ 67,99</p>
                <p className="text-gray-400 text-xs md:text-sm">
                  Curso de Eletricista + <span className="text-white font-semibold">4 Bônus Exclusivos</span> (Carta, Currículo, Estágio, 12 Livros)
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="inline-block bg-primary text-black px-3 py-1 rounded-full font-bold text-xs uppercase mb-2 animate-pulse-glow">
                  ⭐ MAIS COMPLETO ⭐
                </div>
                <p className="text-primary font-bold text-lg">R$ 97,00</p>
                <p className="text-gray-300 text-xs md:text-sm font-semibold">
                  <span className="text-primary">4 Cursos Completos</span> (Eletricista + NR-10 + NR-25 + Energia Solar) + <span className="text-white">Todos os 4 Bônus</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm md:text-base">
                <span className="text-primary font-bold">💡 Dica:</span> O pacote de <span className="text-white font-semibold">R$ 97,00</span> é o mais completo e econômico! Você ganha <span className="text-primary font-bold">3 formações complementares</span> (NR-10, NR-25 e Energia Solar) além de todos os bônus, economizando <span className="text-green-400 font-bold">R$ 691,00</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
