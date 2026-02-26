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
    { title: "Diagnóstico", desc: "Mapeamos gargalos e oportunidades: mensagem, canal, funil, timing e atrito." },
    { title: "Direção Estratégica", desc: "Clareza de posicionamento, oferta e caminho: quem decide, o que precisa entender e qual é o próximo passo." },
    { title: "Construção do Sistema", desc: "Páginas, automações, criativos, cadências e integrações — tudo preparado para operar no mundo real." },
    { title: "Distribuição Intencional", desc: "Mensagem na frente de quem decide: canal certo, frequência certa, contexto certo." },
    { title: "Otimização Contínua", desc: "Ajustes baseados em sinais: conversas, propostas, fechamento e retenção. Sem achismo." }
  ];

  const principles = [
    { title: "Humanidade no Centro", desc: "Tecnologia serve pessoas. E crescimento serve propósito." },
    { title: "Tecnologia como Extensão", desc: "IA não substitui. Amplifica." },
    { title: "Transparência Radical", desc: "O que não pode ser visto, não pode ser melhorado." },
    { title: "Evolução Contínua", desc: "Operação boa melhora todo dia, não só quando dá problema." },
    { title: "Obsessão por Métricas", desc: "Se não mede, é opinião." }
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
      <section className="py-24 bg-[#080808]/50 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <RevealSection>
                <div className="space-y-12 text-2xl md:text-3xl lg:text-4xl font-display font-medium text-axen-ivory leading-tight">
                    <div className="group hover:text-white transition-colors duration-500">
                        <p>A maioria faz marketing por tarefa.</p>
                        <p className="text-axen-gray group-hover:text-axen-turquoise/80 transition-colors duration-500">A gente estrutura como operação.</p>
                    </div>
                    
                    <div className="group hover:text-white transition-colors duration-500">
                        <p>Porque visibilidade sem caminho vira barulho.</p>
                        <p className="text-axen-gray group-hover:text-axen-turquoise/80 transition-colors duration-500">E “postar mais” não resolve um funil quebrado.</p>
                    </div>
                    
                    <div className="group hover:text-white transition-colors duration-500">
                        <p>A Axen existe pra reduzir ruído, encurtar decisão e construir tração contínua.</p>
                        <p className="text-axen-gray group-hover:text-axen-turquoise/80 transition-colors duration-500">Com método, distribuição e melhoria constante.</p>
                    </div>
                    
                    <div className="pt-8">
                        <span className="inline-block relative text-axen-turquoise text-lg uppercase tracking-widest font-bold pb-2">
                            Resultado não é evento. Resultado é rotina.
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-axen-turquoise shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                        </span>
                    </div>
                </div>
            </RevealSection>
        </div>
      </section>

      {/* 3) O QUE SOMOS / O QUE NÃO SOMOS */}
      <section className="py-24 container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <RevealSection>
                <h3 className="text-3xl font-display font-bold text-axen-ivory mb-8 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-axen-turquoise/10 border border-axen-turquoise/20">
                        <Check className="text-axen-turquoise" size={24} /> 
                    </div>
                    Somos
                </h3>
                <ul className="space-y-4">
                    <GlassCard className="p-6 !border-l-4 !border-l-axen-turquoise !rounded-l-lg">
                        <li className="flex gap-4 items-start">
                            <p className="text-lg text-axen-gray">Uma infraestrutura de crescimento que une estratégia, execução e análise.</p>
                        </li>
                    </GlassCard>
                    <GlassCard className="p-6 !border-l-4 !border-l-axen-turquoise !rounded-l-lg" hoverEffect={true}>
                        <li className="flex gap-4 items-start">
                            <p className="text-lg text-axen-gray">Um sistema de operação digital que organiza presença, demanda e conversão.</p>
                        </li>
                    </GlassCard>
                    <GlassCard className="p-6 !border-l-4 !border-l-axen-turquoise !rounded-l-lg" hoverEffect={true}>
                        <li className="flex gap-4 items-start">
                            <p className="text-lg text-axen-gray">Um time que trabalha com cadência: medir, ajustar, repetir.</p>
                        </li>
                    </GlassCard>
                </ul>
            </RevealSection>

            <RevealSection delay={0.2}>
                <h3 className="text-3xl font-display font-bold text-white/50 mb-8 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <X className="text-red-500/50" size={24} /> 
                    </div>
                    Não somos
                </h3>
                <ul className="space-y-4">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <li className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0"></div>
                            <p className="text-lg text-axen-gray">Uma agência de post e “conteúdo por calendário”.</p>
                        </li>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <li className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0"></div>
                            <p className="text-lg text-axen-gray">Um fornecedor de tráfego sem contexto e sem funil.</p>
                        </li>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <li className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0"></div>
                            <p className="text-lg text-axen-gray">Um projeto bonito que não vira demanda.</p>
                        </li>
                    </div>
                </ul>
            </RevealSection>
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
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 sticky top-32 h-fit">
                <RevealSection>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-axen-ivory mb-6">Protocolo de Evolução</h2>
                    <p className="text-axen-gray text-lg mb-8 border-l-2 border-axen-turquoise pl-6 py-2 bg-gradient-to-r from-axen-turquoise/5 to-transparent">
                        Um ciclo contínuo que transforma crescimento em previsibilidade.
                    </p>
                </RevealSection>
            </div>

            <div className="lg:w-2/3 relative">
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-axen-turquoise via-white/10 to-transparent"></div>
                <div className="space-y-8">
                    {methodology.map((item, i) => (
                        <RevealSection key={i} delay={i * 0.1}>
                            <div className="relative pl-16 group">
                                <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-axen-turquoise group-hover:scale-150 group-hover:bg-axen-turquoise group-hover:shadow-[0_0_15px_rgba(45,212,191,0.8)] transition-all duration-300 z-10"></div>
                                <GlassCard className="p-8 group-hover:border-axen-turquoise/30 transition-all duration-300">
                                    <h3 className="text-2xl font-display font-bold text-axen-ivory mb-2 group-hover:text-axen-turquoise transition-colors">{item.title}</h3>
                                    <p className="text-axen-gray text-lg group-hover:text-white/90 transition-colors">
                                        {item.desc}
                                    </p>
                                </GlassCard>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6) PRINCÍPIOS */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
            <RevealSection className="mb-16 text-center">
                <h2 className="text-4xl font-display font-bold text-axen-ivory mb-2">Princípios</h2>
                <p className="text-axen-gray">O código fonte da nossa cultura.</p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {principles.map((principle, idx) => (
                    <RevealSection key={idx} delay={idx * 0.1}>
                        <GlassCard className="p-8 h-full hover:bg-white/[0.03]">
                            <div className="mb-4 opacity-50 text-axen-turquoise">
                                <Minus size={20} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-axen-ivory mb-3">{principle.title}</h3>
                            <p className="text-axen-gray text-sm leading-relaxed">
                                {principle.desc}
                            </p>
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

      {/* 8) PROVAS / SINAIS DE CONFIANÇA (Placeholders) */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
            <RevealSection className="mb-16 text-center">
                <h2 className="text-4xl font-display font-bold text-axen-ivory mb-4">Resultados Reais</h2>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                    { title: "[Cases]", desc: "Veja o que muda quando a operação vira método." },
                    { title: "[Números]", desc: "Tempo de resposta, taxa de conversão, custo por lead qualificado." },
                    { title: "[Depoimentos]", desc: "O que os clientes dizem quando o crescimento deixa de ser tentativa." },
                    { title: "[Parcerias]", desc: "Ferramentas e integrações que sustentam a operação." }
                ].map((item, idx) => (
                    <RevealSection key={idx} delay={idx * 0.1}>
                        <GlassCard className="p-8 h-full flex flex-col justify-center items-center group cursor-default">
                            <h4 className="text-axen-turquoise font-bold mb-3 text-xl group-hover:scale-105 transition-transform drop-shadow-sm">{item.title}</h4>
                            <p className="text-axen-gray text-sm group-hover:text-white transition-colors">{item.desc}</p>
                        </GlassCard>
                    </RevealSection>
                ))}
            </div>
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