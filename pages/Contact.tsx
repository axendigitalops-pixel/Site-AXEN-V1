import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import CapsuleButton from '../components/UI/CapsuleButton';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-5xl font-display font-bold text-axing-ivory mb-8">Vamos ativar seu núcleo?</h1>
          <p className="text-xl text-axing-gray mb-12">
            Conte-nos sobre seus desafios. Nossa equipe de especialistas está pronta para desenhar a estratégia ideal.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-axing-darkgray/30 border border-white/5">
                <div className="p-3 bg-axing-turquoise/10 rounded-full text-axing-turquoise">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-axing-ivory font-bold mb-1">Nosso QG</h3>
                    <p className="text-axing-gray">Av. Paulista, 0000 - Bela Vista<br/>São Paulo - SP, Brasil</p>
                </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-axing-darkgray/30 border border-white/5">
                <div className="p-3 bg-axing-turquoise/10 rounded-full text-axing-turquoise">
                    <Mail size={24} />
                </div>
                <div>
                    <h3 className="text-axing-ivory font-bold mb-1">E-mail</h3>
                    <p className="text-axing-gray">hello@axing.com.br<br/>parcerias@axing.com.br</p>
                </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-axing-darkgray/30 border border-white/5">
                <div className="p-3 bg-axing-turquoise/10 rounded-full text-axing-turquoise">
                    <Phone size={24} />
                </div>
                <div>
                    <h3 className="text-axing-ivory font-bold mb-1">Telefone</h3>
                    <p className="text-axing-gray">+55 (11) 99999-9999<br/>Seg-Sex, 9h às 18h</p>
                </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-axing-darkgray rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {formState === 'success' ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-axing-ivory mb-2">Mensagem Enviada!</h3>
                    <p className="text-axing-gray">Nossa equipe entrará em contato em breve.</p>
                    <button 
                        onClick={() => setFormState('idle')} 
                        className="mt-8 text-axing-turquoise underline"
                    >
                        Enviar outra mensagem
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-axing-ivory font-medium ml-2">Nome</label>
                            <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-axing-ivory focus:border-axing-turquoise focus:ring-1 focus:ring-axing-turquoise outline-none transition-all" placeholder="Seu nome" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-axing-ivory font-medium ml-2">Empresa</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-axing-ivory focus:border-axing-turquoise focus:ring-1 focus:ring-axing-turquoise outline-none transition-all" placeholder="Sua empresa" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-axing-ivory font-medium ml-2">E-mail Corporativo</label>
                        <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-axing-ivory focus:border-axing-turquoise focus:ring-1 focus:ring-axing-turquoise outline-none transition-all" placeholder="voce@empresa.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-axing-ivory font-medium ml-2">Interesse</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-axing-ivory focus:border-axing-turquoise focus:ring-1 focus:ring-axing-turquoise outline-none transition-all appearance-none cursor-pointer">
                            <option>Consultoria Estratégica</option>
                            <option>Desenvolvimento IA</option>
                            <option>Branding & Design</option>
                            <option>Parcerias</option>
                            <option>Outro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-axing-ivory font-medium ml-2">Mensagem</label>
                        <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-axing-ivory focus:border-axing-turquoise focus:ring-1 focus:ring-axing-turquoise outline-none transition-all resize-none" placeholder="Conte um pouco sobre seu projeto..."></textarea>
                    </div>

                    <CapsuleButton fullWidth type="submit" disabled={formState === 'submitting'}>
                        {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                    </CapsuleButton>
                </form>
            )}
        </div>
      </section>
    </div>
  );
};

export default Contact;