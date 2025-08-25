import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
