import React from 'react';
import '../App.css';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
    componentDidMount() {
        fetch('http://localhost:8080/api/meals')
            .then(response => response.json())
            .then((response) => this.setState(
                {meals: response}))
    }

  render() {
    return (
        <div className="App">

          <Header/>
          <Main/>
          <Footer/>
        </div>)
  }
}

export default App;
