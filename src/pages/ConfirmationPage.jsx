import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConfirmedBooking from "../components/ConfirmedBooking";
import "../styles/ConfirmationPage.css";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state;

  return (
    <>
      <Nav />
      <main className="confirmation-main">
        <h1>Booking Confirmed</h1>
        <div className="container">
          <ConfirmedBooking
            date={date}
            time={time}
            guests={guests}
            occasion={occasion}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConfirmationPage;
