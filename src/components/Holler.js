import React from "react"
import {Modal, Button, Form, Row, Col} from "react-bootstrap"
import SaanaRailo from "./Saana Railo.png";
import JuusoLeppanen from "./Juuso Leppänen.png"
import InkaKekalainen from "./Inka Kekäläinen (1) (2).png"
import RobinBlomberg from "./Robin Blomberg.png"

class Holler extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

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
    handleSubmit(){
        this.addDistrictName().then(() => this.addNewAd()).then(() => this.handleClose());
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
                        <img src={SaanaRailo} alt="Saana Railo" width={100} className="SaanaRailo"/>
                        <img src={JuusoLeppanen} alt="Juuso Leppanen" width={100} className="JuusoLeppanen"/>
                        <img src={InkaKekalainen} alt="Inka Kekalainen" width={100} className="InkaKekalainen"/>
                        <img src={RobinBlomberg} alt="Robin Blomberg" width={100} className="RobinBlomberg"/>
                        <p></p>
                        <p><i>Saana Railo, Juuso Leppänen, Inka Kekäläinen ja Robin Blomberg</i></p>


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
                        <Button variant="warning" onClick={this.handleSubmit}>
                            Lähetä
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Holler