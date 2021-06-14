import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { cities } from "./constants";
import { fetchCoordinates } from "../redux/actions/forecastActions";

export const useForecastData = () => {
  const { city } = useParams();
  const current = cities.find(({ val }) => city === val);
  const dispatch = useDispatch();
  const { lat, lon } = useSelector(state => state.forecast);

  useEffect(() => {
    dispatch(fetchCoordinates(current.val, current.isoCode));
  }, [current.isoCode, current.val, dispatch]);

  if (!current) {
    return <Redirect to="/" />;
  }

  return { lat, lon };
};