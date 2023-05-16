import React from "react";
import "../styles/avatar.css";

const Avatar = ({ avatarName, avatarURL }) => {
  const name = avatarName;
  return (
    <div className="avatar-container">
      <div className="avatar-img">
        <img
          src={avatarURL}
          alt={avatarName ? avatarName.charAt(0) : "could not load image"}
          height="150px"
          width="150px"
        />
      </div>
      <div className="avatar-details">{`${name}`}</div>
    </div>
  );
};

export default Avatar;
