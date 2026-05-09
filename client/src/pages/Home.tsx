/**
 * Home Page Component
 * 
 * Main landing page of the developer portfolio.
 * Combines all sections:
 * - Navbar (fixed header)
 * - Hero section (introduction)
 * - About section (experience, skills, tools)
 * - Projects section (featured work)
 * - Contact section (CTA)
 * - Footer
 * 
 * Design: Modern playful minimalism with bold typography
 * and strategic use of blue accent color
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;