import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Contact extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({show: false})
    }

    handleShow() {
        this.setState({show: true})
    }

    render() {

        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Vastaa ilmoitukseen
                </Button>

                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vastaus</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><textarea cols="50" rows={"5"}/></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Sulje
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Lähetä
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}




export default Contact