import React, {Component} from "react";
import {Card, CardLink} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import Renderer from "./Renderer.css"
import {Container} from "react-bootstrap";
import {Badge} from "react-bootstrap"
import Contact from "./Contact";
import Delete from "./Delete";

class CardRenderer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {dogOut: ""}

        this.renderBadge = this.renderBadge.bind(this)
    }

    renderBadge(prop){
        if(prop === true){
            if(prop === this.props.dogout) {
                return <div>koira</div>
            }
            if(prop === this.props.groceries){
                return <div>kauppa</div>
            }
            if(prop === this.props.childcare){
                return <div>lastenhoito</div>
            }
        }
    }

    dogOut(){
       // if(this.props.dogout=== true){
            this.setState({dogOut: "koira"})
        //}
    }


    render() {

        return(
            <Container>
            <CardColumns style={{display: 'responsive'}}>
            <Card border="primary" style={{ width: '25rem' }} >
                <Card.Header>{this.props.name}<br/>{this.props.district}</Card.Header>
                <Card.Body>

                    <Card.Title><b>{this.props.headline}</b></Card.Title>
                    <Card.Subtitle><b>{this.props.name}</b></Card.Subtitle>
                    <Card.Text>
                    <Row> {this.props.district}</Row>
                    <Row> {this.props.postcode} </Row>
                    <Row> {this.props.description} </Row>
                    </Card.Text>
                    <Badge variant="info">{this.renderBadge(this.props.dogout)}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.groceries)}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.childcare)}</Badge>{' '}
                    <Card.Subtitle>{this.props.headline}</Card.Subtitle>
                    <Card.Text>{this.props.description}
                    </Card.Text>
                    <div><Contact id= {this.props.id}/></div>
                    <div><Delete id={this.props.id}/></div>
                </Card.Body>
            </Card>
            </CardColumns>
            </Container>

        );}}

export default CardRenderer;