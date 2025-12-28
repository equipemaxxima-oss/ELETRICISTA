import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white">INSTITUTO <span className="text-primary">PROFISSIONALIZE</span></h3>
            <p className="text-gray-500 max-w-sm">
              Formando profissionais qualificados para o mercado de trabalho com excelência e preço acessível.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary">Contato</a></li>
              <li><a href="#" className="hover:text-primary">Minha Conta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2024 Instituto Profissionalize Maxxima. Todos os direitos reservados. CNPJ – 43.774.046/0001-70
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Site 100% Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
