import React from 'react'
import { useParams } from 'react-router-dom'
import myProducts from '../../Controller/menProducts/menProducts'
import {Row, Col, Card, Button} from 'react-bootstrap'
import './Products.css'
import Rating from './ProductsRating'


const Products = () => {
    const params = useParams()
    const product = myProducts.filter((myItem)=>myItem.item===params.name)
  return (
    <>
    
    <p>{ params.name}</p>


    <Row>
                 {
                     product.map((filteredProducts) => (
                          <Col sm={12} md={6}lg={4} xl={3}>
                              


<Card className="myCard" style={{marginBottom:'10px', width: '20rem', border:'1px solid #c0c0c0', borderRadius: '0px'}}>
  
  <Card.Body style={{padding: '0rem 0rem'}}>
  <div style={{position: 'relative'}}>
    <img className="img-responsive" style={{width: '19.9rem'}} alt="T-Shirt" src= {'../../images/T-shirts/'+(filteredProducts.pic)} ></img>
    <div style={{position: 'absolute', top:'63%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', minHeight:'160px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
    <Card.Title style={{ border:'1px solid white', padding:'4px', textShadow:'2px 2px grey'}}>{ filteredProducts.name}</Card.Title>
    <p style={{fontSize:'16px', color:'#eeeded'}}>{filteredProducts.description}  </p>
    </div>  
  </div>


    <Card.Text style={{paddingLeft: '20px'}} as='h6'><div className='my-3'> $ {filteredProducts.rate}</div></Card.Text>

    <Card.Text as='div' style={{paddingLeft: '20px', fontSize: '14px', marginTop:'-10px'}}>    
    <Rating value={filteredProducts.ratings}  text={`${filteredProducts.reviews} reviews `}/>
    </Card.Text>

    <Button style={{borderRadius:'0px', marginRight:'14px', marginBottom:'14px',  marginTop:'20px', float: 'right'}} variant="dark">Buy Now</Button>
  </Card.Body>
</Card>

</Col>

                     ))
                 }
            </Row>

    
    </>
  )
}

export default Products