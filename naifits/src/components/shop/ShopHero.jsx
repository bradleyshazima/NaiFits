import React from 'react'

import { Link } from 'react-router-dom'

import { ShopHeroImg } from '../../assets'

import styles from '../../styles'

const ShopHero = () => {
  return (
    <section className='w-full h-[480px] mt-20 p-40 flex flex-col gap-10 justify-center bg-cover bg-left' style={{ backgroundImage: `url(${ShopHeroImg})` }}>
        <h2 className='text-6xl w-1/2 gilB text-dWhite'>Grab Upto 50% Off On Selected Apparel</h2>
        <Link to='#' className={`${styles.blueBtn}`}>Buy Now</Link>
    </section>
  )
}

export default ShopHero