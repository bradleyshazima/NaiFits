import React from 'react'

import styles from '../styles'

import { Email } from '../components/';

import { Link } from 'react-router-dom'

import { abstract2 } from '../assets'

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { PiCopyright } from "react-icons/pi";


const Footer = () => {
  return (
    <footer className='w-full h-fit darkBlue flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${abstract2})` }}>
        <div className='w-full h-[480px] flex border-[#f0f2f466] border-4'>
            <div className='w-1/2  h-full flex flex-col px-40 pt-20 pb-4 justify-between'>
                <div className='flex'>
                    <span className='w-48 flex flex-col gap-4'>
                        <h2 className='text-2xl text-white'>Shop</h2>
                        <ul className='flex flex-col gap-4'>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Fashion</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Gift Cards</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Store Locator</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Refer a Friend</Link></li>
                        </ul>
                    </span>

                    <span className='w-48 flex flex-col gap-4'>
                        <h2 className='text-2xl text-white'>About</h2>
                        <ul className='flex flex-col gap-4'>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Our Story</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Wholesale</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Careers</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Trends</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Press</Link></li>
                        </ul>
                    </span>

                    <span className='w-48 flex flex-col gap-4'>
                        <h2 className='text-2xl text-white'>Help</h2>
                        <ul className='flex flex-col gap-4'>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Contact Us</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>FAQ</Link></li>
                            <li><Link to='#' className={`${styles.link} text-lg smooth-sm`}>Accessibility</Link></li>
                        </ul>
                    </span>
                </div>


                <ul className='flex items-center justify-start gap-20'>
                    <li><Link to='' className='text-white'><AiOutlineInstagram className={`${styles.icon}`} /></Link></li>
                    <li><Link to='' className='text-white'><AiOutlineTwitter className={`${styles.icon}`} /></Link></li>
                    <li><Link to='' className='text-white'><BsPinterest className={`${styles.icon}`} /></Link></li>
                </ul>
            </div>


            <div className='w-1/2 h-full flex flex-col items-start pt-20 px-40 gap-10'>
                <h3 className='text-5xl gilB text-dWhite'>Newsletter</h3>
                <p className='text-lg text-dWhite gilR'>Sign up for our newsletter and get latest news about us and <span className='gilB text-xl text-orange'>get a 10% off</span> your first three purchases. Never miss a single promo</p>
                <Email />
            </div>
        </div>


        <div className='w-full h-20 flex items-center px-40 justify-between btThin'>
            <p className='text-dWhite text-md'>&copy; 2023 NaiFits. All Rights Reserved</p>
            <span className='flex'>
                <ul className='flex text-light gap-20'>
                    <li><Link to='#' className={`${styles.link}`}>Terms of Service</Link></li>
                    <li><Link to='#' className={`${styles.link}`}>Privacy Policy</Link></li>
                </ul>
            </span>
        </div>
    </footer>
  )
}

export default Footer