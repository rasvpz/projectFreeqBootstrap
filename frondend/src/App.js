
import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home'
import Footer from './Components/Footer/Footer'

import './bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Products from './Components/ProductsPage/Products'
import IndividualProducts from './Screens/ScreenIndividualProduct.js'



const  App = () => {
  return (
    <Router>
    <Header />
      <main>
      <Routes>
        <Route  path = '/' element={<Home/>} />
        <Route  path = '/products/:name' element={<Products />} />
        <Route  path = '/indiVidualProduct/:id' element={<IndividualProducts />} />

        </Routes>
      </main>
    <Footer />

    </Router>
  );
}

export default App;
