import Book from "../Components/Book";
import "../styles/book.css";
import "../styles/deptstyle.css";
import { useContext, useState, useEffect } from "react";
import BookContext from "../BookContext";

const Ie = () => {
  const { books } = useContext(BookContext);
  const [eeBooks, setEeBooks] = useState("");

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.branch === "IE");
      setEeBooks(newBook);
    }
  }, [books]);

  return (
    <div className="page">
      <h1>Instrumentation Engineering Books Section</h1>
      {eeBooks?.length ? (
        <div className="book-container">
          {eeBooks.map((book) => (
            <div key={book._id} className="book">
              <Book
                key={book._id}
                bookName={book.title}
                author={book.author}
                src={`http://localhost:4000/books/${book.imgURL}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="page">
          <h4>No books available currently</h4>
        </div>
      )}
    </div>
  );
};

export default Ie;
