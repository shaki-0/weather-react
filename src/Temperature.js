import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  let description = "Overcast Clouds";
  return (
    <div className="Temperature">
      <div className="border">
        <img
          src="data:image/png;base64,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"
          className="weather-icon"
          alt="cloud"
        />
        <h3> {props.value} </h3>
        <span>
          <a className="units" href="l">
            °C |
          </a>
          <a className="units" href="l">
            °F
          </a>
        </span>
        <p>
          <span> {props.humidity} % | </span>
          <span> {props.wind} km/h </span>
          <br />
          <span>Feels like {props.feelsLike}°C </span>
          <br />
          <span> {description} </span>
        </p>
      </div>
    </div>
  );
}
