import "../styles/book.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../dataContext";

const Book = ({ bookName, author, src, object }) => {
  const { setActiveSales } = useContext(dataContext);

  const navigate = useNavigate();

  const handleClick = (object) => {
    setActiveSales(object);
    navigate("/exclusive/buy");
  };

  return (
    <div className="">
      <img src={src} alt={bookName} height="150" width="150" />
      <ul>
        <li> BookId: {object._id}</li>
        <li>BookName: {bookName}</li>
        <li>Author: {author}</li>
        <li>Claimed Price: {object.expecPrice}</li>
      </ul>
      {/* <Link to="/exclusive/buy">Buy</Link> */}
      <button onClick={() => handleClick(object)}>BUY</button>
    </div>
  );
};

export default Book;
