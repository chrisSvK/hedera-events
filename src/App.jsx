import React, { useEffect, useState } from "react";
import "./App.css";
import scrollTo from "./assets/scripts/mainPage.js";
import Reference from "../referencie/referencie.mdx";
import header from "./assets/img/header.jpg";

function App() {
  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <>
      <nav>
        <a href="#first-segment">O mne</a>
        <a href="#gallery">Referencie</a>
        <a href="#email-form">Kontakt</a>

        <div className="rightNavigation">
          <p>tel: 0911123456</p>
        </div>
      </nav>

      <div className="header">
        <img src={header} alt="landmark" />
        <h1>Hedera events</h1>
      </div>
      <div className="first-segment" id="first-segment">
        <p style={{ textTransform: "uppercase" }}>
          Hudobná produkcia a technické zabezpečenie
        </p>
        <p>svadby - oslavy - firemné večierky - hudobné podujatia</p>
        <ul style={{ textAlign: "left" }}>
          <li>DJ/interpret na váš večierok</li>
          <li>profesionálna zvuková a svetelná technika</li>
          <li>organizácia, catering a technické zabezpečenie</li>
        </ul>
      </div>

      <div className="gallery" id="gallery">
        <div className="content">
          <Reference />
        </div>
      </div>

      <form className="email-form" id="email-form">
        <h1>Kontaktujte ma</h1>
        <label htmlFor="email">Vaša emailová adresa:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Správa:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Poslať email</button>
      </form>
    </>
  );
}

export default App;
