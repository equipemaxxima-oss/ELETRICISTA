import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, GraduationCap, BookOpen, Award, Phone, Laptop, Lock } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 relative">
            {/* Efeito de brilho ao fundo do título */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-4xl h-24 md:h-32 bg-primary/20 blur-3xl rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white relative z-10 drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
              Este curso é confiável?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 relative z-10">
              Fique tranquilo! <span className="text-primary font-extrabold text-2xl md:text-3xl drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse-glow">Nosso curso é 100% confiável</span>. Somos do <span className="text-primary font-bold">Instituto Profissionalize Maxxima</span> e já profissionalizamos mais de <span className="text-primary font-bold">25 mil alunos</span>.
            </p>
          </div>

          {/* Container com Logo e Informações */}
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start relative">
            {/* Efeito de brilho ao redor do container */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl opacity-50 pointer-events-none"></div>
            
            {/* Informações do Curso */}
            <Card className="bg-card/50 border-2 border-primary/50 shadow-[0_0_30px_rgba(245,158,11,0.3)] relative z-10">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Cursos Profissionalizantes EAD 100% Online</h3>
                    <p className="text-gray-400">
                      Nossos cursos são profissionalizantes todos na modalidade EAD 100% on-line com 📲 vídeo aulas, Apostila completa e certificado válido 🧑‍🎓
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Material Completo Liberado Imediatamente</h3>
                    <p className="text-gray-400">
                      Todo material: Vídeo aulas, Apostila e Certificado já são liberados no momento da matrícula em um login e senha exclusivos de cada aluno em nossa plataforma, que poderá acessar pelo <Phone className="w-4 h-4 inline" /> telefone ou <Laptop className="w-4 h-4 inline" /> computador.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">1 Ano de Acesso Completo</h3>
                    <p className="text-gray-400">
                      ✔️ Tendo 1 ano de acesso podendo estudar a hora que quiser quantas vezes quiser por 1 ano
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Certificado Reconhecido pelo MEC</h3>
                    <p className="text-gray-400">
                      ✅ Nosso certificado é reconhecido como cursos complementares e temos a autorização do MEC para veicular este curso, lembrando que ele tem validade em todo território nacional 🇧🇷, e assim que tiver a conclusão do curso, pode atuar como profissional nesta área. 🎓
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Curso EAD com Prática? SIM! 💻✅</h3>
                    <p className="text-gray-400">
                      Todos os nossos cursos possuem atividades práticas, onde o professor orienta passo a passo como o aluno deve praticar, além de propor exercícios para aplicar o que foi aprendido durante as aulas! 🧠
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Site Seguro e Pagamento pela Hotmart 🔒</h3>
                    <p className="text-gray-400">
                      Nosso site é 100% seguro e todos os pagamentos são processados pela plataforma Hotmart, uma das maiores e mais confiáveis plataformas de pagamento do Brasil. Seus dados estão protegidos e o pagamento é totalmente seguro! ✅
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logo com círculo dourado */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-primary flex items-center justify-center p-4 md:p-6 shadow-[0_0_30px_rgba(245,158,11,0.6)] ring-4 ring-primary/30 flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Instituto Profissionalize" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

