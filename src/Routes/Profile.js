import React, { useContext, useEffect, useState } from "react";
import Avatar from "../Components/Avatar";
import "../styles/profile.css";
import LoginContext from "../LoginContext";
import BookContext from "../BookContext";

// userId: "",
// userName: "",
// JWT: "",
// booksOrdered: [],
// isSeller: false,
// branch: "",
// semester: "",

const Profile = () => {
  const { name, accessToken, id } = useContext(LoginContext);
  const { books } = useContext(BookContext);
  const [user, setUser] = useState([]);

  const [myUploads, setMyUploads] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userResponse = await fetch(
          "http://localhost:4000/users/profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ username: name }),
          }
        );

        const userData = await userResponse.json();

        if (userResponse.status === 200) {
          setUser(userData);
        } else {
          alert(userData.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    if (books?.length) {
      const newBook = books.filter((book) => book.uploadedBy === id);
      console.log(newBook);
      setMyUploads(newBook);
    }

    getUserDetails();
  }, [accessToken, books]);

  // const imgURL = `http://localhost:4000/users/${user.avatarURL}`;

  return (
    <div className="profile-container">
      <Avatar
        avatarName={user.username}
        avatarURL={`http://localhost:4000/users/${user.avatarURL}`}
      />
      <div className="profile-details">
        Branch: {user.branch}
        <br />
        Semester: {user.semester}
        <br />
        BooksBought: {user.booksCount}
        <h3>My uploads</h3>
        {myUploads ? (
          <>
            {/* {myUploads.map((book) => {
              <li key={book._id}>
                Name: {book.title} <br /> Author: {book.author}
              </li>;
            })} */}
          </>
        ) : (
          <>Showing error response</>
        )}
      </div>
    </div>
  );
};

export default Profile;
