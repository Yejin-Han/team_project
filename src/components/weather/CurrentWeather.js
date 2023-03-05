const CurrentWeather = ({ data }) => {
  return (
    <div className="curr_weather">
      <div className="curr_top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather_description">{data.weather[0].description}</p>
        </div>
        <img
          src={`img/weather/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather_icon"
        />
      </div>
      <div className="curr_bottom">
        <p className="temperature">{data.main.temp} °</p>
        <div className="details">
          <div className="param_row">
            <span className="param_label">세부날씨</span>
          </div>
          <div className="param_row">
            <span className="param_label">체감온도</span>
            <span className="param_value">22°</span>
          </div>
          <div className="param_row">
            <span className="param_label">습도</span>
            <span className="param_value">15%</span>
          </div>
          <div className="param_row">
            <span className="param_label">바람</span>
            <span className="param_value">2m/s</span>
          </div>
          <div className="param_row">
            <span className="param_label">기압</span>
            <span className="param_value">15hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
