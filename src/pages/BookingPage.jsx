import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return (
    <>
      <Nav />
      <main className="booking-main">
        <div className="container">
          <section className="booking-section">
            <h1>Book a Table</h1>
            <BookingForm
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
