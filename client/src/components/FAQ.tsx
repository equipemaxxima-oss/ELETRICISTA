import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSE_CONTENT } from "@/lib/constants";

export function FAQ() {
  return (
    <section data-section="faq" className="py-20 bg-background border-t border-white/5">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.6)] ring-2 ring-primary/30">
            <img 
              src="/images/logo.png" 
              alt="Instituto Profissionalize" 
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Perguntas Frequentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {COURSE_CONTENT.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-card rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline py-4 text-left text-lg md:text-xl font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
