import React from "react";

import { Fighter } from "./components/Fighter";
import { Info } from "./components/Info";
import { Slider } from "./components/Slider";

import "swiper/css";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Fighter />
      <Slider />
      <Info />
    </div>
  );
}

export default App;
