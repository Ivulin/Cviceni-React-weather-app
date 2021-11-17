import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/weather/index";
import Forecast from "./components/forecast/index";
import cities from "./cities";
import { getWeather, getForecast } from "./utils/weatherController";
import { every_eight } from "./utils/dataFilter";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherInCity, setWeatherInCity] = useState(null);
  const [forecastInCity, setForecastInCity] = useState(null);

  useEffect(() => {
    if (city === "") return;

    getWeather(city, setWeatherInCity);
    getForecast(city, setForecastInCity, every_eight);
  }, [city]);

  useEffect(() => {
    setCity(cities[0]);
  }, []);

  const handleOnChange = (event) => {
    setCity(cities[event.target.value]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={handleOnChange}
          >
            {cities.map((item, index) => (
              <option key={index} value={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="weather">
          {weatherInCity ? <Weather weather={weatherInCity} /> : null}
          <div className="weather__forecast" id="predpoved">
            {forecastInCity
              ? forecastInCity.map((item, index) => (
                  <Forecast key={index} forecast={item} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
