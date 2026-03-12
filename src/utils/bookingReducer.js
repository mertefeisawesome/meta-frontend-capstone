/* global fetchAPI */

export function initializeTimes(arg) {
  if (typeof fetchAPI === "function") {
    const result = fetchAPI(new Date());
    // some test setups (Jest's resetMocks/clearMocks) may leave fetchAPI
    // defined but without an implementation, which causes it to return
    // undefined.  `updateTimes` already handles that case; make
    // initializeTimes behave similarly so callers always get an array.
    return result || ["17:00", "18:00", "19:00"];
  }

  // fallback for tests or non-browser environments
  return ["17:00", "18:00", "19:00"];
}

export function updateTimes(state, action) {
  if (typeof fetchAPI === "function") {
    const result = fetchAPI(new Date(action.date));
    return result || state;
  }

  // fallback for tests
  return state || ["17:00", "18:00", "19:00"];
}
