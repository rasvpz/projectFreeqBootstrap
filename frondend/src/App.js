
import Header from './Components/Header/Header'
import Home from './Components/Body/Home'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousal/Carousal'
import './bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'


const  App = () => {
  return (
    <Router>
    <Header />
    <Carousel />
      <main style={{margin: '29px'}}>
      <Routes>
        <Route  path = '/' element={<Home/>} />
        
        </Routes>
      </main>
    <Footer />

    </Router>
  );
}

export default App;
