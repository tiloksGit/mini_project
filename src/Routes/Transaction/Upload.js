import { useContext, useState } from "react";
import LoginContext from "../../LoginContext";

const Upload = () => {
  const { name, id, accessToken } = useContext(LoginContext);
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [expecPrice, setExpecPrice] = useState("");
  const [passwd, setPasswd] = useState("");
  const [branch, setBranch] = useState("");
  const [img, setImg] = useState("");
  const options = ["CSE", "EE", "ME", "IE", "CE"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validUser = await fetch("http://localhost:4000/users/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ username: name }),
      });
      if (validUser.status === 200) {
        const formData = new FormData();
        formData.append("bookname", bookname);
        formData.append("author", author);
        formData.append("userId", id);
        formData.append("branch", branch);
        formData.append("expecPrice", expecPrice);
        formData.append("img", img);
        const response = await fetch("http://localhost:4000/books", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const responseData = await response.json();
        if (response) {
          alert(responseData.message);
        }
      } else {
        alert(validUser.status);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="register-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Title of the Book : </label>
          <input
            type="text"
            placeholder="Book name"
            id="name"
            required
            name="name"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />
          <label htmlFor="name">Author of the book : </label>
          <input
            type="text"
            placeholder="Author"
            id="name"
            required
            name="name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor="branch">Branch :</label>
          <input
            list="options"
            placeholder="Branch"
            required
            id="branch"
            onSelect={(e) => setBranch(e.target.value)}
          />
          <datalist id="options">
            {options.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
          <label htmlFor="img">Upload cover page of the book:</label>
          <input
            className="img-upload"
            type="file"
            required
            id="img"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <label htmlFor="name">set Price for the book : </label>
          <input
            type="text"
            placeholder="in Rs."
            id="name"
            required
            name="name"
            value={expecPrice}
            onChange={(e) => setExpecPrice(e.target.value)}
          />
          {/* <label htmlFor="email">Email :</label>
          <input
            type="email"
            required
            id="email"
            placeholder="email@example.com"
          /> */}
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Password"
            required
            id="password"
            onChange={(e) => setPasswd(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
