import Book from "../../Components/Book";
const Cse2 = () => {
  let bookName, author, imgUrl;
  return (
    <>
      <h1>This is CSE 2nd semester Section</h1>
      <Book bookName={bookName} author={author} imgUrl={imgUrl} />
    </>
  );
};

export default Cse2;
