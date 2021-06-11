import { combineReducers } from "redux";
import { coordinatesReducer, weatherReducer, counterReducer, metricsReducer, headerDataReducer } from "./forecastReducer";

const reducers = combineReducers({
  headerData: headerDataReducer,
  coordinates: coordinatesReducer,
  weather: weatherReducer,
  counter: counterReducer,
  metrics: metricsReducer
});

export default reducers;