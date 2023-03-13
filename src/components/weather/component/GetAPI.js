export const geoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoURL = `https://wft-geo-db.p.rapidapi.com/v1/geo`;

export const weatherURL = `https://api.openweathermap.org/data/2.5`;

export const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
