import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hammer, HardHat, Banknote } from "lucide-react";

export function CareerInfo() {
  return (
    <section className="py-20 bg-card border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1">Carreira</Badge>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30">
              <img 
                src="/images/logo.png" 
                alt="Instituto Profissionalize" 
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Por que ser um <span className="text-primary">Eletricista?</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma das profissões mais essenciais e bem pagas do mercado. Alta demanda e estabilidade garantida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-colors group">
            <CardHeader className="text-center pt-8">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Hammer className="w-8 h-8 text-blue-500" />
              </div>
              <CardTitle className="text-xl text-white">O que faz um Eletricista?</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-400">
              <p>
                Um eletricista realiza a instalação, manutenção e reparo de sistemas elétricos. Isso inclui trabalhos como a fiação elétrica, instalação de luminárias, tomadas e interruptores, resolução de problemas em circuitos elétricos e garantir a segurança elétrica em residências, edifícios comerciais ou industriais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-colors group">
            <CardHeader className="text-center pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <HardHat className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-white">Onde Trabalha Eletricista?</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-400">
              <p>
                Um eletricista pode trabalhar em áreas como construção civil, realizando instalações elétricas em residências, prédios comerciais e industriais. Além disso, eletricistas também podem atuar em indústrias, realizando manutenção elétrica em equipamentos e sistemas industriais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-colors group">
            <CardHeader className="text-center pt-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <Banknote className="w-8 h-8 text-green-500" />
              </div>
              <CardTitle className="text-xl text-white">Quanto Ganha um Eletricista?</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-400">
              <p>
                Os salários dos eletricistas podem variar significativamente dependendo de vários fatores, incluindo a localização geográfica, nível de experiência, tipo de empregador e especializações adicionais. No Brasil, o salário médio de um eletricista varia geralmente entre <span className="text-white font-bold">R$ 2.000 a R$ 5.000</span> por mês. Podendo até duplicar trabalhando como autônomo especializado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
