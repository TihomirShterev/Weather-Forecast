export const cities = [
  { name: 'Лондон', val: 'london', lat: 51.507351, lon: -0.127758, country: 'Великобритания' },
  { name: 'Париж', val: 'paris', lat: 48.856613, lon: 2.352222, country: 'Франция' },
  { name: 'Берлин', val: 'berlin', lat: 52.520008, lon: 13.404954, country: 'Германия' },
  { name: 'София', val: 'sofia', lat: 42.697708, lon: 23.321867, country: 'България' },
  { name: 'Стокхолм', val: 'stockholm', lat: 59.329323, lon: 18.068581, country: 'Швеция' },
  { name: 'Рим', val: 'rome', lat: 41.902782, lon: 12.496366, country: 'Италия' },
  { name: 'Брюксел', val: 'brussel', lat: 50.8505, lon: 4.3488, country: 'Белгия' },
];

export const genIconURL = (iconName = '') => `http://openweathermap.org/img/wn/${iconName}.png`;

export const kToCels = (k = 0) => Math.trunc(k - 273.15);

export const weatherTranslations = {
  'light snow': 'Лек снеговалеж',
  'rain and snow': 'Дъжд и сняг',
  'light rain': 'Слаб валеж',
  'overcast clouds': 'Гъста облачност',
  'scattered clouds': 'Купеста облачност',
  'broken clouds': 'Разкъсана облачност',
  'few clouds': 'Частично слънчево',
  'clear sky': 'Слънчево'
};

export const dayTranslations = {
  'Monday': 'Понеделник',
  'Tuesday': 'Вторник',
  'Wednesday': 'Сряда',
  'Thursday': 'Четвъртък',
  'Friday': 'Петък',
  'Saturday': 'Събота',
  'Sunday': 'Неделя',
};

export const compass = (deg) => {
  let direction;

  if (deg <= 45) {
    direction = 'Север';
  } else if (deg <= 90) {
    direction = 'Североизток';
  } else if (deg <= 135) {
    direction = 'Изтокзток';
  } else if (deg <= 180) {
    direction = 'Югоизток';
  } else if (deg <= 225) {
    direction = 'Юг';
  } else if (deg <= 270) {
    direction = 'Югозапад';
  } else if (deg <= 315) {
    direction = 'Запад';
  } else if (deg <= 360) {
    direction = 'Северозапад';
  }

  return direction;
}