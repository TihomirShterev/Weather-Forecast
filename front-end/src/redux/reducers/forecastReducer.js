import ActionTypes from "../constants/actionTypes";

const initState = {};

const forecastReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COORDINATES:
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

export default forecastReducer;
