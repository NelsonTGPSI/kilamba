
import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    id: '01',
    title: 'Climatização',
    label: 'Conforto Térmico',
    description: 'Sistema de ar condicionado na sala de estar e todos os ambientes para conforto o ano todo.',
    image: 'img/sala de estar.jpeg'
  },
  {
    id: '02',
    title: 'Piscina',
    label: 'Refresco e Relaxamento',
    description: 'Piscina privativa para momentos de lazer e relaxamento ao ar livre, perfeita para dias quentes em Angola.',
    image: 'img/piscina.jpeg'
  },
  {
    id: '03',
    title: 'Cozinha',
    label: 'Bebidas e Conforto',
    description: 'Cozinha equipada para servir bebidas refrescantes e criar atmosferas acolhedoras.',
    image: 'img/cozinha.jpeg'
  },
  {
    id: '04',
    title: 'Quintal',
    label: 'Espaço Exterior',
    description: 'Quintal encantador para convívio ao ar livre e momentos de descontração familiar.',
    image: 'img/quintal.jpeg'
  },
  {
    id: '05',
    title: 'Internet',
    label: 'Conectividade Total',
    description: 'Internet de alta velocidade com TV e entretenimento disponível em toda a casa para trabalho e lazer.',
    image: 'img/TV.jpeg'
  },
  {
    id: '06',
    title: 'Suites',
    label: 'Acomodações Privadas',
    description: '6 quartos suites espaçosos e confortáveis, cada um com vista única e comodidades completas.',
    image: 'img/Quarto.jpeg'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="pilares" className="py-40 px-8 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#8C7355] block mb-6"
          >
            Os Fundamentos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-[#2D3436]"
          >
            Características da <span className="italic">Casa</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-12 shadow-2xl shadow-black/5">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  src={pillar.image} 
                  alt={`${pillar.title} - ${pillar.label}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all"
                />
                <div className="absolute top-8 left-8 text-[#FDFBF7] font-serif text-4xl opacity-80">{pillar.id}</div>
              </div>
              
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7355] mb-4 block">
                {pillar.label}
              </span>
              <h3 className="font-serif text-3xl text-[#2D3436] mb-6">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] font-light leading-loose opacity-80 group-hover:opacity-100 transition-opacity">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
