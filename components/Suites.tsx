
import React from 'react';
import { motion } from 'framer-motion';

const suites = [
  {
    name: 'Suite 1',
    size: 'Confortável',
    view: 'Quarto Principal',
    image: 'img/Quarto.jpeg'
  },
  {
    name: 'Suite 2',
    size: 'Privativa',
    view: 'Quarto Convidado',
    image: 'img/Quarto1.jpeg'
  },
  {
    name: 'Suite 3',
    size: 'Acolhedora',
    view: 'Cama Confortável',
    image: 'img/Quarto.jpeg'
  },
  {
    name: 'Suite 4',
    size: 'Espaçosa',
    view: 'Entretenimento',
    image: 'img/Quarto1.jpeg'
  },
  {
    name: 'Suite 5',
    size: 'Relaxante',
    view: 'Sala de Relaxamento',
    image: 'img/Quarto.jpeg'
  },
  {
    name: 'Suite 6',
    size: 'Íntima',
    view: 'Canto Íntimo',
    image: 'img/Quarto1.jpeg'
  }
];

const Suites: React.FC = () => {
  return (
    <section id="suítes" className="py-32 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] uppercase tracking-[0.5em] text-[#8C7355] block mb-6"
          >
            Refúgios de Serenidade
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-[#2D3436]"
          >
            Quartos <span className="italic">Suites</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden mb-8 group">
                <img 
                  src={suite.image} 
                  alt={`${suite.name} - ${suite.view}`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#2D3436]/60 to-transparent">
                   <button className="text-white text-[10px] tracking-[0.3em] uppercase border-b border-white/50 pb-2">Explorar Detalhes</button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-3xl text-[#2D3436] mb-2">{suite.name}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-[#8C7355]">{suite.view}</p>
                </div>
                <span className="text-sm font-light text-[#4A4A4A] py-2 px-4 border border-[#D4C3A1]/30">{suite.size}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="https://wa.me/244924839329?text=Olá, gostaria de reservar uma suite." target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-[#2D3436] text-[#FDFBF7] text-[10px] uppercase tracking-[0.3em] hover:bg-[#8C7355] transition-colors duration-500 shadow-xl shadow-[#2D3436]/10">
            Reserve Já
          </a>
        </div>
      </div>
    </section>
  );
};

export default Suites;
