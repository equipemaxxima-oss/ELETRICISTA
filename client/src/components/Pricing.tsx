import { Button } from "@/components/ui/button";
import { COURSE_CONTENT } from "@/lib/constants";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="oferta" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6 max-w-5xl">
        
        {/* Urgent Banner */}
        <div className="bg-destructive text-white text-center py-2 px-4 rounded-t-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Oferta por tempo limitado
        </div>

        <div className="bg-card border border-white/10 rounded-b-2xl rounded-t-none p-6 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Comece sua Nova Carreira <span className="text-primary">Hoje Mesmo</span>
              </h2>
              
              <div className="space-y-3">
                {[
                  "Acesso Vitalício ao Curso",
                  "Certificado Válido Incluso",
                  "Aulas Práticas em Vídeo",
                  "Apostilas em PDF",
                  "Suporte ao Aluno",
                  "Garantia de 7 Dias"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background/50 p-8 rounded-2xl border border-white/10 text-center space-y-6 backdrop-blur-sm">
              <div className="space-y-1">
                <p className="text-gray-500 line-through text-lg">De R$ {COURSE_CONTENT.oldPrice}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 text-sm">Por Apenas</span>
                  <p className="text-5xl font-bold text-white tracking-tight">
                    <span className="text-2xl align-top text-primary">R$</span>
                    {COURSE_CONTENT.price}
                  </p>
                </div>
                <p className="text-sm text-green-500 font-medium uppercase tracking-wide">Pagamento Único • Sem Mensalidades</p>
              </div>

              <a 
                href="https://pay.hotmart.com/E82907236E?off=ha8efo4w&checkoutMode=10&bid=1708016430164" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full h-16 text-lg font-bold bg-green-600 hover:bg-green-700 text-white uppercase tracking-wider shadow-lg shadow-green-900/20 group cursor-pointer">
                  Sim! Quero Me Inscrever
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="text-xs text-gray-500 flex justify-center gap-4">
                <span>🔒 Pagamento Seguro</span>
                <span>⚡ Acesso Imediato</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
