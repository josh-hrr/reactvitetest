import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Header from "../header/Header";
import backgroundImage from '../../assets/img/wave.png'; 
import circle from '../../assets/img/circle.png'; 
import { Accordion, Button } from "react-bootstrap";
import ZoomLivePage from "./ZoomLivePage";  

function CourseLivePage () {
  return (
    <div className='p-0 m-0' >
        <Row className='p-0 m-0'>
            <Col className="p-0 mb-5">
                 <Header />
            </Col>
        </Row> 
        <Row id="course-page" className="text-white d-flex justify-content-center align-items-center pt-5 pt-md-0 m-0" 
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80%', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#81B622',   
        }}>  
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-end" style={{height: '100%'}}>
                <div className="m-3">   
                    <h1>Curso de ingles intensivo</h1>
                    <p>Curso diseñado para  quien desee conseguir trabajo en call center en menos de 6 meses</p>
                </div> 
            </Col> 
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-center">
                <img src={circle} alt="company logo representing a study plan " className="shadow mt-5" style={{width: '40%', borderRadius: '50%'}}/>
            </Col>  
        </Row>     

        <Row className="m-3">   
            <Col id="zoom" md={6} xs={12} className="p-0 border border-gray order-2 order-md-1">
                    <ZoomLivePage />
            </Col> 
            <Col className="order-1 order-md-2 p-0"> 
            <Accordion className="d-flex flex-column">
                <Accordion.Item  eventKey="0">
                    <Accordion.Header id="clase-uno" >Clase 1</Accordion.Header>
                        <Accordion.Body>
                            <p>Introduction</p>
                            <Button href="#zoom" className="btn btn-success m-1">Continuar</Button>
                            <Button className="btn btn-primary m-1">Material de apoyo</Button>
                            <Button className="btn btn-light m-1">✔</Button>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Clase 2</Accordion.Header>
                        <Accordion.Body>
                            <p>Simple Present</p>
                            <Button href="#zoom" className="btn btn-success">Continuar</Button>
                            <Button className="btn btn-light m-1">✔</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Clase 3</Accordion.Header>
                        <Accordion.Body> 
                            <p>Simple Future</p>
                            <Button href="#zoom" className="btn btn-success">Continuar</Button>
                            <Button className="btn btn-light m-1">✔</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Clase 4</Accordion.Header>
                        <Accordion.Body>
                            <p>Simple Past</p>
                            <Button href="#zoom" className="btn btn-success">Continuar</Button>
                            <Button className="btn btn-light m-1">✔</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Clase 5</Accordion.Header>
                        <Accordion.Body>  
                            <p>Past Perfect</p>
                            <Button href="#zoom" className="btn btn-success">Continuar</Button>
                            <Button className="btn btn-light m-1">✔</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                     
                </Accordion>
            </Col>  
        </Row>
      </div>
  );
}

export default CourseLivePage;