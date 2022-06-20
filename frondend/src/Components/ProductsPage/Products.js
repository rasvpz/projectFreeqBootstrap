import React from "react";
import { useParams } from 'react-router-dom'
import myProducts from '../../Controller/menProducts/Products'
import {Row, Col, Card, Button} from 'react-bootstrap'
import './Products.css'
import Rating from './ProductsRating'
import { BsHeart, BsPerson, BsEye } from "react-icons/bs";


const Products = () => {
    const params = useParams()
    const product = myProducts.filter((myItem)=>myItem.item===params.name)
  return (
    <>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h3 className="hthree_title"><span>{product[0].mainMenu} Products</span><hr className="myHr" /></h3>            
            <p className="subHeading">Keep fresh keep hot and easy handling</p>
          </div>
        </div>
      </div>
    </div>
    <Row>
                 {
                     product.map((filteredProducts) => (
                          <Col className="rowMarigin" sm={12} md={6}lg={4} xl={3}>                              

<Card className="card">  
  <Card.Body style={{padding: '0rem 0rem'}}>
    <div>
      <img style={{width: '19.9rem'}} alt="T-Shirt" src= {'../../images/product/inspired-product/'+(filteredProducts.pic)} ></img>
<Card.Title className="prodName" as='p' style={{ border:'1px solid white', padding:'10px', paddingLeft:'10px'}}>{ filteredProducts.name}</Card.Title>
    </div>

    <div style={{marginTop:'-10px'}}>
      <Card.Text style={{paddingLeft: '10px'}} as='h6'><div className='my-0'> QR {filteredProducts.rate}</div></Card.Text>
      <Card.Text as='div' style={{paddingLeft: '10px', fontSize: '14px', marginTop:'-4px'}}>    
      <Rating value={filteredProducts.ratings}  text={`${filteredProducts.reviews} reviews `}/>
      </Card.Text>
    </div>
    <Button style={{borderRadius:'0px', marginRight:'14px', marginBottom:'14px',  marginTop:'20px', float: 'right'}} variant="dark">Buy Now</Button>
  </Card.Body>

  <div class="card-overlay">
       <div class="card-overlay-inner">
            <span className="cardIcons paddng"><BsEye /></span><span className="cardIcons paddng"><BsHeart /></span><span className="cardIcons paddng"><BsPerson /></span>

     </div>
     </div>


</Card>

</Col>

                     ))
                 }
            </Row>

    
    </>
  )
}

export default Products