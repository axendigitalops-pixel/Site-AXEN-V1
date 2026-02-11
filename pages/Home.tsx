import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Palette, BarChart3, Users, Zap, Fingerprint, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CapsuleButton from '../components/UI/CapsuleButton';

// Utility component for smooth reveal animations
const RevealSection: React.FC<{ children?: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentImage, setCurrentImage] = useState(0);
  
  // Hero Parallax Effects for Text
  const yHero = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Background Images for Slideshow
  const heroImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Tech Network/Globe
    "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop", // Human/Creative/Future
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2670&auto=format&fit=crop"  // Dark Neon/Data
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const ecosystemItems = [
    { title: "Inteligência Artificial", desc: "Automação e escala", icon: Brain },
    { title: "Criatividade", desc: "Design e storytelling", icon: Palette },
    { title: "Dados & Analytics", desc: "Decisões estratégicas", icon: BarChart3 },
    { title: "Rede de Parceiros", desc: "Conexão expert", icon: Users },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-axing-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Axing Background"
            />
          </AnimatePresence>
          
          {/* Overlays for Readability */}
          <div className="absolute inset-0 bg-black/40" /> {/* General dim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" /> {/* Left heavy gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-axing-black via-transparent to-transparent" /> {/* Bottom fade */}
        </div>
        
        {/* Content Container - Left Aligned */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-12 h-[1px] bg-axing-turquoise"></span>
                 <span className="text-axing-turquoise font-bold tracking-[0.2em] text-xs uppercase">Ecossistema Digital Vivo</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-axing-ivory leading-[0.95] mb-8">
                O NÚCLEO DO SEU <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  CRESCIMENTO.
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-axing-gray max-w-2xl mb-12 font-light leading-relaxed">
                Conectamos inteligência artificial, criatividade e pessoas em um único sistema para impulsionar a evolução da sua empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link to="/contact">
                  <CapsuleButton variant="primary" className="!bg-axing-turquoise !text-black hover:!bg-white">
                    Ative o Núcleo <ArrowRight size={18} />
                  </CapsuleButton>
                </Link>
                <Link to="/ecosystem">
                  <CapsuleButton variant="outline" className="backdrop-blur-sm">
                    Explorar Ecossistema
                  </CapsuleButton>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Indicators */}
          <div className="absolute bottom-12 left-6 md:left-12 flex gap-3 z-20">
            {heroImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${currentImage === idx ? 'w-8 bg-axing-turquoise' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Right Side now */}
        <motion.div 
          style={{ opacity: opacityHero }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 right-10 text-axing-gray/50 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-2">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mt-8"></div>
          </div>
        </motion.div>
      </section>

      {/* Infinite Carousel Marquee - Minimalist Version */}
      <div className="py-20 bg-gradient-to-b from-black via-[#0A0A0A] to-[#050505] relative z-20">
        <div className="overflow-hidden whitespace-nowrap mask-linear-fade">
          <motion.div 
            className="inline-flex gap-24 pl-8"
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...ecosystemItems, ...ecosystemItems, ...ecosystemItems, ...ecosystemItems].map((item, index) => (
              <div key={index} className="group inline-flex items-center gap-6 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default">
                {/* Icon with glow effect on hover */}
                <item.icon 
                  className="text-axing-ivory group-hover:text-axing-turquoise group-hover:drop-shadow-[0_0_10px_rgba(62,230,219,0.5)] transition-all duration-500" 
                  size={32} 
                  strokeWidth={1.5}
                />
                
                <div className="flex flex-col">
                  <h3 className="text-axing-ivory font-display font-bold text-2xl tracking-tight">{item.title}</h3>
                  <p className="text-axing-gray text-xs uppercase tracking-[0.15em] font-medium mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Ecosystem Section */}
      <section className="py-24 relative bg-[#050505]">
        <div className="container mx-auto px-6">
          <RevealSection className="mb-20 md:w-2/3">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-axing-ivory mb-6 tracking-tight">
              Mais que serviços, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-axing-ivory to-axing-gray/50">um sistema vivo.</span>
            </h2>
            <p className="text-axing-gray text-xl leading-relaxed max-w-2xl">
              Não entregamos soluções isoladas. Nosso núcleo mergulha na sua cultura para orquestrar IA, criatividade e uma rede de especialistas que evolui com seu negócio.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemItems.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 0.1}>
                <Link to="/ecosystem" className="block h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative flex flex-col justify-between p-8 h-full min-h-[380px] rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden transition-all duration-500 hover:border-axing-turquoise/50 hover:shadow-[0_0_30px_-10px_rgba(62,230,219,0.15)]"
                  >
                    {/* Background Gradient Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Large Background Icon */}
                    <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-axing-turquoise/10 transition-colors duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                      <item.icon size={180} strokeWidth={0.5} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-axing-turquoise group-hover:border-axing-turquoise group-hover:text-black text-axing-ivory transition-all duration-500">
                        <item.icon size={26} />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-axing-ivory mb-4 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-axing-gray text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-axing-turquoise/50 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer Action */}
                    <div className="relative z-10 mt-8 pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-axing-gray group-hover:text-axing-turquoise transition-colors">
                          Explorar
                        </span>
                        <div className="bg-white/5 rounded-full p-2 group-hover:bg-axing-turquoise group-hover:text-black transition-all duration-500">
                          <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Axing - Redesigned Asymmetrical Grid */}
      <section className="py-24 bg-axing-black relative">
        <div className="container mx-auto px-6">
          <RevealSection className="mb-16 md:flex justify-between items-end">
             <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-axing-ivory mb-4">
                  Por que a Axing?
                </h2>
                <p className="text-axing-gray max-w-xl text-lg">
                  Não somos apenas uma agência. Somos a infraestrutura de inteligência que o seu negócio precisa para o futuro.
                </p>
             </div>
             <div className="hidden md:block">
                <Link to="/about">
                   <CapsuleButton variant="ghost">Sobre Nós</CapsuleButton>
                </Link>
             </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[600px]">
            
            {/* Card 1: IA Humanizada (Large with Image) */}
            <RevealSection className="md:col-span-7 row-span-2 group h-full">
              <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" 
                  alt="IA Humanizada" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-10 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-axing-turquoise/90 text-black">
                       <Brain size={20} />
                    </div>
                    <span className="text-axing-turquoise font-bold uppercase tracking-widest text-xs">Diferencial Exclusivo</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">IA Humanizada</h3>
                  <p className="text-axing-ivory/80 max-w-md leading-relaxed">
                    A tecnologia não deve substituir a sensibilidade. Nossa IA processa dados em escala, mas a estratégia final carrega a empatia e a nuance que só humanos possuem.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 2: Núcleo Integrador (Medium, Dark Tech) */}
            <RevealSection className="md:col-span-5 md:row-span-1 group h-full" delay={0.1}>
              <div className="relative h-full min-h-[280px] rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between overflow-hidden hover:border-axing-turquoise/30 transition-colors">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
                
                <div className="relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-axing-ivory group-hover:bg-axing-turquoise group-hover:text-black transition-all">
                      <Zap size={24} />
                   </div>
                   <h3 className="text-2xl font-display font-bold text-axing-ivory mb-2">Núcleo Integrador</h3>
                   <p className="text-axing-gray text-sm">
                     Estratégia, execução e análise não acontecem em silos. Aqui, tudo flui em um único sistema vivo.
                   </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 3: Coragem Criativa (Medium, Artistic Image) */}
            <RevealSection className="md:col-span-5 md:row-span-1 group h-full" delay={0.2}>
              <div className="relative h-full min-h-[280px] rounded-[2.5rem] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Criatividade" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
                        Coragem Criativa <Sparkles size={18} className="text-axing-turquoise" />
                      </h3>
                      <p className="text-axing-ivory/70 text-sm">Fugimos do óbvio para criar narrativas autênticas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
            
             {/* Card 4: Dados First Party (Full width on mobile, span on large) */}
             <RevealSection className="md:col-span-12 mt-6 group" delay={0.3}>
                <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#0A0A0A] to-[#111] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-axing-turquoise/20 transition-colors">
                   <div className="flex items-start gap-6">
                      <div className="p-4 rounded-full bg-white/5 text-axing-turquoise group-hover:scale-110 transition-transform">
                         <Fingerprint size={32} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-display font-bold text-axing-ivory mb-2">Dados First-Party & Ética</h3>
                         <p className="text-axing-gray max-w-2xl">
                           Em um mundo sem cookies, construímos sua base proprietária com foco total em consentimento, transparência e métricas que realmente impactam o negócio.
                         </p>
                      </div>
                   </div>
                   <div className="shrink-0">
                      <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                         <div className="h-2 w-12 bg-axing-turquoise rounded-full"></div>
                         <div className="h-2 w-8 bg-white/20 rounded-full"></div>
                         <div className="h-2 w-4 bg-white/20 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </RevealSection>

          </div>
        </div>
      </section>

      {/* Success Cases Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <RevealSection>
              <h2 className="text-4xl font-display font-bold text-axing-ivory mb-2">Impacto Real</h2>
              <p className="text-axing-gray">Histórias de transformação digital.</p>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img 
                      src={`https://picsum.photos/seed/axing${i}/600/400`} 
                      alt="Project" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {/* Subtler text color for category */}
                      <span className="text-axing-ivory/80 text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">Fintech</span>
                      <h3 className="text-2xl font-display text-white">NeoBank Evolution</h3>
                    </div>
                  </div>
                  <p className="text-axing-gray text-sm line-clamp-2 group-hover:text-axing-ivory transition-colors">Reestruturação completa de UX e implementação de IA no atendimento.</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealSection>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-axing-ivory mb-8">
              Pessoas no centro. <br/>
              Tecnologia em movimento.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/ecosystem">
                <CapsuleButton variant="outline">Conheça o Ecossistema</CapsuleButton>
              </Link>
              <Link to="/contact">
                <CapsuleButton variant="primary">Fale com Especialistas</CapsuleButton>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Home;