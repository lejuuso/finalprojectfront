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
            <CardColumns style={{display: 'responsive'}}>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{this.props.headline}<br/>{this.props.postcode}</Card.Header>
                <Card.Body>
                    <Card.Subtitle>{this.props.name}</Card.Subtitle>
                    <Card.Text>
                     {this.props.description}
                    </Card.Text>
                    <div><Contact id= {this.props.id}/></div> <div><Delete/></div>

                </Card.Body>
            </Card>
            </CardColumns>
            </Container>

        );}}

export default CardRenderer;