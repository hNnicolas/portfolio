import {
  Html,
  Environment,
  ContactShadows,
  PresentationControls,
  usePerformanceMonitor,
  OrbitControls,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import LaptopScene from "./homepage/LaptopScene";
import ProjectsScene from "./projects/ProjectsScene";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import ContactScene from "./contact/ContactScene";
import { useControls } from "leva";

/**
 * Contains the full R3F experience
 * @returns the R3F experience
 */
export default function Experience() {
  /*
   * Toggle shadows based on performance
   */

  const [staticShadows] = useState(false);

  const [shadowVis, setShadowVis] = useState(true);

  const onIncline = () => {
    if (!shadowVis) {
      setShadowVis(true);
      console.info("Quality restored");
    }
  };

  const onDecline = () => {
    if (shadowVis) {
      setShadowVis(false);
      console.warn("Low performance detected, reducing quality");
    }
  };

  /**
   * Allows us to toggle the shadows
   */
  usePerformanceMonitor({ onIncline, onDecline });

  // Toggle for finished loading
  const [loading, setLoading] = useState(true);

  // Toggle for animation
  const [animating, setAnimating] = useState(false);

  // Currently selected page set to start so we can animate in
  const [currentPageName, setCurrentPageName] = useState("home");

  // Page refs
  const home = useRef();
  const projects = useRef();
  const contact = useRef();

  // Ref for loading plane
  const loadingPlane = useRef();

  // Import camera for gsap animation
  const { camera } = useThree();

  /* Called on first render
   * Used to load the program and do transition animation
   */
  useEffect(() => {
    // Define load function async
    async function load() {
      // Set loading
      setLoading(true);
      setAnimating(true);

      // Wait a second for pages to load
      await new Promise((r) => setTimeout(r, 1000));

      // Hide other pages
      // (called three times to make sure all assets are properly loaded and hidden)
      projects.current.toggleOut();
      projects.current.toggleOut();
      projects.current.toggleOut();

      contact.current.toggleOut();
      contact.current.toggleOut();
      contact.current.toggleOut();

      // Successful load, Animate opacity for fade animation
      gsap.to(loadingPlane.current.material, {
        duration: 0.75,
        opacity: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          // Sync values and update camera
          loadingPlane.current.material.needsUpdate = true;
          camera.updateProjectionMatrix();
        },
        onComplete: () => {
          // Let program know were finished
          setLoading(false);
          setAnimating(false);
        },
      });
    }

    // Call load
    load();
  }, []);

  /**
   * Sets the current page and plays an animation to switch to it.
   * @param {*} pageName the name of selected page.
   */
  async function SetPage(pageName) {
    if (animating) return;
    if (pageName === currentPageName) return;

    // Set animating
    setAnimating(true);

    // Animate all pages out
    if (home.current.scale.x > 0) {
      home.current.toggleAnimateOut();
    }
    if (projects.current.scale.x > 0) {
      projects.current.toggleAnimateOut();
    }
    if (contact.current.scale.x > 0) {
      contact.current.toggleAnimateOut();
    }

    // wait for animation to finish
    await new Promise((r) => setTimeout(r, 500));

    // Set the current page
    setCurrentPageName(pageName);

    // Animate new page in
    if (pageName === "home" && home.current.scale.x === 0)
      home.current.toggleAnimateOut();
    if (pageName === "projects" && projects.current.scale.x === 0)
      projects.current.toggleAnimateOut();
    if (pageName === "contact" && contact.current.scale.x === 0)
      contact.current.toggleAnimateOut();

    // wait for animation to finish
    await new Promise((r) => setTimeout(r, 500));

    // Set animating
    setAnimating(false);
  }

  /**
   * Allows us to use orbit controls on the debug screen.
   */
  const { orbitControls } = useControls('General', { orbitControls: false });

  // START OF RETURN STATEMENT (Here for legibility) ***************************************************
  return (
    <>
      {/* Loading screen/block */}
      <mesh
        position={[-1.5, 0, 4.08]}
        rotation-y={-0.5}
        ref={loadingPlane}
        visible={loading}
      >
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#3d424a" transparent />
      </mesh>

      {/* NavBar */}
      <Html
        center
        position={[0, 2.4, 0]}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
          fontFamily: "Anek Bangla, sans-serif",
        }}
      >
        <a
          onClick={() => SetPage("home")}
          style={{
            padding: "10px",
            color: currentPageName === "home" ? "#87ceeb" : "white",
            textDecoration: "none",
          }}
        >
          HOME
        </a>
        <a
          onClick={() => SetPage("projects")}
          style={{
            padding: "10px",
            color: currentPageName === "projects" ? "#87ceeb" : "white",
            textDecoration: "none",
          }}
        >
          PROJECTS
        </a>
        <a
          onClick={() => SetPage("contact")}
          style={{
            padding: "10px",
            color: currentPageName === "contact" ? "#87ceeb" : "white",
            textDecoration: "none",
          }}
        >
          CONTACT
        </a>
      </Html>

      {/* Controls reflections and lighting */}
      <Environment preset="city" />

      {/* Background color */}
      <fog attach="fog" args={["#2d3137", 10, 20]} />

      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#2d3137" />
      </mesh>

      {/* Wall for fog */}
      <mesh rotation={[0, -Math.PI * 0.25, 0]} position={[10, -1.5, -30]}>
        <planeGeometry args={[100, 30]} />
        <meshBasicMaterial color="#2d3137" />
      </mesh>

      {/* Allows the user to control the camera, with limits. Using ternary operator for debug, if we want to see orbit controls */}
      {!orbitControls ? <PresentationControls
        global
        // Global rotation
        rotation={[0.13, 0.1, 0]}
        // Amount of vertical rotation
        polar={[-0.4, 0.2]}
        // Amt Horizontal rotation
        azimuth={[-1, 0.75]}
        // Animation for dragging
        config={{ mass: 2, tension: 400 }}
        // animation to snap back on release
        snap={{ mass: 4, tension: 400 }}
      >
        {/* SCENES */}

        <LaptopScene ref={home} />

        <ProjectsScene ref={projects} />

        <ContactScene ref={contact} />
      </PresentationControls> : <> 
      <OrbitControls/> 
      
        <LaptopScene ref={home} />

        <ProjectsScene ref={projects} />

        <ContactScene ref={contact} /> 
      
      </>}

      {/* Shadows (show if performance allows) */}
      {shadowVis && (
        <ContactShadows
          position-y={-1.4}
          opacity={0.4}
          // make shadows static if told to
          frames={staticShadows ? 1 : Infinity}
          scale={10}
          blur={2.4}
        />
      )}
    </>
  );
}
