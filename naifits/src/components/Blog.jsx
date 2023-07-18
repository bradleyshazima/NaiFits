import React from 'react'

import styles from '../styles'

import { Link } from 'react-router-dom'

import { blog1, blog2, blog3, abstract } from '../assets'

const Blog = () => {
  return (
    <section className='py-10 px-20 flex flex-wrap gap-10 items-center justify-between'>
      <div className='w-[calc(50%-20px)] h-96 flex flex-col items-start justify-end p-8 rounded-2xl bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to top, rgba(13, 19, 33, 0.9) 10%, rgba(13, 19, 33, 0) 40%), url(${blog1})` }}>
        <h3 className='text-3xl gilB text-dWhite'>New Release</h3>
        <p className='text-dWhite text-lg'>Presenting new trends of 2023</p>
        <span className='flex gap-8 mt-5'>
          <Link to='#' className={`${styles.whiteBtn}`}>2023 Lookbook</Link>
          <Link to='#' className={`${styles.whiteTransBtn}`}>Watch Trending</Link>
        </span>
      </div>

      <div className='w-[calc(50%-20px)] h-96 flex flex-col items-center justify-center gap-10'>
        <div className='w-full h-1/2 bg-slate-500 flex p-3 rounded-2xl' style={{ backgroundImage: `url(${blog2})` }}>
          <div className='w-full h-full border-dWhite rounded-lg bg-transparent flex flex-col items-start justify-end p-4'>
            <Link to='#' className={`${styles.whiteTransBtn}`}>Watch Trending</Link>
            <h3 className='text-3xl gilB text-dWhite'>Trendy Fashion</h3>
            <p className='text-dWhite text-lg'>New in town</p>
          </div>
        </div>

        <div className='w-full h-1/2 orange flex flex-col items-start justify-end p-8 rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url(${abstract})` }}>
          <Link to='#' className={`${styles.whiteTransBtn}`}>Subscribe</Link>
          <p className='text-dWhite text-lg'>Subscribe to our newsletter to get news on deals and offers</p>
        </div>
      </div>

      <div className='w-full h-96 flex flex-col justify-end items-center p-8 rounded-2xl bg bg-slate-500 bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to top, rgba(13, 19, 33, 0.9) 10%, rgba(13, 19, 33, 0) 40%), url(${blog3})` }}>
        <Link to='' className={`${styles.whiteTransBtn}`}>Explore Our Collection</Link>
      </div>
    </section>
  )
}

export default Blog