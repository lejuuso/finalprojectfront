import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, {Component} from "react"
import { Marker } from 'google-maps-react';
import {Coordinates} from "./Coordinates.js";

export class HelpMap extends Component {
    constructor(props) {
        super(props);
    }

        displayMarkers = () => {

                return <Marker position={{
                    lat: this.props.latitude,
                    lng: this.props.longitude
                }}
                />
            }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 60.166, lng: 24.943}}
            >
                {this.props.coordinates}
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
    marginLeft: '20%'
};