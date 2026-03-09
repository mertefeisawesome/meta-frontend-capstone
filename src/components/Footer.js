import React from "react";

const Footer = () => {
  return (
    <footer>
      <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
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
    </footer>
  );
};

export default Footer;
