import React from "react"
import {Modal, Button} from "react-bootstrap"

class Termsandconditions extends React.Component {
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
                <Button className={"button"} variant="light" onClick={this.handleShow}>
                    Käyttöehdot
                </Button>

                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Käyttöehdot</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Ilmoituksen jättämisen ehdot: hyväksyn, että
                        nimi-kentässä ilmoittamani nimi julkaistaan sivulla. Sähköposti
                        ei tule näkymään sivuilla julkisesti, mutta sivujen kautta tehdyt yhteydenotot lähetetään
                        tähän osoitteeseen. Yhteystietoja ei julkaista kolmansille osapuolille.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Sulje
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default Termsandconditions