import "../styles/book.css";

const Book = ({ bookName, author, src }) => {
  return (
    <div className="">
      <img src={src} alt={bookName} height="150" width="150" />
      <ul>
        <li>BookName: {bookName}</li>
        <li>Author: {author}</li>
      </ul>
      <button>Buy</button>
    </div>
  );
};

export default Book;
