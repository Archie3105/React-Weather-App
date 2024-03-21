import React from "react";
import { useWeather } from "../context/Weather";

function Input() {
  const weather = useWeather();
  console.log("Weather", weather);
  return (
    <input
      className="input-field w-64 m-auto mb-2 mt-5 font-bold text-xl"
      placeholder="City"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
}

export default Input;
