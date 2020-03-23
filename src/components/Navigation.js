import React from "react"
import {Nav} from "react-bootstrap";

function Navigation() {
    return (
        <div className={"navigation"}>
            <Nav fill variant="tabs" defaultActiveKey="helpneeded">
                <Nav.Item>
                    <Nav.Link eventKey="helpneeded">Apua tarvitaan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="helpoffered">Apua tarjotaan</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Navigation