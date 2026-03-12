import { initializeTimes, updateTimes } from "../utils/bookingReducer";

describe("BookingPage", () => {
  test("initializeTimes returns correct times", () => {
    const times = initializeTimes();
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
  test("updateTimes returns state unchanged", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const newState = updateTimes(initialState, { date: "2026-01-01" });
    expect(newState).toEqual(initialState);
  });
});
