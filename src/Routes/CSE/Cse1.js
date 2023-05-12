import Book from "../../Components/Book";
import img from "../../public/p3.jpg";
const Cse1 = () => {
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
      name: "DAA",
      author: "DB Singha",
      imgUrl: img,
    },
  ];

  return (
    <>
      <h1>This is CSE 1st semester Section</h1>
      {books.map((book) => (
        <Book
          key={book.id}
          bookName={book.name}
          author={book.author}
          imgUrl={book.imgUrl}
        />
      ))}
    </>
  );
};

export default Cse1;
