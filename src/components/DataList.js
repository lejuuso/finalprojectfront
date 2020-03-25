import React, {Component} from "react";




class DataList extends Component {



    render() {

        return(
            <div className="results" >
                <h3>{this.props.headline}</h3>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>

            </div>


        );}
}
export default DataList;
