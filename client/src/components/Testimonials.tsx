import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Eletricista Residencial",
      text: "Eu não sabia nada de elétrica e hoje sustento minha família com essa profissão. O certificado me ajudou a pegar meus primeiros trabalhos em construtoras.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Autônomo",
      text: "Melhor investimento que fiz. O curso é direto ao ponto e ensina o que a gente realmente usa no dia a dia. Já recuperei o valor do curso no primeiro serviço.",
      rating: 5
    },
    {
      name: "André Souza",
      role: "Ex-Pedreiro",
      text: "Trabalhava como servente e decidi mudar de vida. Hoje ganho o triplo como eletricista e trabalho menos. Recomendo demais!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos <span className="text-primary">Alunos Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
             <div className="flex text-yellow-500">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
             </div>
             <span className="text-white font-bold">4.9/5</span>
             <span className="text-gray-500">(+2000 avaliações)</span>
          </div>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="bg-card border-white/5 h-full hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-gray-300 italic mb-6 flex-grow">"{t.text}"</p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                        <p className="text-primary text-xs">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-card border-white/10 hover:bg-primary hover:text-black" />
          <CarouselNext className="hidden md:flex bg-card border-white/10 hover:bg-primary hover:text-black" />
        </Carousel>

      </div>
    </section>
  );
}
