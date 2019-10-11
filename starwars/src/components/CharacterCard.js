import React from "react";
import {Card, CardText, CardTitle, CardSubtitle, Col, Row, Container} from "reactstrap";

const CharacterCard = props => {
    return (
        <Container>
        <Row>
        <Col xs="6" key={props.id}>
        <Card className="Card">
            <CardTitle className="title">Name: {props.name}</CardTitle>
            <CardSubtitle className="subtitle">Born: {props.birth_year}</CardSubtitle>
            <CardText className="text">Skin: {props.skin_color}</CardText>
            <CardText className="text">Weight: {props.mass}</CardText>
            <CardText className="text">Height: {props.height}</CardText>
        </Card>
        </Col>
        </Row>
        </Container>
    );
};
export default CharacterCard;