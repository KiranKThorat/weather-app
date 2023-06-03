import React from "react";
import { ReactDOM } from "react";
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section section_inputs">
          <input type="text" name="city" placeholder="Enter city name.." />
          <button>℉</button>
        </div>
        <div className="section section_temperature">
          <div className="description">
            <h3>pune,india</h3>
            <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="weather"></img>
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>28.7 °С</h1>
          </div>
        </div>
        {/* bottom discription */}
      </div>
    </div>
    </div>
  );
}

export default App;
