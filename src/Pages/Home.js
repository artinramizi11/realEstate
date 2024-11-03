import React from 'react'
import ForRent from '../components/RentSection/ForRent'
import ForSale from '../components/SaleSection/ForSale'
import WhyChooseUs from '../components/WhChooseUs/WhyChooseUs'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import HomeSection from '../components/HomeSection/HomeSection'

const Home = () => {

  return (
    <div>
      <Nav />
      <HomeSection />
        <ForSale />
        <WhyChooseUs />
        <ForRent />
        <Footer />
    </div>
  )
}

export default Home