import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
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
    <nav>
      <div className="container">
        <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                scrollToSection("about");
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                scrollToSection("menu");
              }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
