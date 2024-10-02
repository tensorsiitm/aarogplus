import { useState } from "react";
import "./navbar.scss";
import logo from "/src/assets/images/aarog-transparent-bg.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Vision", href: "#vision" },
    { name: "Objectives", href: "#objectives" },
    { name: "Current", href: "#current" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
  ];

  const toggleMenu = () => {
    console.log("here")
    setIsMenuOpen((val) => !val);
    console.log("done")
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Aarogplus" height={50} />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navs">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      <div className={`overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="overlay-content">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
