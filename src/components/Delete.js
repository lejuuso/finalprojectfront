import React, {useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Delete() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Poista ilmoitus
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Syötä sähköposti</Modal.Title>
                </Modal.Header>
                <Modal.Body><input/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Peruuta
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Poista
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );


}
export default Delete