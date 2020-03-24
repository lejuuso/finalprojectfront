import React, {Component} from "react";
import {Button, Card, Row} from "react-bootstrap";
import Main from "./Main";




class  CardList extends Component {

    render() {
        var cardNodes= this.props.userdata.map(function(data) {
            return(
                <Card headline={data.headline} name={data.name} description={data.description} postcode = {data.postcode}></Card>

            );
        });
        return(
            <div className="quoteList">
                {cardNodes}
            </div>
        );}}

export default CardList;