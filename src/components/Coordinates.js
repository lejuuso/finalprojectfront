import React, {Component} from "react"
import CardList from "./CardList";
import HelpMap from "./HelpMap";


export class Coordinates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: "",
            longitude:""
        }
    }


        render() {
        console.log(this.props.latitude)
            return (
                <HelpMap latitude={this.props.latitude} longitude ={this.props.longitude} />


            );
        }

}

export default Coordinates;