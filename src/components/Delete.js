import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Delete extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

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

    handleDelete(){
        this.delete().then(()=>this.handleClose())
    }

    async delete(){
        const res = await fetch('http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/api', {
            method: 'DELETE',
        });
        const res_1 = await res.text();
        return console.log(res_1);
    }

    render() {
        return (
            <div>
                <Button className="deletebutton" variant="light" size="sm" onClick={this.handleShow}>
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
                        <Button variant="primary" onClick={this.handleDelete}>
                            Poista
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }

}
export default Delete