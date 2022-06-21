import React from 'react'
import NewTrends from './NewTrends'
import MostPurchasedItems from './MostPurchasedItems'
import SeasonFavourite from './SeasonFavourite'
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