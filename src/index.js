import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRatings from "./StarRatings";
import Moh from "./Moh";
import TextExpanderComponent from "./TextExpanderComponent";
import CurrencyConverter from "./CurrencyConverter";
import Geolocation from "./Geolocation";

// function Test() {
//   const [movieRating, setMovieRating] = useState("");
//   return (
//     <div>
//       <StarRatings maxLenght={8} color="blue" onSetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} star </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App></App> */}
    {/* <StarRatings
      maxRating={5}
      message={["terrible", "bad", "ok", "good", "great"]}
      className=""
    /> */}
    {/* <StarRatings size={24} color="red" defaultRating={2} /> */}
    {/* <Test /> */}
    {/* <Moh /> */}
    {/* <TextExpanderComponent /> */}
    {/* <CurrencyConverter /> */}
    <Geolocation />
  </React.StrictMode>
);
