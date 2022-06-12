
import Header from './Components/Header/Header'
import TopRated from './Components/Body/TopRated'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousal/Carousal'
import './bootstrap.min.css'
import NewTrends from './Components/Body/NewTrends'
import MostPurchasedItems from './Components/Body/MostPurchasedItems'
import SeasonFavourite from './Components/Body/SeasonFavourite'


const  App = () => {
  return (
    <>
    <Header />
    <Carousel />
      <main style={{margin: '29px'}}>
        <TopRated />
        <NewTrends />
        <MostPurchasedItems />
        <SeasonFavourite />
      </main>
    <Footer />

    </>
  );
}

export default App;
