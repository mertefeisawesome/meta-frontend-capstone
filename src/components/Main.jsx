import React from "react";
import Star from "./Star";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="specials" id="menu">
          <div className="specials-header">
            <h2>Specials</h2>
            <button>Online Menu</button>
          </div>
          <div className="specials-cards">
            <div className="card">
              <img src="/assets/images/greek salad.jpg" alt="Greek Salad" />
              <div className="card-content">
                <div className="card-title">
                  <h3>Greek Salad</h3>
                  <p className="price">$12.99</p>
                </div>
                <div className="card-description">
                  <p>
                    A refreshing salad of crisp lettuce, ripe tomatoes,
                    cucumbers, Kalamata olives, and creamy feta cheese, tossed
                    with olive oil and oregano.
                  </p>
                </div>
                <a className="card-cta" href="/menu">
                  Order a delivery{" "}
                  <img src="/assets/icons/motorcycle.png" alt="Motorcycle" />
                </a>
              </div>
            </div>
            <div className="card">
              <img src="/assets/images/bruschetta.jpeg" alt="Bruschetta" />
              <div className="card-content">
                <div className="card-title">
                  <h3>Bruschetta</h3>
                  <p className="price">$5.99</p>
                </div>
                <div className="card-description">
                  <p>
                    Grilled bread topped with a vibrant mix of diced tomatoes,
                    garlic, basil, and olive oil. A classic Italian starter with
                    a fresh flavor.
                  </p>
                </div>
                <a className="card-cta" href="/menu">
                  Order a delivery{" "}
                  <img src="/assets/icons/motorcycle.png" alt="Motorcycle" />
                </a>
              </div>
            </div>
            <div className="card">
              <img src="/assets/images/lemon dessert.jpg" alt="Lemon Dessert" />
              <div className="card-content">
                <div className="card-title">
                  <h3>Lemon Dessert</h3>
                  <p className="price">$5.00</p>
                </div>
                <div className="card-description">
                  <p>
                    A light and zesty lemon dessert made with fresh citrus,
                    sugar, and cream, delivering a smooth and refreshing finish
                    to your meal.
                  </p>
                </div>
                <a className="card-cta" href="/menu">
                  Order a delivery{" "}
                  <img src="/assets/icons/motorcycle.png" alt="Motorcycle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <h3>John Doe</h3>
              <div className="testimonial-rating">
                <img src="/assets/images/john-doe.jpg" alt="John Doe" />
                <div className="stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p>
                "The food was absolutely delicious! The Greek Salad was fresh
                and flavorful, and the delivery was super fast. Highly
                recommend!"
              </p>
            </div>
            <div className="testimonial-card">
              <h3>John Doe</h3>
              <div className="testimonial-rating">
                <img src="/assets/images/john-doe.jpg" alt="John Doe" />
                <div className="stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p>
                "The food was absolutely delicious! The Greek Salad was fresh
                and flavorful, and the delivery was super fast. Highly
                recommend!"
              </p>
            </div>
            <div className="testimonial-card">
              <h3>John Doe</h3>
              <div className="testimonial-rating">
                <img src="/assets/images/john-doe.jpg" alt="John Doe" />
                <div className="stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p>
                "The food was absolutely delicious! The Greek Salad was fresh
                and flavorful, and the delivery was super fast. Highly
                recommend!"
              </p>
            </div>
            <div className="testimonial-card">
              <h3>John Doe</h3>
              <div className="testimonial-rating">
                <img src="/assets/images/john-doe.jpg" alt="John Doe" />
                <div className="stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p>
                "The food was absolutely delicious! The Greek Salad was fresh
                and flavorful, and the delivery was super fast. Highly
                recommend!"
              </p>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              Welcome to our restaurant! We are passionate about serving
              delicious food made from the freshest ingredients. Our menu
              features a variety of dishes inspired by global cuisines, crafted
              with care and creativity. Whether you're dining in or ordering for
              delivery, we strive to provide an exceptional culinary experience
              that delights your taste buds and leaves you satisfied. Thank you
              for choosing us!
            </p>
            <img src="/assets/images/restaurant.jpg" alt="Restaurant" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
