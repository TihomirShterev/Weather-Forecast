import { mapsURL, mapsKey, baseURL, apiKey, historyURL } from "../../config/config";
import ActionTypes from "../constants/actionTypes";

export const fetchCoordinates = (cityName, isoCode) => async dispatch => {
  try {
    const res = await fetch(`${mapsURL}?address=${cityName}+${isoCode}&key=${mapsKey}`);
    const data = await res.json();
    const lat = Number(data.results[0].geometry.location.lat.toFixed(4));
    const lon = Number(data.results[0].geometry.location.lng.toFixed(4));
    dispatch({
      type: ActionTypes.FETCH_COORDINATES,
      payload: { lat, lon }
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SERVER_ERROR,
      payload: { errorMessage: err }
    });
  }
};

export const fetchFullWeatherInfo = (lat, lon) => async dispatch => {
  try {
    const res = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await res.json();
    dispatch({
      type: ActionTypes.FETCH_FULL_WEATHER_INFO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SERVER_ERROR,
      payload: { errorMessage: err }
    });
  }
};

export const fetchPreviousDayInfo = (lat, lon, i) => async (dispatch) => {
  const currentMoment = new Date();
  const currentMomentInMS = Math.trunc(currentMoment.getTime() / 1000);
  let previousFiveDays = [];

  for (let i = 0; i <= 5; i++) {
    previousFiveDays.push(currentMomentInMS - i * 86400);
  }

  try {
    const res = await fetch(`${historyURL}?lat=${lat}&lon=${lon}&dt=${previousFiveDays[i % 6]}&appid=${apiKey}`);
    const data = await res.json();
    dispatch({
      type: ActionTypes.FETCH_PREVIOUS_DAY_INFO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SERVER_ERROR,
      payload: { errorMessage: err }
    });
  }
};
