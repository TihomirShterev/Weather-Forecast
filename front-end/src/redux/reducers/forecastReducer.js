import { ActionTypes } from "../constants/actionTypes";

const initState = {
  coordinates: [],
  daysData: {},
  clickCounter: 0,
  metrics: {
    username: '',
    email: '',
    temperature: 0,
    windSpeed: 0,
    humidity: 0,
    pressure: 0,
    rain: 0,
    usernameError: false,
    emailError: false,
    temperatureError: false,
    windSpeedError: false,
    humidityError: false,
    pressureError: false,
    rainError: false,
    emptyFieldsError: false,
    isVisible: false
  }
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

export const metricsReducer = (state = initState.metrics, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_METRICS_FORM_DATA:
      return {
        ...state,
        ...payload
      };
    case ActionTypes.ADD_METRICS:
      return state;
    default:
      return state;
  }
};
