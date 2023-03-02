import { useNavigate } from "react-router-dom";
import "./Weather.style.scss";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

const Weather = () => {
  const navigate = useNavigate();
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="weather_container">
      <div className="weather_top">
        <h2>세계날씨 🌤️</h2>
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
