import { Hero } from "@/components/Hero";
import { CourseBundle } from "@/components/CourseBundle";
import { CareerInfo } from "@/components/CareerInfo";
import { StudentTestimonial } from "@/components/StudentTestimonial";
import { TrustSection } from "@/components/TrustSection";
import { StudentReviews } from "@/components/StudentReviews";
import { Modules } from "@/components/Modules";
import { CertificateSection } from "@/components/CertificateSection";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Bonuses } from "@/components/Bonuses";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Announcement Bar */}
      <div className="bg-primary text-black py-2 md:py-3 px-4 relative overflow-hidden">
        {/* Logo no canto superior esquerdo */}
        <img 
          src="/images/logo.png" 
          alt="Instituto Profissionalize" 
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 md:h-12 lg:h-14 w-auto object-contain z-10 max-h-full"
        />
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider pl-16 sm:pl-20 md:pl-24 lg:pl-28 pr-2 sm:pr-4">
          <span className="text-center">🎓 Últimas vagas com <span className="bg-black text-primary px-2 sm:px-3 py-1 rounded-md font-extrabold text-xs sm:text-base md:text-lg animate-pulse inline-block">BOLSA DE ESTUDOS</span>!</span>
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#003d82] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-extrabold transition-all hover:scale-105 animate-soft-pulse uppercase text-xs sm:text-sm md:text-base shadow-lg border-2 border-[#00a8ff] cursor-pointer w-full sm:w-auto max-w-full"
          >
            QUERO MINHA BOLSA
          </button>
        </div>
      </div>

      <nav className="absolute w-full z-50 top-10">
        <div className="container px-4 md:px-6 flex justify-between items-center">
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Trust Badge Strip */}
        <div className="bg-primary py-6 sm:py-8 border-y border-white/10">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              {["Reconhecido pelo MEC", "Acesso Imediato", "+25.000 Alunos", "Nota 4.9/5"].map((text, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 font-bold text-black uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  <div className="bg-black/10 p-0.5 sm:p-1 rounded-full"><Check className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <CourseBundle />
        <StudentTestimonial />
        <CareerInfo />
        <TrustSection />
        <StudentReviews />
        <Modules />
        <CertificateSection />
        <Bonuses />
        <Pricing />
        <FAQ />
      </main>

      {/* Botão Flutuante */}
      <FloatingCTA />

      <Footer />
    </div>
  );
}
