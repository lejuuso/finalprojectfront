import React, {Component} from "react";
import CardRenderer from "./CardRenderer"
import DataList from "./DataList";
import Coordinates from "./Coordinates";



 class CardList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data)
        var cardNodes= this.props.data.map(function(data) {
            return(
                <div>
                <CardRenderer other={data.other} takingouttrash={data.takingOutTrash} outdoorcompany={data.outdoorCompany} childcare={data.childCare} groceries={data.groceries} dogout={data.dogOut} district={data.districtName} id = {data.id} headline={data.headline} name={data.name} description={data.description} postcode = {data.postcode} latitude = {data.latitude} longitude = {data.longitude}/>

                </div>
            );
        });
        return(
            <div className="cardList">
                {cardNodes} 
                </div>
        );}


 }

export default CardList;