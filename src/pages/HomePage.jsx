import React from 'react'
import Hero from '../components/common/Hero'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import FeaturedCars from '../components/car/FeaturedCars'
import CarCategory from '../components/car/CarCategory'
import Footer from '../components/common/Footer'

const HomePage = () =>
{
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <FeaturedCars />
            <CarCategory />
            <Footer />
        </>
    )
}

export default HomePage
