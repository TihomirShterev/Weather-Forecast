import { apiKey, baseURL, historyURL } from "../config/config";
import previousFiveDays from "../utils/constants";

export const getFullWeatherInfo = async (lat, lon) => {
  const res = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`);

  return res.json();
};

export const getPreviousDayInfo = async (lat, lon, i) => {
  const res = await fetch(`${historyURL}?lat=${lat}&lon=${lon}&dt=${previousFiveDays[i % 6]}&appid=${apiKey}`);

  return res.json();
};