import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
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
