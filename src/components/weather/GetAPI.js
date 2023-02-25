import axios from "axios";
import { useState } from "react";

const GetAPI = () => {
  const API_key = "fdce841950d4af39af9fcae51989c200";

  const [location, setLocation] = useState("Seoul");
  const [result, setResult] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="도시를 입력하세요."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={searchWeather}
        />
      </div>
      {Object.keys(result).length !== 0 && (
        <div className="result">
          <div className="city">{result.data.name}</div>
          <div className="temperature">
            {Math.round((result.data.main.temp - 273.15) * 10) / 10}°
          </div>
          <div className="sky">{result.data.weather[0].main}</div>
        </div>
      )}
    </>
  );
};

export default GetAPI;
