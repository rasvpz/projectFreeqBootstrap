// BELOW IMPORT REDUX
import React, {useState, useEffect} from "react";
import './ScreenIndividualProduct.css'
import Rating from '../Components/ProductsPage/ProductsRating'
import { useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';  
import { BsFillHeartFill} from "react-icons/bs";
// BELOW IMPORT FOR REDUX
import {useDispatch, useSelector} from 'react-redux'
// BELOW IMPORT FOR REDUX ACTION
import { listProductDetails } from "../actions/productAction";
import { productDetailsReducer } from "../Reducers/productsReducers";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const ScreenIndividualProduct = ({}) => {
const navigate = useNavigate()
    let [count, setCount] = useState(1)    
    const increment = () =>{        
            setCount(count+1)
    }

    const dicrement = () =>{ 
        if(count === 0)   
        count = 0
        else{    
        setCount(count-1)
        }
}
// REDUX START HERE
    const { individualProducts } = useSelector(state=>state)
    const { loading, error } = individualProducts
    const params = useParams()    
    const dispatch = useDispatch()
    useEffect(() =>{     
        dispatch(listProductDetails(params.id))
      }, [dispatch])
// REDUX ENDS HERE

// BELOW FUNCTION CODE TO SENT THE DETAILS FROM HERE TO CARTPAGE
        const addToCartHandler = () => {
            dispatch(addToCart(params.id,count))
            navigate(`/cart/${params.id}?count=${count}`)
        }
// BELOW FUNCTION CODE TO SENT THE DETAILS FROM HERE TO CARTPAGE ENDS HERE
        let a
        if(individualProducts?.product){
            a = individualProducts?.product.reviews?.filter(r => r.comment!=="")
            }


  return (
    <> 
    {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
     <div className='row productRow'>
     <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
         <table cellPadding={10} className='ptoductTable'>
             <tr>
                 <td>
                     <>
                         <b> <Rating value={individualProducts?.product.rating} text={`${a?.length} reviews`}/></b>                        
                     </>                      
                 </td>
             </tr>

             <tr>
                 <td>
                     <h4 className="productHeading">{individualProducts?.product.productName}</h4>
                     <div className="col-lg-12 col-md-5 col-sm-12 col-xs-12 d-block d-sm-table-cell d-lg-none">
                     <img
                     className="w-100"
                     src="../../images/individualProducts/1.png"
                     alt="First slide"
                     />
                     </div>

                 </td>
             </tr>

             <tr>
                 <td>
                     <h6>{individualProducts?.product.rate}</h6>
                 </td>
             </tr>

             <tr>
                 <td>
                 {individualProducts?.product.description}
                 </td>
             </tr>

             <tr>
                 <td>

                 <table width='100%'>
                         <tr>
                             <td width={'50%'}><b>Color</b></td>
                             <td width={'50%'}><b>Size: &nbsp;&nbsp; <span className='size'>S</span><span className='sizen2'>M</span><span className='sizen2'>B</span></b></td>
                         </tr>
                     </table>
                     
                 </td>
             </tr>
             <tr>
                 <td>

                 <table width='100%'>
                         <tr>
                             <td valign='bottom' width={'50%'}><b>Quantity</b> {individualProducts?.product.countInStock > 0 ? 'In stock' : <span style={{color:'red', fontSize:'12px', fontWeight:'bold'}}> Out of Stock</span>} <br/>
                                                           
                                <Form className={`orderNumber ${individualProducts?.product.countInStock > 0 ? "" : "d-none" }`}>
                                    <Button className='increment' variant="primary" onClick={dicrement}>-</Button>  
                                    <Form.Control
                                    type="text"
                                    id="countQty" value={count} style={{width:'50px', paddingLeft: '8px', paddingRight: '8px', textAlign: 'center'}}
                                    />
                                        <Button onClick={increment} className='increment' variant="primary">+</Button>
                                </Form>
                             </td>
                             <td valign='bottom' width={'50%'}><Button type='button'  className='favorate' variant="primary"> <BsFillHeartFill />&nbsp;&nbsp;&nbsp;&nbsp; Favorate</Button>
                            </td>
                         </tr>
                     </table>
                     
                 </td>
             </tr>
             <tr>
                 <td>
                 <Button onClick={addToCartHandler}  type='button' disabled={individualProducts?.product.countInStock === 0} className='buttonAddToCart' variant="primary">Add To Cart</Button>
                 </td>
             </tr>
         </table>
     </div> 
     <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 d-none d-sm-table-cell'>
         <table cellPadding={8} className='ptoductTable'>
             <tr>
                 <td>
                 <img
                     className="w-100"
                     src="../../images/individualProducts/1.png"
                     alt="First slide"
                     />
                 </td>
                 </tr>

         </table>


 </div>

 </div>
    }

       

    </>
  )
}

export default ScreenIndividualProduct


// const words = ['spray','','limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length >0);
// var size = result.length;
// console.log(size);