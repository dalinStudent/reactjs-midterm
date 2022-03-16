import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
function Soccer () {
    return (
        <Container fluid>
             <Header></Header>
            <Row  className="mt-5">
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://image.discovery.indazn.com/eu/v2/us/image?id=126715973511_image-header_pRow_1637379844000&quality=70" />
                        <Card.Body>
                            <p>
                                Improved Cardiovascular Health: 
                                We’re constantly being told by doctors, fitness experts and pretty much every authority on health, that taking care of our hearts is essential to protect ourselves from heart diseases and common illnesses and overall stay healthy. 
                                To keep our hearts healthy, we need to be doing cardiovascular (or cardio) exercise regularly. It’s recommended by the NHS that adults should do a minimum of 150 minutes of moderate aerobic exercise a week. 
                                Boxing is a great source of cardio exercise, it gets your heart pumping and your lungs working harder so you burn more calories and reach a fat-burning threshold. 
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://www.wbcme.co.uk/wp-content/uploads/2020/09/wbcme-benefits-of-boxing-training-woman-sparring.jpg" />
                        <Card.Body>
                            <p>
                                The mental benefits of boxing training:
                                The effects of boxing training go much further than just the physical. Regularly exercising and improving your overall fitness can also have huge benefits for your mental wellbeing. 
                                We’ve already published an in-depth guide to the mental benefits of boxing, but we’ve included a few of the highlights below too. 
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://downtown-fortworth.tapoutfitness.com/wp-content/uploads/sites/51/2020/04/Boxing-Fort-Worth-600x356.jpeg" />
                        <Card.Body>
                            <p>
                                Improved Confidence: 
                                One of the greatest benefits of boxing training is that you can begin to feel more confident in yourself. As you progress through your training and commit to regularly working out, you’ll see your body adapt and your mindset shift. 
                                Getting stronger, seeing more definition in your muscles, being able to lift heavier weights and punch harder and generally benign healthier can all have an incredibly positive effect on your self-confidence.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Soccer;