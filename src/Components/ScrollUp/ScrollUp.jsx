import React, { useEffect } from "react"
import "./ScrollUp.css";
import { FaCircleArrowUp } from "react-icons/fa6"

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup")
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll")
      } else {
        scrollUp.classList.remove("show-scroll")
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        href="#"
        className="scrollup"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        alt="Scroll to top"
      >
        <FaCircleArrowUp className="scrollup_icon" />
      </div>
    </>
  )
}

export default ScrollUp
