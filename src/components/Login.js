import React, { useState } from "react";
import { Container, Row, Col , Card, Form, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function LoginForm () {

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
                            <h4>FORM LOGIN</h4>
                        </Card.Header>
                        <Card.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                                     <Button variant="link">Create new account?</Button>
                                </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
           </Row>
       </Container>
    )
}

export default LoginForm;