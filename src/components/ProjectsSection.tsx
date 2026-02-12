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
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {t('projects.title')}
            </h2>
            <p className="text-gray-400 text-lg">
              {t('projects.subtitle')}
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all"
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
              className="group p-6 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.15] shadow-lg shadow-black/20 hover:bg-white/[0.12] hover:border-white/[0.25] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* 1. Icon */}
              <div
                className={`rounded-xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform shadow-lg`}
                style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}
              >
                <project.icon className="w-6 h-6 text-white" />
              </div>

              {/* 2. Title */}
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{project.title}</h3>

              {/* 3. Description */}
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{project.description}</p>

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
          >
            {t('projects.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
