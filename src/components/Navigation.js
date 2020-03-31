import React, {Component} from "react"
import {Nav} from "react-bootstrap";
import Main from "./Main";

class Navigation extends Component{
    constructor(props) {
        super(props);
        this.state= {
            helpWanted: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        var value = true
        if(name==="helpOffered"){
            value=false
        }

        this.setState({
            helpWanted: value
        });
    }

    render() {
        return (
            <div className={"navigation"}>
                <Nav fill variant="tabs" defaultActiveKey="helpneeded">
                    <Nav.Item>
                        <Nav.Link name="helpNeeded" eventKey="helpneeded" onClick={this.handleChange}>Apua tarvitaan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link name="helpOffered" eventKey="helpoffered" onClick={this.handleChange} >Apua tarjotaan</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Main helpNeeded={this.state.helpWanted}/>
            </div>
        )
    }
}
export default Navigation