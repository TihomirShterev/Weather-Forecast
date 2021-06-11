import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { cities } from "./constants";
import { fetchCoordinates, fetchFullWeatherInfo, fetchPreviousDayInfo } from "../redux/actions/forecastActions";

export const useForecastData = () => {
  const clickCounter = useSelector(state => state.counter)
  const { city } = useParams();
  const current = cities.find(({ val }) => city === val);
  const dispatch = useDispatch();
  const [latitude, longitude] = useSelector(state => state.coordinates);

  useEffect(() => {
    dispatch(fetchCoordinates(current.val, current.isoCode));
  }, [current.isoCode, current.val, dispatch]);

  useEffect(() => {
    if (latitude && longitude) {
      if (clickCounter % 6 === 0) {
        dispatch(fetchFullWeatherInfo(latitude, longitude));
      } else {
        dispatch(fetchPreviousDayInfo(latitude, longitude, clickCounter))
      }
    }
  }, [dispatch, latitude, longitude, clickCounter]);

  if (!current) {
    return <Redirect to="/" />;
  }
};