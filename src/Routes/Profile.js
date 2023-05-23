import React, { useContext, useEffect, useState } from "react";
import Avatar from "../Components/Avatar";
import "../styles/profile.css";
import dataContext from "../dataContext";

const Profile = () => {
  const { userName, accessToken, id, books } = useContext(dataContext);
  const [user, setUser] = useState([]);

  const [myUploads, setMyUploads] = useState("");

  const handeleRemove = async (book) => {
    try {
      const userResponse = await fetch("http://localhost:4000/books", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ id: book._id }),
      });

      const userData = await userResponse.json();

      alert(userData.message);
    } catch (err) {
      alert(err.message);
    }
  };

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
            body: JSON.stringify({ username: userName }),
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
    getUserDetails();
  }, [accessToken]);

  useEffect(() => {
    if (books?.length) {
      const newBook = books.filter((book) => book.uploadedBy === id);
      setMyUploads(newBook);
    }
  }, [books]);

  return (
    <div className="profile-container">
      <Avatar avatarName={user.username} avatarURL={user.avatarURL} />
      <div className="profile-details">
        Branch: {user.branch}
        <br />
        Semester: {user.semester}
        <br />
        BooksBought: {user.booksCount}
        <h3>My uploads</h3>
        {myUploads?.length ? (
          <div className="book-container">
            {myUploads.map((book) => (
              <div key={book._id} className="myUploads">
                <img src={book.imgURL} height="200" width="200" />
                <br />
                Book Title : {book.title} <br /> Author : {book.author}
                <br />
                <button onClick={() => handeleRemove(book)}>
                  Remove from sales option
                </button>
              </div>
            ))}
          </div>
        ) : (
          <>No Books uploaded for sale</>
        )}
      </div>
    </div>
  );
};

export default Profile;
