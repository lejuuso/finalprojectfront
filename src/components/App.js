import React from 'react';
import '../App.css';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Post from "./Post";
import Delete from "./Delete";
import Contact from "./Contact";
import Navigation from "./Navigation";
import CardList from "./CardList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
    

  render() {
    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossOrigin="anonymous"
            />

          <Header/>
          <Post />
          <Navigation/>
          <Delete />
          <Contact />
          <Main />
          <Footer/>
        </div>)
  }
}

export default App;
