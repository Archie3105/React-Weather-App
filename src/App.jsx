import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import Forecast from "./components/Forecast";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  const refresh = () => {
    weather.fetchCurrentUserLocationData();
    weather.setSearchCity(" ");
    // placeholder:"City"
    // window.location.reload(false);
  };

  const search = () => {
    weather.fetchData();
    if (weather.searchCity === null) {
      alert("Please enter a city");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <div className="App " style={{ backgroundColor: "beige" }}>
          <h1 className="font-bold">Weather Forecast</h1>
          <div className="search flex justify-center flex-col mt-5 gap-1">
            <Input placeholder="City" />
            <Button onClick={search} className="" value="Search" />
          </div>
          <Card />
          <Button onClick={refresh} value="Refresh" />
        </div>
      </div>
    </>
  );
}

export default App;
