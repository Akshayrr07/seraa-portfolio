import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Header />
      <h1 className="text-red-500 text-5xl">TAILWIND TEST</h1>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <div id="experience">
        <ExperienceSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}