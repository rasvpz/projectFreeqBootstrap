import React from 'react'
import NewTrends from './NewTrends'
import MostPurchasedItems from './MostPurchasedItems'
import SeasonFavourite from './SeasonFavourite'
import TopRated from './TopRated'
import TopGategories from './TopCategories/TopGategories'

const Home = () => {
  return (
    <>
      <TopGategories />
        <TopRated />
        <NewTrends />
        
        
       <MostPurchasedItems />
        <SeasonFavourite />  
    
    </>
  )
}

export default Home