import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer";

const reducers = combineReducers({
  forecast: forecastReducer
});

export default reducers;
