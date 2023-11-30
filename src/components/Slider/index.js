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
        {/* <SwiperSlide>
          <img className="slider_img" src="images/img.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider_img" src="images/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider_img" src="images/img2.jpg" alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className="slider_img" src="https://source.unsplash.com/random/1024x720" 
            alt="" />
        </SwiperSlide> */}
        {images.map((image) => (
          <SwiperSlide>
            <img className="slider_img" src={image} alt="imagem" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img className="slider_img" src="images/slider3.jpg" 
  alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider_img" src="images/images.jpeg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img className="slider_img" src="images/images1.jpeg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img className="slider_img" src="images/images2.jpeg" alt="" />
        </SwiperSlide>  */}
      </Swiper>
    </header>
  );
}

export default Slider;
