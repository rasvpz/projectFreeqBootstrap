import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message/Message'
import Loader from '../Components/Loader'
import { listProducts, deleteProduct, createProduct } from '../actions/productAction'
import { useNavigate  } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../Constants/productConstants'
const ProductListScreen = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  useEffect(() => {

    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo.isAdmin) {
      navigate('/login')      
    }
    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts())
    }
  }, [dispatch, userInfo, successDelete, successCreate, createdProduct])


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  

  return (
    <>
    <Row className='align-items-center'>
        <Col>
            <h3>Products</h3>
        </Col>
        
        <Col className='align-right'>
            <Button className = 'my-3' onClick={createProductHandler}>
              <i className='fas fa-plus'></i>  Create Product</Button>
        </Col>

    </Row>
    {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>SUBITEM</th>
            </tr>
          </thead>
          <tbody>
            {products.products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>
                ${product.rate}
                </td>
                <td>
                {product.mainCategory}
                </td>
                <td>
                {product.subCategory}
                </td>
                <td>
                  <LinkContainer to={`/admin/products/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ProductListScreen