import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Projects from "./components/projects";
import Services from "./components/services";
import WhyHireMe from "./components/whyhireme";
import HireMe from "./components/hireMe";
import Contacts from "./components/contact";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <WhyHireMe />
      <Skills />
      <HireMe />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;