const Book = (props) => {
  return (
    <div className="book">
      <img src={props.imgUrl} alt={props.bookName} height="150" width="150" />
      <ul>
        <li>BookName: {props.bookName}</li>
        <li>Author: {props.author}</li>
      </ul>
      <button
        style={{
          background: "#a71",
          width: "50%",
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default Book;
