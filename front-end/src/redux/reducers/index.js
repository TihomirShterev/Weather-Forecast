import { combineReducers } from "redux";
import { coordinatesReducer, weatherReducer } from "./forecastReducer";

const reducers = combineReducers({
  coordinatesReducer,
  weatherReducer
});

export default reducers;