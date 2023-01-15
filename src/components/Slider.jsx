import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AppContext from "../context";

let currentPart = 0;

function Slider({ onChangePart }) {
  const { selItems, sliderItems } = React.useContext(AppContext);

  const setCurrentPart = (activeSlide) => {
    currentPart = activeSlide;
  };

  const setItemId = (swiper, obj) => {
    let activeSlide = swiper.activeIndex + 1;
    console.log(obj, currentPart);
    console.log(obj[currentPart]);
    obj[currentPart].id = activeSlide;

    return obj;
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={(swiper) => setCurrentPart(swiper.activeIndex)}
        onSwiper={(swiper) => setCurrentPart(swiper.activeIndex)}
        className="partsSlider"
      >
        {sliderItems.map((item, index) => {
          return (
            <SwiperSlide key={item.parentId}>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                direction="vertical"
                mousewheel={true}
                onSlideChange={(swiper) =>
                  onChangePart(setItemId(swiper, selItems))
                }
                // onSwiper={(swiper) => console.log(swiper)}
                className="variablesSlider"
              >
                {sliderItems[index].items.map((item, index) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <img src={item.imgUrl} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
