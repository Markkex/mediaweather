import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState([]);
  const cityName = "Faro, pt";
  const apiKey = "b82a90a20a766e74488ea5e0c041ddd0";

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className='App'>
      <WeatherCard
        count={count}
        setCount={setCount}
        locationName={weather.name}
        temperature={weather.main.temp}
        description={weather.weather.description}
        icon={weather.weather.icon}
        
        
      />
    </div>
  );
}

export default App;
