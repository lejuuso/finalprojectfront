import React, {Component} from "react"
import CardList from "./CardList";
import HelpMap from "./HelpMap";
import {Marker} from 'google-maps-react';

export class Coordinates extends Component {

    constructor(props) {
        super(props);
    }

    getKoordinates(){
        let url = ("http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/api/all")
        return fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => this.setState({latitude: data.latitude, longitude: data.longitude}))
            //.then(response => this.setState({district: response, loading: false}))
            .catch(error => this.setState({ error, loading: false}))


    }



        render() {


                this.getKoordinates()
                return <HelpMap latitude={this.state.latitude} longitude = {this.state.longitude}
                />

            }


}

export default Coordinates;