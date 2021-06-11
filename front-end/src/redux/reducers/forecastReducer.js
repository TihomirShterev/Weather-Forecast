import { ActionTypes } from "../constants/action-types";

const initState = {
  coordinates: [],
  daysData: {}
};

export const coordinatesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COORDINATES:
      return { ...state, coordinates: payload };
    default:
      return state;
  }
};

export const weatherReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_FULL_WEATHER_INFO:
      return { ...state, daysData: payload };
    case ActionTypes.FETCH_PREVIOUS_DAY_INFO:
      return { ...state, daysData: payload };
    default:
      return state;
  }
};
