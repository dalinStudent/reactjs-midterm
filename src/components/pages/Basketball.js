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
                        <Card.Img variant="top" src="https://i.cbc.ca/1.6087523.1625166375!/fileImage/httpImage/nurse-kia-070121.jpg" />
                        <Card.Body>
                            <p>
                                Basketball is an enjoyable sport that suits many skill levels and ages, owing to its worldwide popularity.
                                A standard basketball team has five players per side. You can also play two-on-two or three-on-three games, or even on your own. With indoor courts, you can play basketball year-round.
                                The main objective of the game is to score points by shooting the ball through the hoop. You use defensive strategies to prevent the other team from scoring.
                                You can play basketball with a playful or competitive spirit. Either way, it’s a fantastic way to gain strength, coordination, and muscular endurance. Plus, you’ll have the opportunity to be a part of a team and a larger community.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/05V6wAvkyBVuOOFigntklWa_vpc=/0x0:4416x2944/1200x800/filters:focal(2029x634:2735x1340)/cdn.vox-cdn.com/uploads/chorus_image/image/70563446/1238341248.0.jpg" />
                        <Card.Body>
                            <p>
                                Strengthens muscular endurance: 
                                Playing basketball requires agility, strength, and stamina. You must quickly move and change directions using high-intensity, short-duration muscle contractions.
                                You’ll also need muscular endurance, which is the ability of muscles to repeatedly apply force for an extended period. You can increase your muscular endurance by playing basketball and doing exercises to build lower and upper body strength.
                                You can also focus on strengthening your core and back muscles. This will have a positive effect on your stamina, energy, levels, and performance.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://static01.nyt.com/images/2021/08/05/sports/05olympics-briefing-mensbasketball1/merlin_192726429_80ab8b62-bd15-40d5-9881-df5e50e22328-superJumbo.jpg" />
                        <Card.Body>
                            <p>
                                Develops self-confidence
                                You may develop self-confidence as you find your voice and learn more about who you are in a new situation. As a team, members can encourage, motivate, and support each other. They can also point out areas that need improvement, which can lead to positive growth.
                                Success on the court can extend into other areas of your life, and you may find that you have a newfound belief in yourself and your abilities.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Soccer;