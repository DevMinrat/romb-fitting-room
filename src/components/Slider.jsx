import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
      if (item.hasOwnProperty("imgUrl")) {
        return (
          <SwiperSlide key={item.id} onClick={() => varSlider.slideTo(index)}>
            <img src={item.imgUrl} alt="" />
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
                <img src={inclItem.imgUrl} alt="" />
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
            <img src={item.items[selItems[index].id].imgUrl} alt="" />
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
              <img src={resArr[selItems[index].id].imgUrl} alt="" />
            </SwiperSlide>
          );
        }
      }
    });
  };

  if (sliderItems.length) {
    return (
      <div className="fitting-slider">
        <Swiper
          className="fitting-slider__parts"
          spaceBetween={40}
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
        >
          {renderPartItems()}
        </Swiper>
        <div className="fitting-slider__variables-wrapper">
          <Swiper
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
            className="fitting-slider__variables"
          >
            {renderVarItems()}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Slider;
