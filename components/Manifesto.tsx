
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-40 px-8 bg-[#FDFBF7] flex justify-center">
      <div className="max-w-4xl text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] text-[#8C7355] block mb-12"
        >
          Filosofia
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl text-[#2D3436] leading-relaxed mb-16"
        >
          "Bem-vindo ao Cantinho do Kilamba Conforto, onde o conforto encontra o <span className="italic">luxo</span>."
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] w-24 bg-[#D4C3A1] mx-auto mb-16"
        />

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[#4A4A4A] text-lg font-light leading-loose max-w-2xl mx-auto"
        >
          Uma casa de curta duração perfeita para relaxar e desfrutar. Com 6 quartos suites espaçosos, duas salas acolhedoras, piscina refrescante, cozinha equipada, quintal encantador e climatização total com internet de alta velocidade.<br />
          <span className="font-semibold text-[#8C7355] text-xl">Diária a partir de 40.000 Kz por quarto</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Manifesto;
