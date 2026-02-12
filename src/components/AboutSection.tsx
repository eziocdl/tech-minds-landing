import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Clock, Shield } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mt-24 pt-16 pb-16 sm:mt-32 sm:pt-20 sm:pb-20 lg:mt-40 lg:pt-24 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            {t('about.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {t('about.title')}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Bottom Section: Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Innovation Card */}
          <div className="p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{t('about.cards.innovation.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('about.cards.innovation.desc')}</p>
            </div>
          </div>

          {/* Speed Card */}
          <div className="p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{t('about.cards.speed.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('about.cards.speed.desc')}</p>
            </div>
          </div>

          {/* Quality Card */}
          <div className="p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{t('about.cards.quality.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('about.cards.quality.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
