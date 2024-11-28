import { useEffect, useRef } from "react";
import "./About.css";
import CV from "../../assets/CV_huang_nicolas.webp";
import Cv_pdf from "../../assets/CV_huang_nicolas.pdf";

const About = () => {
  const newsletterRef = useRef();
  const newsletterRef2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newsletterRef.current.classList.add("animed-left");
        observer.unobserve(newsletterRef.current);
      }
    });
    observer.observe(newsletterRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newsletterRef2.current.classList.add("animed-right");
        observer.unobserve(newsletterRef2.current);
      }
    });
    observer.observe(newsletterRef2.current);
  }, []);

  return (
    <div id="about" className="abouts">
      <div ref={newsletterRef} className="about-img">
        <a href={Cv_pdf} target="_blank" rel="noopener noreferrer">
          <img src={CV} alt="CV" className="img-cv" />
        </a>
      </div>
      <div ref={newsletterRef2} className="about-text">
        <p>
          <strong>Jeune développeur en formation</strong>, passionné par le développement informatique et les technologies innovantes, je m'intéresse particulièrement aux{" "}
          <strong>animations 3D</strong>. Actuellement inscrit chez{" "}
          <strong>OpenClassrooms</strong>, je suis à la recherche d'une{" "}
          <strong>alternance</strong> pour consolider mes compétences et{" "}
          <strong>enrichir mon expérience professionnelle</strong>.
          <br />
          <hr />
          <strong>Curieux, autonome, motivé, esprit d'équipe</strong>, je suis
          constamment en quête de nouveaux défis pour approfondir mes connaissances en programmation et{" "}
          <strong>contribuer à des projets innovants</strong>.
          <br />
          <hr className="hr-2" />
          J’ai un intérêt marqué pour la création d’API Rest (CRUD) et je travaille régulièrement avec les technologies suivantes :{" "}
          <strong>JavaScript, React, Node.js, Express, MongoDB, Three.js, WebGL</strong>.
          <br />
          Je suis convaincu que cette opportunité me permettra de{" "}
          <strong>grandir professionnellement</strong>, tout en{" "}
          <strong>apportant une réelle valeur ajoutée</strong> à l'équipe qui m'accueillera.
        </p>
        <a download="" href={Cv_pdf}>
          Téléchargez CV
        </a>
      </div>
    </div>
  );
};

export default About;
