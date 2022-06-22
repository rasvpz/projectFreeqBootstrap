import { Row, Col, Button } from "react-bootstrap";
import "../Carousal/Carousal.css";
import menuBars from "../../Controller/NavBars/NavMenu";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, Component } from "react";
import {} from 'react-bootstrap'
import '../Header/Header.css'
import { BsSearch, BsHeart, BsPerson, BsCartDash, BsChevronDoubleRight } from "react-icons/bs";
import { Button,Link } from 'react-router-dom'
import menuBars from "../../Controller/NavBars/NavMenu";
import Carousal from "../Carousal/BannerCarousal";
import SideNavBar from "../SideNavBar/SideNavBar";
const Carousal = () => {

    // slickSlack starts
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
// slickSlack ends


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
      <div className="menuSpanMnuBar">
        {menuBars.map((mainMenus) => {
          return (
            <Button
              className="navButton"
              onClick={() => {
                setCurrentItem({ ...mainMenus });
              }}
              style={
                currentItem.name === mainMenus.name
                  ? {
                      borderBottom: `3px solid ${mainMenus.color}`,
                      color: `${mainMenus.color}`,
                    }
                  : {}
              }
            >
              {mainMenus.name}
            </Button>
          );
        })}
      </div>

      {
        <Row className="banner">
          <Col
            className="col"
            xs={{ span: 6, order: 3 }}
            md={{ span: 2, order: 2 }}
          >
            <>
              {currentSub.map((val) => (
                <>
                
                  <span
                    style={{ 
                      cursor: "pointer", display:'flex',
                      color: `${
                        val === currentSubCat 
                        ? currentItem.color
                        : ''
                      }`,
                    }}

                  >
                     {val.replace("_", " ")}<BsCaretRightFill style={{height: "12",marginTop:'11.5px',marginLeft:'12px', color: `${val === currentSubCat? currentItem.color : '' }`, display: `${val === currentSubCat? 'block' : 'none' }`}} /></span>
                 
                </>
              ))}
            </>
          </Col>
          <Col
            style={{ marginLeft: "-36px" }}
            className="col"
            xs={{ span: 6, order: 3 }}
            md={{ span: 2, order: 2 }}
          >
            {selectedSub.map((val) => (
              <>
               <Link to={`/products/${val}`}  className="linkAnchorTag"><span style={{ cursor: "pointer", color: `${currentItem.color}` }}>{val}</span></Link> 
                <br />
              </>
            ))}
          </Col>

          <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 3 }}>
            <table width="100%" className="table">
              <tr>
                <td width="70%">
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/bannersCorousal/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousalCaption">
          <h2>First slide label</h2>
          <p className="textOnCarousal">Nulla vitae elit libero.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/bannersCorousal/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption  className="carousalCaption">
          <h2>Second slide label</h2>
          <p className="textOnCarousal">Lorem ipsum dolor sit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/bannersCorousal/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption  className="carousalCaption">
          <h2>Third slide label</h2>
          <p className="textOnCarousal">
            Praesent commodo cur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </td>
                <td className="d-none d-sm-table-cell img-fluid" width="30%">
          
                  <div>
                    <img alt="menswear" src="../../images/bannersCorousal/menWearThump2.jpg"></img>
                  </div>
                </td>
              </tr>
            </table>
          </Col>
        </Row>
      }
    </>
  );
};

export default Carousal;
