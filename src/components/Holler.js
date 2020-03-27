import React from "react"
import {Modal, Button, Form, Row, Col} from "react-bootstrap"

class Holler extends React.Component {
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
                <Button className={"button"} variant="light" onClick={this.handleShow}>
                    Ota yhteyttä
                </Button>

                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ota meihin yhteyttä</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Korona-apu on AW Academy Finlandin oppilaiden lopputyönä toteutettu sovellus.
                        <p></p>

                        <Form className={"hollerform"}>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Nimi
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="name" placeholder="Nimi"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Sähköposti
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Sähköposti"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalMessage">
                                <Form.Label column sm={2}>
                                    Viesti
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        as="textarea"
                                        type="message"
                                        placeholder="Viesti"/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Sulje
                        </Button>
                        <Button variant="warning" onClick={this.handleClose}>
                            Lähetä
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Holler