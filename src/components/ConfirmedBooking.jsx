import React from "react";
import "../styles/ConfirmedBooking.css";

const ConfirmedBooking = ({ date, time, guests, occasion }) => {
  return (
    <table className="confirmation">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{time}</td>
          <td>{guests}</td>
          <td>{occasion}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ConfirmedBooking;
