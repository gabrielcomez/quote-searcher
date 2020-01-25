import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    likeStatus: "unclicked"
  };

  handleLike = () => {
    this.setState({
      likeStatus: "liked"
    });
  };
  handleDislike = () => {
    this.setState({
      likeStatus: "disliked"
    });
  };

  render() {
    const { likeStatus } = this.state;
    console.log(likeStatus);
    let quoteStyle = { color: "black" };
    if (likeStatus === "liked") {
      quoteStyle = { color: "green" };
    } else if (likeStatus === "disliked") {
      quoteStyle = { color: "red" };
    }
    // console.log(quoteStyle);

    return (
      <main>
        <div>
          <p style={quoteStyle}>{this.props.quote}</p>
          <p>By: {this.props.author}</p>
        </div>
        <div>
          <button onClick={this.handleLike}>:)</button>
          <button onClick={this.handleDislike}>:(</button>
        </div>
      </main>
    );
  }
}
