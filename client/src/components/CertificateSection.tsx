import certificateImage from "@assets/stock_images/certificado_original.png";
import { Check, Shield } from "lucide-react";

export function CertificateSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-card to-background border-y border-white/5">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
             {/* Glow effect - reduzido */}
             <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"></div>
             {/* Efeito de brilho ao redor da imagem - reduzido */}
             <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-xl blur-xl opacity-30"></div>
             <div className="absolute -inset-1 bg-primary/15 rounded-lg blur-md"></div>
             <img 
              src={certificateImage} 
              alt="Certificado do Curso" 
              className="relative w-full drop-shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-500 border-4 border-primary/60 ring-2 ring-primary/20 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
             />
             {/* Imagem do Ministério abaixo do certificado - centralizada e piscando */}
             <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex justify-center w-full z-10">
               <img
                 src="/images/MINISTERIO EDUCACAO.jpg"
                 alt="Ministério da Educação - Brasil"
                 className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain animate-pulse drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]"
               />
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 relative">
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-500 font-medium text-sm mb-2 border border-green-500/20">
              Certificado Incluso Gratuitamente
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Certificado Válido em <span className="text-primary">Todo o Brasil</span>
              </h2>
            </div>
            <p className="text-white text-lg">
              Ao finalizar o curso, você recebe automaticamente seu certificado. Com ele, você pode comprovar sua competência e atuar legalmente em todo o território nacional.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-4 bg-background/50 rounded-xl border border-white/5">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Reconhecido pelo Mercado</h4>
                  <p className="text-sm text-white">Válido para concursos públicos, horas complementares e processos seletivos.</p>
                </div>
              </div>
              
              <ul className="grid gap-3">
                 <li className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Carga horária detalhada</span>
                 </li>
                 <li className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Assinado pela diretoria</span>
                 </li>
                 <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Emissão digital imediata após conclusão. Você pode imprimir quantas vias que precisar.</span>
                 </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
