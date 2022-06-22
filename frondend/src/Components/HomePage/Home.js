import React from 'react'
import TopRated from './TopRated'
import TopGategories from './TopCategories/TopGategories'
import NewsLetter from './NewsLetter/NewsLetter'
import AboutUsPage from './AboutUsPage/AboutUsPage'

const Home = () => {
  return (
    <>
    
      <TopGategories />
      <NewsLetter />
        <TopRated />
        <AboutUsPage />
        {/* <NewTrends />
        
        
       <MostPurchasedItems />
        <SeasonFavourite />   */}
    
    </>
  )
}

export default Home