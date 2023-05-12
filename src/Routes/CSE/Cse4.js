import Book from "../../Components/Book";
const Cse4 = () => {
  let bookName, author, imgUrl;
  return (
    <>
      <h1>This is CSE 4th semester Section</h1>
      <Book bookName={bookName} author={author} imgUrl={imgUrl} />
    </>
  );
};

export default Cse4;
