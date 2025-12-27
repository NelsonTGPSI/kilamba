
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D3436] text-[#FDFBF7] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-2xl leading-relaxed">
            "Onde o conforto encontra o lar, mesmo na <span className="italic">curta duração</span>."
          </h2>
          <a href="https://wa.me/244924839329" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-6 bg-[#D4C3A1] text-[#2D3436] text-[10px] uppercase tracking-[0.4em] hover:bg-[#FDFBF7] transition-all duration-700 shadow-2xl">
            Reservar Agora
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase mb-8">Cantinho do Kilamba Conforto</h3>
            <p className="text-[#FDFBF7]/50 text-sm font-light leading-loose max-w-sm">
              Uma casa de curta duração localizada na Cidade do Kilamba, condomínio Kilamba conforto. Oferece 6 quartos suites, duas salas, piscina, cozinha equipada, quintal encantador, com internet e climatização total.<br />
              <span className="font-semibold text-[#D4C3A1]">Diária a partir de 40.000 Kz por quarto</span>
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-8 font-medium text-[#D4C3A1]">Privacidade</h4>
            <address className="not-italic text-sm text-[#FDFBF7]/50 font-light space-y-4">
              Cidade do Kilamba<br />
              Condomínio Kilamba Conforto, Angola
            </address>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-8 font-medium text-[#D4C3A1]">Contacto</h4>
            <ul className="text-sm text-[#FDFBF7]/50 font-light space-y-4">
              <li className="hover:text-[#FDFBF7] transition-colors cursor-pointer">info@cantinhokilamba.ao</li>
              <li>+244 924 839 329</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7]/30">
          <p>© 2024 Cantinho do Kilamba Conforto. Seu lar temporário.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
