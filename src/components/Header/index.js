import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './index.css'


function Header() {

    return (
        <div className='container'>

            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide><img className="slider" src="image/img-escritorio.jpg" alt="" />
                    <p className='text-slider'>Você precisa de um <span>contador ?</span></p>
                </SwiperSlide>
                <SwiperSlide><img className="slider" src="image/img-escritorio1.jpg" alt="" />
                    <p className='text-slider'>Conte com nossa experiência em <span>contabilidade !</span></p>
                </SwiperSlide>
                <SwiperSlide> <img className="slider" src="image/img-escritorio2.jpg" alt="" />
                    <button className='button-slider'>Venha nos conhecer!</button>
                </SwiperSlide>

            </Swiper>
        </div>


    )
}

export default Header