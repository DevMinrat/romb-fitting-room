import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import AppContext from "../context";

let currentPart = 0;

function Slider({ onChangePart }) {
  const { selItems, sliderItems, setActiveItem } = React.useContext(AppContext);
  const [selectedSlide, setCurSlider] = React.useState([]);
  // const [race, setRace] = React.useState([]);
  const [partSlider, setPartSlider] = React.useState([]);
  const [varSlider, setVarSlider] = React.useState([]);

  const slideTo = (index) => {
    varSlider.slideTo(index);
  };

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

  const renderVarItems = () => {
    return sliderItems[selectedSlide].items.map((item, index) => {
      if (item.hasOwnProperty("iconUrl")) {
        return (
          <SwiperSlide key={item.id} onClick={() => varSlider.slideTo(index)}>
            <img src={item.iconUrl} alt="" />
          </SwiperSlide>
        );
      } else {
        if (index === selItems[3].id) {
          return item.map((inclItem, inclIndex) => {
            return (
              <SwiperSlide
                key={inclItem.id}
                onClick={() => varSlider.slideTo(inclIndex)}
              >
                <img src={inclItem.iconUrl} alt="" />
              </SwiperSlide>
            );
          });
        }
      }
    });
  };

  const renderPartItems = () => {
    return sliderItems.map((item, index) => {
      if (index !== 4) {
        return (
          <SwiperSlide
            key={item.parentId}
            onClick={() => partSlider.slideTo(index)}
          >
            <img src={item.items[selItems[index].id].iconUrl} alt="" />
          </SwiperSlide>
        );
      } else {
        let resArr = item.items[selItems[3].id];
        if (resArr !== undefined) {
          return (
            <SwiperSlide
              key={item.parentId}
              onClick={() => partSlider.slideTo(index)}
            >
              <img src={resArr[selItems[index].id].iconUrl} alt="" />
            </SwiperSlide>
          );
        }
      }
    });
  };

  if (sliderItems.length) {
    return (
      <div className="fitting-slider">
        <div className="fitting-slider__parts-wrapper">
          <Swiper
            modules={[Navigation]}
            className="fitting-slider__parts"
            spaceBetween={20}
            slidesPerView={"auto"}
            effect="EffectFade"
            onSlideChange={(swiper) => {
              setCurrentPart(swiper.activeIndex);
              slideTo(selItems[swiper.activeIndex].id);
              setActiveItem([
                swiper.activeIndex,
                selItems[swiper.activeIndex].id,
              ]);
            }}
            onSwiper={(swiper) => {
              setPartSlider(swiper);
              setCurrentPart(swiper.activeIndex);
              setActiveItem([
                swiper.activeIndex,
                selItems[swiper.activeIndex].id,
              ]);
            }}
            navigation={{
              nextEl: "#part-btn-next",
              prevEl: "#part-btn-prev",
              disabledClass: "disable",
            }}
          >
            {renderPartItems()}
          </Swiper>
          <div className="fitting-slider__parts-nav">
            <div className="swiper-button-prev" id="part-btn-prev">
              <img src="fs-arrow.svg" alt="prev-slide" />
            </div>
            <div className="swiper-button-next" id="part-btn-next">
              <img src="fs-arrow.svg" alt="next-slide" />
            </div>
          </div>
        </div>
        <div className="fitting-slider__variables-wrapper">
          <Swiper
            modules={[Navigation]}
            className="fitting-slider__variables"
            initialSlide={selItems[selectedSlide].id}
            spaceBetween={0}
            slidesPerView={"auto"}
            direction="vertical"
            onSlideChange={(swiper) => {
              onChangePart(setItemId(swiper, selItems));
              setActiveItem([selectedSlide, swiper.activeIndex]);
            }}
            onSwiper={(swiper) => {
              setActiveItem([selectedSlide, swiper.activeIndex]);
              onChangePart(setItemId(swiper, selItems));
              setVarSlider(swiper);
            }}
            navigation={{
              nextEl: "#var-btn-next",
              prevEl: "#var-btn-prev",
              disabledClass: "disable",
            }}
          >
            {renderVarItems()}
          </Swiper>
          <div className="fitting-slider__variables-nav">
            <div className="swiper-button-prev" id="var-btn-prev">
              <img src="fs-arrow.svg" alt="prev-slide" />
            </div>
            <div className="swiper-button-next" id="var-btn-next">
              <img src="fs-arrow.svg" alt="next-slide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
