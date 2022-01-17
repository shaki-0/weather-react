import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WeatherResults from "./WeatherResults";
import Timestamp from "./Timestamp";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  const [city, setCity] = useState(props.defaultCity);
  function getResponse(response) {
    setWeatherData({
      load: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: `/images/icons/${response.data.weather[0].icon}.png`,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "d7e8260f13d9346a2e404a24c9758f9c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.load) {
    return (
      <form onSubmit={handleSubmit} className="Search">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Type a city"
            onChange={updateCity}
          />
          <input
            className="btn btn-outline-secondary"
            type="Submit"
            defaultValue="Search"
          />
        </div>
        <h1> {weatherData.city} </h1>
        <Timestamp date={weatherData.date} />
        <WeatherResults data={weatherData} />
      </form>
    );
  } else {
    search();
    return "Loading...";
  }
}
