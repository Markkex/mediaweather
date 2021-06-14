import React, {useState} from "react"
import './App.css';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     
     <WeatherCard count={count} setCount={setCount} />
    </div>
  );
}

export default App;
