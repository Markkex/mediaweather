import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, username: "RickRoss96", comment: "The weather is great!" },
    {
      id: 2,
      username: "TheGreatDonaldTrump",
      comment: "The Weather is shinning, like my hair!",
    },
  ]);

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
      {typeof weather.main != "undefined" ? (
        <WeatherCard
          count={count}
          setCount={setCount}
          locationName={weather.name}
          temperature={weather.main.temp}
          description={weather.weather[0].description}
          icon={weather.weather[0].icon}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
