import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavDropdown } from 'react-bootstrap'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
import { BsFillHeartFill, BsFillPersonFill, BsCartFill, BsChevronDoubleRight } from "react-icons/bs";
import menuBars from "../../Controller/NavBars/NavMenu";
import Carousal from "../Carousal/BannerCarousal";
import SideNavBar from "../SideNavBar/SideNavBar";
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../../actions/userActions'
const Header = () => {
  const [currentItem, setCurrentItem] = useState(menuBars[0]);
  const [currentCat, setCurrentCat] = useState({});
  const [currentSub, setCurrentSub] = useState([]);
  const [currentSubCat, setCurrentSubCat] = useState([]);
  const [selectedSub, setSelectedSub] = useState([]);

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
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

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
<>

<div className="row myFirstRow"  style={{ backgroundColor: "#9fe1d7",
      backgroundImage: `url("../images/banner/bgMotionBlur1.png")`, backgroundRepeat: 'no-repeat', backgroundPosition:'center'
    }}>
    	<div className="col-lg-2 col-sm-3 col-3 col-md-3 menuCol1">
        <img className="CmpLogo" alt="menswear" src="../../images/logoOslo.png"></img>        
      </div>
    	<div className=" col-lg-10 col-sm-9 col-9 col-md-9 menuCol2">

        <div className='row innerRow'>
          
          <div className="col-lg-12 col-sm-12 col-12 col-md-12 innerCol1">
            <SideNavBar />
            <span className="newMainMenuSpan"> HOME</span>
            <span className="newMainMenuSpan"> ABOUT</span>
            <span className="newMainMenuSpan"> CONTACT</span>
            <span className="icons">
            <BsCartFill className="iconsPadding" />

              {/* <BsFillHeartFill className="iconsPadding"/>  */}
            {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : <Link to="/login"><BsFillPersonFill className="iconsPadding userLoginHeader" /></Link> }
              

              </span>
       </div> 

        </div>
      </div>

      <div className="col-lg-12 col-sm-12 col-12 col-md-12">
      
      <div className="row bannerContentRow">
      <div className="col-lg-5 col-sm-12 col-12 col-md-12"> 
      
      <img className="bannerSlogan" alt="Slogans" src="../../images/banner/bannerHeadinSlogan.png"></img> 
      
      <div className="bannerButton"> 
            Get Top Products <BsChevronDoubleRight style={{color:'#d70900'}} />
      </div>       
      <br />
      </div>
      <div className="col-lg-7 col-sm-12 col-12 col-md-12 d-none d-sm-table-cell">
            <Carousal/>
      </div>
      
      <div className="col-lg-7 col-sm-12 col-12 col-md-12 bannerPicForMobile">
      <img className="carousalMediaQuery" alt="Slogans" src="../../images/banner/carousalMediaQuery.png"></img>             
      </div>

      </div>              

      </div>
      <div className="row">
      <div className="col-lg-12 col-sm-12 col-12 col-md-12 bannerStrip"> </div>
      </div>
  	</div>

{/* <Navbar collapseOnSelect expand="lg" className="topNavBG" variant="dark">
  <Navbar.Brand className="brand">  <Link className="brnd" to ="/"><b>freeQ</b></Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon"><BsSearch /></InputGroup.Text>
      <FormControl id="mrgn"
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
    </Nav>


    <Nav>
      <Nav.Link className='rightMenusTop' href="#features">Wishlist &nbsp; <BsHeart /></Nav.Link>
      <Nav.Link className='rightMenusTop' href="#pricing">SignIn &nbsp; <BsPerson /></Nav.Link>
      <Nav.Link className='rightMenusTop' href="#features">Cart &nbsp; <BsCartDash /> </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar> */}
</>
  )
}

export default Header