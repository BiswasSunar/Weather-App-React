import React, { useState } from "react";
import './weather.css';
import search_icon from "../Assests/search.png";
import clear_icon from "../Assests/clear.png";
import cloud_icon from "../Assests/cloud.png";
import drizzle_icon from "../Assests/drizzle.png";
import humidity_icon from "../Assests/humidity.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import wind_icon from "../Assests/wind.png";
const WeatherApp = () => {
    let api_key="dd94f859a0e52d6e4767fddf735f04a7";
    const [Wicon,setWicon] = useState(cloud_icon);
    const [currentDate, setCurrentDate] = useState(getDate());
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
    const search = async ()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value ===""){
            return 0;
         }//ifends
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data=await response.json();
        const humidity =document.getElementsByClassName("humidity");
        const wind =document.getElementsByClassName("wind");
        const temp =document.getElementsByClassName("weather_temp");
        const location =document.getElementsByClassName("weather_location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.wind.speed) + "km/hr";
        temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(clear_icon);
        }else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon);
        }else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon);
        }else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon);
        }else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon);
        }else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon);
        }else{
            setWicon(clear_icon);
        }
    }//searchfunction ends
    return ( 
        <div className="container">
            <div className="top_bar">
               <input type="text" className="cityInput"  placeholder="search"/>
                <div className="search_icon" onClick={()=>{search()}}>
                
                </div>
            </div>
        <div className="weather_image">
            <img src={Wicon} alt="" className="cloud"/>
        </div>
        <div className="weather_temp">
            <p>24°C</p>
        </div>
        <div className="weather_location">London</div>
        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WeatherApp;