import React, {Component} from "react";



class DataList extends Component {



    render() {

        return(
            <div className="results">
                <h2>{this.props.headline}</h2>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>

            </div>


        );}
}
export default DataList;
