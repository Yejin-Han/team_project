import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.style.scss";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { weatherURL, weatherAPIKey } from "./GetAPI";

const Weather = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    try {
      const currentData = fetch(
        `${weatherURL}/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`
      );
      const forecastData = fetch(
        `${weatherURL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`
      );
      Promise.all([currentData, forecastData]).then(async (res) => {
        const currentRes = await res[0].json();
        const forecastRes = await res[1].json();
        setCurrent({ city: searchData.label, ...currentRes });
        setForecast({ city: searchData.label, ...forecastRes });
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(current, forecast);
  return (
    <div className="weather_container">
      <div className="weather_top">
        <h2>🌎 세계날씨</h2>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          ✕
        </button>
      </div>
      <div className="weather_content">
        <Search onSearchChange={handleOnSearchChange} />
        {current && <CurrentWeather data={current} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
};

export default Weather;
