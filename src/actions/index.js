import axios from 'axios';
const API_KEY = 'c190b468a6c75e53c5e6f1ef1bbfe1dc';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: req
  };
}
