const GetAPI = (location) => {
  const API_key = "fdce841950d4af39af9fcae51989c200";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;
};

export default GetAPI;
