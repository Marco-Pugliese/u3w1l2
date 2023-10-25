import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return this.props.books.map((book) => {
      return <SingleBook book={book} key={book.asin} />;
    });
  }
}

export default BookList;
