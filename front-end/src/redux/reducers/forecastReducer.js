import { ActionTypes } from "../constants/actionTypes";

const initState = {
  coordinates: [],
  daysData: {},
  clickCounter: 0
};

export const coordinatesReducer = (state = initState.coordinates, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COORDINATES:
      return [
        ...state,
        ...payload
      ];
    default:
      return state;
  }
};

export const weatherReducer = (state = initState.daysData, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_FULL_WEATHER_INFO:
    case ActionTypes.FETCH_PREVIOUS_DAY_INFO:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export const counterReducer = (state = initState.clickCounter, { type, payload }) => {
  switch (type) {
    case ActionTypes.INCREMENT_COUNTER:
      return payload;
    default:
      return state;
  }
};
