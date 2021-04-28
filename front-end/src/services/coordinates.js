import { mapsKey, mapsURL } from "../config/config";

export const getCoordinates = async (cityName, isoCode) => {
  try {
    const res = await fetch(`${mapsURL}${cityName}+${isoCode}&key=${mapsKey}`);
    const data = await res.json();

    return [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng];
  } catch (err) {
    console.log(err);
  }
};