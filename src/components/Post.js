import React, {Component, useState} from "react"
import {Modal, Button, Form, Col, Row} from "react-bootstrap"

class Post extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }
    handleClose(){
        this.setState({show:false})
    }

    handleShow (){
        this.setState({show: true})
    }
    render() {
        return (
            <>
                <Button className={"button"} variant="warning" onClick={this.handleShow}>
                    Jätä ilmoitus
                </Button>

                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Jätä ilmoitus</Modal.Title>
                    </Modal.Header>
                    <Form className={"form"}>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Valitse
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Tarvitsen apua"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios7"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Tarjoan apua"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios8"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
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

                        <Form.Group as={Row} controlId="formHorizontalLocation">
                            <Form.Label column sm={2}>
                                Sijainti
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="location" placeholder="Alueesi"/>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Mitä apua tarvitsen tai tarjoan?
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Ruokakaupassa käynti"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Lastenhoito"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Koiran ulkoilutus"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Ulkoiluseuraa"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios4"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Roskien vienti"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios5"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Muu"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios6"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} controlId="formHorizontalMessage">
                            <Form.Label column sm={2}>
                                Viesti
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="message"
                                    placeholder="Kuvaus"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{span: 10, offset: 2}}>
                                <Form.Check label="Hyväksyn ehdot*"/>
                            </Col>
                        </Form.Group>
                    </Form>

                    <Modal.Body>* Ilmoituksen jättämisen ehdot: hyväksyn, että
                        nimi-kentässä ilmoittamani nimi julkaistaan sivulla. Sähköposti
                        ei tule näkymään sivuilla julkisesti, mutta sivujen kautta tehdyt yhteydenotot lähetetään
                        tähän osoitteeseen. Yhteystietoja ei julkaista kolmansille osapuolille.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Peruuta
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
export default Post