import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import Renderer from "./Renderer.css"
import {Badge} from "react-bootstrap"
import Contact from "./Contact";
import Delete from "./Delete";

class CardRenderer extends Component {
    constructor(props, context) {
        super(props, context);

        this.renderBadge = this.renderBadge.bind(this)
    }

    renderBadge(prop, tagName){
        if(prop){
            return <div>{tagName}</div>
        }
    }

    render() {

        return(

            <CardColumns  style={{display: 'responsive'}}>
            <Card border="primary" style={{ width: '25rem' }} >
                <Card.Header>{this.props.name}<br/>{this.props.district}</Card.Header>
                <Card.Body>
                    <Card.Title><b>{this.props.headline}</b></Card.Title>
                    <Card.Text>
                     {this.props.description}
                    </Card.Text>
                    <Badge variant="info">{this.renderBadge(this.props.dogout, "koira")}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.groceries, "kauppa")}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.childcare, "lastenhoito")}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.takingouttrash, "roskat")}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.outdoorcompany, "ulkoilu")}</Badge>{' '}
                    <Badge variant="info">{this.renderBadge(this.props.other, "muu")}</Badge>{' '}
                    <div><Contact id= {this.props.id}/></div>
                    <div><Delete id={this.props.id}/></div>
                </Card.Body>
                </Card>
             </CardColumns>





        );}}

export default CardRenderer;