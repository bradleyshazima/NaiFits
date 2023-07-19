import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles';

import { productsData } from '../constants';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";



const Trending = () => {
  return (
    <section className={`py-20 px-40`} id='trending'>
        <div className={`flex flex-col gap-5 items-center justify-center pb-20`}>
            <h3 className='text-4xl text-dark gilB'>Top 10 Trending</h3>
            <p className='text-xl text-dark gilM'>Find out what's trending around you today</p>
        </div>

        <Swiper
            slidesPerView={5}
            spaceBetween={40}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',}}
            modules={[Navigation]}
            className="mySwiper h-[30rem]"
        >
            <div className="swiper-button-next"><BsArrowRightShort className='text-dark text-sm' /></div>
            <div className="swiper-button-prev"><BsArrowLeftShort className='text-dark text-sm' /></div>

            {productsData.map((product, index) => (
                <SwiperSlide key={index}>
                    <div className={`${styles.card}`}>
                        <div className="h-[24rem] bg-slate-400 cardImg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="flex">
                            <div>
                                <p>{ product.itemName }</p>
                                <p>{ product.brand }</p>
                            </div>
                            <div>
                                <p>WAS <span className='line-through'>1,700</span></p>
                                <p>KSH. { product.price }</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className='w-full flex flex-col items-center justify-center mt-20'>
            <Link to='/shop' className={`${styles.blueBtn} w-64`}>Shop Now</Link>
        </div>

    </section>
  )
}

export default Trending