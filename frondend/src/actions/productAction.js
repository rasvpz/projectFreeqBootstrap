import {
    PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
      PRODUCT_LIST_FAIL, 
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
      PRODUCT_DELETE_REQUEST,
      PRODUCT_DELETE_SUCCESS,
      PRODUCT_DELETE_FAIL,
      PRODUCT_CREATE_REQUEST,
      PRODUCT_CREATE_SUCCESS,
      PRODUCT_CREATE_FAIL,
      } from '../Constants/productConstants'

import axios from "axios"
export const listProducts = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST }) 
      const { data } = await axios.get('http://localhost:5000/api/products')
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const { data } = await axios.get(`http://localhost:5000/api/indiVidualProduct/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  

  export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`http://localhost:5000/api/products/${id}`, config)
  
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload: message,
      })
    }
  }
  
  export const createProduct = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`http://localhost:5000/api/products`, {}, config)
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      })
    }
  }