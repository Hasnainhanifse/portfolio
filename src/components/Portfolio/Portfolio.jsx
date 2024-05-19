import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Oclass from "../../img/oclass-portfolio.png";
import Appea from "../../img/apea.png";
import Threeyou from "../../img/threeyou.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Oclass} alt="Oclass Scheduling angular application" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Appea} alt="Appea react native mobile app" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Threeyou} alt="React dating web application" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
