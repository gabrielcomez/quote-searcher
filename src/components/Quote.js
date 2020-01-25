import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    liked: false
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

  render() {
    const { liked } = this.state;
    console.log(liked);
    const textWeight = liked && "bold";
    const textColor = liked && "green";
    // const textColor = !liked && "red";
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
