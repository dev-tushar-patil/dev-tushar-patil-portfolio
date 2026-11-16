import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Achievements from './sections/Achievements';
import DeveloperProfiles from './sections/DeveloperProfiles';
import About from './sections/About';
import Experience from './sections/Experience';
import ContactDetails from './sections/ContactDetails';
import CompanyProjects from './sections/CompanyProjects';
import PersonalProjects from './sections/PersonalProjects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Hero />
        <Achievements />
        <DeveloperProfiles />
        <About />
        <Experience />
        <ContactDetails />
        <CompanyProjects />
        <PersonalProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
