import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import './NewsLetter.css'
import { BsCaretRightFill } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="row MainNewsLetter">

        <div className="col-lg-6 col-sm-12 col-12 col-md-6 newLetterColPadding " >
                <div className='connectWithOslo'><u><b>Connect with OSLO products</b></u></div>
                <h4 className="headingJoinNewsLetter">JOINING WITH OUR MAILING LIST</h4>
                <InputGroup className="newsLetterForm">
                    <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button className="newsletterButton" variant="outline-secondary" id="button-addon2"> Join our mailing list <BsCaretRightFill style={{color:'#d70900'}} />  </Button>
                </InputGroup>
        </div>

        <div className="col-lg-6 col-sm-12 col-12 col-md-6 newLetterColPadding" ><u><b>Friend us for the latest UPDATES</b></u>
                <div className="socilaIconMainDiv"> <span><img src="../../images/banner/newsletter/twitter.png" alt="First slide" /></span> <span><img src="../../images/banner/newsletter/instagram.png" alt="First slide" /></span> <span><img className='facebook' src="../../images/banner/newsletter/facebook.png" alt="First slide" /></span> <span><img src="../../images/banner/newsletter/youtube.png" alt="First slide" /></span> </div>
        </div>
        <div>
        </div>

    </div>
  )
}

export default NewsLetter