
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
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import UserListScreen from './Screens/UserListScreen'
import UserEditScreen from './Screens/UserEditScreen'

const  App = () => {
  return (
    <Router>
    <Header />
      <main>
      <Routes>
        <Route  path = '/' element={<Home/>} />
        <Route  path = '/order/:id' element={<OrderScreen />} />
        <Route  path = '/placeorder' element={<PlaceOrderScreen />} />
        <Route  path = '/payment' element={<PaymentScreen />} />
        <Route  path = '/login' element={<LoginScreen />} />
        <Route  path = '/shipping' element={<ShippingScreen />} />
        <Route  path = '/profile' element={<ProfileScreen />} />
        <Route  path = '/register' element={<RegisterScreen />} />
        <Route  path = '/products/:name' element={<Products />} />
        <Route  path = '/indiVidualProduct/:id' element={<IndividualProducts />} />
        <Route  path = '/cart/:id' element={<CartPage />} />
        <Route  path = '/admin/userlist' element={<UserListScreen />} />
        <Route  path = '/admin/user/:id/edit' element={<UserEditScreen />} />

        </Routes>
      </main>
    <Footer />

    </Router>
  );
}

export default App;


// https://material-table.com/#/docs/get-started
