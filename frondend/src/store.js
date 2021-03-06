import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer } from './Reducers/productsReducers'
import { cartReducer } from './Reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './Reducers/userReducers'
import {orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer} from './Reducers/orderReducers'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    productList: productListReducer,  
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    individualProducts:productDetailsReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}


const initialState = {
    cart: {cartItems: cartItemsFromStorage, shippingAddress:shippingAddressFromStorage},
    userLogin: { userInfo: userInfoFromStorage },
}


  
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store