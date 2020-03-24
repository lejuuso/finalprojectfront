import React, {Component} from "react";
import {CardColumns} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";


const url= 'http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com'
class Main extends Component {

    await
    constructor(props) {
        super(props);
        this.state = {
        userdata: 'default'
        }
    }
   componentDidMount() {

         fetch('http://finalprojectapplication-env.eba-bixfaf3m.eu-west-1.elasticbeanstalk.com/api/all', {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({userdata: response}));
    }

        render() {

            return (
                <Container>





                </Container>

            )
            }
            }

    export default Main