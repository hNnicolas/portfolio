import { useEffect, useRef } from "react"
import "./Projet.css"
import Projet1 from "../../assets/Freshly_Restaurant.png"
import Projet2 from "../../assets/Masterpiece.png"
import Projet3 from "../../assets/Helloworld.png"
import icon_github from "../../assets/icon-github.png"
import icon_domaine from "../../assets/icon-domaine.png"


const Projet = () => {
  const newProjetRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newProjetRef.current.classList.add("animed-right");
        observer.unobserve(newProjetRef.current);
      }
    });
    observer.observe(newProjetRef.current);
  }, []);

  return (
    <div ref={newProjetRef} id="projet" className="Projets">
      <div className="projet">
        <h1 className="titre">Jeu Ardoise Numérique</h1>
        <img src={Projet2} alt="Ardoise - Jeu" className="projet-img" />
        <p>
        Le projet "Ardoise Numérique" a été conçu pour simuler une expérience d'ardoise où les utilisateurs peuvent interagir en temps réel avec l'interface en cliquant sur l'écran pour générer des couleurs et des tailles de pinceau aléatoires. Ce projet utilise principalement des technologies web telles que JavaScript, HTML, CSS, et la plateforme GitHub pour la gestion du code source et la publication du projet.
        </p>
        <div className="links">
          <a
            href="https://masterpieces-color.netlify.app/"
            target={"_blank"}
            className="gray-link"
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/Masterpiece"
            className="black-link"
            target={"_blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Site E-commerc Restaurant </h1>
        <img src={Projet1} alt="Ecommerce" className="projet-img" />
        <p>
        Le site présente l'ambiance moderne et conviviale du Freshly Restaurant, un établissement situé en plein cœur de New York. Vous y trouverez des informations sur le menu, des options de réservation et des photos alléchantes qui donnent envie de visiter cet endroit unique. Le site a été conçu de manière simple et élégante pour offrir une expérience utilisateur fluide et intuitive.
        </p>
        <div className="links">
          <a
            href="https://freshly-restaurant-o7cohi4na-hnnicolas-projects.vercel.app/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/Freshly-restaurant"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Site Agence Vitrine </h1>
        <img src={Projet3} alt="SiteVitrine" className="projet-img" />
        <p>
        Bienvenue dans le projet Vitrine de l'Agence de Voyage, une réalisation effectuée durant ma formation à 3W Academy. Ce site a été conçu pour présenter une agence de voyage fictive, avec un design moderne et une interface attrayante, offrant aux utilisateurs une expérience immersive et intuitive.
La vitrine a été pensée pour captiver l’attention des visiteurs grâce à un visuel soigné et une navigation fluide.

        </p>
        <div className="links">
          <a
            href="https://agence-vitrine.vercel.app/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/Agence-vitrine"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projet
