import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const {
      likeStatus,
      quote,
      author,
      handleLike,
      handleDislike,
      id
    } = this.props;
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
          <p style={quoteStyle}>{quote}</p>
          <p>By: {author}</p>
        </div>
        <div>
          <button onClick={() => handleLike(id)}>:)</button>
          <button onClick={() => handleDislike(id)}>:(</button>
        </div>
      </main>
    );
  }
}
