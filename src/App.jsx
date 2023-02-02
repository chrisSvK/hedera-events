import React, { useEffect, useState } from "react";
import "./App.css";
import scrollTo from "./assets/scripts/mainPage.js";
import header from "./assets/img/header.jpg";
import Navigation from "./components/navigation/Navigation";
import Kontakt from "./components/kontakt/Kontakt";
import ReferencieSection from "./components/reference/Referencie";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <>
      <Navigation />

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

      <ReferencieSection />

      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
