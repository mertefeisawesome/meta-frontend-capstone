import { initializeTimes, updateTimes } from "../utils/bookingReducer";

describe("Booking Reducer", () => {
  beforeEach(() => {
    // ensure the global mock always returns our hard‑coded slots; jest's
    // `resetMocks` or `clearMocks` setting may wipe the implementation
    // between tests, which used to make initializeTimes return undefined.
    global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
  });

  test("initializeTimes returns correct times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns state unchanged", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const newState = updateTimes(initialState, { date: "2026-01-01" });
    expect(newState).toEqual(initialState);
  });
});
