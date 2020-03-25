import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import Renderer from "./Renderer.css"
import {Container} from "react-bootstrap";
import {Badge} from "react-bootstrap"
import Contact from "./Contact";
import Delete from "./Delete";

class CardRenderer extends Component {


    render() {

        return(
            <Container>
            <CardColumns style={{display: 'flex', flexDirection: 'row'}}>
            <Card className = "card-column" style={{flex: 2}}>

                <Card.Body>
                    <Card.Title><b>{this.props.headline}</b></Card.Title>
                    <Card.Subtitle><b>{this.props.name}</b></Card.Subtitle>
                    <Card.Text>
                    <Row> {this.props.postcode} </Row>
                    <Row> {this.props.description} </Row>
                    </Card.Text>
                    <Badge variant="secondary">lemmikki</Badge>{' '}
                    <Badge variant="secondary">kauppa</Badge>
                    <div><Contact/></div>
                    <div><Delete/></div>


                </Card.Body>
            </Card>
            </CardColumns>
            </Container>

        );}}

export default CardRenderer;