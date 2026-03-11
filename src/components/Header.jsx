import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-left">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="header-right">
          <img src="./assets/images/restauranfood.jpg" alt="Restaurant Food" />
        </div>
      </div>
    </header>
  );
};

export default Header;
