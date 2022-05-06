import { Redirect, useParams } from "react-router";
import { cities } from "./constants";

export const useForecastData = () => {
  const { city } = useParams();
  const current = cities.find(({ val }) => city === val);
  return current || <Redirect to="/" />;
};
