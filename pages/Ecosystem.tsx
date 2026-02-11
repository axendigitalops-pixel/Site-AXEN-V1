import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Palette, BarChart3, Users, Network, Target, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import CapsuleButton from '../components/UI/CapsuleButton';

const Ecosystem: React.FC = () => {
  const arms = [
    {
      id: "strategy",
      title: "Planejamento Estratégico",
      desc: "O ponto de partida. Mergulhamos no seu negócio para desenhar o mapa do crescimento.",
      icon: Target,
      items: ["Diagnóstico de maturidade digital", "Roadmap de inovação", "Consultoria de cultura ágil"]
    },
    {
      id: "ia",
      title: "IA & Automação",
      desc: "Escalabilidade inteligente. Reduzimos o trabalho manual para liberar o potencial humano.",
      icon: Brain,
      items: ["Chatbots e assistentes virtuais", "Automação de marketing", "Otimização de processos (RPA)"]
    },
    {
      id: "creative",
      title: "Criatividade & Conteúdo",
      desc: "A alma da marca. Conectamos emocionalmente através de design e narrativas poderosas.",
      icon: Palette,
      items: ["Branding e Identidade Visual", "UX/UI Design", "Produção de Conteúdo Multiplataforma"]
    },
    {
      id: "data",
      title: "Dados & Analytics",
      desc: "A bússola. Transformamos números brutos em insights acionáveis e preditivos.",
      icon: BarChart3,
      items: ["Dashboards em tempo real", "Análise preditiva", "Implementação de GA4 e Tracking"]
    },
    {
      id: "partners",
      title: "Parcerias & Influência",
      desc: "O alcance expandido. Uma rede viva de criadores e especialistas prontos para atuar.",
      icon: Network,
      items: ["Marketing de Influência", "Collabs estratégicas", "Curadoria de talentos"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Intro */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-axing-ivory mb-8"
        >
          Nosso Ecossistema
        </motion.h1>
        <p className="text-xl text-axing-gray max-w-3xl mx-auto">
          Somos o coração que une pessoas, dados e inovação. Não vendemos serviços isolados; oferecemos um sistema que evolui conforme sua empresa cresce.
        </p>
      </section>

      {/* Visual Representation (Abstract Diagram) */}
      <div className="relative h-[400px] flex items-center justify-center mb-32 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="relative z-10 w-32 h-32 bg-axing-ivory/5 rounded-full blur-[40px]"></div>
        <div className="relative z-20 text-center">
          <span className="text-axing-ivory font-display font-bold text-2xl tracking-wider">NÚCLEO</span>
        </div>
      </div>

      {/* Detailed Arms */}
      <section className="container mx-auto px-6 space-y-24">
        {arms.map((arm, index) => (
          <motion.div 
            key={arm.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <div className="w-16 h-16 rounded-full bg-axing-darkgray flex items-center justify-center mb-6 text-axing-ivory border border-white/20 group hover:border-axing-turquoise/30 transition-colors">
                <arm.icon size={32} className="group-hover:text-axing-turquoise transition-colors" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-axing-ivory mb-4">{arm.title}</h2>
              <p className="text-axing-gray text-lg mb-8">{arm.desc}</p>
              
              <ul className="space-y-4">
                {arm.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-axing-ivory/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-axing-ivory/50"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-axing-darkgray to-black border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                   src={`https://picsum.photos/seed/${arm.id}/600/400`}
                   alt={arm.title}
                   className="rounded-xl w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 mt-32 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-axing-ivory mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {[
            { q: "A Axing substitui minha equipe interna?", a: "Não. Atuamos como extensão. Nosso núcleo se conecta ao seu time para dar tração e especialidade onde falta." },
            { q: "Vocês atendem apenas grandes empresas?", a: "Atendemos empresas em fase de crescimento e escala. O ecossistema é modular e se adapta ao tamanho do desafio." },
            { q: "Como a IA é utilizada nos projetos?", a: "Usamos IA para análise de dados, automação de tarefas repetitivas e geração de insights, sempre com supervisão humana." }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-axing-darkgray/30 rounded-2xl border border-white/5 overflow-hidden open:border-white/20 transition-colors">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-axing-ivory list-none">
                {faq.q}
                <ChevronDown className="group-open:rotate-180 transition-transform text-axing-ivory" />
              </summary>
              <div className="px-6 pb-6 text-axing-gray leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <div className="bg-gradient-to-r from-axing-darkgray to-black p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-axing-ivory mb-8 relative z-10">Pronto para integrar seu núcleo?</h2>
            <Link to="/contact">
              <CapsuleButton>Agendar Diagnóstico</CapsuleButton>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;