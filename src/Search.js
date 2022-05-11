import React, { Component } from "react";
import { connect } from "react-redux";

import {
  changeUserInput,
  changeInitialInput,
} from "./actions";

class Search extends Component {
  trimSpaces = value => {
    if (value.trim() === "") {
      return false;
    } else {
      value = value.trim();
      return true;
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!this.trimSpaces(e.target.searchBox.value)) return false;

    if (this.props.giphy.userInput !== e.target.searchBox.value) {
      this.props.dispatch(changeUserInput(e.target.searchBox.value));
      this.props.dispatch(changeInitialInput(true));
    }
  };

  render() {
    return (
      <div className="add-input">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            id="thing"
            name="searchBox"
            required
            placeholder="Search a Gif Today!"
          />
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
