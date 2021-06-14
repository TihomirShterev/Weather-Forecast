import { combineReducers } from "redux";
import { coordinatesReducer, weatherReducer, counterReducer, metricsReducer } from "./forecastReducer";

const reducers = combineReducers({
  coordinates: coordinatesReducer,
  weather: weatherReducer,
  counter: counterReducer,
  metrics: metricsReducer
});

export default reducers;
