import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const { likeStatus } = this.props;
    // console.log(this.props.likeStatus);
    let quoteStyle = { color: "black" };
    if (likeStatus === "liked") {
      quoteStyle = { color: "green", fontWeight: "bold" };
    } else if (likeStatus === "disliked") {
      quoteStyle = { color: "red", fontWeight: "bold" };
    }
    // console.log(quoteStyle);

    return (
      <main>
        <div>
          <p style={quoteStyle}>{this.props.quote}</p>
          <p>By: {this.props.author}</p>
        </div>
        <div>
          <button onClick={this.props.handleLike}>:)</button>
          <button onClick={this.props.handleDislike}>:(</button>
        </div>
      </main>
    );
  }
}
