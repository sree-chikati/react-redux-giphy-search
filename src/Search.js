import React, { Component } from "react";
import { connect } from "react-redux";

import { changeUserInput, changeInitialInput} from "./actions";

// Used class instead of function to use variablse globally
// extending component and connecting to mapState allows me to do so
class Search extends Component {
  inputSpacing = value => {
    if (value.trim() === "") {
      return false;
    } else {
      value = value.trim();
      return true;
    }
  };

  // onSubmit was getting too long so moved it outside
  onFormSubmit = e => {
    e.preventDefault();
    if (!this.inputSpacing(e.target.search.value)) return false;

    if (this.props.giphy.userInput !== e.target.search.value) {
      this.props.dispatch(changeUserInput(e.target.search.value));
      this.props.dispatch(changeInitialInput(true));
    }
  };

  render() {
    return (
      <div className="add-input">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="search" required placeholder="Search a Gif Today!" />
          <button className="submit">submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(Search);
