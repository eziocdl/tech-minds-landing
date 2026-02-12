import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero3D() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
              <Sparkles className="w-4 h-4" />
              {t('hero.badge')}
            </span>
          </div>

          {/* Titulo */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            {t('hero.title_prefix')}{' '}
            <span className="text-cyan-400">
              {t('hero.title_highlight')}
            </span>
          </h1>

          {/* Subtitulo */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              {t('hero.cta_primary')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(to right, #a855f7, #10b981)',
                boxShadow: '0 10px 40px -10px rgba(168, 85, 247, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {t('hero.cta_secondary')}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl mx-auto">
            <div className="flex flex-row items-center justify-center gap-3 px-6 py-6 min-w-[200px] rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">1-2</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium whitespace-nowrap">{t('hero.stat_weeks')}</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 px-6 py-6 min-w-[200px] rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium whitespace-nowrap">{t('hero.stat_real')}</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 px-6 py-6 min-w-[200px] rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium whitespace-nowrap">{t('hero.stat_years')}</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
