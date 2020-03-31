import React, {Component} from "react"
import {Nav} from "react-bootstrap";
import Main from "./Main";

class Navigation extends Component{
    constructor(props) {
        super(props);
        this.state= {
            helpWanted: true,
            districtSearch: "",
            districtInfo: "",
            eventTarget:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        var value = target.value
        var helpWanted = true
        if(name==="helpOffered"){
            helpWanted=false
        }
        if(name==="helpNeeded" || name==="helpOffered" )
        this.setState({
            helpWanted: helpWanted
        });
        else {
            this.setState({
                districtSearch: value
            })
        }
        this.setState({eventTarget:name})
    }


    handleClick(){
        this.setState({districtInfo: this.state.districtSearch})
    }
    checkHelpNeed(){
        if(this.state.helpWanted){return "true"}
        else{return "false"}
    }

    onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleClick();
        }
    }

    renderTestField(){return                 <h2>Testikenttä: <br/>
        lähetettävä tektsi: {this.state.districtInfo} <br/>
        tekstikenttä: {this.state.districtSearch} <br/>
        Event target: {this.state.eventTarget} HelpNeeded: {this.checkHelpNeed()}</h2>}



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
                <div>Hae alueen postinumerolla: <input input='text' name='districtSearch' onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                    <button name='hae' onClick={this.handleClick}>Hae</button></div>

                <Main districtInfo={this.state.districtInfo} helpNeeded={this.state.helpWanted}/>
            </div>
        )
    }
}
export default Navigation

