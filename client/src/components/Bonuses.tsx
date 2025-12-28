import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COURSE_CONTENT } from "@/lib/constants";
import { FileText, Award, Briefcase } from "lucide-react";

export function Bonuses() {
  const icons = {
    recommendation: FileText,
    resume: Briefcase,
    internship: Award
  };

  return (
    <section className="py-20 bg-card border-y border-white/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background/0 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Bônus Exclusivos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Presentes Para Você <span className="text-primary">Acelerar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Além de todo o conteúdo do curso, você receberá gratuitamente 3 ferramentas essenciais para sua entrada no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSE_CONTENT.bonuses.map((bonus, index) => {
            const Icon = icons[bonus.image as keyof typeof icons] || FileText;
            
            return (
              <Card key={index} className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                    {bonus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
