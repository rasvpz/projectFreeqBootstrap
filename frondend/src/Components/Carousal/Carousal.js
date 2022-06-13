import React, { useEffect, useState } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import '../Carousal/Carousal.css'
import menuBars from '../../Controller/NavBars/NavMenu'
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom'


const Carousal = () => {

  const [current, setCurrent] = useState('Men')
  const [currentCat, setCurrentCat] = useState([])
  const [currentSub, setCurrentSub] = useState('Top Wear')

  useEffect(()=>{
    setCurrentCat([...(menuBars.filter((val)=>{
      if(val.name === current){ 
        return val
      }
     
    }))])
  },[current])



  return (
    <>
        <div className="menuSpanMnuBar">
            {
              menuBars.map((mainMenus)=>{
                return(
                  <Button className='navButton' onClick={()=>{  
                    setCurrent(mainMenus.name)    
                  }} style={ current === mainMenus.name? {borderBottom:`3px solid ${mainMenus.color}`, color:`${mainMenus.color}`} : {}}>
                { mainMenus.name}
                  </Button>
                )
              })
            }
      </div>

  <Row className='banner'>
    <Col className='col' xs={{ span: 6, order: 2 }} md={{ span: 2, order: 1 }}> 
        <br />            
       {  Object.keys(currentCat).length !== 0 &&
                 currentCat[0]?.Categories.map((val)=>{
                   return (
                     <>
                    <span className='subCat' onClick={()=>{
                        setCurrentSub(val)
                        // console.log('lklkl', currentCat[0].color);                
                }}  style={{cursor:'pointer', color:`${currentCat[0].color}`}}>
                    {val}  <BsChevronRight style={{height:'9px'}}/></span><br/>
                    </>
                   )
                 })
        }   

    </Col>

    <Col style={{marginLeft:'-36px'}} className='col' xs={{ span: 6, order: 3 }} md={{ span: 2, order: 2 }}> 
        <br />
        {  Object.keys(currentCat).length !== 0 && currentSub !== null &&
          currentCat[0][(currentSub).replace(" ","_")].map((val)=>
             <>
             <span style={{cursor:'pointer'}}>
             <Link to={`/products/${val}`}> {val} </Link>
              </span><br/></>
          )
        } 
    </Col>    

    <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 3 }}>
      <table width="100%" className='table'>
        <tr>
          <td width="70%"> <img className='img-fluid' alt='menswear' src='../../images/bannersCorousal/menWearThump1.jpg'></img> </td>
          <td className="d-none d-sm-table-cell img-fluid" width='30%'>  <img alt='menswear' src='../../images/bannersCorousal/menWearThump2.jpg'></img> </td>
        </tr>
      </table>
    </Col>
  </Row>
    </>
  )
}

export default Carousal