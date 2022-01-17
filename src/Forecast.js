import React from "react";
import "./Forecast.css"

export default function Forecast () {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            Mon
            <img src="/images/icons/01n.png" className="icon-size" />
            <span className="weather-temp-max">23° </span>
            <span className="weather-temp-min"> 19°</span>
          </div>
          <div class="col-3">
            Tue
            <img src="/images/icons/01n.png" className="icon-size" />
            <span className="weather-temp-max">20° </span>
            <span className="weather-temp-min"> 11°</span>
          </div>
          <div class="col-3">
            Wed
            <img src="/images/icons/01n.png" className="icon-size" />
            <span className="weather-temp-max">24° </span>
            <span className="weather-temp-min"> 10°</span>
          </div>
          <div className="col-3">
            Thu
            <img src="/images/icons/01n.png" className="icon-size" />
            <span className="weather-temp-max">31° </span>
            <span className="weather-temp-min"> 18°</span>
          </div>
          <div className="col-1">
            Fri
            <img src="/images/icons/01n.png" className="icon-size" />
            <span className="weather-temp-max">26° </span>
            <span className="weather-temp-min"> 9°</span>
          </div>
        </div>
      </div>
    );
}