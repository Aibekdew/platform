import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ru"); // <-- тил сакталат

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-text">
            <h1 style={{ fontSize: "35px" }}>КЫРГЫЗАЛТЫН</h1>
            <p style={{ fontSize: "19px" }}>АЧЫК АКЦИОНЕРДИК КОООМУ</p>
          </div>
          <img src="/logo.png" alt="Kyrgyzaltyn Logo" className="logo-image" />
        </div>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          {/* <div className="language-selector">
            <button
              className={`lang-btn ${
                currentLanguage === "ru" ? "active" : ""
              }`}
              onClick={() => setCurrentLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`lang-btn ${
                currentLanguage === "kg" ? "active" : ""
              }`}
              onClick={() => setCurrentLanguage("kg")}
            >
              KG
            </button>
            <button
              className={`lang-btn ${
                currentLanguage === "en" ? "active" : ""
              }`}
              onClick={() => setCurrentLanguage("en")}
            >
              EN
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
