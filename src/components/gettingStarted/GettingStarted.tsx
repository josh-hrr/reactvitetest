import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Header from "../header/Header";
import backgroundImage from '../../assets/img/wave.png'; 
import logo from '../../assets/img/grad.png';
import ContactForm from "../gettingStarted/ContactForm";

function GettingStarted () {
  return (
    <div className='p-0 m-0' >
        <Row className='p-0 m-0'>
            <Col className="p-0 mb-5">
                 <Header />
            </Col>
        </Row>
        <Row id="home" className="text-white d-flex justify-content-center align-items-center pt-5 pt-md-0 m-0" 
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80%', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#81B622',   
        }}> 
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-end">
                <img src={logo} alt="company logo representing a study plan"  style={{width: '70%'}}/>
            </Col>  
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-start" style={{height: '100%'}}>
                <div className="">  
                    <ContactForm />
                </div> 
            </Col> 
        </Row>   
      </div>
  );
}

export default GettingStarted;