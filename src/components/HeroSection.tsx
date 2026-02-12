import dashboardImage from '../assets/dashboard.png';

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl mb-6">
            Está cansado de vagas de estágio pedindo experiência?
          </h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Aqui na TechMinds nós te oferecemos a oportunidade de conseguir essa tão exigida experiência através de projetos open-source altamente desafiadores, feitos exclusivamente para te preparar para o mercado!
          </p>
        </div>

        <div className="relative z-10">
          <img
            src={dashboardImage}
            alt="Dashboard Analytics"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
