import certificateImage from "@assets/generated_images/professional_certificate_mockup.png";
import { Check, Shield } from "lucide-react";

export function CertificateSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-card to-background border-y border-white/5">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
             {/* Glow effect */}
             <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
             <img 
              src={certificateImage} 
              alt="Certificado do Curso" 
              className="relative w-full drop-shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500"
             />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-500 font-medium text-sm mb-2 border border-green-500/20">
              Certificado Incluso Gratuitamente
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Certificado Válido em <span className="text-primary">Todo o Brasil</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ao finalizar o curso, você recebe automaticamente seu certificado. Com ele, você pode comprovar sua competência e atuar legalmente em todo o território nacional.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-4 bg-background/50 rounded-xl border border-white/5">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Reconhecido pelo Mercado</h4>
                  <p className="text-sm text-gray-400">Válido para concursos públicos, horas complementares e processos seletivos.</p>
                </div>
              </div>
              
              <ul className="grid gap-3">
                 <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Carga horária detalhada</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Assinado pela diretoria</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Emissão imediata após conclusão</span>
                 </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
