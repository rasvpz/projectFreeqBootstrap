import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message/Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useParams, useLocation  } from 'react-router-dom'
import './CartScreen.css'

const ScreeCart = (history) => {
  const location = useLocation()
  const qty = new URLSearchParams(location.search).get('count');

  const params = useParams()
  let productId = params.id

  const dispatch =  useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (

    <Row  className='tableBgCart cartMrgnBtm'>
    <Col md={8}>
      <h3>&nbsp;&nbsp;Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty <Link to='/'>Go Back</Link>
        </Message>
      ) : (
        <ListGroup className='mainColCart' variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
            <Row>
            <table className='table tableBgCart' >
              <tr className='rowBrdrBtmCart'>
                <td>
                <Col sm={2}>
                  <Image className='cartPic' src={ '../../images/product/inspired-product/'+(item.image) }  alt={item.name} fluid rounded />
                </Col>
                </td>
                <td>
                <Col sm={4}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                </td>
                <td>
                <Col sm={2}>${item.price}</Col>
                </td>
                <td>
                <Col sm={2}>
                  <Form.Control
                    as='select'
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                </td>
                <td>
                <Col sm={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
                </td>
              </tr>
            </table>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
    <Col className='tableBgCart' md={4}>
      <Card className='cardCart checkoutColCartPdng'>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h3>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <br/>
            <Button
              type='button'
              className='btn-block checkOutBtn'
              disabled={cartItems.length === 0}
              // onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Row>
    

  )
}

export default ScreeCart