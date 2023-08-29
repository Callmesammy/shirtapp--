import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../Movies/Films';



function Banner() {
  return (
    <div className="relative w-full">
    <Swiper 
    direction="vertical"
    slidesPerView={1}
    loop={true}
    speed={1000}
    modules={[Autoplay]}
    autoplay={{delay: 4000, disableOnInteraction: false}}
    className="w-full h-48 xl:h-96 lg:h-64 bg-dyr "
    >
    {Movies.slice(0, 5).map((movie, index) => (
        <SwiperSlide key={index} className="relative rounded overflow-hidden">
        <img 
        src={`/flx/pics/${movie.image}`} 
        alt={movie.id} 
        className="w-full h-full object-cover"/> 
        </SwiperSlide>
    ))
    
    }

    </Swiper>
    </div>
  )
}

export default Banner