import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projet from "./Components/Projet/Projet";
import Animations from "./Components/3D-Projet/Animations";
import Skills from "./Components/Skills/Skills";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import ScrolUp from "./Components/ScrollUp/ScrollUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Intro />
        <Title subTitle="About" title="À Propos de moi" />
        <About />
        <Title subTitle="Skills" title="Mes Compétences" />
        <Skills />
        <Title subTitle="Projet" title="Mes Projets" />
        <Projet />
        <Title subTitle="3D-Projet" title="Mes Animations 3D" />
        <Animations />
        <Title subTitle="Contact" title="Me Contacter" />
        <Contact />
      </div>
      <hr />
      <Footer />
      <ScrolUp />
    </div>
  );
};

export default App;
