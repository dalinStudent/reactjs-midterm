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
                        <Card.Img variant="top" src="https://northernvirginiamag.com/wp-content/uploads/2021/04/outdooryoga.jpg" />
                        <Card.Body>
                            <p>
                                Yoga improves mental health
                                Major depressive disorder (MDD) is thought to be one of the most common mental health disorders in the world.
                                A 2017 meta-analysis of 23 interventions looking at the effects of yoga-based treatments on depressive symptoms overwhelmingly concluded that yoga can now be considered an effective alternative treatment for MDD (8Trusted Source).
                                Both movement-based yoga therapies and breathing-based practices have been shown to significantly improve depressive symptoms (9Trusted Source). 
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://urphotography.net/wp-content/uploads/2021/07/Yoga-043-scaled.jpg" />
                        <Card.Body>
                            <p>
                                Yoga helps with stress relief:
                                The American Psychological Association recently shared that 84% of American adults are feeling the impact of prolonged stress (5).
                                So, it makes sense that the second most cited reason people selected as to why they do yoga was to relieve stress. Thankfully, the science supports that yoga, and especially asana, is excellent at reducing stress (6Trusted Source).
                                But remember — the physical practice is just one aspect of yoga. Meditation, breath work, and auditory rituals, like chanting and sound baths, have all also been shown to significantly lessen tension and relieve stress (7Trusted Source).
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/24/88/05/360_F_224880594_mIBlKVokTAmXgGM0WCC9SHSSe9ufXJs9.jpg" />
                        <Card.Body>
                            <p>
                                Yoga may improve self-esteem
                                Body image and self-esteem are often particularly challenging for adolescents and young adults. The good news is that several recent studies show positive results when using yoga for improving self-esteem and perceived body image in these populations (33Trusted Source, 34Trusted Source).
                                There has also been promising evidence that yoga could help with the accompanying symptoms of obsession, anxiety, and depression in patients with anorexia nervosa (35Trusted Source).
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Soccer;