import { Terminal, BarChart3, FlaskConical, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Tech logo components using CDN
const TechLogos: Record<string, string> = {
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
};

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      icon: Terminal,
      title: t('projects.items.cli.title'),
      description: t('projects.items.cli.description'),
      color: 'from-blue-600 to-blue-700',
      status: t('projects.status_in_progress'),
      tags: ['Node.js', 'TypeScript']
    },
    {
      icon: BarChart3,
      title: t('projects.items.inventory.title'),
      description: t('projects.items.inventory.description'),
      color: 'from-cyan-500 to-blue-500',
      status: t('projects.status_in_progress'),
      tags: ['React', 'Spring Boot']
    },
    {
      icon: FlaskConical,
      title: t('projects.items.testflow.title'),
      description: t('projects.items.testflow.description'),
      color: 'from-indigo-500 to-purple-600',
      status: t('projects.status_in_progress'),
      tags: ['Python', 'Selenium']
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {t('projects.title')}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              {t('projects.subtitle')}
            </p>
          </div>
          <a
            href="#"
            className="btn-active-feedback hidden sm:inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300"
          >
            {t('projects.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-300"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* 1. Visual Preview Area */}
              <div
                className={`rounded-xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-5`}
                style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <project.icon className="w-14 h-14 text-white/80 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* 2. Title */}
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

              {/* 3. Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* 4. Tech Logos + 5. Status */}
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <img
                      key={tagIndex}
                      src={TechLogos[tag]}
                      alt={tag}
                      title={tag}
                      style={{ width: '20px', height: '20px' }}
                    />
                  ))}
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#34d399' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="btn-active-feedback inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300"
          >
            {t('projects.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
