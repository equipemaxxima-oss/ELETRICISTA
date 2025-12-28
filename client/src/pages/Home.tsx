import { Hero } from "@/components/Hero";
import { CareerInfo } from "@/components/CareerInfo";
import { Modules } from "@/components/Modules";
import { CertificateSection } from "@/components/CertificateSection";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Bonuses } from "@/components/Bonuses";
import { Testimonials } from "@/components/Testimonials";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Announcement Bar */}
      <div className="bg-primary text-black text-center py-2 text-sm font-bold uppercase tracking-wider px-4">
        🎓 Últimas vagas com desconto promocional!
      </div>

      <nav className="absolute w-full z-50 top-10">
        <div className="container px-4 md:px-6 flex justify-between items-center">
           <div className="font-heading font-bold text-2xl text-white tracking-tighter">
             INSTITUTO <span className="text-primary">PROFISSIONALIZE</span>
           </div>
           <button 
             onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
             className="hidden md:block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2 rounded-full font-medium transition-colors"
           >
             Área do Aluno
           </button>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Trust Badge Strip */}
        <div className="bg-primary py-8 border-y border-white/10">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {["Reconhecido pelo MEC", "Acesso Imediato", "+20 Mil Alunos", "Nota 4.9/5"].map((text, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-black uppercase tracking-wide">
                  <div className="bg-black/10 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <CareerInfo />
        <Modules />
        <Bonuses />
        <CertificateSection />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
