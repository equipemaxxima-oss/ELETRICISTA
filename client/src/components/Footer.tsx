import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Lado Esquerdo - Logo e Texto */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo com fundo dourado */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center p-3 md:p-4 shadow-[0_0_30px_rgba(245,158,11,0.6)] ring-4 ring-primary/30">
                  <img
                    src="/images/logo.png"
                    alt="Instituto Profissionalize Maxxima"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              
              {/* Texto */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  INSTITUTO <span className="text-primary">PROFISSIONALIZE MAXXIMA</span>
                </h3>
                <p className="text-gray-500 max-w-md">
                  Formando profissionais qualificados para o mercado de trabalho com excelência e preço acessível.
                </p>
              </div>
            </div>

            {/* Lado Direito - Redes Sociais */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                SIGA A GENTE NAS REDES SOCIAIS
              </h3>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/inst.profissionalizemaxxima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:from-[#9B3FC7] hover:via-[#F56040] hover:to-[#FCAF45] text-white transition-all hover:scale-110 shadow-lg hover:shadow-[0_0_30px_rgba(225,48,108,0.6)] cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/institutomaxxima/?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white transition-all hover:scale-110 shadow-lg hover:shadow-[0_0_30px_rgba(24,119,242,0.6)] cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@profissionalizemaxxima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white transition-all hover:scale-110 shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] cursor-pointer"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2025 Instituto Profissionalize Maxxima. Todos os direitos reservados. CNPJ – 43.774.046/0001-70
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
