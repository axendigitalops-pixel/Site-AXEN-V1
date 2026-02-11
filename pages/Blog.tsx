import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "O futuro da IA é híbrido: humanos e máquinas",
      excerpt: "Como a colaboração entre inteligência artificial e criatividade humana está redefinindo o mercado.",
      category: "Inteligência Artificial",
      date: "12 Out 2026",
      image: "https://picsum.photos/seed/blog1/800/400"
    },
    {
      id: 2,
      title: "Storytelling na era dos dados",
      excerpt: "Usando métricas para criar narrativas que realmente engajam e convertem.",
      category: "Marketing",
      date: "05 Set 2026",
      image: "https://picsum.photos/seed/blog2/800/400"
    },
    {
      id: 3,
      title: "A ascensão das marcas ecossistêmicas",
      excerpt: "Por que empresas que funcionam como plataformas vivas crescem 3x mais rápido.",
      category: "Negócios",
      date: "28 Ago 2026",
      image: "https://picsum.photos/seed/blog3/800/400"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl font-display font-bold text-axing-ivory mb-6">Conteúdo de Autoridade</h1>
        <p className="text-axing-gray max-w-xl">Insights profundos sobre tecnologia, cultura e inovação.</p>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {posts.map((post, index) => (
             <motion.article 
               key={post.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className={`group rounded-[2rem] bg-axing-darkgray/30 border border-white/5 overflow-hidden hover:border-axing-turquoise/30 transition-all ${index === 0 ? 'md:col-span-2' : ''}`}
             >
               <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-6 left-6 bg-axing-black/80 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-axing-turquoise uppercase">{post.category}</span>
                 </div>
               </div>
               <div className="p-8">
                 <span className="text-axing-gray text-xs mb-2 block">{post.date}</span>
                 <h2 className={`${index === 0 ? 'text-3xl' : 'text-xl'} font-display font-bold text-axing-ivory mb-4 group-hover:text-axing-turquoise transition-colors`}>
                   {post.title}
                 </h2>
                 <p className="text-axing-gray text-sm line-clamp-2 mb-6">{post.excerpt}</p>
                 <span className="text-axing-ivory text-sm font-bold underline decoration-axing-turquoise underline-offset-4">Ler artigo completo</span>
               </div>
             </motion.article>
           ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 mt-24">
        <div className="bg-axing-turquoise text-axing-black rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Mantenha-se no núcleo.</h3>
            <p className="mb-6 opacity-80">Receba nossa curadoria mensal de tendências.</p>
            <form className="max-w-md mx-auto flex gap-2">
                <input type="email" placeholder="Seu melhor e-mail" className="flex-1 bg-white/20 placeholder-black/50 border-0 rounded-full px-6 py-3 focus:ring-2 focus:ring-black outline-none" />
                <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors">Assinar</button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;