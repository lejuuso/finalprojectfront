import React, {Component, useState} from "react"
import {Modal, Button} from "react-bootstrap"

function Post() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={"button"} variant="primary" onClick={handleShow}>
                Jätä ilmoitus
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Jätä ilmoitus</Modal.Title>
                </Modal.Header>
                <Modal.Body>Jätä ilmoitus avun tarpeesta tai tarjoamisesta.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Peruuta
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lähetä
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Post