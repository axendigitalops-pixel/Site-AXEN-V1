import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Zap, TrendingUp, ChevronRight, Terminal, Cpu, Globe } from 'lucide-react';
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

const About: React.FC = () => {
  const values = [
    { id: "01", title: "Humanidade no Centro", icon: Heart, desc: "Código é binário, negócios são humanos. A tecnologia serve às pessoas, não o contrário." },
    { id: "02", title: "Tecnologia como Extensão", icon: Zap, desc: "Não substituímos a inteligência; criamos exoesqueletos digitais para ampliar capacidades." },
    { id: "03", title: "Radicalmente Transparente", icon: ShieldCheck, desc: "Caixas pretas são para aviões. Aqui, processos e dados são abertos e auditáveis." },
    { id: "04", title: "Ecossistema Simbiótico", icon: Users, desc: "Crescemos em rede. O sucesso do cliente retroalimenta a inteligência do núcleo." },
    { id: "05", title: "Obsessão por Métricas", icon: TrendingUp, desc: "Não acreditamos em 'feeling' sem dados. Se não pode ser medido, não pode ser melhorado." }
  ];

  const team = [
    { name: "Sarah Connor", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
    { name: "Alan Turing", role: "Head of AI", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
    { name: "Ada Lovelace", role: "Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-axen-black min-h-screen overflow-hidden">
       {/* Hero Section: The Manifesto */}
       <section className="relative pt-40 pb-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
                <RevealSection>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-axen-turquoise rounded-full animate-pulse"></span>
                        <span className="text-axen-turquoise text-xs font-bold uppercase tracking-[0.2em]">System.Init(2026)</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-axen-ivory leading-[0.9] tracking-tight mb-8">
                        NÓS SOMOS <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-axen-gray via-axen-ivory to-axen-gray">O GHOST NA</span> <br/>
                        <span className="text-axen-turquoise">MACHINE.</span>
                    </h1>
                </RevealSection>
                
                <RevealSection delay={0.2}>
                    <p className="text-xl md:text-2xl text-axen-gray font-light leading-relaxed max-w-2xl border-l border-white/10 pl-8">
                        A Axen não é apenas uma agência. Somos uma infraestrutura de inteligência. Nascemos para preencher o abismo entre a frieza dos dados e o calor da intuição humana.
                    </p>
                </RevealSection>
            </div>

            {/* Abstract Visual - Rotating Core */}
            <div className="hidden lg:block lg:w-1/3 relative h-[400px]">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-64 h-64 border border-dashed border-white/20 rounded-full"></div>
                </motion.div>
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-48 h-48 border border-white/10 rounded-full"></div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-axen-turquoise/10 rounded-full blur-xl animate-pulse"></div>
                    <Terminal size={48} className="text-axen-ivory relative z-10" />
                </div>
            </div>
        </div>
      </section>

      {/* Strategic Console (Mission & Vision) */}
      <section className="container mx-auto px-6 py-24">
        <RevealSection>
            <div className="bg-[#080808] rounded-[3rem] border border-white/10 p-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-axen-turquoise/50 to-transparent"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {/* Mission */}
                    <div className="p-10 md:p-16 relative group">
                        <div className="absolute top-6 right-6 text-white/5 group-hover:text-axen-turquoise/10 transition-colors">
                            <Cpu size={120} strokeWidth={0.5} />
                        </div>
                        <div className="relative z-10">
                            <span className="text-xs font-mono text-axen-gray mb-2 block">// CORE.PURPOSE</span>
                            <h3 className="text-3xl font-display font-bold text-axen-ivory mb-6">Missão</h3>
                            <p className="text-lg text-axen-gray/80 leading-relaxed">
                                Ser o núcleo processador que integra pessoas, inteligência artificial e criatividade para impulsionar transformações digitais autênticas e gerar crescimento sustentável em escala global.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="p-10 md:p-16 relative group">
                        <div className="absolute top-6 right-6 text-white/5 group-hover:text-axen-turquoise/10 transition-colors">
                            <Globe size={120} strokeWidth={0.5} />
                        </div>
                        <div className="relative z-10">
                            <span className="text-xs font-mono text-axen-gray mb-2 block">// TARGET.STATE_2030</span>
                            <h3 className="text-3xl font-display font-bold text-axen-ivory mb-6">Visão</h3>
                            <p className="text-lg text-axen-gray/80 leading-relaxed">
                                Tornar-se a referência definitiva em inovação humanizada, reconhecida como a central de soluções (Hub) que reconfigura indústrias inteiras através de tecnologia ética e criativa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
      </section>

      {/* DNA Modules (Values) */}
      <section className="py-24 bg-axen-darkgray/20 border-y border-white/5">
        <div className="container mx-auto px-6">
            <RevealSection className="mb-16 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl font-display font-bold text-axen-ivory mb-2">Código Fonte</h2>
                    <p className="text-axen-gray">Os valores inegociáveis que rodam nosso sistema.</p>
                </div>
                <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((val, idx) => (
                    <RevealSection key={idx} delay={idx * 0.1}>
                        <div className="group relative h-full bg-black hover:bg-[#0A0A0A] border border-white/10 hover:border-axen-turquoise/40 rounded-2xl p-8 transition-all duration-500 overflow-hidden">
                            {/* Number Background */}
                            <span className="absolute -bottom-4 -right-4 text-8xl font-display font-bold text-white/[0.02] group-hover:text-axen-turquoise/[0.05] transition-colors select-none">
                                {val.id}
                            </span>
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-axen-ivory group-hover:bg-axen-turquoise group-hover:text-black transition-all duration-300">
                                        <val.icon size={24} />
                                    </div>
                                    <span className="font-mono text-xs text-axen-gray/50 group-hover:text-axen-turquoise transition-colors">VAL_MOD_{val.id}</span>
                                </div>
                                
                                <h3 className="text-xl font-display font-bold text-axen-ivory mb-3 group-hover:translate-x-1 transition-transform">{val.title}</h3>
                                <p className="text-sm text-axen-gray leading-relaxed border-l border-white/10 pl-4 group-hover:border-axen-turquoise/30 transition-colors">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </div>
      </section>

      {/* System Log (Timeline) */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 sticky top-32 h-fit">
                <RevealSection>
                    <h2 className="text-5xl font-display font-bold text-axen-ivory mb-6">System Log</h2>
                    <p className="text-axen-gray text-lg mb-8">
                        A evolução do nosso núcleo, de um coletivo experimental para uma infraestrutura global.
                    </p>
                    <CapsuleButton variant="outline">Ver Roadmap Futuro</CapsuleButton>
                </RevealSection>
            </div>

            <div className="lg:w-2/3 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-axen-turquoise via-white/10 to-transparent"></div>

                <div className="space-y-16">
                    {[
                        { year: '2018', label: 'Kernel Loaded', text: 'Início da jornada dos fundadores em transformação digital e consultoria high-end.' },
                        { year: '2022', label: 'Hybrid Integration', text: 'Primeiros projetos experimentais unindo IA generativa (GPT-2 era) com design craft.' },
                        { year: '2026', label: 'Axen Bootup', text: 'Fundação oficial da Axen como subsidiária autônoma da Axen Digital Ops.' },
                        { year: 'Hoje', label: 'System Online', text: 'Operação em 3 continentes, processando crescimento para mais de 50 empresas.' }
                    ].map((item, i) => (
                        <RevealSection key={i} delay={i * 0.1}>
                            <div className="relative pl-16 group">
                                {/* Dot */}
                                <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-axen-turquoise group-hover:scale-150 group-hover:bg-axen-turquoise transition-all duration-300 z-10"></div>
                                {/* Glow effect */}
                                <div className="absolute left-[7px] top-1 w-4 h-4 bg-axen-turquoise/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <span className="font-mono text-axen-turquoise text-sm mb-1 block opacity-80">{item.year} // {item.label}</span>
                                <h3 className="text-2xl font-display font-bold text-axen-ivory mb-3">{item.text.split(' ').slice(0, 3).join(' ')}...</h3>
                                <p className="text-axen-gray text-lg bg-[#0A0A0A] p-6 rounded-r-2xl border-l-2 border-white/10 group-hover:border-axen-turquoise transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* The Architects (Team) */}
      <section className="bg-gradient-to-b from-[#050505] to-[#0A0A0A] py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
            <RevealSection className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-axen-ivory mb-4">Os Arquitetos</h2>
                <p className="text-axen-gray">Mentes humanas por trás do código.</p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                    <RevealSection key={idx} delay={idx * 0.2}>
                        <div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4]">
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                    <h3 className="text-xl font-display font-bold text-axen-ivory">{member.name}</h3>
                                    <p className="text-axen-turquoise text-sm font-bold uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </div>
      </section>

      {/* Final Recruitment CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-axen-ivory text-axen-black p-12 md:p-20 text-center">
            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Você fala a nossa língua?</h2>
                <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium">
                    Estamos sempre procurando por outliers. Se você entende que a tecnologia é um meio para potencializar a criatividade humana, seu lugar é no núcleo.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/careers">
                        <button className="px-10 py-4 rounded-full bg-black text-white hover:bg-axen-turquoise hover:text-black transition-all duration-300 font-bold text-lg flex items-center gap-2 group">
                            Ver Posições Abertas
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;