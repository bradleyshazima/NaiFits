import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import { heroData } from '../constants';

import styles, { design } from '../styles';

import { BsArrowDownShort } from "react-icons/bs";


const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <>
      <Swiper
        effect={'fade'}
        effectOptions={{
            fadeEffect: {
              crossFade: true,
              speed: 5000,
            },
        }}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[calc(100vh-80px)]"
      >

        {heroData.map((item, index) => (
            <SwiperSlide key={index} className='h-[calc(100vh-80px)]'>
                <div  className={`${styles.flexColCenter} h-full relative`} style={{ backgroundImage: `url(${item.image})` }}>
                    <h4 className={`${design.heroHead}`}>{item.header}</h4>
                    <div className="describe">
                        <p className={`${design.heroSubhead}`}>{item.text}</p>
                    </div>
                    <a href="#" className={`${styles.flexEnd} w-10 h-20 explore rounded-full border-slate-50 absolute bottom-10`}><BsArrowDownShort className="text-4xl text-white ico"/></a>
                </div>
            </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}

export default Hero