import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    liked: null
  };

  switchLikeTrue = () => {
    this.setState({
      liked: true
    });
  };
  switchLikeFalse = () => {
    this.setState({
      liked: false
    });
  };
  // switchQuoteColor = () => {
  //   if (this.state.liked === true) {
  //     return "green";
  //   } else if (this.state.liked === false) {
  //     return "red";
  //   } else {
  //     return "black";
  //   }
  // };

  render() {
    const { liked } = this.state;
    console.log(liked);
    const textWeight = liked && "bold";
    const textColor = liked ? "green" : "red";
    return (
      <main>
        <div>
          <p style={{ fontWeight: textWeight, color: textColor }}>
            {this.props.quote}
          </p>
          <p>By: {this.props.author}</p>
        </div>
        <div>
          <button onClick={this.switchLikeTrue}>:)</button>
          <button onClick={this.switchLikeFalse}>:(</button>
        </div>
      </main>
    );
  }
}
