import Book from "../Components/Book";
import img from "../public/p3.jpg";
import "../styles/book.css";
import "../styles/deptstyle.css";

const Cse = () => {
  let books = [
    {
      id: 1,
      name: "Compiler Design",
      author: "Oolmen",
      imgUrl: img,
    },
    {
      id: 2,
      name: "Computer Networks",
      author: "Rajib",
      imgUrl: img,
    },
    {
      id: 3,
      name: "Data Mining",
      author: "Sk Villai",
      imgUrl: img,
    },
    {
      id: 4,
      name: "Image Processing",
      author: "Its me",
      imgUrl: img,
    },
    {
      id: 5,
      name: "Software Engineering",
      author: "RK Das",
      imgUrl: img,
    },
    {
      id: 6,
      name: "Operating Systems",
      author: "KL Rahul",
      imgUrl: img,
    },
    {
      id: 7,
      name: "DAA",
      author: "DB Singha",
      imgUrl: img,
    },
    {
      id: 8,
      name: "DA",
      author: "DB Singha",
      imgUrl: img,
    },
  ];

  return (
    <div className="page">
      <h1>Computer Science and Engineering Books Section</h1>
      <div className="book-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <Book
              key={book.id}
              bookName={book.name}
              author={book.author}
              src={book.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cse;
