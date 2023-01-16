import React from "react";
import AppContext from "../context";

function Fighter() {
  const { selItems, sliderItems } = React.useContext(AppContext);

  return (
    <div className="fitting-figther">
      {selItems.map((el, index) => {
        let item;

        if (index !== 4) {
          item = sliderItems[index].items[el.id];
        } else {
          item = sliderItems[index].items[selItems[3].id][el.id];
        }
        return (
          <img
            key={index}
            src={item.imgUrl}
            alt={item.name}
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
