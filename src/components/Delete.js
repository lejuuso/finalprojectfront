import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class Delete extends Component{
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
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Poista ilmoitus
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Syötä sähköposti</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input/></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Peruuta
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Poista
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }

}
export default Delete