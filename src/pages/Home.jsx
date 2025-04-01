import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from '../components/FavouriteBooks'
import MiddleSection from '../components/MiddleSection'
import PromoBanner from '../components/PromoBanner'
import Review from '../components/Review'
React

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <MiddleSection/>
      <PromoBanner/>
      <Review/>
    </div>
  )
}

export default Home
