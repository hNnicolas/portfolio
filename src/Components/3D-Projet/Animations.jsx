import { useEffect, useRef } from "react"
import "../3D-Projet/Animations.css"
import Projet1 from "../../assets/Haunted-house.png"
import Projet2 from "../../assets/Helmet.png"
import Projet3 from "../../assets/Terrain_Shader.png"
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
        <h1 className="titre">Helmet en 3D WebGL</h1>
        <img src={Projet2} alt="3D Helmet WebGL" className="projet-img" />
        <p>
        <strong>Helmet en 3D</strong> Le projet Helmet en 3D propose une application web interactive qui vous permet d'explorer un modèle de casque en 3D. Vous pouvez manipuler le modèle en temps réel, ajuster l'angle de vue et interagir avec des animations dynamiques qui révèlent des détails cachés du casque. Grâce à l'utilisation de Three.js et WebGL, le modèle est rendu de manière fluide et réaliste. Des éléments de texte en HTML sont intégrés pour fournir des informations contextuelles et des descriptions interactives du casque. Ce projet allie interactivité et technologie pour offrir une expérience utilisateur immersive et détaillée. Un véritable exemple de l'intégration de la 3D dans un environnement web interactif.
        </p>
        <div className="links">
          <a
            href="helmet-9ejc2q9fb-hnnicolas-projects.vercel.app"
            target={"_blank"}
            className="gray-link"
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/3D-helmet"
            className="black-link"
            target={"_blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Maison Hantée en 3D</h1>
        <img src={Projet1} alt="Haunted house" className="projet-img" />
        <p>
        Le projet <strong>Maison Hantée en 3D</strong> vous plonge dans une ambiance mystérieuse et angoissante. Explorez une maison hantée interactive où chaque recoin dissimule des secrets. L’éclairage dynamique joue un rôle essentiel, avec des spots lumineux et des ombres mouvantes qui réagissent à vos actions, créant une atmosphère oppressante. Des animations en temps réel donnent vie à des objets mystérieux, tandis que des effets de lumière et de texture accentuent le côté ancien et lugubre des lieux. Ce projet utilise des technologies avancées pour offrir une expérience immersive et interactive, où chaque mouvement modifie l’environnement et renforce l’aspect hanté.
        </p>
        <div className="links">
          <a
            href="3-d-haunted-house-ncwob6uig-hnnicolas-projects.vercel.app"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/3D-Haunted-house"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Terrain en 3D </h1>
        <img src={Projet3} alt="Terrain en 3D" className="projet-img" />
        <p>
        <strong>Terrain en 3D</strong> est une application interactive qui vous plonge dans un paysage naturel dynamique et personnalisable. Les reliefs et l’eau évoluent en temps réel, offrant un environnement vivant et immersif. Grâce à un panneau de contrôle interactif, il est possible d’ajuster la hauteur des montagnes, la taille des reliefs ou encore l’intensité des vagues et des effets visuels. Le rendu avancé utilise des shaders GLSL personnalisés pour créer des ondulations fluides, des reflets naturels et des transitions réalistes entre les textures. Ce projet met en avant une adaptabilité totale, permettant de modifier la structure du terrain et les détails en temps réel pour explorer une multitude de configurations interactives.

        </p>
        <div className="links">
          <a
            href="https://3-d-terrain-shader.vercel.app/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/hNnicolas/3D-terrain-shader"
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
