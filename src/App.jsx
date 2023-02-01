import React, { useEffect, useState } from "react";
import "./App.css";
import scrollTo from "./assets/scripts/mainPage.js";
import Reference from "./assets/referencie/reference.mdx";
import header from "./assets/img/header.jpg"

function App() {
  useEffect(() => {
    scrollTo();
  }, []);

  const [content, setContent] = useState("");

  // useEffect(() => {
  //   fetch(file)
  //     .then((res) => res.text())
  //     .then((text) => setContent(text));
  // }, []);

  return (
    <>
      <nav>
        <a href="#first-segment">O mne</a>
        <a href="#gallery">Referencie</a>
        <a href="#email-form">Kontakt</a>
      </nav>
      {/* First segment: header with landmark picture, headline, and short text about me */}
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

      {/* Second segment: grid with pictures */}
      <div className="gallery" id="gallery">
        <Reference/>
        {/* <img src={require("./assets/img/galler1.jpg")} alt="picture 1" />
        <img src={require("./assets/img/galler2.jpg")} alt="picture 2" />
        <img src={require("./assets/img/galler3.jpg")} alt="picture 3" />
        <img src={require("./assets/img/galler4.jpg")} alt="picture 4" />
        <img src={require("./assets/img/galler5.jpg")} alt="picture 5" /> */}
        {/* Add more pictures as needed */}
      </div>

      {/* Third segment: form to send email */}
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
