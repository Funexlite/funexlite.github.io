import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsStrip from "./components/SkillsStrip";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink pb-16 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <SkillsStrip />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App