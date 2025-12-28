import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSE_CONTENT } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="py-20 bg-background border-t border-white/5">
      <div className="container px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {COURSE_CONTENT.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-card rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline py-4 text-left">
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
