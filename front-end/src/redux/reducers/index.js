import { combineReducers } from "redux";
import { coordinatesReducer, weatherReducer, counterReducer } from "./forecastReducer";

const reducers = combineReducers({
  coordinates: coordinatesReducer,
  weather: weatherReducer,
  counter: counterReducer
});

export default reducers;
