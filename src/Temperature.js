import React, {useState} from "react";
import "./Temperature.css";


 export default function Temperature (props) {
   const [unit, setUnit] = useState("celsius");


function displayFahrenheit(event) { 
  event.preventDefault();
  setUnit("fahrenheit");
} 


function displayCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
} 

function fahrenheit () {
return (props.celsius * 9) / 5 + 32;
}

if (unit ==='celsius') {
 return (
   <div className="Temperature">
     <h3> {Math.round(props.celsius)} </h3>
     <span className="units"> °C | </span>
     <a className="units" onClick={displayFahrenheit} href="l">
       {" "}
       °F
     </a>
   </div>
 );
 } else {
   return (
     <div className="Temperature">
       <h3> {Math.round(fahrenheit())} </h3>
       <a className="units" onClick={displayCelsius} href="l">
         °C |
       </a>{" "}
       <span className="units">°F</span>
     </div>
   );
 }
}