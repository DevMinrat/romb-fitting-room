import React from "react";
import AppContext from "../context";

export const Info = () => {
  const { selItems, sliderItems, activeItem } = React.useContext(AppContext);

  if (activeItem.length && sliderItems.length) {
    let item;

    if (activeItem[0] !== 4) {
      item = sliderItems[activeItem[0]].items[activeItem[1]];
    } else {
      item = sliderItems[activeItem[0]].items[selItems[3].id][activeItem[1]];
    }

    const renderCharacters = () => {
      if (item.hasOwnProperty("characters")) {
        return Object.entries(item.characters).map((el, index) => {
          return (
            <li key={index}>
              {el[0]} <span>{el[1]}</span>
            </li>
          );
        });
      } else {
        return "";
      }
    };

    return (
      <div className="fittingItem-info_wrapper">
        <div className="fittingItem-info">
          <p className="fittingItem-info__name">{item.name}</p>
          <p className="fittingItem-info__descr">{item.descr}</p>
          <ul className="fittingItem-info__characters">{renderCharacters()}</ul>
        </div>
        <a className="fitting-room__link hollow-btn" href="#asd">
          {/* <svg className="hollow-btn_bg">
            <use href="#prlm-sm"></use>
          </svg> */}
          <span>BY NOW</span>
        </a>
      </div>
    );
  }
};
