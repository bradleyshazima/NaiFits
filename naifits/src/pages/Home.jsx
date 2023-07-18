import React from 'react'
import { Blog, Hero, Trending } from '../components'

const Home = () => {
  return (
    <main>
      <Hero />
      <Trending />
      <Blog />
    </main>
  )
}

export default Home