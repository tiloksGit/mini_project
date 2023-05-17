import { createContext, useEffect } from "react";
import { useState } from "react";

const BookContext = createContext({});

export const DataProvider1 = ({ children }) => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books", {
          method: "GET",
        });

        const data = await response.json();
        if (response.status === 200) {
          setBooks(data.books);
        } else {
          alert(data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContext;
