import React from "react";
import  "./WeatherResults.css";
import Temperature from "./Temperature";

export default function WeatherResults(props) {
  return (
    <div className="WeatherResults">
      <div className="border">
        <img
          src={props.data.icon}
          className="weather-icon"
          alt={props.data.description}
        />
        <Temperature  celsius={props.data.temperature} />
        <p>
          <span> {props.data.humidity} % | </span>
          <span> {Math.round(props.data.wind)} km/h </span>
          <br />
          <span>Feels like {Math.round(props.data.feels)} °C </span>
          <br />
          <span> {props.data.description} </span>
        </p>
      </div>
    </div>
  );
}
