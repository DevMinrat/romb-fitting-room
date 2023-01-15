import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import AppContext from "../context";

let currentPart = 0;

function Slider({ onChangePart }) {
  const { selItems, sliderItems } = React.useContext(AppContext);
  const [selectedSlide, setCurSlider] = React.useState([]);

  React.useEffect(() => {
    setCurSlider(currentPart);
  }, []);

  const setCurrentPart = (activeSlide) => {
    currentPart = activeSlide;
    setCurSlider(currentPart);
  };

  const setItemId = (swiper, obj) => {
    let activeSlide = swiper.activeIndex;
    obj[currentPart].id = activeSlide;

    return obj;
  };
  if (sliderItems.length) {
    return (
      <div className="fitting-slider">
        <Swiper
          className="fitting-slider__parts"
          spaceBetween={40}
          slidesPerView={"auto"}
          effect="EffectFade"
          onSlideChange={(swiper) => setCurrentPart(swiper.activeIndex)}
          onSwiper={(swiper) => setCurrentPart(swiper.activeIndex)}
        >
          {sliderItems.map((item, index) => {
            return (
              <SwiperSlide key={item.parentId}>
                <img src={item.items[selItems[index].id].imgUrl} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="fitting-slider__variables-wrapper">
          <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            direction="vertical"
            onSlideChange={(swiper) =>
              onChangePart(setItemId(swiper, selItems))
            }
            onSwiper={(swiper) => onChangePart(setItemId(swiper, selItems))}
            className="fitting-slider__variables"
          >
            {sliderItems[selectedSlide].items.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  <img src={item.imgUrl} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Slider;
