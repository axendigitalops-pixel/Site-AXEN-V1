import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Palette, BarChart3, Users, Zap, Fingerprint, Sparkles, Scan, Cpu, TrendingUp } from 'lucide-react';
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
  
  // Hero Parallax Effects for Text
  const yHero = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Single Background Image
  // TODO: Replace this URL with the specific image you want to use
  const heroImage = "https://iili.io/qFFqm4n.png";

  const ecosystemItems = [
    { title: "Inteligência Artificial", desc: "Automação e escala", icon: Brain },
    { title: "Criatividade", desc: "Design e storytelling", icon: Palette },
    { title: "Dados & Analytics", desc: "Decisões estratégicas", icon: BarChart3 },
    { title: "Rede de Parceiros", desc: "Conexão expert", icon: Users },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-axen-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        
        {/* Static Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Axen Background"
          />
          
          {/* Overlays for Readability */}
          <div className="absolute inset-0 bg-black/40" /> {/* General dim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" /> {/* Left heavy gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-axen-black via-transparent to-transparent" /> {/* Bottom fade */}
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
                 <span className="w-12 h-[1px] bg-axen-turquoise"></span>
                 <span className="text-axen-turquoise font-bold tracking-[0.2em] text-xs uppercase font-sans">Ecossistema Digital Vivo</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight text-axen-ivory leading-[1.1] mb-8 drop-shadow-2xl">
                O NÚCLEO <br/>
                <span className="font-normal">DO SEU</span> <br/>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                  CRESCIMENTO.
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-axen-gray max-w-2xl mb-12 font-light leading-relaxed font-sans">
                Conectamos inteligência artificial, criatividade e pessoas em um único sistema para impulsionar a evolução da sua empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a href="https://wa.me/message/VMLQEJBHKTC3B1" target="_blank" rel="noopener noreferrer">
                  <CapsuleButton variant="primary" className="!bg-axen-turquoise !text-black hover:!bg-white font-sans font-semibold">
                    Ative o Núcleo <ArrowRight size={18} />
                  </CapsuleButton>
                </a>
                <Link to="/ecosystem">
                  <CapsuleButton variant="outline" className="backdrop-blur-sm font-sans">
                    Explorar Ecossistema
                  </CapsuleButton>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Right Side now */}
        <motion.div 
          style={{ opacity: opacityHero }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 right-10 text-axen-gray/50 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-2">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mt-8"></div>
          </div>
        </motion.div>
      </section>

      {/* Our Ecosystem Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://iili.io/qKiTMIs.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-axen-black via-axen-black/80 to-axen-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealSection className="mb-20 md:w-2/3">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-axen-ivory mb-6 tracking-tight">
              Mais que serviços, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-axen-ivory to-axen-gray/50">um sistema vivo.</span>
            </h2>
            <p className="text-axen-gray text-xl leading-relaxed max-w-2xl">
              Não entregamos soluções isoladas. Nosso núcleo mergulha na sua cultura para orquestrar IA, criatividade e uma rede de especialistas que evolui com seu negócio.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemItems.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 0.1}>
                <Link to="/ecosystem" className="block h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative flex flex-col justify-between p-8 h-full min-h-[380px] rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden transition-all duration-500 hover:border-axen-turquoise/50 hover:shadow-[0_0_30px_-10px_rgba(62,230,219,0.15)]"
                  >
                    {/* Background Gradient Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Large Background Icon */}
                    <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-axen-turquoise/10 transition-colors duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                      <item.icon size={180} strokeWidth={0.5} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-axen-turquoise group-hover:border-axen-turquoise group-hover:text-black text-axen-ivory transition-all duration-500">
                        <item.icon size={26} />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-axen-ivory mb-4 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-axen-gray text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-axen-turquoise/50 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer Action */}
                    <div className="relative z-10 mt-8 pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-axen-gray group-hover:text-axen-turquoise transition-colors">
                          Explorar
                        </span>
                        <div className="bg-white/5 rounded-full p-2 group-hover:bg-axen-turquoise group-hover:text-black transition-all duration-500">
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

      {/* Why Choose Axen - Infinite Carousel */}
      <section className="py-32 bg-axen-black relative overflow-hidden">
        <div className="container mx-auto px-6 mb-20">
          <RevealSection className="md:flex justify-between items-end">
             <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-axen-turquoise"></span>
                  <span className="text-axen-turquoise font-bold tracking-[0.2em] text-[10px] uppercase">Diferenciais</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-axen-ivory mb-6 tracking-tight">
                  Por que a Axen?
                </h2>
                <p className="text-axen-gray text-xl leading-relaxed">
                  Não somos só uma agência. Somos o núcleo que conecta estratégia, criação e automação para transformar presença digital em crescimento com consistência.
                </p>
             </div>
             <div className="hidden md:block">
                <Link to="/about">
                   <CapsuleButton variant="ghost" className="border-white/10 hover:border-white/30">Sobre Nós</CapsuleButton>
                </Link>
             </div>
          </RevealSection>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative flex overflow-hidden py-10">
          {/* Gradient Masks for smooth edges */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-axen-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-axen-black to-transparent z-20 pointer-events-none" />

          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the items for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  {
                    title: "IA Humanizada",
                    desc: "IA acelera, humanos decidem.",
                    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                    icon: Brain
                  },
                  {
                    title: "Núcleo Integrador",
                    desc: "Estratégia e execução conectadas.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
                    icon: Zap
                  },
                  {
                    title: "Coragem Criativa",
                    desc: "Design limpo e narrativa forte.",
                    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                    icon: Sparkles
                  },
                  {
                    title: "Dados & Ética",
                    desc: "Métricas reais e transparência.",
                    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?q=80&w=2670&auto=format&fit=crop",
                    icon: Fingerprint
                  },
                  {
                    title: "Evolução Real",
                    desc: "Crescimento constante e ROI.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                    icon: TrendingUp
                  }
                ].map((item, idx) => (
                  <div 
                    key={`${i}-${idx}`} 
                    className="relative w-[320px] md:w-[500px] h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden group shrink-0 border border-white/5 bg-[#0A0A0A]"
                  >
                    {/* Image Background */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-10 md:p-12 w-full z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-axen-turquoise group-hover:bg-axen-turquoise group-hover:text-black transition-all duration-500">
                           <item.icon size={22} />
                        </div>
                        <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[9px] group-hover:text-axen-turquoise transition-colors">Axen Core</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-axen-gray text-base md:text-lg font-light whitespace-normal leading-relaxed max-w-[280px] md:max-w-[320px] group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 5: The Axen Protocol (Replacing Impacto Real) */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-axen-turquoise/30 to-transparent"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-axen-turquoise/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <RevealSection className="mb-20 text-center md:text-left">
             <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
               <span className="w-8 h-[1px] bg-axen-turquoise"></span>
               <span className="text-axen-turquoise font-mono text-xs uppercase tracking-widest block">Metodologia</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-axen-ivory mb-6">
               O Protocolo de Evolução
             </h2>
             <p className="text-axen-gray text-lg max-w-2xl mx-auto md:mx-0">
               Não dependemos de sorte. Nosso método é um loop contínuo de inteligência que refina sua operação a cada ciclo, garantindo que o crescimento seja uma constante.
             </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

            {[
              {
                step: "01",
                title: "Diagnóstico Neural",
                desc: "Mergulhamos nos seus dados proprietários para identificar gargalos e oportunidades invisíveis aos olhos tradicionais.",
                icon: Scan
              },
              {
                step: "02",
                title: "Fusão do Núcleo",
                desc: "Integramos ferramentas avançadas de IA e talentos criativos para construir soluções personalizadas e ágeis.",
                icon: Cpu
              },
              {
                step: "03",
                title: "Evolução Contínua",
                desc: "Lançamento, mensuração em tempo real e otimização constante para garantir ROI crescente e adaptação rápida.",
                icon: TrendingUp
              }
            ].map((item, idx) => (
              <RevealSection key={idx} delay={idx * 0.2} className="relative z-10 group h-full">
                <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[2rem] h-full hover:border-axen-turquoise/40 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-axen-black border border-white/10 flex items-center justify-center text-axen-ivory group-hover:text-axen-turquoise group-hover:border-axen-turquoise transition-all shadow-lg relative z-10">
                       <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                       {item.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-axen-ivory mb-4 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-axen-gray leading-relaxed text-sm flex-grow">
                    {item.desc}
                  </p>
                  <div className="w-full h-[1px] bg-white/5 mt-6 group-hover:bg-axen-turquoise/30 transition-colors"></div>
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
            <h2 className="text-5xl md:text-7xl font-display font-bold text-axen-ivory mb-8">
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