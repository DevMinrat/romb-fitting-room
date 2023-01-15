import React from "react";
import AppContext from "../context";

function Fighter() {
  const { selItems, sliderItems } = React.useContext(AppContext);

  return (
    <div className="figther">
      {selItems.map((el, index) => {
        console.log(sliderItems);
        // return <p key={index}>{el.id}</p>;
        return (
          <img
            key={index}
            src={sliderItems[index].items[el.id].imgUrl}
            alt={sliderItems[el.id].name}
            width={150}
            height={150}
            style={{ position: "absolute", zIndex: `${index - 1}` }}
          />
        );
      })}
    </div>
  );
}

export default Fighter;
