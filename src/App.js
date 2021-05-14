// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import React, { useEffect, useState } from "react";
// third party dependencies
import axios from "axios";
import { usePosition } from "use-position";
//cutom components
import Weather from "./components/Weather";

const App = () => {
  const [weather, setWeather] = useState();

  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    console.log('LANG: ', lang)
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      console.log("Veri alınırken hata oluştu.");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

 console.log(weather)

  return (
    <div>
      <Weather weather={weather} />
    </div>
  );
};

export default App;
