import { useState } from 'react'
import naifitsLogo from './assets/Logo.svg'
import './App.css'
import styles from './styles';
import { Route, Link, Routes} from 'react-router-dom'

import { About, Shop, Home } from './pages'

import { NavBar } from './components'

function App() {
  return (
    <section id='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutus' element={<About />} />
      </Routes>
    </section>
  )
}

export default App
