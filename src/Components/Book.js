import "../styles/book.css";

const Book = (props) => {
  return (
    <div className="">
      <img src={props.imgUrl} alt={props.bookName} height="150" width="150" />
      <ul>
        <li>BookName: {props.bookName}</li>
        <li>Author: {props.author}</li>
      </ul>
      <button>Buy</button>
    </div>
  );
};

export default Book;
