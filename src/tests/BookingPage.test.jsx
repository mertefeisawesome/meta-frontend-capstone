import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "../pages/BookingPage";
import { MemoryRouter } from "react-router-dom";

describe("Booking Page", () => {
  test("Renders H1 correctly", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>,
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Book a Table");
  });
  test("Users can submit the form", async () => {
    const mockSubmit = jest.fn();
    render(
      <MemoryRouter>
        <BookingPage submitForm={mockSubmit} />
      </MemoryRouter>,
    );
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(dateInput, { target: { value: "2026-12-31" } });
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(dateInput.value).toBe("2026-12-31");
    expect(timeSelect.value).toBe("19:00");
    expect(guestsInput.value).toBe("4");
    expect(occasionSelect.value).toBe("Birthday");

    const submitButton = screen.getByDisplayValue(/Make Your Reservation/i);
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2026-12-31",
      time: "19:00",
      guests: 4, // number, component coalesces input value
      occasion: "Birthday",
    });
  });
});
