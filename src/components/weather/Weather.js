import { useNavigate } from "react-router-dom";
import "./Weather.style.scss";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import { weatherURL, weatherAPIKey } from "./GetAPI";

const Weather = () => {
  const navigate = useNavigate();
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  };
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
        <CurrentWeather />
      </div>
    </div>
  );
};

export default Weather;
