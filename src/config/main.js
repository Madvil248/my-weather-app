import { ACCU_AUTO, ACCU_FORECAST } from "../services/response";

const ACCU_WEATHER_API = "VY5zhy7sWbOEoJoDxGpU02DYwGztpSKw";
const ACCU_WEATHER_HOST = "http://dataservice.accuweather.com/";
const ACCU_VERSION = "v1";

const LocationApiAutocomplete = (query) =>
  `${ACCU_WEATHER_HOST}locations/${ACCU_VERSION}/cities/autocomplete?apikey=${ACCU_WEATHER_API}&q=${query}`;

const WeatherApiUrl = (key) =>
  `${ACCU_WEATHER_HOST}forecasts/${ACCU_VERSION}/daily/5day/${key}?apikey=${ACCU_WEATHER_API}&metric=true`;

export function getLocationAutocomplete(query) {
  return fetch(LocationApiAutocomplete(query))
    .then((response) => {
      return response.json();
    })
    .catch(function (error) {
      console.log("Request failed", error);
      return ACCU_AUTO;
    });
}

export function getWeather(key) {
  return fetch(WeatherApiUrl(key))
    .then((response) => {
      return response.json();
    })
    .catch(function (error) {
      console.log("Request failed", error);
      return ACCU_FORECAST;
    });
}

export function toggleFav(favorites, newFav) {
  if (favorites.filter((e) => newFav.Key === e.Key).length > 0) {
    const index = favorites.map((e) => e.Key).indexOf(newFav.Key);
    favorites.splice(index, 1);
  } else {
    favorites.push(newFav);
  }
  return favorites;
}

export { ACCU_WEATHER_API };
