import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const newContactLeftRef = useRef();
  const newContactRightRef = useRef();
  let timeoutId; // Déclarer timeoutId à un niveau plus élevé

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newContactLeftRef.current.classList.add("animed-left");
        observer.unobserve(newContactLeftRef.current);
      }
    });
    observer.observe(newContactLeftRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newContactRightRef.current.classList.add("animed-right");
        observer.unobserve(newContactRightRef.current);
      }
    });
    observer.observe(newContactRightRef.current);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", "16c18338-40eb-4b9a-acf6-59240fc020c2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      clearTimeout(timeoutId);

      if (data.success) {
        timeoutId = setTimeout(() => {
          setResult("Message bien envoyé !");
          event.target.reset();

          setTimeout(() => {
            setResult("");
          }, 2000);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setResult(data.message);

          setTimeout(() => {
            setResult("");
          }, 2000);
        }, 2000);
      }
    } catch (error) {
      // En cas d'erreur réseau ou autre
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setResult("Une erreur est survenue. Veuillez réessayer.");

        setTimeout(() => {
          setResult("");
        }, 2000);
      }, 2000);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-section">
        <div ref={newContactLeftRef} className="contact-left">
          <h1>Pour me contacter</h1>
          <p>
            Je suis actuellement disponible, vous pouvez me contacter par
            téléphone, par email ou via LinkedIn.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/assets/mail_icon.png" alt="mailbox" /> <p>huang.nicola@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/tel_icon.png" alt="telephone" /> <p>+33 6 22 41 40 99</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/localisation_icon.png" alt="location" /> <p>Paris, France</p>
            </div>
          </div>
        </div>

        <form ref={newContactRightRef} onSubmit={onSubmit} className="contact-right">
          <input
            type="text"
            placeholder="Entrez votre Prénom"
            name="firstName"
            required
          />
          <input
            type="text"
            placeholder="Entrez votre Nom"
            name="lastName"
            required
          />
          <input
            type="email"
            placeholder="Entrez votre Email"
            name="email"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Entrez votre message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Envoyer
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
