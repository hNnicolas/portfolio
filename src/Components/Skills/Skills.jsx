import React, { useEffect, useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const newSkillsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newSkillsRef.current.classList.add("animed-left")
        observer.unobserve(newSkillsRef.current)
      }
    })
    observer.observe(newSkillsRef.current)
  })

  return (
    <div ref={newSkillsRef} id="skills" className="Skills">
      <div className="Front-end">
        <h1>Front-End</h1>
        <ul>
          <li>
            <h3>
              - JavaScript{" "}
              <img
                src="https://simpleicons.org/icons/javascript.svg"
                alt="JavaScript Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - React{" "}
              <img
                src="https://simpleicons.org/icons/react.svg"
                alt="React Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Redux{" "}
              <img
                src="https://simpleicons.org/icons/redux.svg"
                alt="Redux Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - HTML / CSS{" "}
              <img
                src="https://simpleicons.org/icons/html5.svg"
                alt="HTML Logo"
                className="logo"
              />
              <img
                src="https://simpleicons.org/icons/css3.svg"
                alt="CSS Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Sass <img src="/assets/Sass.png" alt="Sass Logo" className="logo" />
            </h3>
          </li>
          <li>
            <h3>
              - Tailwind CSS{" "}
              <img
                src="https://simpleicons.org/icons/tailwindcss.svg"
                alt="Tailwind CSS Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Bootstrap{" "}
              <img
                src="https://simpleicons.org/icons/bootstrap.svg"
                alt="Bootstrap Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - WebGL{" "}
              <img
                src="https://simpleicons.org/icons/webgl.svg"
                alt="WebGL Logo"
                className="logo"
              />
            </h3>
          </li>
        </ul>
      </div>
      <div className="Back-end">
        <h1>Back-end</h1>
        <ul>
          <li>
            <h3>
              - Node.js <img src="/assets/node.png" alt="Node.js Logo" className="logo" />
            </h3>
          </li>
          <li>
            <h3>
              - MongoDB{" "}
              <img
                src="https://simpleicons.org/icons/mongodb.svg"
                alt="MongoDB Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - PhP{" "}
              <img
                src="https://simpleicons.org/icons/php.svg"
                alt="PhP Logo"
                className="logo"
              />
            </h3>
          </li>
          <li>
            <h3>
              - Express{" "}
              <img src="/assets/express.svg" alt="Express logo" className="logo" />
            </h3>
          </li>
          <li>
            <h3>
              - MySQL <img src="/assets/mysql.png" alt="Express logo" className="logo" />
            </h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
