import React, { useState } from "react";
import { ReactDOM } from "react";
import Description from "./Components/Description";
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import { useEffect } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {

const [weather ,setWeather] = useState(null);
const [Units,setUnits] = useState("metric");


 useEffect(() => {
  const fetchWeatherData = async() => {
   const data = await getFormattedWeatherData('pune');
   setWeather(data);
  };
  fetchWeatherData();
 } , []);

  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})`}}>
    <div className="overlay">
    {
      weather && (
        <div className="container">
        <div className="section section_inputs">
          <input type="text" name="city" placeholder="Enter city name.." />
          <button>℉</button>
        </div>
        <div className="section section_temperature">
          <div className="cityWeather">
            <h3>{weather.name},{weather.country}</h3>
            <img src={weather.iconURL} alt="weather"></img>
            <h3>{weather.description}</h3>
          </div>
          <div className="temperature">
            <h1>{weather.temp.toFixed()} °</h1>
          </div>
        </div>
        {/* bottom discription */}
        <Description />
      </div>
      )
    }
    
    </div>
    </div>
  );
}

export default App;
