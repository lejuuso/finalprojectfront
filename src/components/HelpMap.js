import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, {Component} from "react"
import { Marker } from 'google-maps-react';
import {Coordinates} from "./Coordinates.js";

export class HelpMap extends Component {
    constructor(props) {
        super(props);

        this.state= {
                latitude: "",
                longitude: ""

        }



    }


    render() {
        console.log("löytyykö" + this.state.latitude + this.state.longitude)
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 60.166, lng: 24.943}}
            >
            <Marker position={this.state.coordinates}/>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCGnx9IsxU7DLpyGxPlvjjgNQiq4AzU2Uk'
})(HelpMap);

const mapStyles = {
    width: '60%',
    height: '60%',
};