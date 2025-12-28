import { COURSE_CONTENT } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function Modules() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8 sticky top-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              O que você vai <span className="text-primary block">aprender no curso</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Um cronograma completo, do básico ao avançado, desenvolvido para te preparar para o mercado de trabalho real.
            </p>
            
            <div className="p-6 bg-card border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Para quem é este curso?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span className="text-gray-300">Iniciantes absolutos (do zero)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span className="text-gray-300">Quem busca uma nova profissão rápida</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span className="text-gray-300">Sem exigência de Ensino Médio completo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            {COURSE_CONTENT.modules.map((module, index) => (
              <div 
                key={index}
                className="group flex items-center p-4 bg-card hover:bg-white/5 border border-white/5 rounded-xl transition-all hover:translate-x-2"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4 shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                  {index + 1}
                </div>
                <p className="text-gray-200 font-medium">{module}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
