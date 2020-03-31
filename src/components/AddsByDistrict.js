import React, {Component} from "react";
import CardList from "./CardList"

class AddsByDistrict extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
            loading: true,
            error: null,
            districtData: this.props.district,
            url:"",
            helpWanted: this.props.wanted
        }

    }

    getData(){
        let urlEnd=""
        if(this.props.helpNeeded===true){urlEnd="api/all"}
        if(this.props.helpNeeded===false){urlEnd="helper/api/help"}
        let url = ('http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/' +urlEnd)
        this.setState({url:url})
        console.log(url)
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({userdata: response, loading: false}))
            .catch(error => this.setState({ error, loading: false}))
    }

    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.helpNeeded !== this.props.helpNeeded){this.getData()}

    }

    viewHelpNeeded(){
        if(this.props.helpNeeded){return "true"}
        else{return "false"}
    }
    renderTestField(){return <h3>AddsByD props: helpNeeded: {this.viewHelpNeeded()} url: {this.state.url} </h3>}

    render() {
        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.error) return <div>Error</div>;
        console.log(this.state.userdata)
        if (this.state.userdata.length >= 1) return <div><CardList districtInfo={this.props.district} helpNeeded={this.props.helpNeeded} data={this.state.userdata}></CardList></div>
        return <div>No data was found</div>
    }


}
export default AddsByDistrict