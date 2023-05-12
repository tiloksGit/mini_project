import Book from "../../Components/Book";
const Cse3 = () => {
  let bookName, author, imgUrl;
  return (
    <>
      <h1>This is CSE 3rd semester Section</h1>
      <Book bookName={bookName} author={author} imgUrl={imgUrl} />
    </>
  );
};

export default Cse3;
