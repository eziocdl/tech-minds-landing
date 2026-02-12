import { Github, MessageCircle, Gamepad2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CommunitiesSection() {
  const { t, language } = useLanguage();

  const descriptions = {
    pt: {
      github: 'Contribua com projetos open source e compartilhe codigo',
      whatsapp: 'Junte-se ao grupo para discussoes e networking',
      discord: 'Comunidade ativa com canais de ajuda e eventos'
    },
    en: {
      github: 'Contribute to open source projects and share code',
      whatsapp: 'Join the group for discussions and networking',
      discord: 'Active community with help channels and events'
    },
    es: {
      github: 'Contribuye a proyectos de código abierto y comparte código',
      whatsapp: 'Únete al grupo para discusiones y networking',
      discord: 'Comunidad activa con canales de ayuda y eventos'
    }
  };

  const currentDesc = descriptions[language as keyof typeof descriptions];

  const communities = [
    {
      icon: Github,
      name: 'GitHub',
      description: currentDesc.github,
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:border-gray-500/50'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      description: currentDesc.whatsapp,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:border-green-500/50'
    },
    {
      icon: Gamepad2,
      name: 'Discord',
      description: currentDesc.discord,
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:border-indigo-500/50'
    }
  ];

  return (
    <section id="communities" className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t('communities.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('communities.subtitle')}
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-8">
          {communities.map((community, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 text-center hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group ${community.hoverColor}`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${community.color} mb-5 group-hover:scale-110 transition-transform`}>
                <community.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{community.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{community.description}</p>

              {/* Button */}
              <button className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${community.color} text-white font-medium hover:opacity-90 transition-opacity`}>
                {t('community.cta')}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
