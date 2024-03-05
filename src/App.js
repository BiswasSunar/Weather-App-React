import { useState } from 'react';
import './App.css';
import WeatherApp from './Components/WeatherApp/weather';

  
function App() {
  return (
    <div className="App">
      <h1>Weather App From React</h1>
      <WeatherApp/>
      <div className='footer'>
        <p>&copy; Bishwash Bishwakarma Paudel &copy;</p>
      </div>
    </div>
  );
}

export default App;
