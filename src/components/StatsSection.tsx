import { FolderGit2, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: FolderGit2,
      value: '2.234.341',
      label: t('stats.projects'),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      value: '48.234',
      label: t('stats.active_members'),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: BookOpen,
      value: '938.567',
      label: t('stats.classes'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Award,
      value: '1.674.438',
      label: t('stats.certificates'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="stats" className="pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('stats.title_prefix')}{' '}
            <span className="text-cyan-400 drop-shadow-md">
              {t('stats.title_highlight')}
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <a
            href="#contact"
            className="btn-active-feedback inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            {t('stats.cta')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
