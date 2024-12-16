import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
