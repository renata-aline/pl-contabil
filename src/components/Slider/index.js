import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

function Slider({ images }) {
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
        {images.map((image) => (
          <SwiperSlide>
            <img className="slider_img" src={image} alt="imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Slider;
