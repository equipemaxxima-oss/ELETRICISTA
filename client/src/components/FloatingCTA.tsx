import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [remaining, setRemaining] = useState(5);

  // Contador regressivo baseado no tempo na página
  useEffect(() => {
    const startTime = Date.now();
    
    const updateCounter = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000); // segundos
      
      if (elapsed >= 300) { // 5 minutos
        setRemaining(1);
      } else if (elapsed >= 120) { // 2 minutos
        setRemaining(2);
      } else if (elapsed >= 60) { // 1 minuto
        setRemaining(3);
      } else if (elapsed >= 30) { // 30 segundos
        setRemaining(4);
      } else {
        setRemaining(5);
      }
    };

    // Atualiza imediatamente
    updateCounter();
    
    // Atualiza a cada segundo
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.querySelector('[data-section="testimonial"]');
      const bonusesSection = document.querySelector('[data-section="bonuses"]');
      const pricingSection = document.querySelector('[data-section="pricing"]');
      const faqSection = document.querySelector('[data-section="faq"]');
      
      if (testimonialSection && bonusesSection && pricingSection && faqSection) {
        const testimonialRect = testimonialSection.getBoundingClientRect();
        const bonusesRect = bonusesSection.getBoundingClientRect();
        const pricingRect = pricingSection.getBoundingClientRect();
        const faqRect = faqSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Verifica se o depoimento do aluno já entrou na tela (já foi visto)
        const testimonialTop = testimonialRect.top;
        const testimonialBottom = testimonialRect.bottom;
        const testimonialPassed = testimonialTop < windowHeight;
        
        // Verifica se ainda está antes do pricing (entre depoimento e pricing)
        const pricingTop = pricingRect.top;
        const beforePricing = pricingTop > windowHeight;
        
        // Verifica se está no container de pagamento (Pricing)
        const isInPricing = pricingRect.top < windowHeight && pricingRect.bottom > 0;
        
        // Verifica se está no FAQ ou passou do FAQ
        const faqTop = faqRect.top;
        const faqBottom = faqRect.bottom;
        const isInFAQ = faqTop < windowHeight && faqBottom > 0;
        const passedFAQ = faqBottom < windowHeight;
        
        // Lógica:
        // 1. Aparece quando o depoimento do aluno entra na tela
        // 2. Permanece visível até o final dos bônus (até chegar no pricing)
        // 3. Some apenas no container de pagamento
        // 4. Reaparece no FAQ e continua até o final
        
        let shouldShow = false;
        
        // Garante que some completamente quando está no Pricing
        if (isInPricing) {
          shouldShow = false;
        }
        // Reaparece no FAQ e continua até o final
        else if (isInFAQ || passedFAQ) {
          shouldShow = true;
        }
        // Aparece quando o depoimento já entrou na tela e ainda não chegou no pricing
        else if (testimonialPassed && beforePricing) {
          shouldShow = true;
        }
        
        setIsVisible(shouldShow);
      } else {
        // Se não encontrar os elementos, mantém oculto
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Verifica na montagem

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3 animate-fade-in">
      {/* Selo de Preço - Botão Clicável */}
      <button
        onClick={scrollToOffer}
        className="bg-primary text-black px-3 py-2 rounded-lg border-2 border-black/20 shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative transform rotate-[-8deg] animate-pulse transition-all hover:scale-110 hover:rotate-[-5deg] cursor-pointer"
      >
        <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-lg pointer-events-none"></div>
        <div className="relative z-10 text-center whitespace-nowrap">
          <p className="text-xs line-through text-black/60 font-semibold">DE R$ 788,00</p>
          <p className="text-base font-extrabold">POR R$ 97,00</p>
          <p className="text-xs font-bold mt-0.5">COM BOLSA DE ESTUDO</p>
          <p className="text-xs font-extrabold mt-1 text-red-600 animate-pulse">{remaining} RESTANTES</p>
        </div>
      </button>

      {/* Botão Flutuante */}
      <button
        onClick={scrollToOffer}
        className="relative bg-primary hover:bg-primary/90 text-black font-extrabold text-sm md:text-base px-5 py-3 md:px-6 md:py-4 rounded-full uppercase tracking-wider shadow-[0_0_50px_rgba(245,158,11,1),0_0_100px_rgba(245,158,11,0.8)] animate-pulse-glow transition-all hover:scale-110 flex items-center gap-2 border-2 border-black/20 whitespace-nowrap cursor-pointer overflow-hidden"
      >
        {/* Efeito de brilho interno */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
        <Zap className="w-4 h-4 md:w-5 md:h-5 relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
        <span className="hidden sm:inline relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">QUERO GARANTIR MINHA VAGA</span>
        <span className="sm:hidden relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">GARANTIR VAGA</span>
      </button>
    </div>
  );
}

