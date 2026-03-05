import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Zap, ShieldCheck, TrendingUp, ChevronRight, 
  Brain, Palette, BarChart3, Settings, Check, X, ArrowRight, Plus, Minus
} from 'lucide-react';
import CapsuleButton from '../components/UI/CapsuleButton';
import { Link } from 'react-router-dom';

const RevealSection: React.FC<{ children?: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : 'bg-transparent'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-display font-medium text-axen-ivory group-hover:text-axen-turquoise transition-colors">{question}</span>
        <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 group-hover:border-axen-turquoise/50 ${isOpen ? 'bg-axen-turquoise text-black rotate-45' : 'text-white group-hover:text-axen-turquoise'}`}>
          <Plus size={20} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 px-4 text-axen-gray leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = "", hoverEffect = true }) => (
  <div className={`
    relative overflow-hidden rounded-3xl border border-white/10 
    bg-gradient-to-b from-white/[0.09] to-white/[0.02] 
    backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_24px_-1px_rgba(0,0,0,0.2)]
    ${hoverEffect ? 'transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_20px_40px_-5px_rgba(0,0,0,0.4)] hover:-translate-y-1' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const About: React.FC = () => {
  const [activeMethodology, setActiveMethodology] = useState(0);

  const pillars = [
    { 
      title: "Inteligência Artificial", 
      icon: Brain, 
      desc: "Automação, velocidade e precisão. IA para reduzir atrito, aumentar resposta e escalar decisões — sem perder o humano." 
    },
    { 
      title: "Criatividade & Design", 
      icon: Palette, 
      desc: "Narrativas que prendem atenção e constroem valor. Design que guia, copy que posiciona e criação que conversa com quem decide." 
    },
    { 
      title: "Dados & Analytics", 
      icon: BarChart3, 
      desc: "Métrica sem vaidade. Instrumentação, leitura de sinais e decisões que fazem o número andar — do clique ao contrato." 
    },
    { 
      title: "Operação & Execução", 
      icon: Settings, 
      desc: "Não é plano. É rotina. Distribuição, follow-up, cadência e processos que sustentam conversão todos os dias." 
    }
  ];

  const methodology = [
    { 
      title: "Diagnóstico", 
      desc: "Mapeamos gargalos e oportunidades: mensagem, canal, funil, timing e atrito.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Direção Estratégica", 
      desc: "Clareza de posicionamento, oferta e caminho: quem decide, o que precisa entender e qual é o próximo passo.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Construção do Sistema", 
      desc: "Páginas, automações, criativos, cadências e integrações — tudo preparado para operar no mundo real.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Distribuição Intencional", 
      desc: "Mensagem na frente de quem decide: canal certo, frequência certa, contexto certo.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Otimização Contínua", 
      desc: "Ajustes baseados em sinais: conversas, propostas, fechamento e retenção. Sem achismo.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const principles = [
    { title: "Humanidade no Centro", icon: Heart, desc: "Tecnologia serve pessoas. E crescimento serve propósito." },
    { title: "Tecnologia como Extensão", icon: Zap, desc: "IA não substitui. Amplifica." },
    { title: "Transparência Radical", icon: ShieldCheck, desc: "O que não pode ser visto, não pode ser melhorado." },
    { title: "Evolução Contínua", icon: TrendingUp, desc: "Operação boa melhora todo dia, não só quando dá problema." },
    { title: "Obsessão por Métricas", icon: BarChart3, desc: "Se não mede, é opinião." }
  ];

  const faqs = [
    { q: "Em quanto tempo eu vejo resultado?", a: "Depende do ponto de partida. Primeiro vem a estrutura; depois vem a escala." },
    { q: "Vocês fazem tráfego pago?", a: "Sim — quando faz sentido no sistema. Tráfego sem conversão é desperdício." },
    { q: "O que vocês entregam exatamente?", a: "Posicionamento, páginas, automações, distribuição e rotina de otimização — com métrica real." },
    { q: "Como começa?", a: "Com diagnóstico. A gente identifica vazamentos e define o plano de implantação." },
    { q: "Quem executa: vocês ou meu time?", a: "Os dois. A Axen pode implementar tudo ou operar junto do seu time com governança e processo." },
    { q: "Como vocês medem sucesso?", a: "Não é like. É conversa, proposta, contrato e retenção." }
  ];

  return (
    <div className="bg-axen-black min-h-screen overflow-hidden font-sans selection:bg-axen-turquoise selection:text-black relative">
       {/* Background Ambient Effects */}
       <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-axen-turquoise/5 rounded-full blur-[120px] animate-pulse duration-[10000ms]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />
       </div>

       {/* 1) HERO */}
       <section className="relative pt-40 pb-24 container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
                <RevealSection>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-axen-turquoise opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-axen-turquoise"></span>
                        </span>
                        <span className="text-axen-turquoise text-xs font-bold uppercase tracking-[0.2em]">Sobre a Axen</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-axen-ivory leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
                        Crescimento não é <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-semibold">campanha.</span> <br/>
                        <span className="text-axen-turquoise font-medium">É sistema.</span>
                    </h1>
                </RevealSection>
                
                <RevealSection delay={0.2}>
                    <div className="relative pl-8 mb-10 border-l border-white/10">
                        <div className="absolute left-[-1px] top-0 h-10 w-[1px] bg-gradient-to-b from-axen-turquoise to-transparent"></div>
                        <p className="text-xl md:text-2xl text-axen-gray font-light leading-relaxed max-w-2xl">
                            A Axen integra IA, criatividade, dados e execução em uma operação única — pra transformar crescimento em rotina, com clareza e previsibilidade.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pl-8">
                        <Link to="/contact">
                            <CapsuleButton variant="primary" className="!bg-axen-turquoise !text-black hover:!bg-white hover:!scale-105 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(45,212,191,0.4)]">
                                Falar com Especialistas <ArrowRight size={18} />
                            </CapsuleButton>
                        </Link>
                        <Link to="/ecosystem">
                            <CapsuleButton variant="outline" className="hover:!border-axen-turquoise/50 hover:!text-axen-turquoise backdrop-blur-sm">
                                Conhecer o Ecossistema
                            </CapsuleButton>
                        </Link>
                    </div>
                </RevealSection>
            </div>
        </div>
      </section>

      {/* 2) MANIFESTO */}
      <section className="py-24 container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
            <RevealSection>
                <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
                    {[
                        {
                            label: "01",
                            old: "A maioria faz marketing por tarefa.",
                            new: <>A gente estrutura como <span className="text-axen-turquoise">operação.</span></>
                        },
                        {
                            label: "02",
                            old: "Visibilidade sem caminho vira barulho.",
                            new: <>Reduzir ruído e construir <span className="text-axen-turquoise">tração.</span></>
                        },
                        {
                            label: "03",
                            old: "Resultado não é evento.",
                            new: <>Resultado é <span className="text-axen-turquoise">rotina.</span></>
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="py-10 group md:flex gap-8 items-baseline hover:bg-white/[0.02] transition-colors duration-500 px-6 -mx-6 rounded-lg">
                            <span className="text-axen-gray/30 font-mono text-sm font-bold mb-3 md:mb-0 block w-12 shrink-0 group-hover:text-axen-turquoise transition-colors">
                                {item.label}
                            </span>
                            <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8 items-baseline">
                                <p className="text-lg text-white/40 font-medium group-hover:text-white/60 transition-colors duration-300">
                                    {item.old}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                                    {item.new}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </RevealSection>
        </div>
      </section>

      {/* 3) O QUE SOMOS / O QUE NÃO SOMOS */}
      <section className="py-24 container mx-auto px-6 z-10 relative">
        <RevealSection className="mb-16 text-center">
            <h2 className="text-4xl font-display font-bold text-axen-ivory mb-4">Identidade & Posicionamento</h2>
            <p className="text-axen-gray text-lg">O que nos separa do mercado tradicional.</p>
        </RevealSection>

        <div className="space-y-6">
            {[
                {
                    negative: "Uma agência de post e “conteúdo por calendário”.",
                    positive: "Uma infraestrutura de crescimento que une estratégia, execução e análise."
                },
                {
                    negative: "Um fornecedor de tráfego sem contexto e sem funil.",
                    positive: "Um sistema de operação digital que organiza presença, demanda e conversão."
                },
                {
                    negative: "Um projeto bonito que não vira demanda.",
                    positive: "Um time que trabalha com cadência: medir, ajustar, repetir."
                }
            ].map((item, idx) => (
                <RevealSection key={idx} delay={idx * 0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 hover:border-axen-turquoise/30 transition-colors duration-500 group">
                        {/* Left: The Anti-Pattern */}
                        <div className="p-8 lg:p-12 bg-white/[0.02] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative">
                            <div className="flex items-center gap-3 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="p-1.5 rounded-full bg-red-500/10 text-red-500">
                                    <X size={14} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Não Somos</span>
                            </div>
                            <p className="text-xl text-white/40 font-medium group-hover:text-white/60 transition-colors duration-300">
                                {item.negative}
                            </p>
                        </div>

                        {/* Right: The Axen Way */}
                        <div className="p-8 lg:p-12 bg-axen-turquoise/[0.02] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-axen-turquoise/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-axen-turquoise/20 rounded-full blur-[80px] group-hover:bg-axen-turquoise/30 transition-colors duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-1.5 rounded-full bg-axen-turquoise/20 text-axen-turquoise shadow-[0_0_10px_rgba(45,212,191,0.3)]">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-axen-turquoise">Somos</span>
                                </div>
                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                                    {item.positive}
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealSection>
            ))}
        </div>
      </section>

      {/* 4) OS 4 PILARES DO ECOSSISTEMA */}
      <section className="py-24 bg-axen-darkgray/20 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-axen-turquoise/[0.02] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <RevealSection className="mb-16 text-center">
                <h2 className="text-4xl font-display font-bold text-axen-ivory mb-4">Os 4 Pilares do Ecossistema</h2>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, idx) => (
                    <RevealSection key={idx} delay={idx * 0.1}>
                        <GlassCard className="h-full p-8 group">
                            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-axen-turquoise mb-6 group-hover:scale-110 group-hover:bg-axen-turquoise group-hover:text-black transition-all duration-300 shadow-[0_0_15px_-5px_rgba(45,212,191,0.3)]">
                                <pillar.icon size={28} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-axen-ivory mb-3 group-hover:text-axen-turquoise transition-colors">{pillar.title}</h3>
                            <p className="text-sm text-axen-gray leading-relaxed group-hover:text-white/80 transition-colors">
                                {pillar.desc}
                            </p>
                        </GlassCard>
                    </RevealSection>
                ))}
            </div>
        </div>
      </section>

      {/* 5) NOSSA METODOLOGIA */}
      <section className="py-24 container mx-auto px-6 z-10 relative">
        <RevealSection className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-axen-ivory mb-6">Protocolo de Evolução</h2>
            <p className="text-axen-gray text-lg max-w-2xl mx-auto">
                Um ciclo contínuo que transforma crescimento em previsibilidade.
            </p>
        </RevealSection>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
            {methodology.map((item, i) => (
                <motion.div
                    key={i}
                    layout
                    onMouseEnter={() => setActiveMethodology(i)}
                    onClick={() => setActiveMethodology(i)}
                    className={`relative rounded-3xl border border-white/10 overflow-hidden cursor-pointer group transition-all duration-500 ease-out
                        ${activeMethodology === i ? 'lg:flex-[3] bg-white/[0.06]' : 'lg:flex-1 bg-black/40 hover:bg-white/[0.02]'}
                        flex-shrink-0 flex flex-col
                    `}
                >
                    {/* Background Image for Active */}
                    <AnimatePresence mode="wait">
                        {activeMethodology === i && (
                            <motion.div 
                                className="absolute inset-0 z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="p-8 flex flex-col h-full relative z-10">
                        {/* Content */}
                        <div className={`mt-auto transition-all duration-500 ${activeMethodology === i ? 'translate-y-0' : ''}`}>
                            <h3 className={`text-2xl font-display font-bold mb-4 transition-all duration-300 whitespace-nowrap 
                                ${activeMethodology === i 
                                    ? 'text-white translate-x-0' 
                                    : 'text-white/60 lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:translate-y-0 absolute bottom-8 left-0'
                                }`}>
                                {item.title}
                            </h3>
                            
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ 
                                    opacity: activeMethodology === i ? 1 : 0,
                                    height: activeMethodology === i ? 'auto' : 0
                                }}
                                className="overflow-hidden"
                            >
                                <p className="text-axen-gray text-lg leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 6) PRINCÍPIOS */}
      <section className="py-32 relative overflow-hidden">
        {/* Subtle background glow for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-axen-turquoise/[0.02] blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <RevealSection className="mb-20 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                    <span className="text-axen-turquoise text-xs font-bold uppercase tracking-widest">Cultura & Valores</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-axen-ivory mb-4 tracking-tight">Princípios</h2>
                <p className="text-axen-gray text-lg max-w-xl mx-auto">O código fonte que governa cada decisão e entrega da Axen.</p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {principles.map((principle, idx) => (
                    <RevealSection key={idx} delay={idx * 0.1}>
                        <GlassCard className="p-10 h-full group flex flex-col items-start text-left">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-axen-turquoise mb-8 group-hover:scale-110 group-hover:bg-axen-turquoise group-hover:text-black transition-all duration-500 shadow-[0_0_20px_-5px_rgba(45,212,191,0.2)]">
                                <principle.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-axen-ivory mb-4 group-hover:text-white transition-colors duration-300">
                                {principle.title}
                            </h3>
                            <p className="text-axen-gray text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                {principle.desc}
                            </p>
                            
                            {/* Decorative element */}
                            <div className="mt-8 w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-axen-turquoise transition-all duration-500"></div>
                        </GlassCard>
                    </RevealSection>
                ))}
            </div>
        </div>
      </section>

      {/* 7) PARA QUEM É */}
      <section className="py-24 container mx-auto px-6 z-10 relative">
        <RevealSection className="mb-16 text-center">
            <h2 className="text-4xl font-display font-bold text-axen-ivory">Para quem é</h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: TrendingUp, title: "Para quem quer previsibilidade", desc: "Negócios cansados de depender de pico, campanha e sorte." },
                { icon: Settings, title: "Para quem precisa de processo", desc: "Empresas com comercial sofrendo com lead ruim, follow-up fraco e operação solta." },
                { icon: ShieldCheck, title: "Para quem quer crescer sem perder identidade", desc: "Marcas que valorizam posicionamento, estética e consistência — com resultado." }
            ].map((item, idx) => (
                <RevealSection key={idx} delay={idx * 0.1} className="h-full">
                    <GlassCard className="p-10 h-full flex flex-col items-center text-center hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.1)]">
                        <div className="w-16 h-16 rounded-full bg-axen-turquoise/10 border border-axen-turquoise/20 flex items-center justify-center text-axen-turquoise mb-6 group-hover:scale-110 transition-transform duration-300">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-axen-ivory mb-4">{item.title}</h3>
                        <p className="text-axen-gray">{item.desc}</p>
                    </GlassCard>
                </RevealSection>
            ))}
        </div>
      </section>

      {/* 9) FAQ RÁPIDO */}
      <section className="py-24 container mx-auto px-6 max-w-3xl z-10 relative">
        <RevealSection className="mb-12 text-center">
            <h2 className="text-4xl font-display font-bold text-axen-ivory">Perguntas Frequentes</h2>
        </RevealSection>
        
        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <RevealSection key={idx} delay={idx * 0.05}>
                    <AccordionItem question={faq.q} answer={faq.a} />
                </RevealSection>
            ))}
        </div>
      </section>

      {/* 10) CTA FINAL */}
      <section className="container mx-auto px-6 pb-24 z-10 relative">
        <RevealSection>
            <div className="relative rounded-[3rem] overflow-hidden bg-axen-ivory text-axen-black p-12 md:p-20 text-center shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Pare de depender de sorte.</h2>
                    <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium max-w-xl mx-auto">
                        Estruture uma operação que transforma visibilidade em venda — e venda em rotina.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <button className="px-10 py-4 rounded-full bg-black text-white hover:bg-axen-turquoise hover:text-black transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Agendar Diagnóstico
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link to="/ecosystem">
                            <button className="px-10 py-4 rounded-full border border-black/20 hover:bg-black/5 transition-all duration-300 font-bold text-lg w-full sm:w-auto">
                                Ver Ecossistema
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </RevealSection>
      </section>
    </div>
  );
};

export default About;