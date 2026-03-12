import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); // Navigate to home if section not found
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  return (
    <footer>
      <div className="container">
        <Link to="/">
          <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        </Link>
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about" onClick={(e) => scrollToSection("about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#menu" onClick={(e) => scrollToSection("menu")}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>123 Main Street</p>
          <p>Chicago, IL 60601</p>
          <p>(555) 555-5555</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
