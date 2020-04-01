import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import Renderer from "./Renderer.css"
import {Badge} from "react-bootstrap"
import Contact from "./Contact";
import Delete from "./Delete";
import Coordinates from "./Coordinates";

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
        console.log(this.props)

        return(
            <div>
            <CardColumns  style={{display: 'responsive'}}>
            <Card border="warning" style={{ width: '25rem' }} >
                <Card.Header>{this.props.name}<br/><b>{this.props.district}</b></Card.Header>
                <Card.Body>
                    <Card.Title><b>{this.props.headline}</b></Card.Title>
                    <Card.Text>
                     {this.props.description}
                    </Card.Text>
                    <Badge variant="dark">{this.renderBadge(this.props.dogout, "Koiran ulkoilutus")}</Badge>{' '}
                    <Badge variant="dark">{this.renderBadge(this.props.groceries, "Kaupassakäynti")}</Badge>{' '}
                    <Badge variant="dark">{this.renderBadge(this.props.childcare, "Lastenhoito")}</Badge>{' '}
                    <Badge variant="dark">{this.renderBadge(this.props.takingouttrash, "Roskien vienti")}</Badge>{' '}
                    <Badge variant="dark">{this.renderBadge(this.props.outdoorcompany, "Ulkoiluseura")}</Badge>{' '}
                    <Badge variant="dark">{this.renderBadge(this.props.other, "Muu")}</Badge>{' '}
                    <div><Contact id= {this.props.id}/></div>
                    <div><Delete id={this.props.id}/></div>
                </Card.Body>
                </Card>
            </CardColumns>

            <Coordinates latitude={this.props.latitude} longitude={this.props.longitude}/>
            </div>


        );}}

export default CardRenderer;