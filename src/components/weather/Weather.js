import { useNavigate } from "react-router-dom";
import "./Weather.style.scss";
import GetAPI from "./GetAPI";

const Weather = () => {
  const navigate = useNavigate();
  return (
    <>
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
        <GetAPI />
      </div>
    </>
  );
};

export default Weather;
