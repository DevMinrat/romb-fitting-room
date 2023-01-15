import React from "react";
import AppContext from "../context";

function Fighter() {
  const { selItems, sliderItems } = React.useContext(AppContext);

  return (
    <div className="fitting-figther">
      {selItems.map((el, index) => {
        return (
          <img
            key={index}
            src={sliderItems[index].items[el.id].imgUrl}
            alt={sliderItems[el.id].name}
            style={{
              position: "absolute",
              zIndex: `${sliderItems[index].zIndex}`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Fighter;
