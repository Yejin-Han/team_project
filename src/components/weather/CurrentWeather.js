const CurrentWeather = () => {
  return (
    <div className="curr_weather">
      <div className="curr_top">
        <p className="city">Seoul</p>
        <p className="weather_description">Sunny</p>
      </div>
      <img src="img/weather/01d.png" alt="weather" className="weather_icon" />
    </div>
  );
};

export default CurrentWeather;
