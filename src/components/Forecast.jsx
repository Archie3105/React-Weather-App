import React, { useState, useEffect } from 'react';
// import './App.css';

function Forecast() {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (city) {
      getWeatherForecast();
    }
  }, [city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const renderForecast = () => {
    if (!forecastData) {
      return <p className="text-red-500">No forecast available.</p>;
    }

    return forecastData.list.map((entry, index) => (
      <div key={index} className="bg-gray-200 p-4 rounded-lg mb-4">
        <p className="text-lg font-semibold">Date: {new Date(entry.dt * 1000).toLocaleDateString()}</p>
        <p>Time: {new Date(entry.dt * 1000).toLocaleTimeString()}</p>
        <p>Weather: {entry.weather[0].description}</p>
        <p>Temperature: {entry.main.temp}°C</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">5-Day Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md mb-4"
      />
      <div>
        {renderForecast()}
      </div>
    </div>
  );
}

export default Forecast;




/* 
    Create a sleek weather app using SvelteKit, Tailwind CSS, and TypeScript. Features include location search by city or zip code, displaying current weather with temperature, description, wind speed, humidity, and UV index. Optional 5-day forecast available. Ensure responsiveness and accessibility. Design a user-friendly interface with visual feedback. Emphasize code quality, modularity, and type safety. Utilize state management (Svelte Store) and component-based structure. Deploy on Netlify or Vercel. Follow deployment steps provided
 */