
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#FDFBF7]">
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#2D3436]/80 z-10" />
        <img 
          src="img/sala de estar.jpeg" 
          alt="Sala de estar do Cantinho do Kilamba Conforto"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="block text-[#FDFBF7] text-[11px] uppercase mb-8"
        >
          A melhor casa de curta duração de conforto de Luanda
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFBF7] leading-[1.1] mb-12"
        >
          Cantinho do Kilamba <br /> <span className="italic font-light">Conforto.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{ opacity }}
          className="max-w-xl mx-auto"
        >
          <p className="text-[#FDFBF7]/90 text-sm md:text-base font-light tracking-wide mb-12 leading-loose">
            Localizada na Cidade do Kilamba, condomínio Kilamba conforto. Uma casa com 6 quartos suites espaçosos, duas salas acolhedoras climatizadas, piscina, cozinha equipada, quintal encantador e internet de alta velocidade.<br />
            <span className="font-semibold text-[#D4C3A1] text-lg">Diária a partir de 40.000 Kz por quarto</span>
          </p>
          <button className="group relative overflow-hidden px-12 py-5 border border-[#FDFBF7]/40 text-[#FDFBF7] uppercase tracking-[0.3em] text-[9px] transition-all duration-700">
            <a href="https://wa.me/244924839329" target="_blank" rel="noopener noreferrer" className="relative z-10 group-hover:text-[#2D3436]">Reservar Agora</a>
            <motion.div 
              className="absolute inset-0 bg-[#FDFBF7] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]"
            />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#FDFBF7] to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
