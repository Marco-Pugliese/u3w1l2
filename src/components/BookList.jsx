import SingleBook from "./SingleBook";

function BookList(props) {
  return props.books.map((book) => {
    return <SingleBook book={book} key={book.asin} />;
  });
}

export default BookList;
