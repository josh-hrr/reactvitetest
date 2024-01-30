import logo from '../../assets/img/grad.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Header from '../header/Header';
import backgroundImage from '../../assets/img/wave.png'; 
import backgroundImage_V2 from '../../assets/img/wave_V2.png';
import Carousel from 'react-bootstrap/Carousel'; 
import languagesImage from '../../assets/img/languages.png';
import techImage from '../../assets/img/tech_V2.png';
import healthImage from '../../assets/img/health.png';
import { useEffect, useState } from 'react';


function Home () { 
    const [text, setText] = useState('doing'); 

    useEffect(() => {
        const texts = ['doing', 'having fun', 'playing'];
        let index = 0;
        const intervalId = setInterval(() => {
          index = (index + 1) % texts.length;
          setText(texts[index]);
        }, 2000); // Change text every 2 seconds
    
        return () => clearInterval(intervalId); // Clean up on component unmount
      }, []); 

    return (
        <div className='p-0 m-0' >
        <Row className='p-0 m-0'>
            <Col className="p-0 mb-5">
                 <Header />
            </Col>
        </Row>
        <Row className="text-white d-flex justify-content-center align-items-center pt-5 pt-md-0 m-0" 
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80%', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#81B622',  
        }}>
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                <h1 className="m-0 fw-bold">Learn by <span>{text}</span></h1>  
                <h4 className="mb-4">Your Digital Learning Companion</h4> 
                <div className="">
                    <button className="btn btn-primary m-1">Comenzar ahora</button>
                    <button className="btn btn-success m-1">WhatsApp</button>
                </div> 
            </Col> 
            <Col md={6} xs={12} className="p-0 d-lg-flex flex-column justify-content-center align-items-start">
                <img src={logo} alt="company logo representing a study plan"  style={{width: '70%'}}/>
            </Col>  
        </Row> 
        <Row className="text-secondary d-flex justify-content-center align-items-center pt-5 pt-md-0 m-0" 
        style={{     
            height: '50vh',  
            backgroundColor: 'white', 
        }}>
            <Col md={12} xs={12} className="p-0 d-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                <h1 className="m-0 fw-bold">Creamos oportunidades de aprendizaje para todos</h1>  
                <h4 className="m-4">¡Comprometidos con tu aprendizaje digital! </h4> 
            </Col>   
        </Row> 
        <Row className="d-flex justify-content-center align-items-center pt-5 pt-md-0 m-0" 
        style={{     
            backgroundImage: `url(${backgroundImage_V2})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',   
            color: 'white',
        }}>
            <Col md={12} xs={12} className="mt-5 p-0 d-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                 
                <h2>Clases en vivo</h2>    
                <Carousel controls={false}>
                <Carousel.Item > 
                    <img src={languagesImage} style={{height: "40vh"}} alt="" />
                    <Carousel.Caption>
                    <h3>Idiomas</h3>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                <img src={techImage} style={{height: "40vh"}} alt="" /> 
                    <Carousel.Caption>
                    <h3 >Tecnología</h3>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                <img src={healthImage} style={{height: "40vh"}} alt="" /> 
                    <Carousel.Caption>
                    <h3>Salud y Recreación</h3> 
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
              </Col>    
        </Row> 
      </div>
    );
}

export default Home;