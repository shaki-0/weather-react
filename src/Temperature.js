import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="border">
        <img
          src={props.data.icon}
          className="weather-icon"
          alt={props.data.description}
        />
        <h3> {Math.round(props.data.temperature)} </h3>
        <span>
          <a className="units" href="l">
            °C |
          </a>
          <a className="units" href="l">
            °F
          </a>
        </span> 
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
