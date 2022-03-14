import React, { useState } from "react";
import { Container, Row, Col , Card, Form, Button} from 'react-bootstrap';
// import { Routes,Route, BrowserRouter } from 'react-router-dom';
// import { Home} from './Home';
// import { Login } from './Login';

function RegisterForm () {

    const [validated, setValidated] = useState(false);
 
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
        // this.props.history.push('/home');
    }

    setValidated(true);
  };

    return (
       <Container className="mt-5">
           <Row>
                <Col></Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Header className="text-center">
                            <h4>FORM REGISTER</h4>
                        </Card.Header>
                        <Card.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="validationFirstName">
                                        <Form.Label>First Name: </Form.Label>
                                        <Form.Control required type="text" placeholder="Enter your First Name"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationLastName">
                                        <Form.Label>Last Name: </Form.Label>
                                        <Form.Control required type="text" placeholder="Enter your First Name"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationEmail">
                                        <Form.Label>Email Address: </Form.Label>
                                        <Form.Control required type="email" placeholder="Enter your Email Address"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="validationPassword">
                                        <Form.Label>Password: </Form.Label>
                                        <Form.Control required type="password" placeholder="Enter your Password"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>        
                                </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
           </Row>
       </Container>
    )
}

export default RegisterForm;