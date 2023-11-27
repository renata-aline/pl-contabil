import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

function Header() {
  return (
    <header className="container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img className="slider" src="images/image-slider.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider" src="images/image-slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider" src="images/image-slider2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;
