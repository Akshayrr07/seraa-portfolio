import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

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