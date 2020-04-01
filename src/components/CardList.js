import React, {Component} from "react";
import CardRenderer from "./CardRenderer"
import DataList from "./DataList";
import Coordinates from "./Coordinates";


 class CardList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.districtInfo !== this.props.districtInfo){this.render()}
    }
    //renderTestField(){return <h3>CardList props: district: {this.props.districtInfo} </h3>}

     render() {
        let districtsToShow=this.props.districtInfo
        console.log(this.props.data)
        var cardNodes= this.props.data.map(function(data) {
            if(districtsToShow==="")
            return(
                <div>
                <CardRenderer other={data.other} takingouttrash={data.takingOutTrash} outdoorcompany={data.outdoorCompany} childcare={data.childCare} groceries={data.groceries} dogout={data.dogOut} district={data.districtName} id = {data.id} headline={data.headline} name={data.name} description={data.description} postcode = {data.postcode} latitude = {data.latitude} longitude = {data.longitude}/>

                </div>
            );
            else{
                if(data.postcode===districtsToShow){
                    return <CardRenderer other={data.other} takingouttrash={data.takingOutTrash} outdoorcompany={data.outdoorCompany} childcare={data.childCare} groceries={data.groceries} dogout={data.dogOut} district={data.districtName} id = {data.id} headline={data.headline} name={data.name} description={data.description} postcode = {data.postcode}/>
                }
            }
        });
        return(
            <div className="cardList">
                {cardNodes}
                </div>
        );}


 }

export default CardList;