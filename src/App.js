import './App.css';
import React, { Component } from "react";
import Results from "./Results";
import Search from "./Search";
import { connect } from "react-redux";
import { fetchGiphy } from "./actions";

// Used class instead of function to use variablse globally
// extending component and connecting to mapState allows me to do so
class App extends Component {
  render() {
    // fetch data according to user input and initial input
    if (this.props.giphy.initialInput) {
      this.props.dispatch(fetchGiphy(this.props.giphy.userInput));
    }
    return (
      <div className="App">
     
        {/* header */}
        <div className="header">
          <h1 className="h1">Giphy Search</h1>
          <Search />
        </div>

        {/* results */}
        <Results />

        {/* Footer */}
        <footer>
          <h3>Giphy Search by <span>Sree Chikati</span></h3>
        </footer>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(App);
