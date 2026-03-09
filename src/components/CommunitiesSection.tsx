import { Github, MessageCircle, Gamepad2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CommunitiesSection() {
  const { t } = useLanguage();

  const communities = [
    {
      icon: Github,
      name: 'GitHub',
      description: t('communities_desc.github'),
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:border-gray-500/50'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      description: t('communities_desc.whatsapp'),
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:border-green-500/50'
    },
    {
      icon: Gamepad2,
      name: 'Discord',
      description: t('communities_desc.discord'),
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:border-indigo-500/50'
    }
  ];

  return (
    <section id="communities" className="relative z-10 py-24 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('communities.title')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t('communities.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-8">
          {communities.map((community, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 text-center hover:bg-white/[0.12] hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-300 group ${community.hoverColor}`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${community.color} mb-5 group-hover:scale-110 transition-transform`}>
                <community.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{community.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{community.description}</p>

              <button className={`btn-active-feedback w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${community.color} text-white font-medium hover:scale-105 hover:shadow-lg transition-all duration-300`}>
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
