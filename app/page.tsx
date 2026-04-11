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