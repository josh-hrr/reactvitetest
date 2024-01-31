import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Header from "../header/Header";
import backgroundImage from '../../assets/img/wave.png';    

function CourseLibrary () {
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
            <Col md={6} xs={12} className="p-5 d-lg-flex flex-column justify-content-center align-items-end mt-4" style={{height: '100%'}}>
                <div className="m-auto">   
                    <h1>Explora nuestros cursos disponibles</h1> 
                    <p>Tienes la oportunidad de solicitar accesso a uno o mas cursos con tu suscripción</p>
                </div> 
            </Col>  
            <Col md={12} xs={12} className="m-5 p-5 d-lg-flex justify-content-center align-items-center">
                <button className="m-1 btn btn-success">Ver Cursos Disponibles</button> 
            </Col> 
        </Row>    

        <Row className="m-1">
            <Col className="border border-black p-5 m-1">
                <h1>Curso 1</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 2</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 3</h1>
            </Col>
        </Row>

        <Row className="m-1">
            <Col className="border border-black p-5 m-1" >
                <h1>Curso 4</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 5</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 6</h1>
            </Col>
        </Row>

        <Row className="m-1">
            <Col className="border border-black p-5 m-1">
                <h1>Curso 4</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 5</h1>
            </Col>
            <Col className="border border-black p-5 m-1">
                <h1>Curso 6</h1>
            </Col>
        </Row>

      </div>
  );
}

export default CourseLibrary;