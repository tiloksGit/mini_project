import { useState } from "react";
import "../styles/deptstyle.css";
import { useEffect } from "react";
import Book from "../Components/Book";

import "../styles/book.css";

const Ee = () => {
  const [book, setBooks] = useState([]);

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

        console.log(data);
        if (response.ok) {
          setBooks(data.books);
          console.log(book);
        }
      } catch (error) {
        alert(error);
      }
    };

    getAllBooks();
  }, []);

  return (
    <>
      <h1>This is EE 1st semester Section</h1>
      Welcome
      <div className="book-container">
        {book.map((book) => (
          <div key={book._id} className="book">
            <Book
              key={book._id}
              bookName={book.title}
              author={book.author}
              imgUrl={book.img_url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Ee;
