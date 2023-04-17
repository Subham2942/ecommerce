import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Anouncements from '../components/Announcement/Anouncements'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Anouncements/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home