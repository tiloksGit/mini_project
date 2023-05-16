import { useState, useEffect } from "react";
import "../styles/deptstyle.css";
import Book from "../Components/Book";
import "../styles/book.css";

const Ee = () => {
  const [book, setBook] = useState([]);
  // const [available, setAvailable] = useState();
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          setBook(data.books);
        } else {
          console.log(data);
        }
      } catch (error) {
        alert(error);
      } finally {
      }
    };

    getAllBooks();
  }, []);

  return (
    <div className="page">
      <h1>Electrical Engineering Books Section</h1>
      {book?.length ? (
        <div className="book-container">
          {book.map((book) => (
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

export default Ee;
