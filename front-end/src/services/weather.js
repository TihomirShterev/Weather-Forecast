import { apiKey, baseURL } from "../config/config";

export const getFullWeatherInfo = async (lat, lon) => {
  // const res = await fetch(`${baseURL}?lat=${current.lat}&lon=${current.lon}&appid=${apiKey}`); // static coordinates
  const res = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`); // coordinates from Google Maps API 

  return res.json();
};