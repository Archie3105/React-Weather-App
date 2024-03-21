import React from "react";
import { useWeather } from "../context/Weather";
function Card() {
  const weather = useWeather();
  return (
    <div className="card mt-5 gap-1 align-center mb-5" style={{backgroundColor:"#94bbe9"}}>
      <img
        src={weather.data?.current?.condition?.icon}
        alt="img"
        className="m-auto mb-3 "
      />
      <h4 className=" font-bold">{weather.data?.current?.condition?.text}</h4>
      <h2 className="text-2xl font-bold">{weather.data?.current?.temp_c}°C</h2>
      <h3 className=" font-bold">Humidity: {weather.data?.current?.humidity}%</h3>
      <h3 className=" font-bold">Wind: {weather.data?.current?.wind_mph}kmph</h3>
      <h4 className=" font-bold">
        {weather.data?.location?.name}, {weather.data?.location?.region},{" "}
        {weather.data?.location?.country}
      </h4>
    </div>
  );
}

export default Card;
