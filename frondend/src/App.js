
import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home'
import Footer from './Components/Footer/Footer'

import './bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Products from './Components/ProductsPage/Products'


const  App = () => {
  return (
    <Router>
    <Header />
      <main>
      <Routes>
        <Route  path = '/' element={<Home/>} />
        <Route  path = '/products/:name' element={<Products />} />
        </Routes>
      </main>
    <Footer />

    </Router>
  );
}

export default App;
