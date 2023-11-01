import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay,Pagination,Navigation } from "swiper/modules";
import img1 from "../Images/Image1.png";
import img2 from "../Images/Image2.jpg";
import img3 from "../Images/Image3.png";
import img4 from "../Images/Image4.jpg";
import img5 from "../Images/Image5.png";
import img6 from "../Images/Image6.png";
import "../css/herosection.css";


const Herosection = () => {
  return (
    <section className='Herosection' id="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        slideToClickedSlide={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper slidecont"
      >
         <SwiperSlide> <img src={img1} alt="none" className='slides'/> </SwiperSlide>
         <SwiperSlide> <img src={img2} alt="none" className='slides'/> </SwiperSlide>
         <SwiperSlide> <img src={img3} alt="none" className='slides'/> </SwiperSlide>
         <SwiperSlide> <img src={img4} alt="none" className='slides'/> </SwiperSlide>
         <SwiperSlide> <img src={img5} alt="none" className='slides'/> </SwiperSlide>
         <SwiperSlide> <img src={img6} alt="none" className='slides'/> </SwiperSlide>
      </Swiper>

      <dic className="Herocontainer">
lm
      </dic>
  </section>
  )
}

export default Herosection