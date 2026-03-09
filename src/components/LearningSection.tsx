import { User, Users, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LearningSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: User,
      title: t('learning.cards.mentorship.title'),
      description: t('learning.cards.mentorship.desc'),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: t('learning.cards.community.title'),
      description: t('learning.cards.community.desc'),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Briefcase,
      title: t('learning.cards.projects.title'),
      description: t('learning.cards.projects.desc'),
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            {t('learning.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('learning.title')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t('learning.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex items-center gap-4"
            >
              <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-active-feedback inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 border border-cyan-500/20">
            {t('learning.cta')}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
