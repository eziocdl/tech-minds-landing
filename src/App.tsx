import Header from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero3D from './components/Hero3D';
import LearningSection from './components/LearningSection';
import DeadlineSection from './components/DeadlineSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import CommunitiesSection from './components/CommunitiesSection';
import Footer from './components/Footer';
import BrainParticles3D from './components/BrainParticles3D';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500/30">
        {/* Background Neural Network - Covers entire page height */}
        <BrainParticles3D />

        {/* Content Layer - Above background but below header */}
        <div className="relative z-[1] pointer-events-auto">
          <Header />
          <main style={{ paddingTop: '70px' }}> {/* Add padding to account for fixed header */}
            <Hero3D />
            <StatsSection />
            <AboutSection />
            <LearningSection />
            <ProjectsSection />
            <DeadlineSection />
            <CommunitiesSection />
          </main>
          <Footer />
        </div>
      </div >
    </LanguageProvider >
  );
}
