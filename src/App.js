import React from "react";
import axios from "axios";

import Fighter from "./components/Fighter";
import Slider from "./components/Slider";
import { Info } from "./components/Info";
import AppContext from "./context";
import setFirstSelectedItems from "./selectedItemsStore";

import "swiper/css";
import "swiper/css/effect-fade";
import "./scss/app.scss";

setFirstSelectedItems();

function App() {
  const [sliderItems, setSliderItems] = React.useState([]);
  const [selItems, setSelItems] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get("data/items.json");
        const selItemsResponse = JSON.parse(
          localStorage.getItem("selectedItems")
        );

        setSliderItems(itemsResponse.data);
        setSelItems(selItemsResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onChangePart = (obj) => {
    localStorage.setItem("selectedItems", JSON.stringify([...obj]));
    setSelItems([...obj]);
  };

  return (
    <AppContext.Provider
      value={{ selItems, sliderItems, activeItem, setActiveItem }}
    >
      <div className="fitting-room">
        <div className="container">
          <div className="fitting-room__inner">
            <Fighter />
            <Slider onChangePart={onChangePart} />
            <Info />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
