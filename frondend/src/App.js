
import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home'
import Footer from './Components/Footer/Footer'
import './bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Products from './Components/ProductsPage/Products'
import IndividualProducts from './Screens/ScreenIndividualProduct.js'
import CartPage from './Screens/CartScreen.js'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'




const  App = () => {
  return (
    <Router>
    <Header />
      <main>
      <Routes>
        <Route  path = '/' element={<Home/>} />
        <Route  path = '/login' element={<LoginScreen />} />
        <Route  path = '/profile' element={<ProfileScreen />} />
        <Route  path = '/register' element={<RegisterScreen />} />
        <Route  path = '/products/:name' element={<Products />} />
        <Route  path = '/indiVidualProduct/:id' element={<IndividualProducts />} />
        <Route  path = '/cart/:id' element={<CartPage />} />


        </Routes>
      </main>
    <Footer />

    </Router>
  );
}

export default App;
