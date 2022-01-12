import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  function getResponse(response) {
    setWeatherData({
      load: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Saturday 11:00",
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (weatherData.load) {
    return (
      <form className="Search">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Type a city"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    const apiKey = "d7e8260f13d9346a2e404a24c9758f9c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}=units&metric`;
    axios.get(apiUrl).then(getResponse);
    return "Loading...";
  }
}
