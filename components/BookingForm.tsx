
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, solicito disponibilidade para estadia.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0AData: ${formData.date}%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/244924839329?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reservar" className="py-32 px-8 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] uppercase tracking-[0.5em] text-[#8C7355] block mb-6"
          >
            Inicie sua Jornada
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-[#2D3436] mb-8"
          >
            Reserva <span className="italic">Sua Estadia</span>
          </motion.h2>
          <p className="text-[#4A4A4A] text-sm font-light leading-loose mb-12">
            Reserve seu quarto suite no Cantinho do Kilamba Conforto.<br />
            <span className="font-bold text-[#8C7355] text-lg">Diária a partir de 40.000 Kz por quarto</span><br />
            Entre em contacto para disponibilidade.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-[#8C7355]">
              <span className="text-[10px] tracking-widest uppercase">Contacto para Reserva</span>
              <span className="w-12 h-[1px] bg-[#D4C3A1]" />
              <span className="text-[10px] font-medium">+244 924 839 329</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-[#F9F6F1] p-10 md:p-16 border border-[#D4C3A1]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Nome Completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4C3A1]/50 py-4 text-sm font-light focus:outline-none focus:border-[#8C7355] transition-colors"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4C3A1]/50 py-4 text-sm font-light focus:outline-none focus:border-[#8C7355] transition-colors"
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4C3A1]/50 py-4 text-sm font-light focus:outline-none focus:border-[#8C7355] transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Preferências ou requisitos especiais"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4C3A1]/50 py-4 text-sm font-light focus:outline-none focus:border-[#8C7355] transition-colors resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-5 border border-[#8C7355] text-[#8C7355] text-[10px] uppercase tracking-[0.4em] hover:bg-[#8C7355] hover:text-white transition-all duration-500">
              Solicitar Disponibilidade
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
