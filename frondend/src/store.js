import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './Components/Reducers/productsReducers'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    productList: productListReducer,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store