import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo_techminds.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const labels = {
    pt: {
      description: 'Transformando estudantes em profissionais atraves da pratica e inovacao tecnologica.',
      company: 'Empresa',
      resources: 'Recursos',
      contact: 'Contato',
      team: 'Equipe',
      careers: 'Carreiras',
      blog: 'Blog',
      docs: 'Documentacao',
      tutorials: 'Tutoriais',
      faq: 'FAQ',
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos'
    },
    en: {
      description: 'Transforming students into professionals through practice and technological innovation.',
      company: 'Company',
      resources: 'Resources',
      contact: 'Contact',
      team: 'Team',
      careers: 'Careers',
      blog: 'Blog',
      docs: 'Documentation',
      tutorials: 'Tutorials',
      faq: 'FAQ',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    es: {
      description: 'Transformando estudiantes en profesionales a través de la práctica e innovación tecnológica.',
      company: 'Empresa',
      resources: 'Recursos',
      contact: 'Contacto',
      team: 'Equipo',
      careers: 'Carreras',
      blog: 'Blog',
      docs: 'Documentación',
      tutorials: 'Tutoriales',
      faq: 'Preguntas Frecuentes',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  };

  const text = labels[language as keyof typeof labels];

  const footerLinks = {
    empresa: [
      { label: t('header.about'), href: '#about' },
      { label: t('header.projects'), href: '#projects' },
      { label: text.team, href: '#' },
      { label: text.careers, href: '#' }
    ],
    recursos: [
      { label: text.blog, href: '#' },
      { label: text.docs, href: '#' },
      { label: text.tutorials, href: '#' },
      { label: text.faq, href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', label: 'GitHub' },
    { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { name: 'X', href: '#', label: 'X' }
  ];

  const SocialIcon = ({ name, className }: { name: string, className?: string }) => {
    if (name === 'GitHub') {
      return (
        <svg role="img" viewBox="0 0 24 24" fill="#ffffff" style={{ width: '32px', height: '32px' }} className={className} xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    }
    if (name === 'LinkedIn') {
      return (
        <svg role="img" viewBox="0 0 24 24" fill="#ffffff" style={{ width: '32px', height: '32px' }} className={className} xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    }
    if (name === 'X') {
      return (
        <svg role="img" viewBox="0 0 24 24" fill="#ffffff" style={{ width: '32px', height: '32px' }} className={className} xmlns="http://www.w3.org/2000/svg">
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="TechMinds Logo" className="h-10 w-auto" />
              <span className="font-bold text-lg text-white">TechMinds</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {text.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/20 p-1"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.name} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">{text.company}</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-white mb-4">{text.resources}</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{text.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@techminds.com" className="flex items-center gap-3 text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </span>
                  contato@techminds.com
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="flex items-center gap-3 text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </span>
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </span>
                Sao Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} TechMinds. {text.rights}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                {text.privacy}
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                {text.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
