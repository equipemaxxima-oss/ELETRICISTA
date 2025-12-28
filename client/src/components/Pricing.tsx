import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { COURSE_CONTENT } from "@/lib/constants";
import { Check, AlertTriangle, ArrowRight, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="oferta" className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/20">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold uppercase tracking-widest text-sm">Oferta por tempo limitado</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Escolha o Melhor <span className="text-primary">Pacote Para Você</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Três opções incríveis de investimento. Escolha a que mais se encaixa na sua situação.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {COURSE_CONTENT.packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col h-full transition-all duration-300 ${
                pkg.highlighted 
                  ? 'border-primary/50 bg-card shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-[1.05]' 
                  : 'border-white/10 bg-card hover:border-primary/30'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
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
                  className="block w-full"
                >
                  <Button 
                    className={`w-full h-14 font-bold uppercase tracking-wider text-base transition-all ${
                      pkg.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {pkg.highlighted ? (
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
                <div className="text-xs text-gray-500 text-center mt-4 pt-4 border-t border-white/10">
                  🔒 Pagamento seguro via Hotmart
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            <span className="text-white font-bold">Garantia de 7 Dias:</span> Se não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
