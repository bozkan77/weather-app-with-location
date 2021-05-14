import React, { useState } from "react";

const Weather = ({ weather }) => {
  console.log(weather?.weather[0].description);
  const weatherDesc = weather?.weather?.map((data) => (
    <h4>{data.description}</h4>
  ));

  if(!weather) {
    return <p>Yükleniyor...</p>
  }

  return (
    <div>
      {
        weather && <>
          <h3>{weather.name}</h3>
          <div>{weatherDesc}</div>
          <p>{weather.main.temp}</p>
          <p>{new Date(weather?.dt * 1000).toLocaleDateString()}</p>
        </>
      }
    </div>
  );
};

export default Weather;
