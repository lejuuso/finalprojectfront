import React from "react"
import Logo from "./awacademy.png";
import {Nav} from "react-bootstrap";
import Holler from "./Holler";
import Termsandconditions from "./Termsandconditions";

function Footer() {
    return (
        <div className={"footer"}>
            <p>Yhteistyössä</p>
            <img src={Logo} alt="website logo" width={200} className="logo"/>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Holler />
                </Nav.Item>
                <Nav.Item>
                    <Termsandconditions />
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Footer