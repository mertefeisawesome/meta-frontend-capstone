import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

const BookingPage = () => {
  return (
    <>
      <Nav />
      <main className="booking-main">
        <div className="container">
          <section className="booking-section">
            <h1>Book a Table</h1>
            <BookingForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
