import React from 'react'
import { Blog, Hero, Trending, Quote, Features } from '../components'

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Trending />
      <Blog />
      <Quote />
    </main>
  )
}

export default Home