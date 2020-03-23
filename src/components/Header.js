import React from "react"
import {Card, Button} from "react-bootstrap";

function Header() {
    return (
        <div className={"header"}>
            <Card>
                <Card.Body>
                    <Card.Title>Korona-apu</Card.Title>
                    <Card.Text>
                        Naapurit apunasi korona-aikana
                    </Card.Text>
                    <Button variant="primary">Jätä ilmoitus</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Header