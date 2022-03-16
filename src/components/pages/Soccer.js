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
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=20&m=1272269793&s=170667a&w=0&h=xie_NP8GQ6LFpiA0WLqoVUF7y2wyebpCJDQ4wJwPy40=" />
                        <Card.Body>
                            <p>
                               A game played on a field between two teams of 11 players each
                                with the object to propel a round ball into the opponent's goal by kicking or by
                                hitting it with any part of the body except the hands and arms.
                                 — called also association football.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://coastsport.com.au/wp-content/uploads/2016/08/CASLs15CoachesMeeting.jpg" />
                        <Card.Body>
                            <p>
                                There are many other benefits from playing a team sport like soccer.
                                helps to increase skills in concentration, persistence and self-discipline, 
                                is a great way to meet people and exercise with friends, 
                                can provide an opportunity to increase your confidence and self-esteem, and help to reduce anxiety,
                                requires very little equipment so it can be played in the backyard or park,
                                is relatively easy to learn, so beginners can easily join in the fun and play basic soccer for recreation,
                                is an international sport.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 shadow-sm bg-white rounded">
                        <Card.Img variant="top" src="https://compote.slate.com/images/3ee9bac3-fdf2-49db-baa8-660176344105.jpeg?width=1200&rect=4392x2928&offset=0x0" />
                        <Card.Body>
                            <p>
                                Soccer is very popular in Australia and is played both recreationally and competitively. 
                                Playing a basic game of soccer doesn’t require a large number of people or a field. It can be as simple as having a kick with friends.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Soccer;