import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
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
      quotes: treeQuotes
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
    return <div>{quoteList}</div>;
  }
}
