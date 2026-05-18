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
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import About from '@/components/About';


const Home = () => {
  return (
    <div className="min-h-screen bg-#fafaf8 text-black overflow-scroll">
      {/* grid */}
      <div
        className="
          fixed inset-0 -z-10
          bg-[linear-gradient(to_right,#dcdcdc_1px,transparent_1px),linear-gradient(to_bottom,#dcdcdc_1px,transparent_1px)]
          bg-size-[72px_72px]
          opacity-60
        "
      />
      
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
        {/* <Contact />  */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;