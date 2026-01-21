import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import TechMarquee from "./TechMarquee";
import Experience from "./Experience";
import Projects from "./Projects";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <TechMarquee />
      <Experience />
      <Projects />
      <FAQ />
      <Contact />
    </div>
  );
}
