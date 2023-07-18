import React from 'react'
import { Blog, Hero, Trending, Quote } from '../components'

const Home = () => {
  return (
    <main>
      <Hero />
      <Trending />
      <Blog />
      <Quote />
    </main>
  )
}

export default Home