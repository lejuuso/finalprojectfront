import React, {Component} from "react";
import CardList from "./CardList"
import HelperOfferedAdds from "./HelperOfferedAdds";



class Main extends Component {

    //await
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
            loading: true,
            error: null
        }
    this.renderHelpneeded = this.renderHelpneeded.bind(this)
    }

    componentDidMount() {
        fetch('http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/api/all', {method: 'GET'})
        .then(response => response.json())
        .then(response => this.setState({userdata: response, loading: false}))
        .catch(error => this.setState({ error, loading: false}))
    }

    renderHelpneeded(){


    }

    render() {
        if(this.props.helpNeeded){
            if (this.state.loading) return <div>Loading...</div>;
            if (this.state.error) return <div>Error</div>;
            console.log(this.state.userdata)
            if (this.state.userdata.length >= 1) return <CardList data={this.state.userdata}></CardList>
            return <div>No data was found</div>

        }
        else {
            return <HelperOfferedAdds/>

        }
    }


}
export default Main;