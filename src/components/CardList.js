import React, {Component} from "react";
import CardRenderer from "./CardRenderer"
import DataList from "./DataList";


 class CardList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data)
        var cardNodes= this.props.data.map(function(data) {
            return(
                <CardRenderer headline={data.headline} name={data.name} description={data.description} postcode = {data.postcode}></CardRenderer>
            );
        });
        return(
            <div className="cardList">
                {cardNodes} 
                </div>
        );}}

export default CardList;