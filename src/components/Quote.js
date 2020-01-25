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
    console.log(this.state.liked);
    return (
      <main>
        <div>
          <p>{this.props.quote}</p>
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
