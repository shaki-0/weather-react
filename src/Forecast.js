import React, {useState} from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [ready,setReady] = useState (false);
  let [forecast,setForecast] = useState (null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

if (ready) {
   return (
     <div className="Forecast">
       <div className="row">
         <div className="col-2">
           <ForecastDay data={forecast[0]} />
         </div>
       </div>
     </div>
   );
} else {
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "34d4d5387fd5071c0cb5d85b55e4602e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null; 
  
}
}
