import React, { useContext, useEffect, useState } from "react";
import Avatar from "../Components/Avatar";
import "../styles/profile.css";
import LoginContext from "../LoginContext";

// userId: "",
// userName: "",
// JWT: "",
// booksOrdered: [],
// isSeller: false,
// branch: "",
// semester: "",

const Profile = () => {
  const { name, accessToken } = useContext(LoginContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ username: name }),
        });

        if (response.ok) {
          const userData = await response.json();
          const newData = {
            userId: userData._id,
            userName: userData.username,
            booksOrdered: userData.booksOrdered,
            semester: userData.semester,
            branch: userData.branch,
            avatarURL: userData.avatarURL,
          };
          setUser(newData);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    getUserDetails();
  }, []);

  const imgURL = `http://localhost:4000/users/${user.avatarURL}`;

  return (
    <div className="profile-container">
      <Avatar avatarName={user.userName} avatarURL={imgURL} />
      <div className="profile-details">
        Branch: {user.branch}
        <br />
        Semester: {user.semester}
        <br />
      </div>
    </div>
  );
};

export default Profile;
