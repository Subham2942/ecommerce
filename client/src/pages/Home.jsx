import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Anouncements from '../components/Announcement/Anouncements'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'

const Home = () => {
  return (
    <div>
        <Anouncements/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home