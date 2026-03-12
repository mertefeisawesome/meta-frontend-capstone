import React, { useReducer, useState } from "react";
import { updateTimes, initializeTimes } from "../utils/bookingReducer";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <>
      <Nav />
      <main className="booking-main">
        <div className="container">
          <section className="booking-section">
            <h1>Book a Table</h1>
            <p id="booking-desc">
              Please select a date and time for your reservation.
            </p>
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
              dispatch={dispatch}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
