import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(data => {
        const fetchedQuotes = data.results;
        this.updateQuotes(fetchedQuotes);
      })
      .catch(console.error);
  }

  updateQuotes(updatedQuotes) {
    this.setState({
      quotes: updatedQuotes.map(quote => {
        return { ...quote, likedStatus: "unclicked" };
      }),
      fetching: true
    });
  }

  setLiked = id => {
    console.log("Liked!", id);
    const quotes = this.state.quotes;
    const quote = quotes.find(quote => quote._id === id);
    quote.likeStatus = "liked";
    this.setState({ quotes });
  };

  setDisliked = id => {
    console.log("Disliked!", id);
    const quotes = this.state.quotes;
    const quote = quotes.find(quote => quote._id === id);
    quote.likeStatus = "disliked";
    this.setState({ quotes });
  };

  render() {
    const { quotes } = this.state;
    const quoteList = quotes.map(quote => (
      <Quote
        id={quote._id}
        key={quote._id}
        quote={quote.quoteText}
        author={quote.quoteAuthor}
        likeStatus={quote.likeStatus}
        handleLike={this.setLiked}
        handleDislike={this.setDisliked}
      />
    ));

    const likedQuotes = quotes.filter(quote => {
      return quote.likeStatus === "liked";
    });
    const likesNum = likedQuotes.length;

    const dislikedQuotes = quotes.filter(quote => {
      return quote.likeStatus === "disliked";
    });
    const dislikesNum = dislikedQuotes.length;

    if (this.state.fetching) {
      return (
        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <h2>
            Liked:{likesNum}/Disliked:{dislikesNum}
          </h2>
          {quoteList}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
