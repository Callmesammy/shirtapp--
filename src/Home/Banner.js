import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {
  return (
    <div className="relative w-full">
    <Swiper 
    direction="vertical"
    spaceBetween={0}
    slidersPerView={1}
    loop={true}
    speed={1000}
    modules={[Autoplay]}
    autoplay={{delay:4000, disableOnInteraction: false}}
    className="w-full h-48 xl:h-96 lg:h-64 bg-dyr "
    >


    </Swiper>
    </div>
  )
}

export default Banner