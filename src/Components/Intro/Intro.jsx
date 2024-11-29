import React, { useEffect } from "react"
import "./Intro.css"

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
              <img src="/assets/icon-linkedin.png" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/hNnicolas" target="_blank">
              <img src="/assets/icon-github.png" alt="GitHub Icon" />
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
            <img src="/assets/dark-arrow.png" alt="Arrow Icon" />
          </button>
        </div>
        <div className="intro-right">
          <link rel="stylesheet" href="" />
          <img src="/assets/Profil_photo.jpg" alt="intro Image" className="intro-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro
