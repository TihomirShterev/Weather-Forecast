export const addMetrics = async (data) => {
  return fetch('https://openweathermap.org/stations#measurement', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};