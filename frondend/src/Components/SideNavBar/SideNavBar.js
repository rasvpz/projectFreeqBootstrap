import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom'
// import { Row, Col } from "react-bootstrap";
// import { BsCaretRightFill } from "react-icons/bs";
// import Popover from 'react-bootstrap/Popover';
import menuBars from "../../Controller/NavBars/NavMenu";
// import Accordion from 'react-bootstrap/Accordion'
import Offcanvas from 'react-bootstrap/Offcanvas'  
import { Button, Container } from 'react-bootstrap';  
// import './SideNavBar.css'

import styles from './SideNavBar.css';
const SideNavBar = () => {

    const [show, setShow] = useState(false);  
    const closeSidebar = () => setShow(false);  
    const showSidebar = () => setShow(true);  

    const [currentItem, setCurrentItem] = useState(menuBars[0]);
    const [currentCat, setCurrentCat] = useState({});
    const [currentSub, setCurrentSub] = useState([]);
    const [currentSubCat, setCurrentSubCat] = useState([]);
    const [selectedSub, setSelectedSub] = useState([]);
  
    useEffect(() => {
      menuBars.map((val) => {
        if (val.name === currentItem?.name) {
          setCurrentCat({ ...val.Categories });
        }
      });
    }, [currentItem]);
  
    useEffect(() => {
      setCurrentSubCat(Object.keys(currentCat)[0]);
      currentSub.length = 0;
      for (let val in currentCat) {
        setCurrentSub((prev) => [...prev, val]);
      }
    }, [currentCat]);
  
    useEffect(() => {
      currentSub.map((val) => {
        if (val === currentSubCat.replace(" ", "_")) {
          setSelectedSub(currentCat[val]);
        }
      });
    }, [currentSubCat]);
  
    return (
        <>  
        <span className="sideNavMain">  
          <span className="navIcon"  onClick={showSidebar}>  
            &#9776;
          </span>  
          <Offcanvas className="newsSideNav" show={show} onHide={closeSidebar}>  
            <Offcanvas.Header className="newsSideNavHeader"  closeButton>  
              <Offcanvas.Title> OSLO PRODUCTS</Offcanvas.Title>  
            </Offcanvas.Header>  
            <Offcanvas.Body>  
            <div className='row innerRow'>
          <div className="col-lg-12 col-sm-12 col-12 col-md-12">
          
          {menuBars.map((mainMenus) => {
          return (
            <span
              className="mainMenu"
              onClick={() => {
                setCurrentItem({ ...mainMenus });
              }}
              style={
                currentItem.name === mainMenus.name
                  ? {
                      borderBottom: `3px solid ${mainMenus.color}`,
                      color: `${mainMenus.color}`,
                      cursor: 'pointer',
                    }
                  : {}
              }
            >
              {mainMenus.name}
            </span>
            
          );
          
        })}
       </div>   
        
          <div className="col-lg-4 col-sm-4 col-4 col-md-4">
          <>
          <br />
              {currentSub.map((val) => (
                <>
                
                  <div className="subMenu"
                    style={{ 
                      cursor: "pointer",
                      color: `${
                        val === currentSubCat 
                        ? currentItem.color
                        : ''
                      }`,
                    }}
                    onClick={() => {                     
                      setCurrentSubCat(val);
                    }}
                  >
                     {val.replace("_", " ")}</div>
                 
                </>
              ))}
            </>
          </div>
          <div className="col-lg-8 col-sm-8 col-8 col-md-8 lastMenu">
          <div style={{marginTop:'8px'}}>
          <br />
            {selectedSub.map((val) => (
              <>
               <Link to={`/products/${val}`}><span style={{ cursor: "pointer", color: `${currentItem.color}`, textDecoration: "none"}}>{val}</span></Link> 
                <br />
              </>
            ))}
          </div>
          </div>

        </div>
            </Offcanvas.Body>  
          </Offcanvas>  
          </span>  
        </>  


    // <>


    // {['left'].map((placement) => (
    //   <OverlayTrigger 
    //     trigger="click"
    //     key={placement}
    //     placement={placement}
    //     overlay={
    //       <Popover className="poppOver" id={`popover-positioned-${placement}`}>
    //         <Popover.Header as="h3">Oslo Menus</Popover.Header>
    //         <Popover.Body>
    //         {menuBars.map((mainMenus) => {
    //       return (
    //         <Accordion defaultActiveKey={['0']} alwaysOpen 
    //           className="newMainMenuSpan"
    //           onClick={() => {
    //             setCurrentItem({ ...mainMenus });
    //           }}
    //           style={
    //             currentItem.name === mainMenus.name
    //               ? {
    //                   borderBottom: `3px solid ${mainMenus.color}`,
    //                   color: `${mainMenus.color}`,
    //                   cursor: 'pointer',
    //                 }
    //               : {}
    //           }
    //         >

    //           <Accordion.Item>
    //                 <Accordion.Header>{mainMenus.name}</Accordion.Header>
    //                 <Accordion.Body>
                
    //         <>
    //         {currentSub.map((val) => (
    //             <>
                
    //               <span className="sideNavinnerCol2"
    //                 style={{ 
    //                   cursor: "pointer",
    //                   color: `${
    //                     val === currentSubCat 
    //                     ? currentItem.color
    //                     : ''
    //                   }`,
    //                 }}
    //                 onClick={() => {
                     
    //                   setCurrentSubCat(val);
    //                 }}
    //               >
    //                  {val.replace("_", " ")}</span>
                 
    //             </>
    //           ))}
                    
    //               <br />  {selectedSub.map((val) => (
    //           <>
    //            <Link to={`/products/${val}`}  className="linkAnchorTag"><span style={{ cursor: "pointer", color: `${currentItem.color}` }}>{val}</span></Link> 
    //             <br />
    //           </>
    //         ))}
    //         </>


    //         </Accordion.Body>
    //             </Accordion.Item>   


             
    //           </Accordion>
    //       );
    //     })}



    //         </Popover.Body>
    //       </Popover>
    //     }
    //   >
    //     <span variant="secondary">&#9776;</span>
    //   </OverlayTrigger>
    // ))}
//   </>
  )
}

export default SideNavBar