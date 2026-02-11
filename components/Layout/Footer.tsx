import React from 'react';
import { Link } from 'react-router-dom';
import { Triangle, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="px-3 md:px-6 pb-6 pt-12">
      <footer className="bg-[#080808] border border-white/10 rounded-[2.5rem] pt-16 pb-10 relative overflow-hidden">
        {/* Subtle top highlight to enhance 3D feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Triangle className="w-6 h-6 text-axing-turquoise fill-current transform rotate-180" />
                <span className="text-2xl font-display font-bold text-axing-ivory tracking-tighter">
                  AXING
                </span>
              </div>
              <p className="text-axing-gray text-sm leading-relaxed mb-6">
                Pessoas no centro. Tecnologia em movimento. O núcleo do seu crescimento digital.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-axing-gray hover:text-axing-turquoise transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-axing-gray hover:text-axing-turquoise transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-axing-gray hover:text-axing-turquoise transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-axing-ivory">Ecossistema</h4>
              <ul className="space-y-4">
                <li><Link to="/ecosystem" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Inteligência Artificial</Link></li>
                <li><Link to="/ecosystem" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Criatividade & Design</Link></li>
                <li><Link to="/ecosystem" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Dados & Analytics</Link></li>
                <li><Link to="/ecosystem" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Parcerias</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-axing-ivory">Institucional</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Quem Somos</Link></li>
                <li><Link to="/blog" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="text-axing-gray hover:text-axing-turquoise text-sm transition-colors">Trabalhe Conosco</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-axing-ivory">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-axing-gray text-sm">
                  <MapPin size={18} className="text-axing-turquoise shrink-0 mt-1" />
                  <span>Av. Paulista, 0000 - São Paulo, SP<br />Brasil</span>
                </li>
                <li className="flex items-center gap-3 text-axing-gray text-sm">
                  <Mail size={18} className="text-axing-turquoise shrink-0" />
                  <span>hello@axing.com.br</span>
                </li>
                <li className="flex items-center gap-3 text-axing-gray text-sm">
                  <Phone size={18} className="text-axing-turquoise shrink-0" />
                  <span>+55 11 99999-9999</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-axing-gray text-xs">© 2026 Axing Digital Ops. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-axing-gray text-xs hover:text-axing-ivory">Política de Privacidade</Link>
              <Link to="/terms" className="text-axing-gray text-xs hover:text-axing-ivory">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;