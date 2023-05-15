import React from "react";
import "../styles/book.css";

const Avatar = ({ avatarName, avatarURL }) => {
  return (
    <div className="book">
      <div className="avatar-img">
        <img
          src={avatarURL}
          alt={avatarName ? avatarName.charAt(0) : "could not load image"}
          height="150px"
          width="120px"
        />
      </div>
      <div className="Avatar-details">{avatarName}</div>
    </div>
  );
};

export default Avatar;
