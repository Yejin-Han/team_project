import { useState } from "react";

let today = "";
const dayCheck = (todayNum) => {
  switch (todayNum) {
    case 0:
      today = "일";
      break;
    case 1:
      today = "월";
      break;
    case 2:
      today = "화";
      break;
    case 3:
      today = "수";
      break;
    case 4:
      today = "목";
      break;
    case 5:
      today = "금";
      break;
    default:
      today = "토";
  }
};

const CurrentWeather = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [temp, setTemp] = useState(Math.round(data.main.temp));
  const [maxTemp, setMaxTemp] = useState(Math.round(data.main.temp_max));
  const [minTemp, setMinTemp] = useState(Math.round(data.main.temp_min));
  const [feelsLike, setFeelsLike] = useState(Math.round(data.main.feels_like));

  const todayNum = date.getDay();
  dayCheck(todayNum);
  const nowHour = date.getHours();
  const nowMin = date.getMinutes();

  return (
    <div className="curr_weather">
      <div className="curr_top">
        <div>
          <p className="temperature">{temp} °</p>
          <p className="city">{data.city}</p>
        </div>
        <img
          src={`img/weather/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather_icon"
        />
      </div>
      <div className="curr_bottom">
        <div className="details">
          <div className="param_row">
            <div>
              <span className="param_value">
                {maxTemp}° / {minTemp}°
              </span>
            </div>
            <div>
              <span className="param_label">체감온도</span>{" "}
              <span className="param_value">{feelsLike}°</span>
            </div>
          </div>
          <div className="param_row">
            <span>{today},&nbsp;</span>
            <span>
              {nowHour < 12
                ? `오전 ${nowHour}:${nowMin} 기준`
                : `오후 ${nowHour}:${nowMin} 기준`}
            </span>
            <span
              className="resetWeatherInfo"
              onClick={() => {
                setDate(new Date());
                setTemp(Math.round(data.main.temp));
                setMaxTemp(Math.round(data.main.temp_max));
                setMinTemp(Math.round(data.main.temp_min));
                setFeelsLike(Math.round(data.main.feels_like));
              }}
            >
              &nbsp;🔃
            </span>
          </div>
          <div className="param_row">
            <div>
              <span className="param_label">💧&nbsp;</span>
              <span className="param_value">{data.main.humidity}%</span>
            </div>
            <div>
              <span className="param_label">🌬️&nbsp;</span>
              <span className="param_value">{data.wind.speed}m/s</span>
            </div>
            <div>
              <span className="param_label">⬇️&nbsp;</span>
              <span className="param_value">{data.main.pressure}hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
