import React, { useEffect, useState } from "react";
import Avatar from "../Components/Avatar";

// userId: "",
// userName: "",
// JWT: "",
// booksOrdered: [],
// isSeller: false,
// branch: "",
// semester: "",

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "hemtun beypi" }),
        });

        if (response.ok) {
          const userData = await response.json();
          const newData = {
            userId: userData._id,
            userName: userData.username,
            booksOrdered: userData.booksOrdered,
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

  return (
    <div className="profile-container">
      <Avatar avatarName={user.username} avatarURL={user.avatarURL} />
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
