import Book from "../../Components/Book";
const Cse5 = () => {
  let bookName, author, imgUrl;
  return (
    <>
      <h1>This is CSE 5th semester Section</h1>
      <Book bookName={bookName} author={author} imgUrl={imgUrl} />
    </>
  );
};

export default Cse5;
