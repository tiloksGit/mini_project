import Book from "../../Components/Book";
const Cse6 = () => {
  let bookName, author, imgUrl;
  return (
    <>
      <h1>This is CSE 6th semester Section</h1>
      <Book bookName={bookName} author={author} imgUrl={imgUrl} />
    </>
  );
};

export default Cse6;
