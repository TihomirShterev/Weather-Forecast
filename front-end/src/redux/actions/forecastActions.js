import { mapsURL, mapsKey, baseURL, apiKey, historyURL } from "../../config/config";
import { ActionTypes } from "../constants/actionTypes";
import previousFiveDays from "../../utils/constants";

export const fetchCoordinates = (cityName, isoCode) => async dispatch => {
  const res = await fetch(`${mapsURL}?address=${cityName}+${isoCode}&key=${mapsKey}`);
  const data = await res.json();
  const lat = data.results[0].geometry.location.lat;
  const lon = data.results[0].geometry.location.lng;
  dispatch({
    type: ActionTypes.FETCH_COORDINATES,
    payload: [lat, lon]
  });
};

export const fetchFullWeatherInfo = (lat, lon) => async dispatch => {
  const res = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const data = await res.json();
  dispatch({
    type: ActionTypes.FETCH_FULL_WEATHER_INFO,
    payload: data
  });
};

export const fetchPreviousDayInfo = (lat, lon, i) => async (dispatch) => {
  const res = await fetch(`${historyURL}?lat=${lat}&lon=${lon}&dt=${previousFiveDays[i % 6]}&appid=${apiKey}`);
  const data = await res.json();
  dispatch({
    type: ActionTypes.FETCH_PREVIOUS_DAY_INFO,
    payload: data
  });
};

export const incrementCounter = clickCounter => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
    payload: clickCounter + 1
  };
};

export const setMetricsFormData = data => {
  return {
    type: ActionTypes.SET_METRICS_FORM_DATA,
    payload: data
  }
};

export const addMetrics = metricsData => async dispatch => {
  const res = await fetch('https://openweathermap.org/stations#measurement', {
    method: 'POST',
    body: JSON.stringify(metricsData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  dispatch({
    type: ActionTypes.ADD_METRICS,
    payload: data
  });
};
