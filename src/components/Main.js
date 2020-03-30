import React, {Component} from "react";
import CardList from "./CardList"
import HelperOfferedAdds from "./HelperOfferedAdds";
import HelpWantedAdds from "./HelpWantedAdds";
import Autocomplete from "./Autocomplete";
import LocationsAutocomplete from "./LocationsAutocomplete";



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            districtSearch: ""

        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });}

    whatToRender(){
        if(this.props.helpNeeded){

            return <HelpWantedAdds/>
        }
        else {
            return <HelperOfferedAdds/>

        }

    }

    render() {
        return <div>
            <LocationsAutocomplete input="text" name='districtSearch' value={this.state.districtSearch} onChange={this.handleChange}/>
            <h2>Testikenttä: {this.state.districtSearch}</h2>
            {this.whatToRender()}
        </div>


    }


}
export default Main;