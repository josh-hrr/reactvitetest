import { useState } from 'react';
 
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>

      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
          {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
          <Toast show={show} onClose={() => toggleShow(false)}>
            <Toast.Header>
              <strong className="mr-auto">React-Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
          </Toast>
          </Col> 
        </Row>
      </Container>

      
    </>
  );
};

const App = () => (
  <Container className="p-3 bg-light border shadow" style={{ height: '80vh' }}> 
      
      <Row>
        <Col>
          <h1 className="header">Testing react-bootstrap</h1>  
        </Col> 
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col> 
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col> 
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col> 
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col> 
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col>  
        <Col>
          <h1 className="border shadow p-5"></h1>  
        </Col> 
      </Row>

      <Row>
        <Col>
          <ExampleToast>
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast> 
        </Col>
      </Row> 
      
      
  </Container>
);

export default App;
