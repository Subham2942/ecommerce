import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Anouncements from '../components/Announcement/Anouncements'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Anouncements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home