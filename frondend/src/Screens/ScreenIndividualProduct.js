import React, {useState, useEffect} from "react";
import axios from "axios"

// import myProducts from '../Controller/menProducts/Products'
import './ScreenIndividualProduct.css'
import Rating from '../Components/ProductsPage/ProductsRating'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';  
import { BsFillHeartFill} from "react-icons/bs";



const ScreenIndividualProduct = () => {
    const [invidualProduct, setinvidualProduct] = useState([])
    const params = useParams()
    useEffect(() =>{
        const fetchIndividualProducts = async () => {
          const {data} = await axios.get(`/api/indiVidualProduct/${params.id}`)
          if(data){  
            setinvidualProduct(data)
        }

        }
        fetchIndividualProducts()
      }, [])

  return (
    <> 

        <div className='row productRow'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                <table cellPadding={10} className='ptoductTable'>
                    <tr>
                        <td>
                       <b> <Rating value={invidualProduct.ratings}  text={`${invidualProduct.reviews} reviews`}/></b>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 className="productHeading">{invidualProduct.name}</h4>
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
                            <h6>{invidualProduct.rate}</h6>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        {invidualProduct.description}
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
                                    <td valign='bottom' width={'50%'}><b>Quantity</b><br/><Button className='favorate' variant="primary"> <BsFillHeartFill />&nbsp;&nbsp;&nbsp;&nbsp; Favorate</Button></td>
                                    <td valign='bottom' width={'50%'}><Button className='favorate' variant="primary"> <BsFillHeartFill />&nbsp;&nbsp;&nbsp;&nbsp; Favorate</Button>
</td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Button className='buttonAddToCart' variant="primary">Add To Cart</Button>
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

    </>
  )
}

export default ScreenIndividualProduct