import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <p>{this.props.quote}</p>
        <p>By: {this.props.author}</p>
      </div>
    );
  }
}
