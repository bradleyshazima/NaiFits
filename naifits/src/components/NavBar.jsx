import React from 'react'
import { blueLogo, whiteLogo } from '../assets'
import { Link } from 'react-router-dom'
import styles from '../styles'
import { PiUserBold } from "react-icons/pi";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className={`${styles.flexBtwn} w-full darkBlue text-dWhite h-20 px-40 z-[999] fixed inset-0`}>
      <img src={whiteLogo} alt="logo" className='h-10 w-auto' />

        <ul className={`${styles.flexCenter} gap-10`}>
          <li><Link to='/' className='navLinks'>HOME</Link></li>
          <li><Link to='/shop' className='navLinks'>SHOP</Link></li>
          <li><Link to='/aboutus' className='navLinks'>ABOUT</Link></li>
        </ul>


        <ul className={`${styles.flexCenter} gap-10`}>
          <li><Link to=''><BsHeartFill className={`${styles.icon} text-white`}/></Link></li>
          <li><Link to=''><AiOutlineShoppingCart className={`${styles.icon} text-white`}/></Link></li>
          <li><Link to=''><PiUserBold className={`${styles.icon} text-white`}/></Link></li>
        </ul>
    </nav>
  )
}

export default NavBar