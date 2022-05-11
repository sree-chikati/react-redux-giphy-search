import React, { Component } from "react";
import { connect } from "react-redux";

// Used class instead of function to use variablse globally
// extending component and connecting to mapState allows me to do so
class Results extends Component {
  // update compnent
  shouldComponentUpdate(newProps, newState) {
    if (
      this.props.giphy.fetched !== newProps.giphy.fetched ||
      this.props.giphy.giphy !== newProps.giphy.giphy
    ) {
      return true;
    } else {
      return false;
    }
  }

  // remders list of mapped data
  renderList = () => {
    if (this.props.giphy.fetched !== false) {
      return this.props.giphy.giphy.map(e => {
        return (
          <li key={e.id} className="list">
            <img src={e.images.original.webp} alt="" />
          </li>
        );
      });
    }
  };

  // returns the rendered data
  render() {
    return (
      <div className="results">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(Results);
