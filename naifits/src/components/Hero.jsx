import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';


import { heroImg1, heroImg2, heroImg3 } from '../assets'

const Hero = () => {
    SwiperCore.use([Autoplay]);
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
        delay: 500,
        disableOnInteraction: false
    }}
    modules={[Autoplay]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className={`h-[100vh]`}
    >
        <SwiperSlide className='h-full'>
            <div className="swiper-slide" style={{backgroundImage: `url(${heroImg1})`}}>
                <h4>CULTURE</h4>
                <div className="describe"><p>Apparel that complements the Nairovybe</p></div>
                <button className="heroButton">Explore</button>
            </div>
        </SwiperSlide>

        <SwiperSlide className='h-full'>
            <div className="swiper-slide" style={{backgroundImage: `url(${heroImg2})`}}>
                <h4>TRENDS</h4>
                <div className="describe"><p>The New Fashion trends in 2023</p></div>
                <button className="heroButton">Explore</button>
            </div>
        </SwiperSlide>

        <SwiperSlide className='h-full'>
            <div className="swiper-slide" style={{backgroundImage: `url(${heroImg3})`}}>
                <h4>STYLE</h4>
                <div className="describe"><p>Blend in with your desired style</p></div>
                <button className="heroButton">Explore</button>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Hero