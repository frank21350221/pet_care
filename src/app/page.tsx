import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <About />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
    </>
  );
}
