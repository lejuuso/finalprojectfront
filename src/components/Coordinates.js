import React, {Component} from "react"
import CardList from "./CardList";
import HelpMap from "./HelpMap";
import {Marker} from 'google-maps-react';

export class Coordinates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coordinatedata: [],
            markers: []
        }
    }

    componentDidMount() {
        this.getKoordinates()
    }

    getKoordinates(){
        let url = ("http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/api/all")
         fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => this.setState({coordinatedata: data}, this.createMarkers)/*{return this.ok(data)}*/)
            //.then(response => this.setState({district: response, loading: false}))
            .catch(error => console.log( error))
    }

    createMarkers=() =>{
        var markers = this.state.coordinatedata.map(function(data,i) {
            return <Marker key={i} position={{
                lat: data.latitude,
                lng: data.longitude
            }}
            />
        })
        console.log(markers)
        this.setState({markers: markers})
    }

    render() {
        return (
            <div>
                {this.state.coordinatedata.length >=1 && <HelpMap coordinates={this.state.markers}/>}
            </div>)

/*
            this.getKoordinates()
                .then(data => this.setState({coordinatedata: data}))
                .catch(error => this.setState({error, loading: true}))*/
            /*var markers = this.state.coordinatedata.map(function(data,i) {
                return <Marker key={i} position={{
                    lat: data.latitude,
                    lng: data.longitude
                }}
                /
            })*/



           /* if (markers.length>=1){
                this.setState({loading: false})
                return <HelpMap coordinates={markers}/>

            }
            if (this.state.loading === true) {
                {console.log(markers)}
                return <p>loading</p>
            }*/
        }


}

export default Coordinates;