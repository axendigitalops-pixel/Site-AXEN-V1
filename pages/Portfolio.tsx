import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CapsuleButton from '../components/UI/CapsuleButton';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const categories = ["Todos", "IA", "Branding", "Dados", "Web"];

  const projects = [
    { id: 1, title: "Fintech Evolution", client: "NeoBank", category: "IA", image: "https://picsum.photos/seed/p1/800/600", desc: "Assistente virtual com 98% de precisão." },
    { id: 2, title: "Rebranding Global", client: "EcoCorp", category: "Branding", image: "https://picsum.photos/seed/p2/800/600", desc: "Identidade visual para 12 países." },
    { id: 3, title: "Data Lake View", client: "RetailGiant", category: "Dados", image: "https://picsum.photos/seed/p3/800/600", desc: "Dashboard preditivo de vendas." },
    { id: 4, title: "Immersive Commerce", client: "FashionBrand", category: "Web", image: "https://picsum.photos/seed/p4/800/600", desc: "E-commerce 3D interativo." },
    { id: 5, title: "Automated Marketing", client: "SaaS Co", category: "IA", image: "https://picsum.photos/seed/p5/800/600", desc: "Lead scoring automatizado." },
    { id: 6, title: "Campaign Viral", client: "DrinkEnergy", category: "Branding", image: "https://picsum.photos/seed/p6/800/600", desc: "Campanha com influencers IA." },
  ];

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-axing-ivory mb-6">Cases de Sucesso</h1>
        <p className="text-axing-gray max-w-2xl mx-auto mb-10">
          Resultados reais gerados pela integração do nosso ecossistema.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-axing-ivory text-axing-black border-axing-ivory font-bold' 
                  : 'bg-transparent text-axing-gray border-white/10 hover:border-axing-ivory/50 hover:text-axing-ivory'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                   
                   <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowUpRight className="text-white" size={24} />
                   </div>
                </div>
                <div>
                   <span className="text-axing-gray text-xs font-bold uppercase tracking-wider group-hover:text-axing-turquoise transition-colors">{project.client}</span>
                   <h3 className="text-2xl font-display text-axing-ivory group-hover:text-white transition-colors">{project.title}</h3>
                   <p className="text-axing-gray text-sm mt-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mt-24 text-center">
        <h2 className="text-2xl font-display text-axing-ivory mb-6">Crie seu próprio case de sucesso.</h2>
        <CapsuleButton>Iniciar Projeto</CapsuleButton>
      </section>
    </div>
  );
};

export default Portfolio;