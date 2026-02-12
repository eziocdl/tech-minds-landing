import { Clock, CheckCircle2, Calendar } from 'lucide-react';
import calendarImage from 'figma:asset/62d20583d8c402405871d4dba4f39565160af965.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function DeadlineSection() {
  const { t, language } = useLanguage();

  const content = {
    pt: {
      badge: 'Gestao de Tempo',
      badge_progress: 'Tarefas em andamento',
      badge_done: 'Tarefas concluidas'
    },
    en: {
      badge: 'Time Management',
      badge_progress: 'Tasks in progress',
      badge_done: 'Tasks completed'
    },
    es: {
      badge: 'Gestión de Tiempo',
      badge_progress: 'Tareas en progreso',
      badge_done: 'Tareas completadas'
    }
  };

  const texts = content[language as keyof typeof content];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Calendar className="w-4 h-4" />
              {texts.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {t('deadline.title_prefix')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {t('deadline.title_highlight')}
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('deadline.subtitle')}
            </p>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">{texts.badge_progress}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-gray-300">{texts.badge_done}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <img
                src={calendarImage}
                alt="Calendar"
                className="relative z-10 w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
