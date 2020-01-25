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

  updateQuotes(treeQuotes) {
    this.setState({
      quotes: treeQuotes,
      fetching: true
    });
  }

  render() {
    const { quotes } = this.state;
    const quoteList = quotes.map(quote => (
      <Quote
        key={quote._id}
        quote={quote.quoteText}
        author={quote.quoteAuthor}
      />
    ));

    if (this.state.fetching) {
      return <div>{quoteList}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}
