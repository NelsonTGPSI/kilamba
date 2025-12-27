
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Bem-vindo ao Cantinho do Kilamba Conforto. Sou o seu concierge virtual. Como posso ajudar com a sua reserva ou estadia?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Você é o Concierge Digital do Cantinho do Kilamba Conforto, uma casa de curta duração localizada na Cidade do Kilamba, condomínio Kilamba conforto. 
          Seu tom deve ser polido, amigável e acolhedor. 
          Use termos como "Certamente", "Será um prazer", "Conforto", "Bem-estar". 
          Responda em Português. 
          Foque em fornecer informações sobre os 6 quartos suites, piscina, bar, quintal, internet e climatização.
          Diária a partir de 40.000 Kwanzas por quarto. Contacto: +244 924 839 329.
          Mantenha as respostas concisas mas informativas.`,
        }
      });

      const modelResponse = response.text || "Peço imensa desculpa, mas tive uma pequena interrupção na minha ligação. Como posso ajudá-lo de outra forma?";
      setMessages(prev => [...prev, { role: 'model', text: modelResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Lamento imenso, mas não consigo processar o seu pedido neste momento. Por favor, tente contactar o nosso concierge por telefone." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-[70]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#2D3436] rounded-full flex items-center justify-center shadow-2xl group transition-all duration-500 hover:scale-105"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-[#D4C3A1]"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
          </motion.div>
          <span className="absolute right-20 bg-white/90 backdrop-blur px-4 py-2 text-[9px] uppercase tracking-widest text-[#2D3436] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Concierge AI</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-32 right-10 w-[400px] h-[600px] bg-[#FDFBF7] shadow-2xl z-[70] flex flex-col border border-[#D4C3A1]/30 overflow-hidden"
          >
            <div className="p-6 bg-[#2D3436] text-[#D4C3A1] flex justify-between items-center">
              <div>
                <h3 className="font-serif text-lg">Cantinho Concierge</h3>
                <p className="text-[9px] uppercase tracking-widest opacity-60">Assistência de Ultra-Luxo</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 text-xs leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-[#8C7355] text-white rounded-l-lg rounded-tr-lg' 
                    : 'bg-[#D4C3A1]/10 text-[#2D3436] border border-[#D4C3A1]/30 rounded-r-lg rounded-tl-lg font-light italic'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#D4C3A1]/10 p-4 rounded-lg">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-[10px] uppercase tracking-widest text-[#8C7355]"
                    >
                      O Concierge está a processar...
                    </motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-[#D4C3A1]/20 bg-[#FDFBF7]">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Como posso servi-lo hoje?"
                  className="flex-1 bg-transparent border-b border-[#D4C3A1]/50 p-2 text-xs focus:outline-none focus:border-[#8C7355] transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="p-2 text-[#8C7355] hover:text-[#2D3436] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConcierge;
