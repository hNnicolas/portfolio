import React, { useEffect } from "react"
import "./Intro.css"
import introImg from "../../assets/Profil_photo.jpg"
import dark_arrow from "../../assets/dark-arrow.png"
import icon_linkedin from "../../assets/icon-linkedin.png"
import icon_github from "../../assets/icon-github.png"

const Intro = () => {
  useEffect(() => {
    const introLeft = document.querySelector(".intro-left")
    const introRight = document.querySelector(".intro-right")

    if (introLeft) {
        introLeft.classList.add("animate-left")
    }
    if (introRight) {
        introRight.classList.add("animate-right")
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="home" className="intro container">
      <div className="intro-section">
        <div className="intro-left">
          <h1>
            Nicolas HUANG
            <a  href="https://www.linkedin.com/in/huang-nicolas/"
              target="_blank" >
              <img src={icon_linkedin} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/hNnicolas" target="_blank">
              <img src={icon_github} alt="GitHub Icon" />
            </a>
          </h1>
          <h2>Développeur Web Full Stack</h2>
          <p>
            Je suis développeur Web junior{" "}
            <br /> Je recherche une alternance pour enrichir mes compétences et
            contribuer à des projets innovants.
          </p>
          <button className="btn" onClick={scrollToContact}>
            Contactez-moi
            <img src={dark_arrow} alt="Arrow Icon" />
          </button>
        </div>
        <div className="intro-right">
          <link rel="stylesheet" href="" />
          <img src={introImg} alt="intro Image" className="intro-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro
