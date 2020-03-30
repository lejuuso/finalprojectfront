import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";


class Contact extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleCheck =this.handleCheck.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

        this.state = {
            show: false,
            email: "",
            message: ""
        };
    }

    handleClose() {
        this.setState({show: false})
    }

    handleShow() {
        this.setState({show: true})
    }

    handleSubmit(){
        this.addNewAd().then(() => this.handleClose());
    }

    addNewAd(){

        const url = 'https://qx4p2dnjdf.execute-api.eu-west-1.amazonaws.com/test/contact'
        let adAsJson = JSON.stringify({
            email: this.state.email,
            message: this.state.message,
            id: this.props.id

        })
        console.log("Add data as json: " +adAsJson)
        return fetch(url,  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: adAsJson
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleCheck(event){
        const target = event.target;
        const value = "true"
        //"true" target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {

        return (
            <>
                <Button className="answerbutton" variant="warning" size="sm" onClick={this.handleShow}>
                    Vastaa ilmoitukseen
                </Button>

                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vastaus</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><textarea cols="50" rows={"1"} type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Sähköposti"/></Modal.Body>
                    <Modal.Body><textarea cols="50" rows={"5"} type="message" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Kirjoita viestisi"/></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Sulje
                        </Button>
                        <Button onClick={this.handleSubmit}>
                            Lähetä
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}




export default Contact