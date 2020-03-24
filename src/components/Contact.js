import React, {useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Vastaa ilmoitukseen
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vastaus</Modal.Title>
                </Modal.Header>
                <Modal.Body><textarea cols="50" rows={"5"} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sulje
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lähetä
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



}
export default Contact