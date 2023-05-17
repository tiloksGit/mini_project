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

        if (userResponse.ok) {
          const userData = await userResponse.json();
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
  }, [accessToken]);

  const imgURL = `http://localhost:4000/users/${user.avatarURL}`;

  return (
    <div className="profile-container">
      <Avatar avatarName={user.userName} avatarURL={imgURL} />
      <div className="profile-details">
        Branch: {user.branch}
        <br />
        Semester: {user.semester}
        <br />
        <div className="uploads-container">My uploads</div>
      </div>
    </div>
  );
};

export default Profile;
